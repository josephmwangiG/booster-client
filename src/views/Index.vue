<template>
  <div
    class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
  >
    <!-- TopNavBar -->
    <header
      class="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 h-16"
        >
          <router-link
            to="/"
            class="flex items-center gap-4 text-slate-800 dark:text-slate-200"
          >
            <div class="text-primary">
              <span class="material-symbols-outlined text-3xl">water_drop</span>
            </div>
            <h2 class="text-xl font-bold tracking-[-0.015em]">Booster Water</h2>
          </router-link>
          <nav class="hidden md:flex flex-1 justify-center gap-8">
            <a
              class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
              href="#"
              >How it Works</a
            >
            <a
              class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
              href="#"
              >Pricing</a
            >
            <a
              class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal"
              href="#"
              >FAQ</a
            >
          </nav>
          <div class="flex gap-2">
            <router-link
              to="/orders"
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Orders</span>
            </router-link>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Log In</span>
            </button>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <!-- Footer -->
    <footer
      class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div
            class="flex items-center gap-2 text-slate-600 dark:text-slate-400"
          >
            <div class="text-primary">
              <span class="material-symbols-outlined text-2xl">water_drop</span>
            </div>
            <span>© 2024 Booster Water. All rights reserved.</span>
          </div>
          <div class="flex space-x-6">
            <a
              class="text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
              >Terms of Service</a
            >
            <a
              class="text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
              >Privacy Policy</a
            >
            <a
              class="text-slate-500 dark:text-slate-400 hover:text-primary"
              href="#"
              >Contact Us</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
