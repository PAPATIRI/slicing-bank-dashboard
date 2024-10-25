<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{
  icon: Component
  bgColor: string
  roundedSize: string
  size: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    :class="[
      bgColor,
      roundedSize,
      size === 'lg' ? 'p-5' : '',
      size === 'md' ? 'p-3' : '',
    ]"
  >
    <component :is="icon" />
  </div>
</template>
