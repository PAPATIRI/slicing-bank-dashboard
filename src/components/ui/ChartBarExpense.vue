<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
)

const chartData = {
  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Des', 'Jan'],
  datasets: [
    {
      label: 'Deposit',
      backgroundColor: '#16DBCC',
      data: [4500, 1300, 3000, 7500, 12500, 8000],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  borderRadius: 12,
  barThickness: 32,
  scales: {
    x: {
      display: true,
      stacked: false,
      grid: {
        display: false,
      },
      border: {
        color: 'rgba(0, 0, 0, 0)',
      },
    },
    y: {
      display: true,
      stacked: false,
      beginAtZero: true,
      border: {
        color: 'rgba(0, 0, 0, 0)',
      },
      ticks: {
        display: true,
        stepSize: 1000,
        color: 'rgba(0, 0, 0, 0)',
        callback: function () {
          // return value.toLocaleString()
          return ''
        },
        max: 20000,
      },
      grid: {
        display: false,
        color: 'rgba(0, 0, 0, 0.1)',
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: '#00ff00',
      formatter: function (value: number, context) {
        if (context.dataIndex == 4) {
          return `$${value}\n`
        } else {
          return ''
        }
      },
      labels: {
        title: {
          color: '#2d2d2d',
          textAlign: 'center',
          anchor: 'end',
          font: {
            weight: 'medium',
            size: 14,
          },
        },
      },
    },
  },
}
</script>
<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
