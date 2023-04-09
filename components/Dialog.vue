<template>
  <div class="fixed w-full h-full bg-gray-900 bg-opacity-50 px-10 py-10 z-10" v-if="dialog">
    <div class="lg:w-4/12 lg:mx-auto">
      <div class="bg-white rounded-xl shadow-lg px-5 py-5">
        <div class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ title }}</h3>
            <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">{{ text }}</p>
          </div>
          <div class="flex flex-col space-y-5">
            <button @click="close" type="button" class="bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">بستن</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      dialog: false,
      title: null,
      text: null
    }
  },

  methods: {

    open(title, text) {

      // Open dialog
      this.dialog = true

      // Dialog content
      this.title = title
      this.text = text
    },

    close() {

      // Close dialog
      this.dialog = false
    }
  }
}
</script>
