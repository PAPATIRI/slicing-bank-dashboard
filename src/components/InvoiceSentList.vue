<script lang="ts" setup>
import InvoiceItem from './ui/InvoiceItem.vue'
import AppleIcon from '@/assets/svg-icon/apple-icon.svg?component'
import UserIcon from '@/assets/svg-icon/user-pink-icon.svg?component'
import PlayStationIcon from '@/assets/svg-icon/playstation-icon.svg?component'
</script>
<template>
  <div class="grid grid-cols-1 gap-5">
    <InvoiceItem
      :icon="AppleIcon"
      title="apple store"
      :total-balance="450"
      bg-color="bg-teal-300/20"
      rounded-size="rounded-2xl"
      size="md"
      :date="new Date()"
    />
    <InvoiceItem
      :icon="UserIcon"
      title="michael"
      :total-balance="160"
      bg-color="bg-pink-300/20"
      rounded-size="rounded-2xl"
      size="md"
      :date="new Date()"
    />
    <InvoiceItem
      :icon="PlayStationIcon"
      title="playstation"
      :total-balance="1085"
      bg-color="bg-blue-300/20"
      rounded-size="rounded-2xl"
      size="md"
      :date="new Date()"
    />
    <InvoiceItem
      :icon="UserIcon"
      title="william"
      :total-balance="90"
      bg-color="bg-pink-300/20"
      rounded-size="rounded-2xl"
      size="md"
      :date="new Date()"
    />
  </div>
</template>
