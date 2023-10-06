import React from "react";
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart type and theme as dependencies
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Define your chart configuration
const chartConfig = {
  type: "column2d", // Type of chart
  width: "500", // Width of the chart
  height: "300", // Height of the chart
  dataFormat: "json", // Data format (typically JSON)

  dataSource: {
    // Chart configuration options
    chart: {
      caption: "Monthly Sales Report", // Chart caption
      subCaption: "2023", // Chart subcaption
      xAxisName: "Month", // X-axis label
      yAxisName: "Revenue (in USD)", // Y-axis label
      theme: "fusion", // Chart theme (FusionTheme)
    },
    // Chart data
    data: [
      {
        label: "January",
        value: "420000",
      },
      {
        label: "February",
        value: "810000",
      },
      {
        label: "March",
        value: "720000",
      },
      {
        label: "April",
        value: "550000",
      },
      {
        label: "May",
        value: "910000",
      },
    ],
  },
};

// Create a functional React component for the FusionCharts chart
function ColumnChart() {
  return (
    <div>
      <ReactFC {...chartConfig} />
    </div>
  );
}

export default ColumnChart;
