<script setup>
import MyBlogsContent from './MyBlogsContent.vue';

</script>

<template>
    <div class="w-full relative">
        <div class="w-full   bg-[#edf7fa] px-[141px] py-[27px]">
            <div class="w-full flex justify-between px-4 mb-6">
                <p class=" text-[22px] text-left text-[#21243d">Recent posts</p>
                <p class="w-52 h-5  mr-[30px] text-base text-right text-[#00a8cc]">
                    View all
                </p>
            </div>

            <MyBlogsContent class=" pb-16 p-4 basis-full lg:basis-[47%]" :itemsList=2 :homecontent=true />

        </div>


    </div>

</template>