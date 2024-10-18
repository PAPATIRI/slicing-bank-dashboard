<script lang="ts" setup>
import SearchIcon from '@/assets/svg-icon/search-icon.svg'
</script>

<template>
  <div class="relative bg-light-blue-pallete p-4 rounded-full">
    <SearchIcon class="absolute top-[33%] left-5" />
    <input
      type="text"
      placeholder="search for something"
      class="bg-transparent focus:outline-none ml-10 placeholder:text-gray-pallete text-gray-800"
    />
  </div>
</template>
