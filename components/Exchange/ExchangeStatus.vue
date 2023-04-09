<template>
  <div>
    <div v-if="pending" class="flex justify-start items-center space-x-reverse space-x-5">
      <div class="bg-red-500 rounded-xl shadow-sm w-4 h-4"></div>
      <p class="text-gray-500 text-sm font-sans-medium">پرداخت نشده</p>
    </div>
    <div v-if="paid" class="flex justify-start items-center space-x-reverse space-x-5">
      <div class="bg-indigo-500 rounded-xl shadow-sm w-4 h-4"></div>
      <p class="text-gray-500 text-sm font-sans-medium">پرداخت شده</p>
    </div>
    <div v-if="completed" class="flex justify-start items-center space-x-reverse space-x-5">
      <div class="bg-green-500 rounded-xl shadow-sm w-4 h-4"></div>
      <p class="text-gray-500 text-sm font-sans-medium">تکمیل شده</p>
    </div>
  </div>
</template>
<script>
export default {

  props: {
    status: {
      type: String
    }
  },

  computed: {

    pending() {

      if (this.status == 'pending') {
        return true
      } else {
        return false
      }
    },

    paid() {

      if (this.status == 'paid') {
        return true
      } else {
        return false
      }
    },

    completed() {

      if (this.status == 'completed') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
