<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-start space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">سفارش فروش</h3>
      </div>
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-bell text-gray-500 text-lg"></span>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-user text-gray-500 text-lg"></span>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-2">
          <span class="icon icon-left text-gray-500 text-lg"></span>
        </div>
      </div>
    </div>
    <!-- SECTION -->
    <div class="lg:w-6/12 lg:mx-auto">
      <form @submit="create" class="flex flex-col space-y-10">
        <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
          <!-- SECTION -->
          <div v-show="showFirstStep" class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-yellow-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="form-group">
                <Select v-model="form.coin_id" :options="coins">
                  <template #label>
                    <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب کوین</h3>
                  </template>
                  <template #current="{current}">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <img :src="current.icon.address" class="thumb">
                      <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
                    </div>
                  </template>
                  <template #option="{option}">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <img :src="option.icon.address" class="thumb">
                      <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
                    </div>
                  </template>
                </Select>
              </div>
              <div class="form-group">
                <input v-number v-model="form.amount" type="text" class="form-control" placeholder="مقدار کوین">
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <button @click="nextStep" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">مرحله بعد</button>
            </div>
          </div>
          <!-- SECTION -->
          <div v-show="showSecondStep" class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-yellow-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="form-group">
                <Select v-model="form.card_id" :options="cards">
                  <template #label>
                    <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب کارت</h3>
                  </template>
                  <template #current="{current}">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <img :src="current.bank.icon.address" class="thumb">
                      <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
                    </div>
                  </template>
                  <template #option="{option}">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <img :src="option.bank.icon.address" class="thumb">
                      <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
                    </div>
                  </template>
                </Select>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <button @click="nextStep" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">مرحله بعد</button>
            </div>
          </div>
          <!-- SECTION -->
          <div v-show="showThirdStep" class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-yellow-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="form-group">
                <Select v-model="form.network_id" :options="networks">
                  <template #label>
                    <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب شبکه</h3>
                  </template>
                  <template #current="{current}">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
                  </template>
                  <template #option="{option}">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
                  </template>
                </Select>
              </div>
              <div class="form-group">
                <Select v-model="form.wallet_id" :options="wallets">
                  <template #label>
                    <h3 class="text-gray-500 text-sm font-sans-medium">انتخاب کیف پول</h3>
                  </template>
                  <template #current="{current}">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ current.name }}</h3>
                  </template>
                  <template #option="{option}">
                    <h3 class="text-gray-500 text-sm font-sans-medium">{{ option.name }}</h3>
                  </template>
                </Select>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <button @click="nextStep" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">مرحله بعد</button>
            </div>
          </div>
          <!-- SECTION -->
          <div v-show="showFourthStep" class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-yellow-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div v-if="wallet" class="flex flex-col space-y-5">
              <div class="bg-white border border-gray-100 rounded-xl px-5 py-5">
                <div class="flex flex-col space-y-5">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <h3 class="text-gray-500 text-sm font-sans-medium">آدرس کیف پول</h3>
                  </div>
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <p class="text-gray-500 text-sm font-sans-light">{{ wallet.address }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <input v-model="form.wallet_track" type="text" class="form-control" placeholder="شناسه تراکنش">
            </div>
            <div class="flex flex-col space-y-5">
              <button @click="nextStep" type="button" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">مرحله بعد</button>
            </div>
          </div>
          <!-- SECTION -->
          <div v-show="showFifthStep" class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="bg-yellow-50 rounded-xl px-5 py-5">
                <p class="text-gray-500 text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی می باشد که بسیار مورد استفاده عموم مردم قرار گرفته است.</p>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div v-if="coin" class="bg-white border border-gray-100 rounded-xl px-5 py-5">
                  <div class="flex flex-col space-y-5">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <h3 class="text-gray-500 text-sm font-sans-medium">کوین</h3>
                    </div>
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <img :src="coin.icon.address" class="thumb">
                      <p class="text-gray-500 text-sm font-sans-medium">{{ coin.name }}</p>
                    </div>
                  </div>
                </div>
                <div v-if="coin" class="bg-white border border-gray-100 rounded-xl px-5 py-5">
                  <div class="flex flex-col space-y-5">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <h3 class="text-gray-500 text-sm font-sans-medium">قیمت خرید</h3>
                    </div>
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <p class="text-gray-500 text-sm font-sans-medium">{{ coin.buy_price | price }}</p>
                      <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
                    </div>
                  </div>
                </div>
                <div v-if="coin" class="bg-white border border-gray-100 rounded-xl px-5 py-5">
                  <div class="flex flex-col space-y-5">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <h3 class="text-gray-500 text-sm font-sans-medium">قیمت فروش</h3>
                    </div>
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <p class="text-gray-500 text-sm font-sans-medium">{{ coin.sell_price | price }}</p>
                      <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
                    </div>
                  </div>
                </div>
                <div v-if="form.price" class="bg-white border border-gray-100 rounded-xl px-5 py-5">
                  <div class="flex flex-col space-y-5">
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <h3 class="text-gray-500 text-sm font-sans-medium">مبلغ پرداختی</h3>
                    </div>
                    <div class="flex justify-start items-center space-x-reverse space-x-5">
                      <p class="text-gray-500 text-sm font-sans-medium">{{ form.price | price }}</p>
                      <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <button type="submit" class="w-full bg-indigo-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">ارسال</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {

  layout: 'panel',

  data() {
    return {
      step: 1,
      cards: null,
      coins: null,
      coin: null,
      networks: null,
      network: null,
      wallets: null,
      wallet: null,
      form: {
        coin_id: null, card_id: null, network_id: null, wallet_id: null, wallet_track: null, amount: null, price: null
      }
    }
  },

  computed: {

    showFirstStep() {

      if (this.step == 1) {
        return true
      } else {
        return false
      }
    },

    showSecondStep() {

      if (this.step == 2) {
        return true
      } else {
        return false
      }
    },

    showThirdStep() {

      if (this.step == 3) {
        return true
      } else {
        return false
      }
    },

    showFourthStep() {

      if (this.step == 4) {
        return true
      } else {
        return false
      }
    },

    showFifthStep() {

      if (this.step == 5) {
        return true
      } else {
        return false
      }
    }
  },

  watch: {

    'form.coin_id': {

      handler(id) {

        this.loadCoin(id)
        this.loadNetworks(id)
      },
      immediate: true
    },

    'form.network_id': {

      handler(id) {

        this.loadNetwork(id)
        this.loadWallets(id)
      },
      immediate: true
    },

    'form.wallet_id': {

      handler(id) {

        this.loadWallet(id)
      },
      immediate: true
    },

    'form.amount': {

      handler() {

        this.calculate()
      },
      immediate: true
    }
  },

  mounted() {

    this.loadCards()
    this.loadCoins()
  },

  methods: {

    prevStep() {

      this.step--
    },

    nextStep() {

      this.step++
    },

    calculate() {

      if (this.coin) {

        this.form.price = (this.form.amount * this.coin.sell_price)
      }
    },

    async loadCards() {

      let response = await this.$axios.get('candy/frontend/common/user/cards')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.cards = response.data
      }
    },

    async loadCoins() {

      let response = await this.$axios.get('candy/frontend/common/coins')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.coins = response.data
      }
    },

    async loadCoin(id) {

      let response = await this.$axios.get(`candy/frontend/common/coin/${id}`)

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.coin = response.data
      }
    },

    async loadNetworks(id) {

      let response = await this.$axios.get(`candy/frontend/common/networks/${id}`)

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.networks = response.data
      }
    },

    async loadNetwork(id) {

      let response = await this.$axios.get(`candy/frontend/common/network/${id}`)

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.network = response.data
      }
    },

    async loadWallets(id) {

      let response = await this.$axios.get(`candy/frontend/common/wallets/${id}`)

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.wallets = response.data
      }
    },

    async loadWallet(id) {

      let response = await this.$axios.get(`candy/frontend/common/wallet/${id}`)

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.wallet = response.data
      }
    },

    async create(event) {

      event.preventDefault()

      let response = await this.$axios.post('candy/frontend/exchange/sell', this.form)

      response = response.data

      if (response.message) {

        this.$toast.show(response.message)
      }

      if (response.data) {

        this.$router.push('/exchanges')
      }
    }
  }
}
</script>
