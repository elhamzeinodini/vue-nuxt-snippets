<style lang="scss" scoped>
@import './the-testimonials-desktop.scss';
@import './the-testimonials-mobile.scss';
</style>


<template>
    <the-headings
            subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
            title="Testimonials"></the-headings>
    <div class="lg:mx-[6.5rem] lg:my-[4rem] sm:mx-[1.5rem] sm:my-[1.5rem] bg-black rounded-[2.5rem] px-2 py-2">
        <swiper :modules="modules" :navigation="true" class="mySwiper">
            <swiper-slide v-for="item in info" :key="item">
                <div
                        class="lg:mx-[6.5rem] lg:my-[4rem] sm:mx-[1.5rem] sm:my-[1.5rem] text-amber-50"
                >
                    <div>
                        <p>{{ item.description }}</p>
                        <h3>{{ item.name }}</h3>
                        <h5>{{ item.position }}</h5>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper";
import {ref} from "vue";
import TheHeadings from "../Headings/TheHeadings.vue";

export default {
    components: {
        TheHeadings,
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
            info: ref([
                {
                    description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                    name: "John Doe",
                    position: "Marketing Director at XYZ Corp"
                },
                {
                    description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                    name: "Jane Doe",
                    position: "Marketing Director at XYZ Corp"
                },
                {
                    description: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
                    name: "Mark Doe",
                    position: "Marketing Director at XYZ Corp"
                }
            ])

        };
    },
};
</script>
