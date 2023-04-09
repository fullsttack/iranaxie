<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">افزودن کارت</h3>
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
      <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
        <form @submit="create" class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <div class="bg-yellow-50 rounded-xl px-5 py-5">
              <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <div class="form-group">
              <Select v-model="form.bank_id" :options="banks">
                <template #label>
                  <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب بانک</h3>
                </template>
                <template #current="{current}">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <img :src="current.icon.address" class="thumb">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
                  </div>
                </template>
                <template #option="{option}">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <img :src="option.icon.address" class="thumb">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
                  </div>
                </template>
              </Select>
            </div>
            <div class="form-group">
              <input v-model="form.name" type="text" class="form-control" placeholder="نام کارت">
            </div>
            <div class="form-group">
              <input v-number v-model="form.card" type="text" class="form-control" placeholder="شماره کارت">
            </div>
            <div class="form-group">
              <input v-number v-model="form.account" type="text" class="form-control" placeholder="شماره حساب">
            </div>
            <div class="form-group">
              <input v-number v-model="form.sheba" type="text" class="form-control" placeholder="شماره شبا">
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <button type="submit" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">ارسال</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  layout: 'panel',

  data() {
    return {
      banks: null,
      form: {
        bank_id: null, name: null, card: null, account: null, sheba: null
      }
    }
  },

  mounted() {

    this.loadBanks()
  },

  methods: {

    async loadBanks() {

      let response = await this.$axios.get('candy/frontend/common/banks')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.banks = response.data
      }
    },

    async create(event) {

      event.preventDefault()

      let response = await this.$axios.post('candy/frontend/card/create', this.form)

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.$router.push('/cards')
      }
    }
  }
}
</script>
