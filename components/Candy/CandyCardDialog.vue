<template>
  <Transition name="fade">
    <div class="fixed top-0 right-0 left-0 bottom-0 bg-gray-900 bg-opacity-50 px-10 py-10 z-10" v-if="dialog">
      <div class="lg:w-3/12 lg:mx-auto">
        <div class="flex flex-col space-y-5">

          <!-- TITLE -->
          <div class="bg-white rounded-xl shadow-lg px-5 py-5">
            <div class="flex flex-col space-y-5">
              <h3 class="text-gray-500 text-sm font-sans-medium">{{ title }}</h3>
            </div>
          </div>

          <!-- CONTENT -->
          <div class="bg-white rounded-xl shadow-lg px-5 py-5">

            <div class="flex flex-col space-y-5">

              <!-- DESCRIPTION -->
              <div class="flex flex-col space-y-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">{{ text }}</p>
              </div>

              <!-- BUTTON -->
              <div class="flex justify-between items-center space-x-reverse space-x-5">
                <button @click="close" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">بستن</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
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
