<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Pie } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
)

const chartData = {
  labels: ['Entertainment', 'Bill Expense', 'Invesment', 'Others'],
  datasets: [
    {
      backgroundColor: ['#312e81', '#f59e0b', '#ec4899', '#3b82f6'],
      data: [30, 15, 20, 35],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  hoverOffset: 10,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    datalabels: {
      color: '#00ff00',
      formatter: function (value: number, context) {
        return `${value}%\n` + context.chart.data.labels[context.dataIndex]
      },
      labels: {
        title: {
          color: '#ffffff',
          textAlign: 'center',
          anchor: 'center',
          font: {
            weight: 'bold',
            size: 10,
          },
        },
      },
    },
  },
}
</script>
<template>
  <Pie :data="chartData" :options="chartOptions" />
</template>
