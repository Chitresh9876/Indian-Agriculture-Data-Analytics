# Manufac Analytics - Indian Agriculture Data Analysis

This project performs data analytics on Indian agriculture data from 1950 to 2020, displaying statistics in tabular form. The project uses TypeScript, Vite, and Mantine v7 to create an interactive web application with tables for visualizing crop production trends and averages.

## Project Overview

This project showcases two tables based on Indian agricultural data:

1. **Yearly Production Data Table**:
   - Displays the crop with the maximum and minimum production for each year.

2. **Crop Averages Table**:
   - Displays the average yield and cultivation area for each crop from 1950 to 2020.

## Tech Stack

- **TypeScript**
- **Vite** (using Mantine’s Vite Min Template)
- **Mantine v7** (for table and UI components)

## Project Structure

- **`src/dataProcessing.ts`**: Processes the data to calculate yearly production extremes and crop averages.
- **`src/components/YearlyProductionTable.tsx`**: Displays the crop with the highest and lowest production per year.
- **`src/components/CropAveragesTable.tsx`**: Displays the average yield and area under cultivation for each crop over the given years.
- **`src/App.tsx`**: Main file where the tables are rendered.

## Setup Instructions

Follow these steps to set up and run the project:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Chitresh9876/Indian-Agriculture-Data-Analytics.git manufac-analytics
   cd manufac-analytics
2. **Install Dependencies**:
    npm/yarn install
3. **Run the Project**:
    npm/yarn start

## Screenshots

- **Yearly Production Data Table**  
  ![Yearly Production Data Table Screenshot](./images/yearly_production_table.png)

- **Crop Averages Table**  
  ![Crop Averages Table Screenshot](./images/crop_averages_table.png)
