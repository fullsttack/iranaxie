<template>
  <div class="bg-white">

    <!-- DIALOG -->
    <Dialog ref="dialog"></Dialog>

    <div class="flex flex-col space-y-20">
      <!-- HEADER -->
      <Header></Header>

      <!-- SECTION -->
      <div class="bg-white px-10 py-10">
        <div class="lg:w-8/12 lg:mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div class="bg-white rounded-xl shadow-lg cursor-pointer px-5 py-5" v-for="card in cards" @click="showCard(card)">
              <div class="flex flex-col space-y-5">
                <div class="flex flex-col space-y-5">
                  <img :src="card.icon.address" class="w-full rounded-xl">
                </div>
                <div class="flex flex-col space-y-5">
                  <h3 class="text-gray-500 text-sm font-sans-medium">{{ card.name }}</h3>
                </div>
                <div class="grid grid-flow-col grid-cols-auto gap-2">
                  <div class="bg-yellow-500 rounded-xl px-4 py-2">
                    <div class="flex justify-between items-start space-x-reverse space-x-5">
                      <h3 class="text-white text-sm font-sans-medium">انرژی</h3>
                      <p class="text-white text-sm font-sans-medium">{{ card.energy }}</p>
                    </div>
                  </div>
                  <div class="bg-red-500 rounded-xl px-4 py-2" v-if="card.attack">
                    <div class="flex justify-between items-start space-x-reverse space-x-5">
                      <h3 class="text-white text-sm font-sans-medium">حمله</h3>
                      <p class="text-white text-sm font-sans-medium">{{ card.attack }}</p>
                    </div>
                  </div>
                  <div class="bg-indigo-500 rounded-xl px-4 py-2" v-if="card.defence">
                    <div class="flex justify-between items-start space-x-reverse space-x-5">
                      <h3 class="text-white text-sm font-sans-medium">شیلد</h3>
                      <p class="text-white text-sm font-sans-medium">{{ card.defence }}</p>
                    </div>
                  </div>
                  <div class="bg-green-500 rounded-xl px-4 py-2" v-if="card.health">
                    <div class="flex justify-between items-start space-x-reverse space-x-5">
                      <h3 class="text-white text-sm font-sans-medium">هیل</h3>
                      <p class="text-white text-sm font-sans-medium">{{ card.health }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <Footer></Footer>

      <!-- COPYRIGHT -->
      <Copyright></Copyright>
    </div>

    <!-- Search -->
    <CircleBtn @click="searchCard"></CircleBtn>

    <!-- Search -->
    <DialogForm ref="search">
      <template #form>
        <div class="form-group">
          <input v-model="form.name" type="text" class="form-control" placeholder="نام کارت">
        </div>
      </template>
    </DialogForm>
  </div>
</template>
<script>
export default {

  data() {
    return {
      cards: [],
      form: {}
    }
  },

  methods: {

    showCard(card) {

      this.$refs.dialog.open(card.name, card.description)
    },

    async searchCard() {

      let submit = await this.$refs.search.open()

      if (submit) {

        let response = await this.$axios.get('candy/frontend/game/cards', {
          params: this.form
        })

        response = response.data

        if (response.message) {

          this.$toast.show(response.message)
        }

        if (response.data) {

          this.cards = response.data
        }
      }
    }
  },

  async asyncData({ $axios }) {

    let response = await $axios.get('candy/frontend/game/cards')

    response = response.data

    let cards = []

    if (response.data) {

      cards = response.data
    }

    return {cards}
  }
}
</script>
