<script lang="ts" setup>
defineProps<{
  imageSource: string
  name: string
  job: string
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-[15px]">
    <div class="h-[70px] w-[70px] rounded-full overflow-hidden bg-slate-400">
      <img :src="imageSource" alt="" class="h-[70px] w-[70px]" />
    </div>
    <div class="flex flex-col items-center gap-[5px]">
      <p class="text-base capitalize text-gray-800">{{ name }}</p>
      <p class="text-[15px] capitalize text-medium-blue-pallete">{{ job }}</p>
    </div>
  </div>
</template>
