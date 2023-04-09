<template>
  <div class="relative">
    <div v-if="showLabel" @click="toggle" class="bg-white border border-gray-100 rounded-xl px-4 py-4">
      <div class="flex justify-between items-center space-x-reverse space-x-5">
        <slot name="label"></slot>
      </div>
    </div>
    <div v-if="showCurrent" @click="toggle" class="bg-white border border-gray-100 rounded-xl px-4 py-4">
      <div class="flex justify-between items-center space-x-reverse space-x-5">
        <slot name="current" :current="current"></slot>
      </div>
    </div>
    <div v-if="showSelect" class="absolute top-0 right-0 left-0 bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-4 z-10">
      <div class="flex flex-col space-y-5">
        <div v-for="option in options" @click="select(option)" class="flex justify-between items-center space-x-reverse space-x-5">
          <slot name="option" :option="option"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  props: {
    options: {
      type: Array
    }
  },

  data() {
    return {
      showSelect: false,
      current: null
    }
  },

  computed: {

    showLabel() {

      if (this.current) {
        return false
      } else {
        return true
      }
    },

    showCurrent() {

      if (this.current) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {

    toggle() {

      if (this.showSelect) {
        this.showSelect = false
      } else {
        this.showSelect = true
      }
    },

    select(option) {

      // Handle
      this.$emit('input', option.id)

      // Current
      this.current = option

      // Toggle
      this.showSelect = false
    }
  }
}
</script>
