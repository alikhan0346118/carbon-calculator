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
              "rgba(197, 197, 197, 0.6)",
              "rgba(156, 163, 175, 0.6)",
              "rgba(107, 114, 128, 0.6)",
              "rgba(75, 85, 99, 0.6)",
            ],
            borderColor: [
              "rgba(197, 197, 197, 1)",
              "rgba(156, 163, 175, 1)",
              "rgba(107, 114, 128, 1)",
              "rgba(75, 85, 99, 1)",
            ],
            borderWidth: 2,
          },
        ],
      });
    } catch (error) {
      console.error("Error submitting form:", error);

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
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-black text-gray-900 mb-12 text-center tracking-tight leading-tight">
            Carbon Footprint Calculator
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif border-b-4 border-[#c5c5c5] pb-4">
                Calculate Your Emissions
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold text-gray-700">Electricity Usage (kWh/Month):</label>
                    <input
                      type="number"
                      name="electricityUsageKWh"
                      value={formData.electricityUsageKWh}
                      onChange={handleChange}
                      className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                      placeholder="Enter monthly electricity usage"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold text-gray-700">Transportation Gasoline Usage (Gallons/Month):</label>
                    <input
                      type="number"
                      name="transportationUsageGallonsPerMonth"
                      value={formData.transportationUsageGallonsPerMonth}
                      onChange={handleChange}
                      className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                      placeholder="Enter monthly gasoline usage"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex flex-col">
                      <label className="mb-2 text-lg font-semibold text-gray-700">Short Flights:</label>
                      <input
                        type="number"
                        name="flightsShortHaul"
                        value={formData.flightsShortHaul}
                        onChange={handleChange}
                        className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="mb-2 text-lg font-semibold text-gray-700">Medium Flights:</label>
                      <input
                        type="number"
                        name="flightsMediumHaul"
                        value={formData.flightsMediumHaul}
                        onChange={handleChange}
                        className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                        placeholder="0"
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <label className="mb-2 text-lg font-semibold text-gray-700">Long Flights:</label>
                      <input
                        type="number"
                        name="flightsLongHaul"
                        value={formData.flightsLongHaul}
                        onChange={handleChange}
                        className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold text-gray-700">Dietary Choice:</label>
                    <select
                      name="dietaryChoice"
                      value={formData.dietaryChoice}
                      onChange={handleChange}
                      className="border-2 border-[#c5c5c5] rounded-lg p-3 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                    >
                      <option value="Vegan">Vegan</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Pescatarian">Pescatarian</option>
                      <option value="MeatEater">Meat Eater</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c5c5c5] to-gray-600 hover:from-gray-600 hover:to-[#c5c5c5] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg border-2 border-[#c5c5c5]"
                >
                  Calculate Carbon Footprint
                </button>
              </form>
            </div>

            {/* Results */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#c5c5c5]">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif border-b-4 border-[#c5c5c5] pb-4">
                Your Emissions Results
              </h2>
              
              {chartData && (
                <div className="mb-8">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              )}
              
              {result && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-[#c5c5c5]">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Air Travel</h3>
                      <p className="text-2xl font-semibold text-gray-700">
                        {result.totalAirTravelEmissions.value} {result.totalAirTravelEmissions.unit}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-[#c5c5c5]">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Electricity</h3>
                      <p className="text-2xl font-semibold text-gray-700">
                        {result.yearlyElectricityEmissions.value} {result.yearlyElectricityEmissions.unit}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-[#c5c5c5]">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Transportation</h3>
                      <p className="text-2xl font-semibold text-gray-700">
                        {result.yearlyTransportationEmissions.value} {result.yearlyTransportationEmissions.unit}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6 border-2 border-[#c5c5c5]">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">Dietary Choice</h3>
                      <p className="text-2xl font-semibold text-gray-700">
                        {result.dietaryChoiceEmissions.value} {result.dietaryChoiceEmissions.unit}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#c5c5c5] bg-opacity-20 rounded-xl p-8 border-2 border-[#c5c5c5] text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">Total Yearly Emissions</h3>
                    <p className="text-3xl font-black text-gray-900">
                      {result.totalYearlyEmissions.value} {result.totalYearlyEmissions.unit}
                    </p>
                  </div>
                </div>
              )}
              
              {!result && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg font-light">
                    Enter your data and click calculate to see your carbon footprint results.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white rounded-2xl p-12 shadow-xl border-2 border-[#c5c5c5]">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center font-serif border-b-4 border-[#c5c5c5] pb-4">
              Understanding Your Carbon Footprint
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Why Calculate?</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Understanding your carbon footprint is the first step towards making 
                  informed decisions about reducing your environmental impact and 
                  contributing to a sustainable future.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 font-serif">Take Action</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Use your results to identify areas where you can reduce emissions 
                  and implement sustainable practices in your daily life and business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarbonFootprintCalculator;

