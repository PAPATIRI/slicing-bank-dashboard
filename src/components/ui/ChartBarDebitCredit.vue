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
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Debit',
      backgroundColor: '#1A16F3',
      data: [4500, 2300, 3000, 7500, 2500, 6000, 7500],
    },
    {
      label: 'Credit',
      backgroundColor: '#FCAA0B',
      data: [4000, 3400, 4000, 3500, 2700, 3800, 4500],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  borderRadius: 16,
  barThickness: 40,
  borderWidth: 5,
  borderColor: 'rgba(0, 0, 0, 0.0)',
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
        stepSize: 200,
        color: 'rgba(0, 0, 0, 0)',
        callback: function () {
          return ''
        },
        max: 10000,
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
      position: 'top',
      align: 'end',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 10,
        boxHeight: 10,
      },
    },
    datalabels: {
      display: false,
    },
  },
}
</script>
<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>
