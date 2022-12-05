<script setup>

const props = defineProps({
    homecontent: { type: Boolean, default: true, required: true },

    itemsList: { type: Number, default: 2, required: true }

})
</script>

<template>
    <div class="flex flex-row flex-wrap gap-4 space-y-8 lg:space-y-0 ">

        <div class="rounded bg-white   " v-bind="$attrs" v-for="i in 4" :ley="i">
            <p class="min-w-fit  text-[26px] font-bold text-left text-[#21243d] py-4">

                Making a design system from scratch
            </p>

            <div v-if="homecontent">
                <p class="   text-lg text-left text-[#21243d]">
                    Design, Pattern
                </p>

                <p class="min-w-fit  text-lg text-left text-[#21243d]">
                    12 Feb 2020
                </p>
            </div>

            <div v-else class="flex space-x-3 flex-row items-center leading-7 pb-2">
                <p class="  text-xl text-left text-[#21243d]">
                    12 Feb 2019
                </p>
                <svg width="2" height="21" viewBox="0 0 2 21" fill="none" xmlns="http://www.w3.org/2000/svg" class=""
                    preserveAspectRatio="none">
                    <path d="M1 0V21" stroke="black"></path>
                </svg>
                <p class="  text-xl text-left text-[#8695a4]">
                    Express, Handlebars
                </p>
            </div>

            <p class="min-w-fit  text-base text-left text-[#21243d]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

            <svg class="w-full  mt-8" height="2" viewBox="0 0 681 2" fill="none" xmlns="http://www.w3.org/2000/svg"
                v-if="!homecontent" preserveAspectRatio="none">
                <path d="M0 1H681" stroke="#E0E0E0"></path>
            </svg>


        </div>



    </div>
</template>