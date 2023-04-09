<template>
  <div class="fixed right-10 bottom-10">
    <button @click="click" type="button" class="w-16 h-16 bg-indigo-500 rounded-full shadow-lg text-white text-sm text-center font-sans-medium">Search</button>
  </div>
</template>
<script>
export default {

  methods: {

    click() {
      this.$emit('click')
    }
  }
}
</script>
