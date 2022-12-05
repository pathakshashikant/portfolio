<script setup>

import HeroContentVue from '../components/HeroContent.vue';
import MyBlogs from '../components/MyBlogs.vue'
import MyWork from '../components/MyWork.vue'
import AboutContent from '../components/AboutContent.vue';
import ContactContent from '../components/ContactContent.vue';



</script>

<template>

    <section class="">
        <HeroContentVue />
        <MyBlogs itemsList=2 :homecontent=true />
        <AboutContent />
        <MyWork />
        <div class="w-full h-[85px] bg-[#edf7fa]"></div>
        <ContactContent />
    </section>



</template>

