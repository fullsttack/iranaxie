<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">کارت های بانکی</h3>
      </div>
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-bell text-gray-500 text-lg"></span>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-user text-gray-500 text-lg"></span>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-left text-gray-500 text-lg"></span>
        </div>
      </div>
    </div>
    <!-- SECTION -->
    <div v-if="cards" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
      <div class="flex flex-col space-y-5">
        <div v-for="card in cards" class="bg-gray-50 rounded-xl px-10 py-5">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">نام بانک</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <img :src="card.bank.icon.address" class="thumb">
                <p class="text-gray-500 text-sm font-sans-medium">{{ card.bank.name }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">نام کارت</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ card.name }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">شماره کارت</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ card.card }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">شماره حساب</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ card.account }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">وضعیت</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <CardStatus :status="card.status"></CardStatus>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION -->
    <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
      <div class="lg:w-4/12 lg:mx-auto">
        <div class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <div class="flex justify-center items-center space-x-reverse space-x-5">
              <img src="@/assets/img/bg/nothing.png">
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <h3 class="text-gray-500 text-sm text-center font-sans-medium">کارت های بانکی</h3>
            <p class="text-gray-500 text-sm text-center font-sans-light">کارت های بانکی خود را به سیستم اضافه کنید.</p>
          </div>
          <div class="flex flex-col space-y-5">
            <NuxtLink to="/cards/create" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">افزودن کارت</NuxtLink>
            <a class="w-full bg-gray-100 rounded-xl text-gray-500 text-sm text-center font-sans-medium px-4 py-4">تماس با پشتیبانی</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  layout: 'panel',

  data() {
    return {
      cards: null
    }
  },

  mounted() {

    this.loadCards()
  },

  methods: {

    async loadCards() {

      let response = await this.$axios.get('candy/frontend/card/index')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.cards = response.data
      }
    }
  }
}
</script>
