<script lang="ts" setup>
import ChipCardImage from '@/assets/chip-card.png'
import ChipCardDarkImage from '@/assets/chip-card-dark.png'
import MasterCardIcon from '@/assets/svg-icon/mastercard-icon.svg'
import MasterCardDarkIcon from '@/assets/svg-icon/mastercard-icon-dark.svg'
import formatCardNumber from '@/utils/creditCardNumberFormatter'

defineProps<{
  creditCardType?: string
}>()
</script>
<template>
  <div
    v-if="creditCardType === 'gradient1'"
    class="flex flex-col justify-between col-span-6 rounded-[20px] bg-gradient-to-br from-purple-700 to-blue-700 min-h-[235px]"
  >
    <div>
      <div class="px-5 pt-4 mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-white">Balance</p>
          <p class="text-base font-semibold text-white">$12,000</p>
        </div>
        <div
          class="h-[29px] w-[29px] overflow-hidden flex item-center justify-center"
        >
          <img :src="ChipCardImage" alt="chip card" class="w-[29px]" />
        </div>
      </div>
      <div class="px-5 mb-4 flex items-center gap-10">
        <div>
          <p class="text-[10px] text-white/70 uppercase">card holder</p>
          <p class="text-[13px] font-semibold text-white capitalize">
            Eddy Cusuma
          </p>
        </div>
        <div>
          <p class="text-[10px] text-white/70 uppercase">valid thru</p>
          <p class="text-[12px] font-semibold text-white capitalize">12/22</p>
        </div>
      </div>
    </div>
    <div
      class="px-5 py-6 bg-gradient-to-b from-white/20 to-white/0 flex items-center justify-between"
    >
      <p class="text-[15px] text-white font-bold">
        {{ formatCardNumber('3778202023231234') }}
      </p>
      <MasterCardIcon />
    </div>
  </div>

  <div
    v-else
    class="flex flex-col justify-between col-span-6 rounded-[20px] bg-white min-h-[235px]"
  >
    <div>
      <div class="px-5 pt-4 mb-4 flex items-center justify-between">
        <div>
          <p class="text-sm text-medium-blue-pallete">Balance</p>
          <p class="text-base font-semibold text-bold-blue-pallete">$12,000</p>
        </div>
        <div
          class="h-[29px] w-[29px] overflow-hidden flex item-center justify-center"
        >
          <img :src="ChipCardDarkImage" alt="chip card" class="w-[29px]" />
        </div>
      </div>
      <div class="px-5 mb-4 flex items-center gap-10">
        <div>
          <p class="text-[10px] text-medium-blue-pallete uppercase">
            card holder
          </p>
          <p
            class="text-[13px] font-semibold text-bold-blue-pallete capitalize"
          >
            Eddy Cusuma
          </p>
        </div>
        <div>
          <p class="text-[10px] text-medium-blue-pallete uppercase">
            valid thru
          </p>
          <p
            class="text-[12px] font-semibold text-bold-blue-pallete capitalize"
          >
            12/22
          </p>
        </div>
      </div>
    </div>
    <div
      class="px-5 py-6 bg-gradient-to-b from-white/20 to-white/0 flex items-center justify-between"
    >
      <p class="text-[15px] text-bold-blue-pallete font-bold">
        {{ formatCardNumber('3778202023231234') }}
      </p>
      <MasterCardDarkIcon />
    </div>
  </div>
</template>
