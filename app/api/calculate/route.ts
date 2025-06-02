import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const dietEmissions: Record<"Vegan" | "Vegetarian" | "Pescatarian" | "MeatEater", number> = {
      Vegan: 1000,
      Vegetarian: 1400,
      Pescatarian: 1700,
      MeatEater: 2500,
    }

    const dietaryChoice: keyof typeof dietEmissions = data.dietaryChoice as keyof typeof dietEmissions

    const result = {
      yearlyElectricityEmissions: {
        value: Number.parseFloat(data.electricityUsageKWh) * 12 * 0.5,
        unit: "kgCO2e/year",
      },
      yearlyTransportationEmissions: {
        value: Number.parseFloat(data.transportationUsageGallonsPerMonth) * 12 * 8.887,
        unit: "kgCO2e/year",
      },
      totalAirTravelEmissions: {
        value:
          Number.parseFloat(data.flightsShortHaul) * 1100 +
          Number.parseFloat(data.flightsMediumHaul) * 2200 +
          Number.parseFloat(data.flightsLongHaul) * 3300,
        unit: "kgCO2e/year",
      },
      dietaryChoiceEmissions: {
        value: dietEmissions[dietaryChoice] || 0,
        unit: "kgCO2e/year",
      },
    }

    const totalYearlyEmissions = {
      value:
        result.yearlyElectricityEmissions.value +
        result.yearlyTransportationEmissions.value +
        result.totalAirTravelEmissions.value +
        result.dietaryChoiceEmissions.value,
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

// Handle preflight request (CORS)
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 })
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")
  return response
}
