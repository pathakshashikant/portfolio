
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const seeWorkDetails = (i) => {
    router.push('/detail')
}
</script>

<template>
    <div v-for="i in 3" key="i">
        <div class="w-full flex flex-col lg:flex-row  lg:space-x-8 space-y-8 lg:space-y-0 py-[27px] ">
            <img src="../assets/photo.jpg" class="w-[246px] h-[241px]  rounded-md object-cover" />
            <div class="w-full relative mb-6 space-y-4">

                <p class=" text-3xl font-bold text-left text-[#21243d]">
                    Designing Dashboards
                </p>
                <div class="flex space-x-4">
                    <p class="rounded-2xl bg-[#142850] text-lg font-black text-left text-white py-1 px-3">
                        2020
                    </p>
                    <p class="  text-xl text-left text-[#8695a4]">
                        Dashboard
                    </p>
                </div>

                <p class="text-base text-left text-[#21243d] pr-8">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                    consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <p class="text-[#21243d] text-base" @click="seeWorkDetails">Learn more..</p>
                <div class="flex space-x-4">
                    <div
                        class="flex justify-center items-center w-36 h-[43px] relative gap-[5px] px-[34px] py-3 rounded-lg border-2 border-[#7562e0]">
                        <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#21243d]">
                            Github Repo
                        </p>
                    </div>
                    <div
                        class="flex justify-center items-center w-[145px] h-[43px] relative gap-1.5 px-[25px] py-3 rounded-lg bg-[#ff6464]">
                        <p class="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-white">View Live</p>
                    </div>
                </div>

            </div>


        </div>


    </div>

</template>