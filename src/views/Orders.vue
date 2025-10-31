<template>
  <main class="flex-grow">
    <section class="py-12 sm:py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h1
            class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Order History
          </h1>
          <p class="mt-2 text-lg text-slate-600 dark:text-slate-300">
            View and manage your past deliveries.
          </p>
        </div>
        <div class="space-y-6">
          <div
            class="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-6"
          >
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
            >
              <div>
                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  Order #AD-120523-01
                </p>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Order Placed: May 12, 2023
                </h3>
              </div>
              <div
                class="flex items-center gap-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span class="material-symbols-outlined text-base"
                  >check_circle</span
                >
                <span>Delivered</span>
              </div>
            </div>
            <div
              class="border-t border-slate-200 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-4"
            >
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >shopping_cart</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Quantity
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    5 x 18L Bottles
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >location_on</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Delivery Address
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    123 Aqua Lane, Watertown, 12345
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 flex justify-end gap-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">View Details</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2"
              >
                <span class="material-symbols-outlined text-base">replay</span>
                <span class="truncate">Re-order</span>
              </button>
            </div>
          </div>
          <div
            class="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-6"
          >
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
            >
              <div>
                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  Order #AD-042823-03
                </p>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Order Placed: April 28, 2023
                </h3>
              </div>
              <div
                class="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span class="material-symbols-outlined text-base"
                  >local_shipping</span
                >
                <span>In Transit</span>
              </div>
            </div>
            <div
              class="border-t border-slate-200 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-4"
            >
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >shopping_cart</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Quantity
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    3 x 18L Bottles
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >location_on</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Delivery Address
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    456 Spring St, Hydro City, 67890
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 flex justify-end gap-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Track Order</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2"
              >
                <span class="material-symbols-outlined text-base">replay</span>
                <span class="truncate">Re-order</span>
              </button>
            </div>
          </div>
          <div
            class="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 p-6"
          >
            <div
              class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4"
            >
              <div>
                <p class="text-slate-500 dark:text-slate-400 text-sm">
                  Order #AD-031523-02
                </p>
                <h3
                  class="text-xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Order Placed: March 15, 2023
                </h3>
              </div>
              <div
                class="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm font-medium"
              >
                <span class="material-symbols-outlined text-base">pending</span>
                <span>Processing</span>
              </div>
            </div>
            <div
              class="border-t border-slate-200 dark:border-slate-800 pt-4 grid sm:grid-cols-2 gap-4"
            >
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >shopping_cart</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Quantity
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    10 x 18L Bottles
                  </p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary mt-1"
                  >location_on</span
                >
                <div>
                  <p
                    class="text-sm font-medium text-slate-500 dark:text-slate-400"
                  >
                    Delivery Address
                  </p>
                  <p
                    class="text-base font-semibold text-slate-800 dark:text-slate-200"
                  >
                    789 Ocean Ave, Bayview, 54321
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-6 flex justify-end gap-3">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">View Details</span>
              </button>
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2"
              >
                <span class="material-symbols-outlined text-base">replay</span>
                <span class="truncate">Re-order</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {};
</script>
<style lang=""></style>
