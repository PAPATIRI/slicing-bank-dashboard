<script lang="ts" setup>
import FinancialStatusCard from '@/components/FinancialStatusCard.vue'
import BalanceIcon from '@/assets/svg-icon/balance-icon.svg?component'
import IncomeIcon from '@/assets/svg-icon/income-icon.svg?component'
import ExpenseIcon from '@/assets/svg-icon/expense-icon.svg?component'
import SavingIcon from '@/assets/svg-icon/saving-icon.svg?component'
import NotifSpotifySubsIcon from '@/assets/svg-icon/notif-rotate-icon.svg?component'
import KeySettingIcon from '@/assets/svg-icon/key-setting-icon.svg?component'
import UserPinkIcon from '@/assets/svg-icon/user-pink-icon.svg?component'
import { markRaw } from 'vue'
import CreditCard from '@/components/ui/CreditCard.vue'
import TransactionItem from '@/components/ui/TransactionItem.vue'
import dateFormatter from '@/utils/dateFormatter'
import { formatToShortCardNumber } from '@/utils/creditCardNumberFormatter'
import ChartBarDebitCredit from '@/components/ui/ChartBarDebitCredit.vue'
import { formatBalanceNormal } from '@/utils/balanceFormatter'
import InvoiceSentList from '@/components/InvoiceSentList.vue'

const balanceIconComponent = markRaw(BalanceIcon)
</script>
<template>
  <main class="bg-[#F5F7FA] flex-1 px-10 py-6">
    <div class="grid grid-cols-4 gap-8 mb-6">
      <FinancialStatusCard
        title="my balance"
        :balence-total="12750"
        :icon="balanceIconComponent"
        size="lg"
        bg-color="bg-yellow-300/20"
        rounded-size="rounded-full"
      />
      <FinancialStatusCard
        title="income"
        :balence-total="5600"
        :icon="IncomeIcon"
        size="lg"
        bg-color="bg-blue-300/20"
        rounded-size="rounded-full"
      />
      <FinancialStatusCard
        title="expense"
        :balence-total="3460"
        :icon="ExpenseIcon"
        size="lg"
        bg-color="bg-pink-300/20"
        rounded-size="rounded-full"
      />
      <FinancialStatusCard
        title="total saving"
        :balence-total="7920"
        :icon="SavingIcon"
        size="lg"
        bg-color="bg-teal-300/20"
        rounded-size="rounded-full"
      />
    </div>
    <div class="grid grid-cols-12 gap-[30px] mb-6">
      <div class="col-span-8">
        <p class="text-2xl font-medium text-bold-blue-pallete capitalize mb-5">
          last transactions
        </p>
        <div
          class="bg-white rounded-3xl p-6 grid grid-cols-1 gap-[10px] min-h-[235px]"
        >
          <TransactionItem
            :icon="NotifSpotifySubsIcon"
            bg-color="bg-teal-300/20"
            rounded-size="rounded-2xl"
            size="md"
            title="spotify subscription"
            :minimal="false"
            :total-balance="-150"
            :date="dateFormatter(new Date())"
            type-transaction="shopping"
            :card-number="formatToShortCardNumber('1234567891234567')"
            status-transaction="pending"
          />
          <TransactionItem
            :icon="KeySettingIcon"
            bg-color="bg-blue-300/20"
            rounded-size="rounded-2xl"
            size="md"
            title="mobile service"
            :minimal="false"
            :total-balance="-340"
            :date="dateFormatter(new Date())"
            type-transaction="shopping"
            :card-number="formatToShortCardNumber('1234567891234567')"
            status-transaction="pending"
          />
          <TransactionItem
            :icon="UserPinkIcon"
            bg-color="bg-pink-300/20"
            rounded-size="rounded-2xl"
            size="md"
            title="Emily wilson"
            :minimal="false"
            :total-balance="+780"
            :date="dateFormatter(new Date())"
            type-transaction="shopping"
            :card-number="formatToShortCardNumber('1234567891234567')"
            status-transaction="pending"
          />
        </div>
      </div>
      <div class="col-span-4">
        <div class="flex items-center justify-between mb-5">
          <p class="text-2xl font-medium text-bold-blue-pallete capitalize">
            my card
          </p>
          <p class="text-base font-medium text-bold-blue-pallete capitalize">
            see all
          </p>
        </div>
        <CreditCard credit-card-type="gradient1" />
      </div>
    </div>
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-8">
        <p class="text-2xl font-medium text-bold-blue-pallete capitalize mb-5">
          debit & credit overview
        </p>
        <div class="bg-white rounded-3xl p-7 h-[364px] relative">
          <p class="text-base text-medium-blue-pallete abolute left-0 w-fit">
            <span class="text-bold-blue-pallete">{{
              formatBalanceNormal(7560)
            }}</span>
            Debited &
            <span class="text-bold-blue-pallete">{{
              formatBalanceNormal(5420)
            }}</span>
            Credited in this Week
          </p>
          <ChartBarDebitCredit />
        </div>
      </div>
      <div class="col-span-4">
        <p class="text-2xl font-medium text-bold-blue-pallete capitalize mb-5">
          invoice sent
        </p>
        <div class="bg-white rounded-3xl p-7">
          <InvoiceSentList />
        </div>
      </div>
    </div>
  </main>
</template>
