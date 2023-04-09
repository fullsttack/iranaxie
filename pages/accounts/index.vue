<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">لیست اکانت ها</h3>
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
    <div v-if="accounts" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
      <div class="flex flex-col space-y-5">
        <div v-for="account in accounts" class="bg-gray-50 rounded-xl px-10 py-5">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">نام اکانت</h3>
              </div>
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ account.name }}</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">دریافتی امروز</h3>
              </div>
              <div v-if="account.slp.today" class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ account.slp.today }}</p>
              </div>
              <div v-else class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">در انتظار</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">دریافتی دیروز</h3>
              </div>
              <div v-if="account.slp.yesterday" class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ account.slp.yesterday }}</p>
              </div>
              <div v-else class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">در انتظار</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">رنک امروز</h3>
              </div>
              <div v-if="account.rank.today" class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ account.rank.today }}</p>
              </div>
              <div v-else class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">در انتظار</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="flex justify-start items-center space-x-reverse space-x-5">
                <span class="icon icon-dash text-gray-500 text-lg"></span>
                <h3 class="text-gray-500 text-sm font-sans-medium">رنک دیروز</h3>
              </div>
              <div v-if="account.rank.yesterday" class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">{{ account.rank.yesterday }}</p>
              </div>
              <div v-else class="flex justify-start items-center space-x-reverse space-x-5">
                <p class="text-gray-500 text-sm font-sans-medium">در انتظار</p>
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
            <h3 class="text-gray-500 text-sm text-center font-sans-medium">افزودن اکانت</h3>
            <p class="text-gray-500 text-sm text-center font-sans-light">اکانت های خود را به سیستم اضافه کنید.</p>
          </div>
          <div class="flex flex-col space-y-5">
            <NuxtLink to="/accounts/create" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">افزودن اکانت</NuxtLink>
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
      accounts: null
    }
  },

  mounted() {

    this.loadAccounts()
  },

  methods: {

    async loadAccounts() {

      let response = await this.$axios.get('candy/frontend/account/index')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.accounts = response.data
      }
    }
  }
}
</script>
