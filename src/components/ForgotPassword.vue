<template lang="">
  <div
    class="bg-background-light dark:bg-background-dark/70 rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800"
  >
    <div class="relative flex w-full flex-col items-center justify-center p-4">
      <div class="w-full max-w-md">
        <div class="mb-8 text-center">
          <div class="inline-flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-4xl text-primary"
              >water_drop</span
            >
            <h1
              class="text-3xl font-bold tracking-tighter text-slate-900 dark:text-white"
            >
              Booster Water
            </h1>
          </div>
          <h2
            class="mt-2 text-2xl font-semibold text-slate-800 dark:text-slate-100"
          >
            Get a Confirmation Link
          </h2>
          <p class="text-slate-600 dark:text-slate-300">
            We'll send a secure link to your phone.
          </p>
        </div>
        <div class="">
          <form class="space-y-6">
            <div>
              <label
                class="block text-sm font-medium text-slate-700 dark:text-slate-300"
                for="phone"
                >Phone Number</label
              >
              <div class="relative mt-1">
                <span
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <span class="material-symbols-outlined text-slate-400"
                    >call</span
                  >
                </span>
                <input
                  autocomplete="tel"
                  class="block w-full rounded-lg border-slate-300 bg-slate-50 py-3 pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-primary dark:focus:ring-primary"
                  id="phone"
                  name="phone"
                  placeholder="(123) 456-7890"
                  required=""
                  type="tel"
                />
              </div>
            </div>
            <button
              class="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              type="submit"
            >
              Send Link
            </button>

            <div class="mt-6 text-center">
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Remember your password?
                <router-link
                  to="/home?action=login"
                  class="font-medium text-primary hover:underline"
                  >Sign In
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
