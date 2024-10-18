<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import FormSearch from './ui/FormSearch.vue'
import SettingTopNavIcon from '@/assets/svg-icon/setting-topnav-icon.svg'
import NotificationIcon from '@/assets/svg-icon/notification-icon.svg'
import Avatar from '@/assets/avatar.png'

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
  <div class="h-[100px] bg-white flex justify-between items-center px-10">
    <p class="capitalize text-[#343C6A] text-3xl font-medium">
      {{ activeRouteTitle }}
    </p>
    <div class="flex items-center gap-[30px]">
      <FormSearch />
      <RouterLink to="/settings" class="bg-light-blue-pallete p-3 rounded-full">
        <SettingTopNavIcon />
      </RouterLink>
      <RouterLink to="/settings" class="bg-light-blue-pallete p-3 rounded-full">
        <NotificationIcon />
      </RouterLink>
      <RouterLink
        to="/account"
        class="bg-light-blue-pallete rounded-full h-[50px] w-[50px]"
      >
        <img :src="Avatar" alt="" />
      </RouterLink>
    </div>
  </div>
</template>
