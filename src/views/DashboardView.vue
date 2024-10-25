<script lang="ts" setup>
import QuickTransferCard from '@/components/QuickTransferCard.vue'
import TransactionList from '@/components/TransactionList.vue'
import ChartBar from '@/components/ui/ChartBar.vue'
import ChartLine from '@/components/ui/ChartLine.vue'
import ChartPie from '@/components/ui/ChartPie.vue'
import CreditCard from '@/components/ui/CreditCard.vue'
</script>

<template>
  <main class="bg-[#F5F7FA] px-10 py-6">
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
          recent transactions
        </p>
        <div class="bg-white rounded-[20px] p-[25px]">
          <TransactionList />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-[30px] mb-6">
      <div class="col-span-8">
        <p
          class="text-xl font-medium text-bold-blue-pallete capitalize mb-[18px]"
        >
          weekly activity
        </p>
        <div class="py-7 px-8 rounded-3xl bg-white min-h-[250px]">
          <ChartBar />
        </div>
      </div>
      <div class="col-span-4">
        <p
          class="text-xl font-medium text-bold-blue-pallete capitalize mb-[18px]"
        >
          Expense Statistic
        </p>
        <div class="py-4 px-6 rounded-3xl bg-white max-h-[250px]">
          <ChartPie />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-5">
        <p
          class="text-xl font-medium text-bold-blue-pallete capitalize mb-[18px]"
        >
          quick transfer
        </p>
        <div class="py-8 px-6 flex rounded-3xl p-4 bg-white min-h-[276px]">
          <QuickTransferCard />
        </div>
      </div>
      <div class="col-span-7">
        <p
          class="text-xl font-medium text-bold-blue-pallete capitalize mb-[18px]"
        >
          Balance History
        </p>

        <div class="py-[30px] px-5 bg-white rounded-3xl min-h-[276px]">
          <ChartLine />
        </div>
      </div>
    </div>
  </main>
</template>
