<template>
  <label class="block bg-gray-50 rounded-xl px-5 py-5">
    <div v-if="showLabel" class="flex justify-center items-center space-x-reverse space-x-5">
      <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب فایل</h3>
    </div>
    <div v-if="showFile" class="flex justify-center items-center space-x-reverse space-x-5">
      <h3 class="text-gray-500 text-sm font-sans-medium">{{ file.name }}</h3>
    </div>
    <div class="hidden">
      <input @change="handle" type="file">
    </div>
  </label>
</template>
<script>
export default {

  data() {
    return {
      file: null
    }
  },

  computed: {

    showLabel() {

      if (this.file) {
        return false
      } else {
        return true
      }
    },

    showFile() {

      if (this.file) {
        return true
      } else {
        return false
      }
    }
  },

  methods: {

    handle( {target} ) {

      // File
      let firstFile = target.files[0]

      // Handle
      this.$emit('input', firstFile)

      // Current
      this.file = firstFile
    }
  }
}
</script>
