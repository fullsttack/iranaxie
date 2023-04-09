<template>
  <div class="bg-white px-10 py-10">
    <div class="lg:w-8/12 lg:mx-auto">
      <div class="flex flex-col space-y-10 lg:flex-row lg:space-y-1 lg:justify-between lg:items-center lg:space-x-reverse lg:space-x-5">
        <!-- SECTION -->
        <div class="flex justify-center items-center space-x-reverse space-x-5">
          <img src="@/assets/img/logo.png">
        </div>
        <!-- SECTION -->
        <div class="flex justify-center items-center space-x-reverse space-x-5">
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <NuxtLink to="/" class="text-gray-500 text-sm font-sans-medium">خانه</NuxtLink>
          </div>
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <NuxtLink to="/candy/game/cards" class="text-gray-500 text-sm font-sans-medium">آموزش</NuxtLink>
          </div>
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <a class="text-gray-500 text-sm font-sans-medium">وبلاگ</a>
          </div>
          <div class="flex justify-start items-center space-x-reverse space-x-5">
            <a class="text-gray-500 text-sm font-sans-medium">قوانین</a>
          </div>
        </div>
        <!-- SECTION -->
        <div class="flex justify-center items-center space-x-reverse space-x-5">
          <NuxtLink to="/auth/login" class="bg-indigo-500 rounded-xl shadow-lg text-white text-sm font-sans-medium px-4 py-4">حساب کاربری</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
