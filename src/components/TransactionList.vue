<script lang="ts" setup>
import dateFormatter from '@/utils/dateFormatter'
import TransactionItem from './ui/TransactionItem.vue'
</script>
<template>
  <div class="flex flex-col gap-[10px]">
    <TransactionItem
      type="card"
      title="Deposit from my Card"
      :total-balance="-850"
      :date="dateFormatter(new Date())"
    />
    <TransactionItem
      type="paypal"
      title="Deposit Paypal"
      :date="dateFormatter(new Date())"
      :total-balance="+2500"
    />
    <TransactionItem
      type="transfer"
      title="Jemi Welson"
      :date="dateFormatter(new Date())"
      :total-balance="+2500"
    />
  </div>
</template>
