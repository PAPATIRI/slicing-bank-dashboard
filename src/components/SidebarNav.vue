<script lang="ts" setup>
import { useRoute } from 'vue-router'
import NavItem from '@/components/ui/NavItem.vue'
import HomeIconActive from '@/assets/svg-icon/home-icon-active.svg?component'
import HomeIcon from '@/assets/svg-icon/home-icon.svg?component'
import TransactionIcon from '@/assets/svg-icon/transaction-icon.svg?component'
import TransactionIconActive from '@/assets/svg-icon/transaction-icon-active.svg?component'
import AccountIcon from '@/assets/svg-icon/account-icon.svg?component'
import AccountIconActive from '@/assets/svg-icon/account-icon-active.svg?component'
import InvesmentIcon from '@/assets/svg-icon/invesment-icon.svg?component'
import InvesmentIconActive from '@/assets/svg-icon/invesment-icon-active.svg?component'
import CreditCardIcon from '@/assets/svg-icon/credit-card-icon.svg?component'
import CreditCardIconActive from '@/assets/svg-icon/credit-card-icon-active.svg?component'
import LoanIcon from '@/assets/svg-icon/loan-icon.svg?component'
import LoanIconActive from '@/assets/svg-icon/loan-icon-active.svg?component'
import LogoIcon from '@/assets/svg-icon/logo.svg?component'
import PrivilegeIcon from '@/assets/svg-icon/privilege-icon.svg?component'
import PrivilegeIconActive from '@/assets/svg-icon/privilege-icon-active.svg?component'
import ServiceIcon from '@/assets/svg-icon/service-icon.svg?component'
import ServiceIconActive from '@/assets/svg-icon/service-icon-active.svg?component'
import SettingIcon from '@/assets/svg-icon/setting-icon.svg?component'
import SettingIconActive from '@/assets/svg-icon/setting-icon-active.svg?component'

const route = useRoute()

const isActive = (path: string) => route.path == path
</script>
<template>
  <nav class="flex flex-col bg-white">
    <div class="h-[100px] flex justify-center items-center">
      <RouterLink to="/">
        <LogoIcon />
      </RouterLink>
    </div>
    <NavItem
      title="Dashboard"
      :icon="isActive('/') ? HomeIconActive : HomeIcon"
      to="/"
      :is-active="isActive('/') ? true : false"
    />
    <NavItem
      title="Transactions"
      :icon="
        isActive('/transactions') ? TransactionIconActive : TransactionIcon
      "
      to="/transactions"
      :is-active="isActive('/transactions') ? true : false"
    />
    <NavItem
      title="Account"
      :icon="isActive('/account') ? AccountIconActive : AccountIcon"
      to="/account"
      :is-active="isActive('/account') ? true : false"
    />
    <NavItem
      title="Invesments"
      :icon="isActive('/invesments') ? InvesmentIconActive : InvesmentIcon"
      to="/invesments"
      :is-active="isActive('/invesments') ? true : false"
    />
    <NavItem
      title="Credit Card"
      :icon="isActive('/credit-card') ? CreditCardIconActive : CreditCardIcon"
      to="/credit-card"
      :is-active="isActive('/credit-card') ? true : false"
    />
    <NavItem
      title="Loans"
      :icon="isActive('/loans') ? LoanIconActive : LoanIcon"
      to="/loans"
      :is-active="isActive('/loans') ? true : false"
    />
    <NavItem
      title="Services"
      :icon="isActive('/services') ? ServiceIconActive : ServiceIcon"
      to="/services"
      :is-active="isActive('/services') ? true : false"
    />
    <NavItem
      title="Privileges"
      :icon="isActive('/privileges') ? PrivilegeIconActive : PrivilegeIcon"
      to="/privileges"
      :is-active="isActive('/privileges') ? true : false"
    />
    <NavItem
      title="Settings"
      :icon="isActive('/settings') ? SettingIconActive : SettingIcon"
      to="/settings"
      :is-active="isActive('/settings') ? true : false"
    />
  </nav>
</template>
