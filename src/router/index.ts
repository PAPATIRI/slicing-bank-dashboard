import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import TransactionView from '@/views/TransactionView.vue'
import AccountView from '@/views/AccountView.vue'
import InvesmentView from '@/views/InvesmentView.vue'
import LoanView from '@/views/LoanView.vue'
import CreditCardView from '@/views/CreditCardView.vue'
import PrivilegeView from '@/views/PrivilegeView.vue'
import ServiceView from '@/views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
    {
      path: '/invesments',
      name: 'invesments',
      component: InvesmentView,
    },
    {
      path: '/loans',
      name: 'loans',
      component: LoanView,
    },
    {
      path: '/credit-card',
      name: 'credit card',
      component: CreditCardView,
    },
    {
      path: '/services',
      name: 'Services',
      component: ServiceView,
    },
    {
      path: '/privileges',
      name: 'Privileges',
      component: PrivilegeView,
    },
    {
      path: '/settings',
      name: 'Settings',
      component: PrivilegeView,
    },
  ],
})

export default router
