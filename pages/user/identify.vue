<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">احراز هویت</h3>
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
              <input v-model="form.full_name" type="text" class="form-control" placeholder="نام و نام خانوادگی">
            </div>
            <div class="form-group">
              <input v-model="form.father_name" type="text" class="form-control" placeholder="نام پدر">
            </div>
            <div class="form-group">
              <input v-number v-model="form.national" type="text" class="form-control" placeholder="شماره ملی">
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <Upload v-model="form.picture"></Upload>
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
import lodash from 'lodash'

export default {

  layout: 'panel',

  data() {
    return {
      form: {
        full_name: null, father_name: null, national: null, picture: null
      }
    }
  },

  methods: {

    async create(event) {

      event.preventDefault()

      // We need to use this to upload picture
      let formData = new FormData()

      lodash.forEach(this.form, function(value, name) {

        formData.append(name, value)
      })

      let response = await this.$axios.post('candy/frontend/common/user/profile/create', formData)

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.$router.push('/user/profile')
      }
    }
  }
}
</script>
