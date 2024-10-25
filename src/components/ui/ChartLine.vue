<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Filler,
  Tooltip,
  Legend,
)

const chartData = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  datasets: [
    {
      label: 'Balance',
      data: [150, 300, 450, 800, 200, 550, 600],
      borderColor: 'rgb(65, 105, 225)',
      backgroundColor: context => {
        const bgColor = ['rgba(45, 96, 255, 0.4)', 'rgba(45, 96, 255, 0)']
        if (!context.chart.chartArea) {
          return
        }
        const {
          ctx,
          data,
          chartArea: { top, bottom },
        } = context.chart
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom)
        gradientBg.addColorStop(0, bgColor[0])
        gradientBg.addColorStop(1, bgColor[1])

        return gradientBg
      },
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        drawBorder: false,
        color: 'rgba(0, 0, 0, 0.4)',
        lineWidth: 0.5,
        tickWidth: 1.5,
        tickColor: '#718EBF',
      },
      border: {
        dash: [4, 4],
      },
      ticks: {
        color: '#718EBF',
      },
    },
    y: {
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.4)',
        lineWidth: 0.5,
        tickWidth: 1.5,
        tickColor: '#718EBF',
      },
      border: {
        dash: [4, 4],
      },
      ticks: {
        stepSize: 200,
        min: 0,
        max: 800,
        color: '#718EBF',
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
}
</script>

<template>
  <Line id="chart" :options="chartOptions" :data="chartData" />
</template>
