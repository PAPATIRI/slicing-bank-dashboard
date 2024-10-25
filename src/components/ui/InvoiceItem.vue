<script lang="ts" setup>
import { formatBalanceNormal } from '@/utils/balanceFormatter'
import type { Component } from 'vue'
import IconContainer from './IconContainer.vue'
import dateFormatter from '@/utils/dateFormatter'

defineProps<{
  title: string
  totalBalance: number
  icon: Component
  bgColor: string
  roundedSize: string
  size: 'sm' | 'md' | 'lg'
  date: Date
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-5">
      <IconContainer
        :icon="icon"
        :bg-color="bgColor"
        :rounded-size="roundedSize"
        :size="size"
      />
      <div>
        <p class="text-base font-medium text-gray-400 capitalize">
          {{ title }}
        </p>
        <p class="text-[15px] text-medium-blue-pallete capitalize">
          {{ dateFormatter(date) }}
        </p>
      </div>
    </div>
    <p class="text-base font-medium text-medium-blue-pallete">
      {{ formatBalanceNormal(totalBalance) }}
    </p>
  </div>
</template>
