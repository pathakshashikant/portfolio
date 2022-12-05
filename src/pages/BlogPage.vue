<script setup>
import MyBlogsContent from '../components/MyBlogsContent.vue'
const itemsList = 4

</script>

<template>
    <div class="py-[123px] px-[235px]">
        <p class=" text-[44px] font-bold text-left text-[#21243d] pb-[55px]">Blog</p>
        <MyBlogsContent class="pb-8  basis-full" :itemsList="itemsList" :homecontent=false />
    </div>

</template>

