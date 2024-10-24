<script lang="ts" setup>
import SendIcon from '@/assets/svg-icon/send-icon.svg'
</script>

<template>
  <div class="flex items-center gap-7">
    <p class="text-medium-blue-pallete capitalize text-base">write amount</p>
    <div
      class="bg-light-blue-pallete h-[50px] flex-1 flex items-center pl-[30px] rounded-full relative"
    >
      <input
        type="text"
        placeholder="525,5"
        class="bg-transparent focus:outline-none"
      />
      <button
        type="submit"
        class="flex cursor-pointer text-base font-medium items-center gap-2 px-6 text-white bg-accent-blue-pallete capitalize h-[50px] absolute right-0 rounded-full"
      >
        send
        <SendIcon />
      </button>
    </div>
  </div>
</template>
