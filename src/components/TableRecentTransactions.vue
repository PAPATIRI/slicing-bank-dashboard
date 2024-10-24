<script lang="ts" setup>
import { formatBalance } from '@/utils/balanceFormatter'
import dateFormatter from '@/utils/dateFormatter'
import ArrowUp from '@/assets/svg-icon/arrow-up-icon.svg'
import ChevronIcon from '@/assets/svg-icon/chevron-icon.svg'

const tableDatas = [
  {
    description: 'spotify subscription',
    transactionId: '#12345678',
    type: 'shopping',
    card: '1234 ****',
    date: new Date(),
    amount: -2500,
  },
  {
    description: 'freepick sales',
    transactionId: '#12345678',
    type: 'transfer',
    card: '1234 ****',
    date: new Date(),
    amount: +750,
  },
  {
    description: 'wilson',
    transactionId: '#12345678',
    type: 'transfer',
    card: '1234 ****',
    date: new Date(),
    amount: -1050,
  },
  {
    description: 'mobile service',
    transactionId: '#12345678',
    type: 'service',
    card: '1234 ****',
    date: new Date(),
    amount: -150,
  },
]
</script>

<template>
  <div class="flex flex-col">
    <table
      class="table-auto border border-collapse border-transparent w-full text-left"
    >
      <thead>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          description
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          transaction id
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          type
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          card
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          date
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          amount
        </th>
        <th
          class="text-medium-blue-pallete capitalize text-base font-medium pb-[30px]"
        >
          receipt
        </th>
      </thead>
      <tbody v-for="data in tableDatas" :key="data.transactionId">
        <td
          class="gap-3 py-5 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          <span class="float-left mr-4 -mt-1">
            <ArrowUp class="rotate-180" v-if="data.amount > 0" />
            <ArrowUp v-else />
          </span>
          <span>
            {{ data.description }}
          </span>
        </td>
        <td
          class="py-4 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          {{ data.transactionId }}
        </td>
        <td
          class="py-4 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          {{ data.type }}
        </td>
        <td
          class="py-4 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          {{ data.card }}
        </td>
        <td
          class="py-4 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          {{ dateFormatter(data.date) }}
        </td>
        <td
          :class="[
            'py-4 capitalize text-base font-medium border-y-2 border-gray-200',
            data.amount < 0 ? 'text-red-700' : 'text-green-700',
          ]"
        >
          {{ formatBalance(data.amount) }}
        </td>
        <td
          class="py-4 capitalize text-base text-gray-800 border-y-2 border-gray-200"
        >
          <button
            class="border border-slate-700 rounded-full bg-white py-2 px-3"
          >
            download
          </button>
        </td>
      </tbody>
    </table>
    <div class="pt-4 pb-2 self-end flex items-center gap-3">
      <button class="flex items-center gap-2 text-blue-pallete">
        <ChevronIcon class="rotate-180" />previous
      </button>
      <div>
        <a
          class="py-2 px-3 text-white bg-blue-pallete rounded-lg text-sm text-bold"
          href="#"
          >1</a
        >
        <a class="py-2 px-3 text-blue-pallete text-sm text-bold" href="#">2</a>
        <a class="py-2 px-3 text-blue-pallete text-sm text-bold" href="#">3</a>
      </div>
      <button class="flex items-center gap-2 text-blue-pallete">
        next <ChevronIcon />
      </button>
    </div>
  </div>
</template>
