"use client"

import { useState, useEffect } from "react";
import type React from "react"

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";


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
    dietaryChoice: "Vegan", // Default value
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResult(data);

      // Update chart data after receiving new results
      setChartData({
        labels: [
          "Electricity",
          "Transportation",
          "Air Travel",
          "Dietary Choice",
        ],
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
      // Handle error state
    }
  };


  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4">
      {/* <div className="bg-gray-200 p-10 w-full max-w-screen-lg">
        <h1 className="text-5xl font-bold mb-6 text-center text-white">
          My Carbon Footprint
        </h1>
      </div> */}

      <div className="grid grid-cols-2 gap-2 bg-slate-100 border-2 border-white rounded-lg mt-16 ">
        {/* Calculator */}
        <div className=" text-black p-8 rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Carbon Footprint Calculator
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input fields */}
            <div className="flex flex-col">
                <label className="mb-2">Electricity Usage (kWh/Month):</label>
                <input
                  type="number"
                  name="electricityUsageKWh"
                  value={formData.electricityUsageKWh}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Transportation Gasoline Usage (Gallons/Month):</label>
                <input
                  type="number"
                  name="transportationUsageGallonsPerMonth"
                  value={formData.transportationUsageGallonsPerMonth}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Short Flights:</label>
                <input
                  type="number"
                  name="flightsShortHaul"
                  value={formData.flightsShortHaul}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Medium Flights:</label>
                <input
                  type="number"
                  name="flightsMediumHaul"
                  value={formData.flightsMediumHaul}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Long Flights:</label>
                <input
                  type="number"
                  name="flightsLongHaul"
                  value={formData.flightsLongHaul}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2">Dietary Choice:</label>
                <select
                  name="dietaryChoice"
                  value={formData.dietaryChoice}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2"
                >
                  <option value="Vegan">Vegan</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Pescatarian">Pescatarian</option>
                  <option value="MeatEater">Meat Eater</option>
                </select>
              </div>
              <br />
              <div className="flex flex-col">
                <button
                  type="submit"
                  className="bg-cyan-700 hover:bg-cyan-900 text-white px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Calculate
                </button>
              </div>
          </form>
        </div>
        {/* Results */}
        <div className=" text-black p-8 rounded-lg shadow-lg ">
          <h1 className="text-3xl font-bold mb-2">
            Yearly Emissions Statistics
          </h1>
          <br />
          {chartData && <Bar data={chartData} options={chartOptions} />}
          {result && (
            <div className="mt-8">
              <div>
                <p className="text-2xl font-bold">Air Travel: </p>

                <p className="text-xl">
                  {result.totalAirTravelEmissions.value}{" "}
                  {result.totalAirTravelEmissions.unit}
                </p>
                <br />
                <p className="text-2xl font-bold">Electricity: </p>
                <p className="text-xl">
                  {result.yearlyElectricityEmissions.value}{" "}
                  {result.yearlyElectricityEmissions.unit}
                </p>
                <br />
                <p className="text-2xl font-bold">Transportation: </p>
                <p className="text-xl">
                  {result.yearlyTransportationEmissions.value}{" "}
                  {result.yearlyTransportationEmissions.unit}
                </p>
                <br />
                <p className="text-2xl font-bold">Dietary Choice: </p>
                <p className="text-xl">
                  {result.dietaryChoiceEmissions.value}{" "}
                  {result.dietaryChoiceEmissions.unit}
                </p>
                <br />

                <p className="text-xl font-bold">
                  TOTAL : {result.totalYearlyEmissions.value}{" "}
                  {result.totalYearlyEmissions.unit}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;

