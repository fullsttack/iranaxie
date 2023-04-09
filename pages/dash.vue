<template>
  <div class="flex flex-col space-y-10">
    <!-- HEADER -->
    <div class="flex justify-between items-center space-x-reverse space-x-5">
      <div class="flex justify-start items-center space-x-reverse space-x-5">
        <h3 class="text-gray-500 text-sm font-sans-medium">پیشخوان</h3>
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
    <div v-if="coins" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div v-for="coin in coins" class="flex flex-col space-y-5">
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <img :src="coin.icon.address" class="thumb">
            <h3 class="text-gray-500 text-sm font-sans-medium">{{ coin.name }}</h3>
          </div>
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <h3 class="text-gray-500 text-sm font-sans-medium">خرید</h3>
            <p class="text-green-500 text-sm font-sans-medium">{{ coin.buy_price }}</p>
            <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
          </div>
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <h3 class="text-gray-500 text-sm font-sans-medium">فروش</h3>
            <p class="text-red-500 text-sm font-sans-medium">{{ coin.sell_price }}</p>
            <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION -->
    <div class="flex flex-col space-y-10">
      <!-- SECTION -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="bg-white border border-gray-100 rounded-xl px-10 py-5">
          <div class="flex justify-between items-center space-x-reverse space-x-5">
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <div class="bg-red-500 rounded-xl shadow-sm w-10 h-10 flex justify-center items-center space-x-reverse space-x-5">
                <span class="text-white text-lg font-sans-medium">{{ graph.pending }}</span>
              </div>
            </div>
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <h3 class="text-gray-500 text-sm font-sans-medium">سفارشات پرداخت نشده</h3>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl px-10 py-5">
          <div class="flex justify-between items-center space-x-reverse space-x-5">
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <div class="bg-yellow-500 rounded-xl shadow-sm w-10 h-10 flex justify-center items-center space-x-reverse space-x-5">
                <span class="text-white text-lg font-sans-medium">{{ graph.paid }}</span>
              </div>
            </div>
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <h3 class="text-gray-500 text-sm font-sans-medium">سفارشات پرداخت شده</h3>
            </div>
          </div>
        </div>
        <div class="bg-white border border-gray-100 rounded-xl px-10 py-5">
          <div class="flex justify-between items-center space-x-reverse space-x-5">
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <div class="bg-green-500 rounded-xl shadow-sm w-10 h-10 flex justify-center items-center space-x-reverse space-x-5">
                <span class="text-white text-lg font-sans-medium">{{ graph.completed }}</span>
              </div>
            </div>
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <h3 class="text-gray-500 text-sm font-sans-medium">سفارشات تکمیل شده</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- SECTION -->
      <div v-if="exchanges" class="bg-white border border-gray-100 rounded-xl px-10 py-10">
        <div class="flex flex-col space-y-10">
          <div class="flex flex-col space-y-5">
            <div class="flex justify-start items-center space-x-reverse space-x-5">
              <h3 class="text-gray-500 text-sm font-sans-medium">خرید و فروش</h3>
            </div>
          </div>
          <div class="flex flex-col space-y-5">
            <div v-for="exchange in exchanges" class="bg-gray-50 rounded-xl px-10 py-5">
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div class="flex flex-col space-y-5">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <span class="icon icon-dash text-gray-500 text-lg"></span>
                    <h3 class="text-gray-500 text-sm font-sans-medium">کوین</h3>
                  </div>
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <img :src="exchange.coin.icon.address" class="thumb">
                    <p class="text-gray-500 text-sm font-sans-medium">{{ exchange.coin.name }}</p>
                  </div>
                </div>
                <div class="flex flex-col space-y-5">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <span class="icon icon-dash text-gray-500 text-lg"></span>
                    <h3 class="text-gray-500 text-sm font-sans-medium">مقدار</h3>
                  </div>
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <p class="text-gray-500 text-sm font-sans-medium">{{ exchange.amount | amount }}</p>
                    <p class="text-gray-500 text-sm font-sans-medium">{{ exchange.coin.name }}</p>
                  </div>
                </div>
                <div class="flex flex-col space-y-5">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <span class="icon icon-dash text-gray-500 text-lg"></span>
                    <h3 class="text-gray-500 text-sm font-sans-medium">مبلغ</h3>
                  </div>
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <p class="text-gray-500 text-sm font-sans-medium">{{ exchange.price | price }}</p>
                    <p class="text-gray-500 text-sm font-sans-medium">تومان</p>
                  </div>
                </div>
                <div class="flex flex-col space-y-5">
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <span class="icon icon-dash text-gray-500 text-lg"></span>
                    <h3 class="text-gray-500 text-sm font-sans-medium">وضعیت</h3>
                  </div>
                  <div class="flex justify-start items-center space-x-reverse space-x-5">
                    <ExchangeStatus :status="exchange.status"></ExchangeStatus>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- SECTION -->
      <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
        <div class="lg:w-4/12 lg:mx-auto">
          <div class="flex flex-col space-y-10">
            <div class="flex flex-col space-y-5">
              <div class="flex justify-center items-center space-x-reverse space-x-5">
                <img src="@/assets/img/bg/nothing.png">
              </div>
            </div>
            <div class="flex flex-col space-y-5">
              <h3 class="text-gray-500 text-sm text-center font-sans-medium">خرید و فروش</h3>
              <p class="text-gray-500 text-sm text-center font-sans-light">خرید و فروش آسان را با ما تجربه کنید.</p>
            </div>
            <div class="flex flex-col space-y-5">
              <NuxtLink to="/exchanges/buy" class="w-full bg-green-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">خرید</NuxtLink>
              <NuxtLink to="/exchanges/sell" class="w-full bg-red-500 rounded-xl text-white text-sm text-center font-sans-medium px-4 py-4">فروش</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  layout: 'panel',

  data() {
    return {
      coins: null,
      graph: {
        pending: 0, paid: 0, completed: 0
      },
      exchanges: null
    }
  },

  mounted() {

    this.loadCoins()
    this.loadGraph()
    this.loadExchanges()
  },

  methods: {

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

    async loadGraph() {

      let response = await this.$axios.get('candy/frontend/common/user/graph/orders')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.graph = response.data
      }
    },

    async loadExchanges() {

      let response = await this.$axios.get('candy/frontend/exchange/index')

      response = response.data

      if (response.message) {

        // Its not ok to show message here
      }

      if (response.data) {

        this.exchanges = response.data
      }
    }
  }
}
</script>
