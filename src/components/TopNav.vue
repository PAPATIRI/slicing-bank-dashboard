<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeRouteTitle = computed(() => {
  switch (route.path) {
    case '/':
      return 'Overview'
    case '/transactions':
      return 'Transactions'
    case '/account':
      return 'account'
    case '/invesments':
      return 'invesments'
    case '/loans':
      return 'loans'
    case '/credit-card':
      return 'credit card'
    case '/services':
      return 'Services'
    case '/privileges':
      return 'Privileges'
    case '/settings':
      return 'Settings'
    default:
      return 'Overview'
  }
})
</script>

<template>
  <div class="h-[100px] flex justify-between items-center px-10">
    <p class="capitalize text-3xl font-medium">{{ activeRouteTitle }}</p>
    <div>
      <input type="text" placeholder="search for something" />
    </div>
  </div>
</template>
