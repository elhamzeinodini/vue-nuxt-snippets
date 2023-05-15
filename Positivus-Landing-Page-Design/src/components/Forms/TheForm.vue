<script lang="ts" setup>
import TheHeadings from "../Headings/TheHeadings.vue";
import {ref} from "vue";

const option1 = ref<Boolean>(false)
const option2 = ref<Boolean>(false)
const userName = ref<String>("")
const userMail = ref<String>("")
const userMsg = ref<String>("")
const logSayHi = (): void => console.log(option1)
const logQuote = (): void => console.log(option2)

const sendData = (): void => {
    console.log({
        name: userName.value,
        email: userMail.value,
        message: userMsg.value
    })
    userName.value = ""
    userMail.value = ""
    userMsg.value = ""
}
</script>

<template>
    <the-headings subtitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
                  title="Contact Us"></the-headings>
    <form class="form lg:my-[4rem] sm:mx-[1.5rem] sm:my-[1.5rem]">
        <div class="form__content">
            <div class="form__option">
                <input v-model="option1" class="form__radio mr-2" name="say-hi" type="radio" @click="logSayHi"/>
                <label class="form__label mr-[2rem]" for="say-hi">Say Hi</label>
                <input v-model="option2" class="form__radio mr-2" name="quote" type="radio" @click="logQuote"/>
                <label class="form__label" for="quote">Get a Quote</label>
            </div>
            <div class="form__info">
                <label for="name">Name</label>
                <input v-model="userName" class="form__input" name="name" placeholder="Name" type="text"/>
            </div>
            <div class="form__info">
                <label for="email">Email<sup>*</sup></label>
                <input v-model="userMail" class="form__input" name="email" placeholder="Email" type="email"/>
            </div>
            <div class="form__info">
                <label for="msg">Message<sup>*</sup></label>
                <textarea v-model="userMsg" class="form__text" cols="30" name="msg" placeholder="Message"
                          rows="10"></textarea>
            </div>
            <button class="form__btn form__btn--desktop" @click.prevent="sendData()">Send Message</button>
        </div>
        <div class="form__img">
            <img src="/images/form-illustration.svg" alt="form illustration" />
        </div>
    </form>
    <button class="form__btn form__btn--mobile" @click.prevent="sendData()">Send Message</button>
</template>

<style lang="scss" scoped>
@import './the-form-desktop.scss';
@import './the-form-mobile.scss';
@import './the-form-tablet.scss';
</style>