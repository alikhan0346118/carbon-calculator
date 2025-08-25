import { NextResponse } from "next/server"
type Unit = "kgCO2e/year"
type EmissionEntry = {
  value: number
  unit: Unit
}

type EmissionsResult = {
  yearlyElectricityEmissions?: EmissionEntry
  yearlyTransportationEmissions?: EmissionEntry
  totalAirTravelEmissions?: EmissionEntry
  dietaryChoiceEmissions?: EmissionEntry
  personalVehicleEmissions?: EmissionEntry
  wasteEmissions?: EmissionEntry
  heatingCoolingEmissions?: EmissionEntry
  totalYearlyEmissions?: EmissionEntry
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const calculatorType = data.calculatorType || "Individual"

    const dietEmissions: Record<"Vegan" | "Vegetarian" | "Pescatarian" | "MeatEater", number> = {
      Vegan: 1000,
      Vegetarian: 1400,
      Pescatarian: 1700,
      MeatEater: 2500,
    }

    const dietaryChoice: keyof typeof dietEmissions = data.dietaryChoice as keyof typeof dietEmissions

    let result: EmissionsResult = {}

    if (calculatorType === "Individual" || calculatorType === "Employee") {
      // Individual/Employee calculations
      result = {
        yearlyElectricityEmissions: {
          value: Number.parseFloat(data.electricityUsageKWh || "0") * 12 * 0.5,
          unit: "kgCO2e/year",
        },
        yearlyTransportationEmissions: {
          value: Number.parseFloat(data.transportationUsageGallonsPerMonth || "0") * 12 * 8.887,
          unit: "kgCO2e/year",
        },
        totalAirTravelEmissions: {
          value:
            Number.parseFloat(data.flightsShortHaul || "0") * 1100 +
            Number.parseFloat(data.flightsMediumHaul || "0") * 2200 +
            Number.parseFloat(data.flightsLongHaul || "0") * 3300,
          unit: "kgCO2e/year",
        },
        dietaryChoiceEmissions: {
          value: dietEmissions[dietaryChoice] || 0,
          unit: "kgCO2e/year",
        },
      }

      // Add personal vehicle emissions if provided
      if (data.personalVehicleMiles) {
        const personalVehicleEmissions = Number.parseFloat(data.personalVehicleMiles) * 0.404 // kgCO2e per mile
        result.personalVehicleEmissions = {
          value: personalVehicleEmissions,
          unit: "kgCO2e/year",
        }
        // Add to transportation emissions
        result.yearlyTransportationEmissions!.value += personalVehicleEmissions
      }

    } else if (calculatorType === "Organization") {
      // Organization calculations
      result = {
        yearlyElectricityEmissions: {
          value: Number.parseFloat(data.orgElectricityUsageKWh || "0") * 12 * 0.5,
          unit: "kgCO2e/year",
        },
        yearlyTransportationEmissions: {
          value: Number.parseFloat(data.orgFleetMiles || "0") * 0.404, // kgCO2e per mile for fleet
          unit: "kgCO2e/year",
        },
        totalAirTravelEmissions: {
          value:
            Number.parseFloat(data.orgAirTravelShort || "0") * 1100 +
            Number.parseFloat(data.orgAirTravelMedium || "0") * 2200 +
            Number.parseFloat(data.orgAirTravelLong || "0") * 3300,
          unit: "kgCO2e/year",
        },
        wasteEmissions: {
          value: Number.parseFloat(data.orgWasteTons || "0") * 2000, // kgCO2e per ton of waste
          unit: "kgCO2e/year",
        },
        heatingCoolingEmissions: {
          value: Number.parseFloat(data.orgHeatingCoolingKWh || "0") * 0.5, // kgCO2e per kWh
          unit: "kgCO2e/year",
        },
        dietaryChoiceEmissions: {
          value: 0, // Organizations don't have dietary emissions
          unit: "kgCO2e/year",
        },
      }
    }

    // Calculate total yearly emissions
    const totalYearlyEmissions = {
      value: Object.values(result).reduce((total: number, emission: EmissionEntry | undefined) => {
        if (emission && typeof emission.value === 'number') {
          return total + emission.value
        }
        return total
      }, 0),
      unit: "kgCO2e/year",
    }

    const response = NextResponse.json({ ...result, totalYearlyEmissions })
    response.headers.set("Access-Control-Allow-Origin", "*") // 👈 Allow all origins (for development)
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type")

    return response
  } catch (error) {
    return NextResponse.json({ message: "Server Error", error: error }, { status: 500 })
  }
}

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 })
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")
  return response
}
