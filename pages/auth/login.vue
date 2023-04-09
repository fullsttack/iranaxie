<template>
  <div class="grid grid-cols-1">
    <div class="bg-indigo-50 px-10 py-10">
      <div class="lg:w-4/12 lg:mx-auto">
        <form v-if="showFirstStep" @submit="login" class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <h3 class="text-gray-500 text-sm font-sans-medium">ورود به حساب کاربری</h3>
            <p class="text-gray-500 text-sm font-sans-light">لورم ایپسوم دولور سیت امت یک متن است.</p>
          </div>
          <div class="flex flex-col space-y-5">
            <div class="form-group">
              <input v-number v-model="form.phone" type="text" class="form-control" placeholder="شماره همراه">
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <button type="submit" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">ارسال</button>
          </div>
        </form>
        <form v-if="showSecondStep" @submit="verify" class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <h3 class="text-gray-500 text-sm font-sans-medium">ورود به حساب کاربری</h3>
            <p class="text-gray-500 text-sm font-sans-light">پیامک به شماره همراه شما ارسال شد.</p>
          </div>
          <div class="flex flex-col space-y-5">
            <div class="form-group">
              <input v-number v-model="form.token" type="text" class="form-control" placeholder="کد پیامک شده">
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <button type="submit" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">ارسال</button>
          </div>
        </form>
      </div>
    </div>
    <div class="bg-indigo-50 px-10 py-10">
      <img src="@/assets/img/bg/login.png" class="mx-auto">
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      step: 1,
      form: {
        phone: null, token: null
      }
    }
  },

  computed: {

    showFirstStep() {

      if (this.step == 1) {
        return true
      } else {
        return false
      }
    },

    showSecondStep() {

      if (this.step == 2) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {

    prevStep() {

      this.step--
    },

    nextStep() {

      this.step++
    },

    async login(event) {

      event.preventDefault()

      let response = await this.$axios.post('candy/frontend/auth/phone/login', this.form)

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.nextStep()
      }
    },

    async verify(event) {

      event.preventDefault()

      let response = await this.$axios.post('candy/frontend/auth/phone/verify', this.form)

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        // Save token
        localStorage.token = response.data.token

        // Go to dashboard
        this.$router.push('/dash')
      }
    }
  }
}
</script>
