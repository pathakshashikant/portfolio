<script setup>

import TheFooter from '../components/TheFooter.vue'
import TheHeaderVue from '../components/TheHeader.vue';

</script>
<template>
    <TheHeaderVue />

    <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>


    </router-view>
    <TheFooter />

</template>


<style >
.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 300ms ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
}

.route-leave-active {
    transition: all 300ms ease-in;
}
</style>