<template>
  <div>
    <div v-if="pending" class="flex justify-start items-center space-x-reverse space-x-5">
      <div class="bg-red-500 rounded-xl shadow-sm w-4 h-4"></div>
      <p class="text-gray-500 text-sm font-sans-medium">در انتظار</p>
    </div>
    <div v-if="approved" class="flex justify-start items-center space-x-reverse space-x-5">
      <div class="bg-green-500 rounded-xl shadow-sm w-4 h-4"></div>
      <p class="text-gray-500 text-sm font-sans-medium">تایید شده</p>
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

    approved() {

      if (this.status == 'approved') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
