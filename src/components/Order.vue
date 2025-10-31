<template lang="">
  <div
    class="bg-background-light dark:bg-background-dark/70 rounded-xl shadow-2xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800"
  >
    <div class="relative flex w-full flex-col">
      <!-- Main Content -->
      <!-- Page Heading -->
      <div class="mb-8">
        <h1
          class="text-4xl lg:text-5xl font-black leading-tight tracking-tighter"
        >
          Order for Delivery
        </h1>
        <p class="mt-2 text-text-muted-light dark:text-text-muted-dark">
          Quick, easy, and reliable. Fresh water right to your doorstep.
        </p>
      </div>
      <!-- Form -->
      <div class="space-y-6">
        <!-- Your Details Section -->
        <div>
          <h3
            class="text-lg font-bold mb-4 border-b border-subtle-light dark:border-subtle-dark pb-2"
          >
            Your Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Full Name -->
            <div class="flex flex-col">
              <label
                class="text-base font-medium leading-normal pb-2"
                for="fullName"
                >Full Name</label
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-subtle-light dark:border-subtle-dark h-12 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 text-base font-normal"
                id="fullName"
                placeholder="Enter your full name"
                type="text"
              />
            </div>
            <!-- Phone Number -->
            <div class="flex flex-col">
              <label
                class="text-base font-medium leading-normal pb-2"
                for="phoneNumber"
                >Phone Number</label
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-subtle-light dark:border-subtle-dark h-12 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 text-base font-normal"
                id="phoneNumber"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
            <!-- Delivery Address -->
            <div class="md:col-span-2 flex flex-col">
              <label
                class="text-base font-medium leading-normal pb-2"
                for="deliveryAddress"
                >Delivery Address</label
              >
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-subtle-light dark:border-subtle-dark h-12 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 text-base font-normal"
                id="deliveryAddress"
                placeholder="Enter your delivery address"
                type="text"
              />
            </div>
          </div>
        </div>
        <!-- Order Details Section -->
        <div>
          <h3
            class="text-lg font-bold mb-4 border-b border-subtle-light dark:border-subtle-dark pb-2"
          >
            Order Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Quantity Selector -->
            <div class="flex flex-col">
              <label
                class="text-base font-medium leading-normal pb-2"
                for="quantity"
                >Number of 5-Gallon Bottles</label
              >
              <div class="flex items-center">
                <button
                  class="flex h-12 w-12 items-center justify-center rounded-l-lg border border-r-0 border-subtle-light dark:border-subtle-dark bg-content-light dark:bg-content-dark hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors"
                  type="button"
                >
                  <span class="material-symbols-outlined text-xl">remove</span>
                </button>
                <input
                  class="form-input h-12 w-16 min-w-0 flex-1 resize-none overflow-hidden border-y border-subtle-light dark:border-subtle-dark bg-background-light dark:bg-background-dark text-center text-base font-medium text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50"
                  id="quantity"
                  type="text"
                  value="1"
                />
                <button
                  class="flex h-12 w-12 items-center justify-center rounded-r-lg border border-l-0 border-subtle-light dark:border-subtle-dark bg-content-light dark:bg-content-dark hover:bg-subtle-light dark:hover:bg-subtle-dark transition-colors"
                  type="button"
                >
                  <span class="material-symbols-outlined text-xl">add</span>
                </button>
              </div>
            </div>
            <!-- Date Picker -->
            <div class="flex flex-col">
              <label
                class="text-base font-medium leading-normal pb-2"
                for="deliveryDate"
                >Delivery Date</label
              >
              <div class="relative">
                <input
                  class="form-input w-full resize-none rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-subtle-light dark:border-subtle-dark h-12 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 text-base font-normal"
                  id="deliveryDate"
                  placeholder="Select a date"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- Optional Account Creation -->
        <div class="space-y-4 pt-4 hidden">
          <div
            class="bg-primary/10 dark:bg-primary/20 p-6 rounded-lg border border-primary/20 dark:border-primary/30"
          >
            <h4 class="font-bold text-lg text-primary">
              Want faster orders next time?
            </h4>
            <p
              class="text-sm mt-1 text-text-muted-light dark:text-text-muted-dark"
            >
              Create an account to save your details and track your deliveries.
            </p>
            <div class="mt-4">
              <label
                class="flex items-center gap-3 cursor-pointer"
                for="createAccount"
              >
                <input
                  class="form-checkbox h-5 w-5 rounded border-subtle-light dark:border-subtle-dark bg-content-light dark:bg-content-dark text-primary focus:ring-primary/50"
                  id="createAccount"
                  name="createAccount"
                  type="checkbox"
                />
                <span class="font-medium">Yes, create an account for me</span>
              </label>
            </div>
          </div>
          <div class="">
            <label
              class="text-base font-medium leading-normal pb-2"
              for="password"
              >Create a Password</label
            >
            <input
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-subtle-light dark:border-subtle-dark h-12 placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 text-base font-normal"
              id="password"
              placeholder="Enter a secure password"
              type="password"
            />
          </div>
        </div>
        <!-- CTA Button -->
        <div class="pt-4">
          <button
            class="w-full h-14 rounded-lg bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark flex items-center justify-center gap-2"
          >
            <span>Place Order</span>
            <span class="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
