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
      <div class="p-8 sm:p-10" v-if="step == 'pay'">
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
            @click="step = 'processing'"
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
      <div class="p-8 sm:p-10" v-if="step == 'processing'">
        <div
          class="w-full max-w-sm rounded-xl bg-white py-8 text-center dark:bg-slate-900 dark:border-slate-800"
        >
          <div
            class="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
          >
            <div
              class="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-700"
            ></div>
            <div
              class="absolute inset-0 animate-spin rounded-full border-t-4 border-b-4 border-primary"
            ></div>
            <span class="material-symbols-outlined text-4xl text-primary"
              >credit_card</span
            >
          </div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            Processing Payment
          </h2>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            Your payment is being processed. This may take a few moments.
          </p>
          <div class="mt-6 rounded-lg bg-slate-100 p-3 dark:bg-slate-800">
            <p class="text-sm font-medium text-slate-700 dark:text-slate-200">
              Please do not close this window or press the back button.
            </p>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              @click="step = 'failed'"
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Cancel</span>
            </button>
            <button
              @click="step = 'completed'"
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Complete</span>
            </button>
          </div>
        </div>
      </div>
      <div class="p-8 sm:p-10" v-if="step == 'completed'">
        <div
          class="w-full max-w-sm rounded-xl bg-white py-8 text-center dark:bg-slate-900"
        >
          <div
            class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
          >
            <span
              class="material-symbols-outlined text-5xl text-green-600 dark:text-green-400"
              style="font-variation-settings: 'FILL' 1, 'wght' 600"
              >task_alt</span
            >
          </div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
            Payment Successful!
          </h2>
          <p class="mt-2 text-slate-600 dark:text-slate-300">
            Your order has been confirmed. A receipt has been sent to your
            email.
          </p>
          <div
            class="mt-6 rounded-lg bg-slate-100 p-3 dark:bg-slate-800 text-sm"
          >
            <p class="font-medium text-slate-500 dark:text-slate-400">
              Transaction ID
            </p>
            <p class="font-semibold text-slate-800 dark:text-slate-200">
              #TXN-1234567890
            </p>
          </div>
          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Close</span>
            </button>
            <button
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">View Order Details</span>
            </button>
          </div>
        </div>
      </div>
      <div class="p-8 sm:p-10" v-if="step == 'failed'">
        <div class="w-full max-w-md rounded-xl bg-white py-8 dark:bg-slate-900">
          <div
            class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50"
          >
            <span
              class="material-symbols-outlined text-4xl text-red-600 dark:text-red-400"
              >error</span
            >
          </div>
          <div class="text-center">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
              Payment Failed
            </h2>
            <p class="mt-2 text-slate-600 dark:text-slate-300">
              We were unable to process your payment. Please check your payment
              details and try again.
            </p>
          </div>
          <div class="mt-8 space-y-4">
            <button
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2"
            >
              <span class="material-symbols-outlined">refresh</span>
              <span class="truncate">Try Again</span>
            </button>
            <button
              class="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-base font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Check Payment Details</span>
            </button>
            <button
              class="w-full text-center text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const step = ref("pay");
</script>
