<template>
  <div class="bg-white px-10 py-10">

    <!-- SEARCH DIALOG -->
    <CandyFormDialog ref="CandyFormDialogToSearchCard">
      <div class="form-group">
        <input v-model="form.name" type="text" class="form-control" placeholder="نام کارت">
      </div>
    </CandyFormDialog>

    <!-- SEARCH -->
    <div class="fixed right-10 bottom-10">
      <div class="flex flex-col space-y-5">
        <button @click="searchCard" type="button" class="bg-red-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">جستجو</button>
      </div>
    </div>

    <!-- CARD DIALOG -->
    <CandyCardDialog ref="CandyCardDialogToShowCard">
    </CandyCardDialog>

    <div class="lg:w-8/12 lg:mx-auto">
      <div class="flex flex-col space-y-20">

        <!-- HEADER -->
        <div class="flex justify-center items-center space-x-reverse space-x-5">
          <img src="@/assets/img/axie.png">
        </div>

        <!-- SECTION -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-20">

          <!-- CARD -->
          <div @click="showCard(card)" class="bg-white rounded-xl shadow-lg px-5 py-5" v-for="card in cards">
            <div class="flex flex-col space-y-5">

              <!-- ICON -->
              <div class="relative">
                <div class="flex flex-col space-y-5">
                  <img :src="card.icon.address" class="w-full rounded-xl">
                </div>
                <div class="absolute top-1 right-1 left-1">
                  <div class="bg-gray-900 bg-opacity-50 rounded-xl px-5 py-5">
                    این یک متن تست است که برای تست استفاده می شود و متن تست است.
                  </div>
                </div>
              </div>

              <!-- TITLE -->
              <div class="flex flex-col space-y-5">
                <h3 class="text-gray-500 text-sm font-sans-medium">{{ card.name }}</h3>
              </div>

              <!-- DETAILS -->
              <div class="grid grid-flow-col grid-cols-auto gap-2">

                <!-- ENERGY -->
                <div class="bg-yellow-500 rounded-xl px-5 py-5">
                  <div class="flex justify-between items-start space-x-reverse space-x-5">
                    <h3 class="text-white text-sm font-sans-medium">انرژی</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.energy }}</p>
                  </div>
                </div>

                <!-- ATTACK -->
                <div class="bg-red-500 rounded-xl px-5 py-5" v-if="card.attack">
                  <div class="flex justify-between items-start space-x-reverse space-x-5">
                    <h3 class="text-white text-sm font-sans-medium">حمله</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.attack }}</p>
                  </div>
                </div>

                <!-- DEFENCE -->
                <div class="bg-green-500 rounded-xl px-5 py-5" v-if="card.defence">
                  <div class="flex justify-between items-start space-x-reverse space-x-5">
                    <h3 class="text-white text-sm font-sans-medium">شیلد</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.defence }}</p>
                  </div>
                </div>

                <!-- HEALTH -->
                <div class="bg-indigo-500 rounded-xl px-5 py-5" v-if="card.health">
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
  </div>
</template>
<script>
export default {

  data() {
    return {
      cards: [],
      form: {
        name: null
      }
    }
  },

  methods: {

    showCard(card) {

      if (card.description) {

        this.$refs.CandyCardDialogToShowCard.open(card.name, card.description)
      }
    },

    async searchCard() {

      let submit = await this.$refs.CandyFormDialogToSearchCard.open()

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
