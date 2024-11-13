// Import the dataset
import data from './Manufac_India_Agro_Dataset.json';

// Function to parse numbers and treat empty values as 0
const parseNumber = (value: string): number => parseFloat(value) || 0;

 // Function to get maximum and minimum crop production for each year
export const getYearlyProductionData = () => {
  // Object to store the result for each year
  const yearlyData: Record<string, { maxCrop: string; minCrop: string; maxProduction: number; minProduction: number }> = {};

  // Process each entry in the dataset
  data.forEach((entry: any) => {
    const year = entry.Year.split(" ").pop();
    const crop = entry.CropName;
      const production = parseNumber(entry["Crop Production (UOM:t(Tonnes))"]);
      console.log(crop)

    // Initialize year if not present in yearlyData
    if (!yearlyData[year]) {
      yearlyData[year] = { maxCrop: crop, minCrop: crop, maxProduction: production, minProduction: production };
    }

    // Update max and min crops for the year
    if (production > yearlyData[year].maxProduction) {
      yearlyData[year].maxCrop = crop;
      yearlyData[year].maxProduction = production;
    }
    if (production < yearlyData[year].minProduction) {
      yearlyData[year].minCrop = crop;
      yearlyData[year].minProduction = production;
    }
  });

  // Convert object to array format
  return Object.entries(yearlyData).map(([year, { maxCrop, minCrop }]) => ({
    year,
    maxCrop,
    minCrop,
  }));
};

 // Function to calculate average yield and area for each crop
export const getCropAverages = () => {
  // Object to store total yield, area, and count for each crop
  const cropData: Record<string, { totalYield: number; totalArea: number; count: number }> = {};

  // Process each entry in the dataset
  data.forEach((entry: any) => {
    const crop = entry.CropName;
    const yieldValue = parseNumber(entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]);
    const areaValue = parseNumber(entry["Area Under Cultivation (UOM:Ha(Hectares))"]);

    // Initialize crop data if not present
    if (!cropData[crop]) {
      cropData[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    // Add yield and area to total, increase count
    cropData[crop].totalYield += yieldValue;
    cropData[crop].totalArea += areaValue;
    cropData[crop].count += 1;
  });

  // Calculate averages and format to 3 decimal places
  return Object.entries(cropData).map(([crop, { totalYield, totalArea, count }]) => ({
    crop,
    avgYield: (totalYield / count).toFixed(3),
    avgArea: (totalArea / count).toFixed(3),
  }));
};
