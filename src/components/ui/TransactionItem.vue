<script lang="ts" setup>
import TransactionPaypalIcon from '@/assets/svg-icon/transaction-paypal-icon.svg'
import TransactionTransferIcon from '@/assets/svg-icon/transaction-transfer-icon.svg'
import TransactionCardIcon from '@/assets/svg-icon/transaction-card-icon.svg'
import { formatBalance } from '@/utils/balanceFormatter'

defineProps<{
  date: string
  title: string
  totalBalance: number
  type: 'transfer' | 'paypal' | 'card'
}>()
</script>
<template>
  <div class="flex items-center gap-[17px]">
    <div
      v-if="type === 'paypal'"
      class="rounded-full bg-indigo-200/30 p-[13px] flex items-center justify-center"
    >
      <TransactionPaypalIcon />
    </div>
    <div
      v-if="type === 'transfer'"
      class="rounded-full bg-cyan-200/30 p-[13px] flex items-center justify-center"
    >
      <TransactionTransferIcon />
    </div>
    <div
      v-if="type === 'card'"
      class="rounded-full bg-yellow-200/30 p-[13px] flex items-center justify-center"
    >
      <TransactionCardIcon />
    </div>
    <div class="flex items-center justify-between gap-4 flex-1">
      <div>
        <p class="text-base font-medium text-gray-900">{{ title }}</p>
        <p class="text-[15px] text-medium-blue-pallete">{{ date }}</p>
      </div>
      <p
        :class="[
          'text-base font-medium',
          totalBalance < 0 ? 'text-red-500' : 'text-teal-400',
        ]"
      >
        {{ formatBalance(totalBalance) }}
      </p>
    </div>
  </div>
</template>
