"use client";

import { useState, useEffect } from "react";
import type React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface EmissionData {
  value: number;
  unit: string;
}

interface ResultData {
  yearlyElectricityEmissions: EmissionData;
  yearlyTransportationEmissions: EmissionData;
  totalAirTravelEmissions: EmissionData;
  dietaryChoiceEmissions: EmissionData;
  totalYearlyEmissions: EmissionData;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

function CarbonFootprintCalculator() {
  const [formData, setFormData] = useState({
    electricityUsageKWh: "",
    transportationUsageGallonsPerMonth: "",
    flightsShortHaul: "0",
    flightsMediumHaul: "0",
    flightsLongHaul: "0",
    dietaryChoice: "Vegan",
  });
  const [result, setResult] = useState<ResultData | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    Chart.register(...registerables);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);

      setChartData({
        labels: ["Electricity", "Transportation", "Air Travel", "Dietary Choice"],
        datasets: [
          {
            label: "CO2 Emissions (kgCO2e/year)",
            data: [
              data.yearlyElectricityEmissions.value || 0,
              data.yearlyTransportationEmissions.value || 0,
              data.totalAirTravelEmissions.value || 0,
              data.dietaryChoiceEmissions.value || 0,
            ],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const chartOptions = { scales: { y: { beginAtZero: true } } };

  return (
    <div className={`${poppins.className} mt-20 relative min-h-screen`}>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      {/* Content */}
      <div className="relative z-10 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Calculator */}
          <div className="p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Carbon Footprint Calculator
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  label: "Electricity Usage (kWh/Month):",
                  name: "electricityUsageKWh",
                },
                {
                  label: "Transportation Gasoline Usage (Gallons/Month):",
                  name: "transportationUsageGallonsPerMonth",
                },
                { label: "Short Flights:", name: "flightsShortHaul" },
                { label: "Medium Flights:", name: "flightsMediumHaul" },
                { label: "Long Flights:", name: "flightsLongHaul" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="mb-2">{field.label}</label>
                  <input
                    type="number"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 text-black"
                  />
                </div>
              ))}
              <div className="flex flex-col">
                <label className="mb-2">Dietary Choice:</label>
                <select
                  name="dietaryChoice"
                  value={formData.dietaryChoice}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 text-black"
                >
                  <option value="Vegan">Vegan</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Pescatarian">Pescatarian</option>
                  <option value="MeatEater">Meat Eater</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-800 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Calculate
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="p-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <h1 className="text-3xl font-bold mb-4">
              Yearly Emissions Statistics
            </h1>
            {chartData && <Bar data={chartData} options={chartOptions} />}
            {result && (
              <div className="mt-8 space-y-4">
                <p className="text-xl font-bold">Air Travel: {result.totalAirTravelEmissions.value} {result.totalAirTravelEmissions.unit}</p>
                <p className="text-xl font-bold">Electricity: {result.yearlyElectricityEmissions.value} {result.yearlyElectricityEmissions.unit}</p>
                <p className="text-xl font-bold">Transportation: {result.yearlyTransportationEmissions.value} {result.yearlyTransportationEmissions.unit}</p>
                <p className="text-xl font-bold">Dietary Choice: {result.dietaryChoiceEmissions.value} {result.dietaryChoiceEmissions.unit}</p>
                <p className="text-2xl font-bold mt-4">TOTAL: {result.totalYearlyEmissions.value} {result.totalYearlyEmissions.unit}</p>
              </div>
            )}
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;
