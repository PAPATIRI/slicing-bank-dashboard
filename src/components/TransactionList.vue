<script lang="ts" setup>
import dateFormatter from '@/utils/dateFormatter'
import TransactionItem from './ui/TransactionItem.vue'
import TransactionPaypalIcon from '@/assets/svg-icon/transaction-paypal-icon.svg?component'
import TransactionTransferIcon from '@/assets/svg-icon/transaction-transfer-icon.svg?component'
import TransactionCardIcon from '@/assets/svg-icon/transaction-card-icon.svg?component'
</script>
<template>
  <div class="flex flex-col gap-[10px]">
    <TransactionItem
      :minimal="false"
      :icon="TransactionCardIcon"
      size="md"
      bg-color="bg-yellow-300/20"
      rounded-size="rounded-full"
      type="card"
      title="Deposit from my Card"
      :total-balance="-850"
      :date="dateFormatter(new Date())"
    />
    <TransactionItem
      :minimal="false"
      :icon="TransactionPaypalIcon"
      size="md"
      bg-color="bg-blue-300/20"
      rounded-size="rounded-full"
      type="paypal"
      title="Deposit Paypal"
      :date="dateFormatter(new Date())"
      :total-balance="+2500"
    />
    <TransactionItem
      :minimal="false"
      :icon="TransactionTransferIcon"
      size="md"
      bg-color="bg-teal-300/20"
      rounded-size="rounded-full"
      type="transfer"
      title="Jemi Welson"
      :date="dateFormatter(new Date())"
      :total-balance="+2500"
    />
  </div>
</template>
