<script lang="ts" setup>
import TheHeadings from "../Headings/TheHeadings.vue";
import {ref} from "vue";

interface TeamInfo {
    [key: number]: {
        title: string,
        subtitle: string,
        description: string
    }
}

const teamInfo = ref<TeamInfo>([
    {
        title: "John Smith",
        subtitle: "CEO and Founder",
        description: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        id: 1,
        img: "/images/hero-1.png"
    },
    {
        title: "Jane Doe",
        subtitle: "Director of Operations",
        description: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        id: 2,
        img: "/images/hero-2.png"
    },
    {
        title: "Michael Brown",
        subtitle: "Senior SEO Specialist",
        description: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        id: 3,
        img: "/images/hero-3.png"
    },
    {
        title: "Emily Johnson",
        subtitle: "PPC Manager",
        description: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        id: 4,
        img: "/images/hero-4.png"
    },
    {
        title: "Brian Williams",
        subtitle: "Social Media Specialist",
        description: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        id: 5,
        img: "/images/hero-5.png"
    },
    {
        title: "Sarah Kim",
        subtitle: "Content Creator",
        description: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
        id: 6,
        img: "/images/hero-6.png"
    }
])
</script>

<template>
    <the-headings subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
                  title="Team"></the-headings>
    <section class="teams lg:my-[4rem] sm:mx-[1.5rem] sm:my-[1.5rem]">
        <div v-for="info in teamInfo" :key="info.id"
             class="teams__card rounded-[2.5rem] border-2 border-black border-b-[7px]">
            <div class="teams__card__content">
                <div class="teams__card__header">
                    <img :src="info.img" alt="flower svg" class="teams__card__header__img"/>
                    <div class="teams__card__header__info">
                        <h3 class="teams__card__header__title">{{ info.title }}</h3>
                        <p class="teams__card__header__subtitle">{{ info.subtitle }}</p>
                    </div>
                    <div class="teams__card__header__social">
                        <span class="teams__card__social__item">in</span>
                    </div>
                </div>
                <div class="teams__card__description">
                    <p class="teams__card__description__item">{{ info.description }}</p>
                </div>
            </div>
        </div>
        <div class="teams__btn lg:w-[72.3rem]">
            <button class="teams__btn__item">See all team</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import './the-teams-desktop.scss';
@import './the-teams-mobile.scss';
@import './the-teams-tablet.scss';
</style>

