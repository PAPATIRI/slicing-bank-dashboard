<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarNav from './components/SidebarNav.vue'
import TopNav from './components/TopNav.vue'
</script>

<template>
  <div class="grid grid-cols-12 h-screen">
    <aside class="bg-white col-span-2">
      <SidebarNav />
    </aside>
    <div class="col-span-10 flex flex-col">
      <TopNav />
      <RouterView />
    </div>
  </div>
</template>
