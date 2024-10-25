<script lang="ts" setup>
import { formatBalance } from '@/utils/balanceFormatter'
import type { Component } from 'vue'
import IconContainer from './IconContainer.vue'

defineProps<{
  icon: Component
  bgColor: string
  roundedSize: string
  size: 'sm' | 'md' | 'lg'
  date: string
  title: string
  totalBalance: number
  minimal: boolean
  typeTransaction?: string
  cardNumber?: string
  statusTransaction?: string
}>()
</script>
<template>
  <div class="flex items-center gap-[17px]">
    <IconContainer
      :icon="icon"
      :bg-color="bgColor"
      :rounded-size="roundedSize"
      :size="size"
    />
    <div class="flex items-center justify-between gap-4 flex-1">
      <div class="flex-initial w-44">
        <p class="text-base font-medium text-gray-900">{{ title }}</p>
        <p class="text-[15px] text-medium-blue-pallete">{{ date }}</p>
      </div>
      <div v-if="!minimal" class="flex flex-auto items-center justify-evenly">
        <p class="text-base text-medium-blue-pallete capitalize">
          {{ typeTransaction }}
        </p>
        <p class="text-base text-medium-blue-pallete capitalize">
          {{ cardNumber }}
        </p>
        <p class="text-base text-medium-blue-pallete capitalize">
          {{ statusTransaction }}
        </p>
      </div>
      <p
        :class="[
          'text-base font-medium w-fit',
          totalBalance < 0 ? 'text-red-500' : 'text-teal-400',
        ]"
      >
        {{ formatBalance(totalBalance) }}
      </p>
    </div>
  </div>
</template>
