<template>
  <transition name="fade">
    <div class="fixed top-0 right-0 left-0 bottom-0 w-full h-full bg-gray-900 bg-opacity-80 px-10 py-10 z-10" v-if="dialog">
      <div class="lg:w-3/12 lg:mx-auto">
        <div class="bg-white rounded-xl shadow-lg px-5 py-5">
          <div class="flex flex-col space-y-5">

            <!-- HEADER -->
            <div class="flex justify-between items-center space-x-reverse space-x-5">
              <button @click="close" type="button" class="bg-red-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-2">بستن</button>
            </div>

            <!-- CONTENT -->
            <div class="flex flex-col space-y-5">
              <slot></slot>
            </div>

            <!-- FOOTER -->
            <div class="flex justify-between items-center space-x-reverse space-x-5">
              <button @click="submit" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">ارسال</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {

  data() {
    return {
      dialog: false,
      resolve: null
    }
  },

  methods: {

    submit() {

      this.resolve(true)

      // Close dialog
      this.dialog = false
    },

    close() {

      this.resolve(false)

      // Close dialog
      this.dialog = false
    },

    open() {

      // Open dialog
      this.dialog = true

      // Promise
      return new Promise( (resolve) => {

        this.resolve = resolve
      } )
    }
  }
}
</script>
