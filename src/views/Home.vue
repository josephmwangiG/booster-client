<template>
  <main class="flex-grow">
    <!-- Hero and Order Form Section -->
    <section class="relative py-20 sm:py-28">
      <div class="absolute inset-0 opacity-10 dark:opacity-20">
        <img
          class="w-full h-full object-cover"
          data-alt="Abstract water splash background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGp3CM90TL7z-aX4d_jA-dTS-cjPzT0T3NS4T6hxxZDS-kjG4I-ibSo31C9QblzxkG51SRnjH52OBcycl5zu0SOkZd_hqlbVEXXFuSQjYuuBtxIvn659zgXCwyv8d_kA8JaUpR-5fXPoEVLw7eAdD2kaSTJp20-a9ADgAv7MBQewQTfdnzUuYFHMdUlx3qEA_xU4kquLkoN4_26o8EbYKSj4eSEIHB-GAO1DPzUysRUIihtX-NcJIp0eVgGnKo6lQMVD-ginxbcU8e"
        />
      </div>
      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center"
      >
        <div class="flex flex-col gap-6 text-center md:text-left">
          <h1
            class="text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]"
          >
            Pure Water, Delivered to Your Doorstep.
          </h1>
          <h2
            class="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-normal leading-normal"
          >
            Effortless ordering for your home or office. Fresh, clean, and
            convenient.
          </h2>
        </div>
        <!-- Order Form Card -->
        <Login v-if="action == 'login'" />
        <Register v-else-if="action == 'signup'" />
        <ForgotPassword v-else-if="action == 'forgot-password'" />
        <Reset v-else-if="action == 'reset-password'" />
        <Order v-else />
      </div>
    </section>
    <!-- "How It Works" Section -->
    <section class="py-20 sm:py-28 bg-white dark:bg-slate-900" id="how-it-works">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
          >
            How It Works
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A simple 3-step process to get fresh water delivered.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <!-- Step 1 -->
          <div class="flex flex-col items-center">
            <div
              class="flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary mb-4"
            >
              <span class="material-symbols-outlined text-3xl"
                >edit_document</span
              >
            </div>
            <h3
              class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2"
            >
              1. Place Your Order
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Select your quantity and tell us where and when to deliver.
            </p>
          </div>
          <!-- Step 2 -->
          <div class="flex flex-col items-center">
            <div
              class="flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary mb-4"
            >
              <span class="material-symbols-outlined text-3xl"
                >local_shipping</span
              >
            </div>
            <h3
              class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2"
            >
              2. We Deliver
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Our team brings your order right to your doorstep, on time.
            </p>
          </div>
          <!-- Step 3 -->
          <div class="flex flex-col items-center">
            <div
              class="flex items-center justify-center size-16 rounded-full bg-primary/20 text-primary mb-4"
            >
              <span class="material-symbols-outlined text-3xl"
                >local_drink</span
              >
            </div>
            <h3
              class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2"
            >
              3. Enjoy Pure Water
            </h3>
            <p class="text-slate-500 dark:text-slate-400">
              Stay hydrated with fresh, clean water without the hassle.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Social Proof Section -->
    <section class="py-20 sm:py-28" id="faq">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2
            class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Trusted by Our Customers
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
            See what our happy clients have to say about our service.
          </p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div
            class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
          >
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              "Booster Water has been a game-changer for our office. The
              ordering is seamless, and the delivery is always on time. Highly
              recommended!"
            </p>
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary"
              >
                <span class="material-symbols-outlined text-3xl">
                  contacts_product
                </span>
              </div>

              <div class="flex flex-col justify-center">
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  Sarah K.
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Office Manager
                </p>
              </div>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div
            class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
          >
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              "Finally, a water delivery service that's actually reliable. The
              water quality is excellent and their customer service is
              top-notch."
            </p>
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary"
              >
                <span class="material-symbols-outlined text-3xl">
                  contacts_product
                </span>
              </div>

              <div class="flex flex-col justify-center">
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  Joseph Wainana
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Home Owner
                </p>
              </div>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div
            class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
          >
            <p class="text-slate-600 dark:text-slate-300 mb-4">
              "I love how easy it is to schedule and modify my deliveries
              through their website. It's so convenient for our busy school."
            </p>
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary"
              >
                <span class="material-symbols-outlined text-3xl">
                  contacts_product
                </span>
              </div>

              <div class="flex flex-col justify-center">
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  Daniel Sang
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Students Dean
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import Order from "@/components/Order.vue";
import Login from "@/components/Login.vue";
import { computed } from "vue";
import Register from "@/components/Register.vue";
import ForgotPassword from "@/components/ForgotPassword.vue";
import Reset from "@/components/Reset.vue";

const route = useRoute();
const action = computed(() => route.query.action);
console.log(action);
</script>
