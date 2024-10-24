<script lang="ts" setup>
import TableRecentTransactions from '@/components/TableRecentTransactions.vue'
import ChartBarExpense from '@/components/ui/ChartBarExpense.vue'
import CreditCard from '@/components/ui/CreditCard.vue'
</script>

<template>
  <main class="bg-[#F5F7FA] flex-1 px-10 py-6">
    <div class="grid grid-cols-12 gap-[30px] mb-6">
      <div class="col-span-8">
        <div class="mb-4 flex items-center justify-between">
          <p class="text-xl font-medium text-bold-blue-pallete capitalize">
            my cards
          </p>
          <p class="text-[15px] font-medium text-bold-blue-pallete capitalize">
            see all
          </p>
        </div>
        <div class="grid grid-cols-12 gap-[30px]">
          <CreditCard credit-card-type="gradient1" />
          <CreditCard />
        </div>
      </div>
      <div class="col-span-4">
        <p class="text-xl font-medium text-bold-blue-pallete capitalize mb-4">
          my expense
        </p>
        <div class="bg-white rounded-[20px] p-[25px] min-h-[235px]">
          <ChartBarExpense />
        </div>
      </div>
    </div>
    <div class="mb-6">
      <div class="">
        <p
          class="text-xl font-medium text-bold-blue-pallete capitalize mb-[18px]"
        >
          recent transactions
        </p>
        <div class="py-7 px-8 rounded-3xl bg-white min-h-[250px]">
          <TableRecentTransactions />
        </div>
      </div>
    </div>
  </main>
</template>
