<template>
  <div class="bg-white px-10 py-10">

    <!-- SEARCH BUTTON -->
    <div class="fixed right-10 bottom-10 z-10">
      <button @click="searchCard" type="button" class="bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">جستجو</button>
    </div>

    <!-- SEARCH DIALOG -->
    <CandyFormDialog ref="candyFormDialogToSearchCard">
      <div class="form-group">
        <input v-model="form.name" type="text" class="form-control" placeholder="نام کارت">
      </div>
      <div class="form-group">
        <Select v-model="form.type" :options="types">
          <template #label>
            <h3 class="text-gray-500 text-sm font-sans-medium">نوع کارت</h3>
          </template>
          <template #current="{ current }">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
          </template>
          <template #option="{ option }">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
          </template>
        </Select>
      </div>
      <div class="form-group">
        <Select v-model="form.body" :options="body">
          <template #label>
            <h3 class="text-gray-500 text-sm font-sans-medium">نوع کارت</h3>
          </template>
          <template #current="{ current }">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
          </template>
          <template #option="{ option }">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
          </template>
        </Select>
      </div>
    </CandyFormDialog>

    <div class="lg:w-8/12 lg:mx-auto">
      <div class="flex flex-col space-y-40">

        <!-- HEADER -->
        <CandyHeader></CandyHeader>

        <!-- SECTION -->
        <div class="grid grid-cols-1 lg:grid-cols-6 gap-10">

          <!-- CARDS -->
          <button @click="loadCards" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Cards</button>

          <!-- CURSES -->
          <button @click="loadCurses" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Curses</button>

          <!-- REVENGES -->
          <button @click="loadRevenges" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Revenges</button>

          <!-- RUNES -->
          <button @click="loadRunes" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Runes</button>

          <!-- TOOLS -->
          <button @click="loadTools" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Tools</button>


          <!-- CHARMS -->
          <button @click="loadCharms" type="button" class="w-full bg-indigo-500 rounded-xl shadow-lg text-white text-sm text-center font-sans-medium px-4 py-4">Charms</button>
        </div>

        <!-- SECTION -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <!-- CARD -->
          <div class="bg-white rounded-xl shadow-lg px-5 py-5" v-for="card in cards">
            <div class="flex flex-col space-y-5">

              <!-- HEADER -->
              <div class="relative">

                <!-- IMAGE -->
                <div class="flex flex-col space-y-5">
                  <img :src="card.icon.address" class="w-full rounded-xl">
                </div>

                <!-- DESCRIPTION -->
                <div class="absolute top-5 right-5 left-5 bg-gray-900 bg-opacity-50 rounded-xl px-5 py-5" v-if="card.description">
                  <p class="text-white text-sm text-justify font-sans-medium leading-7">{{ card.description }}</p>
                </div>

                <!-- CATEGORY -->
                <div class="absolute top-2 left-2" v-if="card.category">
                  <img :src="card.category.icon.address" class="w-10 h-10 rounded-full">
                </div>
              </div>

              <!-- CONTENT -->
              <div class="flex flex-col space-y-5">
                <h3 class="text-gray-500 text-sm font-sans-medium">{{ card.name }}</h3>
              </div>

              <!-- FOOTER -->
              <div class="grid grid-cols-2 gap-2">

                <!-- ENERGY -->
                <div class="bg-yellow-500 rounded-xl px-4 py-2" v-if="card.energy">
                  <div class="flex flex-row-reverse justify-between items-start space-x space-x-2">
                    <h3 class="text-white text-sm font-sans-medium">Energy</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.energy }}</p>
                  </div>
                </div>

                <!-- ATTACK -->
                <div class="bg-red-500 rounded-xl px-4 py-2" v-if="card.attack">
                  <div class="flex flex-row-reverse justify-between items-start space-x-2">
                    <h3 class="text-white text-sm font-sans-medium">Attack</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.attack }}</p>
                  </div>
                </div>

                <!-- DEFENCE -->
                <div class="bg-blue-500 rounded-xl px-4 py-2" v-if="card.defence">
                  <div class="flex flex-row-reverse justify-between items-start space-x-2">
                    <h3 class="text-white text-sm font-sans-medium">Shield</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.defence }}</p>
                  </div>
                </div>

                <!-- HEAL -->
                <div class="bg-green-500 rounded-xl px-4 py-2" v-if="card.health">
                  <div class="flex flex-row-reverse justify-between items-start space-x-2">
                    <h3 class="text-white text-sm font-sans-medium">Heal</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.health }}</p>
                  </div>
                </div>

                <!-- POINT -->
                <div class="bg-indigo-500 rounded-xl px-4 py-2" v-if="card.point">
                  <div class="flex flex-row-reverse justify-between items-start space-x-2">
                    <h3 class="text-white text-sm font-sans-medium">PP</h3>
                    <p class="text-white text-sm font-sans-medium">{{ card.point }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER -->
        <CandyFooter></CandyFooter>

        <!-- COPYRIGHT -->
        <CandyCopy></CandyCopy>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  data() {
    return {
      body: [
        {'id': 'eye', 'name': 'Eyes'}, {'id': 'ear', 'name': 'Ears'}, {'id': 'back', 'name': 'Back'}, {'id': 'horn', 'name': 'Horn'}, {'id': 'mouth', 'name': 'Mouth'}, {'id': 'tail', 'name': 'Tail'}
      ],
      types: [
        {'id': 'card', 'name': 'Cards'}, {'id': 'charm', 'name': 'Charms'}, {'id': 'rune', 'name': 'Runes'}, {'id': 'revenge', 'name': 'Revenges'}, {'id': 'curse', 'name': 'Curses'}
      ],
      cards: [],
      form: {}
    }
  },

  methods: {

    async searchCard() {

      let submit = await this.$refs.candyFormDialogToSearchCard.open()

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
    },

    async loadCards() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'card'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadCurses() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'curse'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadRevenges() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'revenge'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadRunes() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'rune'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadTools() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'tool'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadCharms() {

      let response = await this.$axios.get('candy/frontend/game/cards', {
        params: {
          type: 'charm'
        }
      })

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.cards = response.data
      }
    }
  },

  async asyncData({ $axios }) {

    let response = await $axios.get('candy/frontend/game/cards', {
      params: {
        type: 'card'
      }
    })

    response = response.data

    if (response.message) {

      this.$toast.show(response.message)
    }

    let cards = []

    if (response.data) {

      cards = response.data
    }

    return {cards}
  }
}
</script>
