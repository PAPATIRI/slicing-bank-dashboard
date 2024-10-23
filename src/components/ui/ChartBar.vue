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
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const chartData = {
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Deposit',
      backgroundColor: '#16DBCC',
      data: [250, 150, 300, 380, 240, 250, 350],
    },
    {
      label: 'Withdraw',
      backgroundColor: '#1814F3',
      data: [480, 340, 320, 480, 140, 390, 400],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  borderRadius: 100,
  barThickness: 20,
  borderWidth: 5,
  borderColor: 'rgba(0, 0, 0, 0.0)',
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: false,
      beginAtZero: true,
      ticks: {
        stepSize: 100,
        callback: function (value: number) {
          return value.toLocaleString()
        },
        max: 500,
      },
      grid: {
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
