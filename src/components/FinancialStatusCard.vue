<script lang="ts" setup>
import { type Component } from 'vue'
import IconContainer from './ui/IconContainer.vue'
import { formatBalanceNormal } from '@/utils/balanceFormatter'

defineProps<{
  title: string
  balenceTotal: number
  icon: Component
  bgColor: string
  roundedSize: string
  size: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="col-span-1">
    <div class="flex items-center gap-4 bg-white py-6 px-8 rounded-3xl">
      <IconContainer
        :icon="icon"
        :bg-color="bgColor"
        :rounded-size="roundedSize"
        :size="size"
      />
      <div>
        <p class="text-base text-medium-blue-pallete capitalize">{{ title }}</p>
        <p class="text-2xl font-medium text-gray-900">
          {{ formatBalanceNormal(balenceTotal) }}
        </p>
      </div>
    </div>
  </div>
</template>
