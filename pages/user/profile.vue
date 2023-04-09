<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">پروفایل</h3>
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
    <div class="lg:w-6/12 lg:mx-auto">
      <div class="flex flex-col space-y-10">
        <!-- SECTION -->
        <div v-if="nothing" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-red-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <NuxtLink to="/user/identify" class="w-full bg-red-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">احراز هویت</NuxtLink>
            </div>
          </div>
        </div>
        <!-- SECTION -->
        <div v-if="pending" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-indigo-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <NuxtLink to="/user/identify" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">احراز هویت</NuxtLink>
            </div>
          </div>
        </div>
        <!-- SECTION -->
        <div v-if="approved" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-green-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <NuxtLink to="/exchanges/buy" class="w-full bg-green-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">خرید</NuxtLink>
              <NuxtLink to="/exchanges/sell" class="w-full bg-red-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">فروش</NuxtLink>
            </div>
          </div>
        </div>
        <!-- SECTION -->
        <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
          <div class="flex flex-col space-y-10">
            <div class="flex justify-between items-start space-x-reverse space-x-5">
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <a class="text-gray-500 text-sm font-sans-medium">صفحه نخست</a>
              </div>
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <span class="icon icon-left text-gray-500 text-lg"></span>
              </div>
            </div>
            <div class="flex justify-between items-start space-x-reverse space-x-5">
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <a class="text-gray-500 text-sm font-sans-medium">کارت های بانکی</a>
              </div>
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <span class="icon icon-left text-gray-500 text-lg"></span>
              </div>
            </div>
            <div class="flex justify-between items-start space-x-reverse space-x-5">
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <a class="text-gray-500 text-sm font-sans-medium">قوانین و شرایط</a>
              </div>
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <span class="icon icon-left text-gray-500 text-lg"></span>
              </div>
            </div>
            <div class="flex justify-between items-start space-x-reverse space-x-5">
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <a class="text-gray-500 text-sm font-sans-medium">تماس با ما</a>
              </div>
              <div class="flex justify-start items-start space-x-reverse space-x-5">
                <span class="icon icon-left text-gray-500 text-lg"></span>
              </div>
            </div>
          </div>
        </div>
        <!-- SECTION -->
        <div class="bg-indigo-500 rounded-xl px-10 py-10">
          <div class="flex justify-between items-center space-x-reverse space-x-5">
            <div class="flex justify-start items-start space-x-reverse space-x-5">
              <p class="text-white text-sm font-sans-medium">با دعوت از دوستان خود هدیه بگیرید.</p>
            </div>
            <div class="flex justify-start items-start space-x-reverse space-x-5">
              <a class="bg-yellow-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">تمایل دارم</a>
            </div>
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
      profile: null
    }
  },

  computed: {

    nothing() {

      if (this.profile) {
        return false
      } else {
        return true
      }
    },

    pending() {

      let profile = this.profile

      if (profile && profile.status == 'pending') {
        return true
      } else {
        return false
      }
    },

    approved() {

      let profile = this.profile

      if (profile && profile.status == 'approved') {
        return true
      } else {
        return false
      }
    }
  },

  mounted() {

    this.loadProfile()
  },

  methods: {

    async loadProfile() {

      let response = await this.$axios.get('candy/frontend/common/user/profile/show')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.profile = response.data
      }
    }
  }
}
</script>
