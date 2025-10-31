<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
  >
    <div
      class="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
      >
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="p-8 sm:p-10">
        <div class="text-center">
          <div
            class="inline-flex items-center justify-center size-14 bg-primary/10 dark:bg-primary/20 rounded-full mb-4"
          >
            <span class="material-symbols-outlined text-primary text-3xl"
              >payment</span
            >
          </div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            Complete Your Payment
          </h2>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            Enter your phone number to proceed with the payment.
          </p>
          <div class="mt-4 text-center">
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Amount to be paid
            </p>
            <p
              class="text-4xl font-extrabold text-slate-800 dark:text-slate-100"
            >
              $25.00
            </p>
          </div>
        </div>
        <div class="mt-8 space-y-6">
          <div>
            <label
              class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              for="phone-number"
              >Payment Phone Number</label
            >
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <span class="text-slate-500 dark:text-slate-400">
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    ></path>
                  </svg>
                </span>
              </div>
              <input
                class="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 pl-10 pr-3 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                id="phone-number"
                name="phone-number"
                placeholder="e.g., 254 712 345 678"
                type="tel"
              />
            </div>
          </div>
          <button
            class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-slate-900"
          >
            <span class="truncate">Pay Now</span>
          </button>
        </div>
        <div
          class="mt-8 text-center text-xs text-slate-500 dark:text-slate-400"
        >
          <div class="flex items-center justify-center gap-1.5">
            <span class="material-symbols-outlined !text-base">lock</span>
            <span>Secure payment powered by AquaDrop Pay</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
