<script lang="ts" setup>
import { defineProps } from 'vue'
import type { DefineComponent } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
const props = defineProps({
  title: String,
  to: {
    type: String as () => RouteLocationRaw,
    default: '/',
  },
  icon: Object as () => DefineComponent,
  isActive: Boolean,
})
</script>

<template>
  <div class="relative h-[60px]">
    <div
      v-if="isActive === true"
      class="absolute left-0 top-0 h-[60px] w-[6px] rounded-tr-lg rounded-br-lg bg-[#2D60FF]"
    ></div>
    <RouterLink
      :to="to"
      :class="[
        'text-lg pl-10 font-medium h-[60px] flex items-center flex-1',
        isActive ? 'text-[#2D60FF]' : 'text-[#B1B1B1]',
      ]"
    >
      <component :is="icon" class="mb-1 mr-4" />
      {{ title }}</RouterLink
    >
  </div>
</template>
