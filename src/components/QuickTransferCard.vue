<script lang="ts" setup>
import UserCard from './ui/UserCard.vue'
import UserImage1 from '@/assets/user1.png'
import UserImage2 from '@/assets/user2.png'
import UserImage3 from '@/assets/user3.png'
import QuickTransferFormButton from './ui/QuickTransferFormButton.vue'
import ArrowRightIcon from '@/assets/svg-icon/arrow-key-right.svg'
</script>

<template>
  <div class="flex-1 flex flex-col justify-between">
    <div class="flex flex-1 item-center justify-evenly gap-7">
      <UserCard :image-source="UserImage1" name="livia Bator" job="CEO" />
      <UserCard :image-source="UserImage2" name="randy press" job="Designer" />
      <UserCard :image-source="UserImage3" name="workman" job="Designer" />
      <div
        class="bg-light-blue-pallete h-[50px] w-[50px] flex items-center justify-center rounded-full self-center shadow-lg"
      >
        <ArrowRightIcon />
      </div>
    </div>
    <div class="">
      <QuickTransferFormButton />
    </div>
  </div>
</template>
