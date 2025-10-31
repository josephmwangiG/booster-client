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
        <div
          class="bg-background-light dark:bg-background-dark/70 rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800"
        >
          <h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Place Your Order
          </h3>
          <div class="space-y-4">
            <!-- ListItem for Quantity -->
            <div
              class="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 px-4 min-h-14 justify-between rounded-lg"
            >
              <div class="flex items-center gap-4">
                <div
                  class="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-10"
                >
                  <span class="material-symbols-outlined">shopping_cart</span>
                </div>
                <p
                  class="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal flex-1 truncate"
                >
                  Quantity
                </p>
              </div>
              <div class="shrink-0">
                <div
                  class="flex items-center gap-2 text-slate-800 dark:text-slate-200"
                >
                  <button
                    class="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 cursor-pointer"
                  >
                    -
                  </button>
                  <input
                    class="text-base font-medium leading-normal w-6 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&amp;::-webkit-inner-spin-button]:appearance-none [&amp;::-webkit-outer-spin-button]:appearance-none"
                    type="number"
                    value="1"
                  />
                  <button
                    class="text-base font-medium leading-normal flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <!-- TextField for Delivery Address -->
            <label class="flex flex-col w-full">
              <div class="flex w-full flex-1 items-stretch rounded-lg">
                <div
                  class="text-primary flex border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0"
                >
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 rounded-l-none border-l-0 text-base font-normal leading-normal"
                  placeholder="Enter your full address"
                />
              </div>
            </label>
            <!-- TextField for Delivery Time -->
            <label class="flex flex-col w-full">
              <div class="flex w-full flex-1 items-stretch rounded-lg">
                <div
                  class="text-primary flex border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0"
                >
                  <span class="material-symbols-outlined">calendar_today</span>
                </div>
                <input
                  class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-800 dark:text-slate-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 rounded-l-none border-l-0 text-base font-normal leading-normal"
                  placeholder="Select delivery date &amp; time"
                />
              </div>
            </label>
          </div>
          <button
            class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]"
          >
            <span class="truncate">Schedule Delivery</span>
          </button>
        </div>
      </div>
    </section>
    <!-- "How It Works" Section -->
    <section class="py-20 sm:py-28 bg-white dark:bg-slate-900">
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
    <section class="py-20 sm:py-28">
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
              "Booster Water has been a game-changer for our office. The ordering is
              seamless, and the delivery is always on time. Highly recommended!"
            </p>
            <div class="flex items-center">
              <img
                class="size-10 rounded-full mr-4"
                data-alt="Photo of a smiling woman"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwTClbn5wwhW74_CX91r3e6nWtBY-dslM6VuSOMl1t075--0W8dLSltdeT3BlIPoi763r_Z6S4L7VNe-PDRLuvsiy33wDv2iRXSzZL7IWxTZ4pM5ZlujONvM6nskQLR1bHKjPGN01WocoIvtFzUpfUkRA4M0jktG4PSOXxQvh0j3Cn-6-iV-Asl5POn1TKdKeDQw2cb9BGYQrgwWAaBH0BE6x3JbZltXjffBdixV5_WsJ-A4LF2n1_0528AUYLNV-qHFoXm-ygPT-B"
              />
              <div>
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
            <div class="flex items-center">
              <img
                class="size-10 rounded-full mr-4"
                data-alt="Photo of a man with glasses"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc7Y3IjUo9n8RsUBOoF_ZW6L49chLAh_zS1IqViaN9tJRlbTe7y-Cl2KBveqg7ek5bLRHw8u9p6iYNwYp7QydnZwmnuDDUxpfUU70GeVc7uIBFl2xCPk7DL9HAvgfqVoMbncufA0lzUwUXqNDEX_CYG2rTfSATKksOSCRYgtxQyzDcLhVk_JNySjBGi9MOeoG6n8SqGo_aILcS08-FDVbPxgFvP_2d3xjqnE2aNAcTL5zLu7DpmZYhzyZ3cEzOYU93nQQIsRj2cNOd"
              />
              <div>
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  Mike R.
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
              through their website. It's so convenient for our busy family."
            </p>
            <div class="flex items-center">
              <img
                class="size-10 rounded-full mr-4"
                data-alt="Photo of a woman with curly hair"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8UoWRpciwZDR1ZXq4ClXGWlF2rAy3BO73OUQeIXg1fldpYYvhWN1IJ1TxKWtQYrbUANSNKzVvjocnomlotjk7oo5yNjFmsqZaq1bb-FX42BPa1imx3LNDj1gUCcY_lUolIFHctCeAAkH0nHN8w-0fhBpArbuFSMamDjNPkggDP1FPTy1yzQe9fxzQdkyQbxqqykdZAa2uUsNa8HvYVJvojNagGaOqRWRSPioNNclJzbrT-gADENuuarxAaeqeMr6xXUBPRROCVTTI"
              />
              <div>
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  Jessica L.
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Fitness Coach
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
