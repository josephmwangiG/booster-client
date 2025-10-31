import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => ({
    name: "Daniel Sang",
    role: "Students Dean",
    isLoggedIn: false,
  }),

  getters: {
    displayName: (state) => `${state.name} (${state.role})`,
  },

  actions: {
    login(name: string, role: string) {
      this.name = name;
      this.role = role;
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
});
    