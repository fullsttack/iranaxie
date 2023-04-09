<template>
  <div class="bg-white border border-gray-100 rounded-xl px-10 py-10">
    <div class="flex flex-col space-y-20">
      <div class="flex flex-col space-y-5">
        <div class="flex justify-center items-center space-x-reverse space-x-5">
          <img src="@/assets/img/logo.png">
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/dash" class="text-gray-500 text-sm font-sans-medium">پیشخوان</NuxtLink>
        </div>
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/cards" class="text-gray-500 text-sm font-sans-medium">کارت های بانکی</NuxtLink>
        </div>
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/exchanges" class="text-gray-500 text-sm font-sans-medium">خرید و فروش</NuxtLink>
        </div>
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/accounts" class="text-gray-500 text-sm font-sans-medium">لیست اکانت ها</NuxtLink>
        </div>
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/user/identify" class="text-gray-500 text-sm font-sans-medium">احراز هویت</NuxtLink>
        </div>
        <div class="flex justify-start items-center space-x-reverse space-x-5">
          <span class="icon icon-left text-gray-500 text-lg"></span>
          <NuxtLink to="/user/profile" class="text-gray-500 text-sm font-sans-medium">پروفایل</NuxtLink>
        </div>
      </div>
      <div class="flex flex-col space-y-5">
        <div class="bg-indigo-500 rounded-xl px-5 py-5">
          <p class="text-white text-sm text-justify font-sans-light leading-7">لورم ایپسوم دولور سیت امت یک متن برای پر کردن صفحات وب بدون محتوی است.</p>
        </div>
      </div>
    </div>
  </div>
</template>
