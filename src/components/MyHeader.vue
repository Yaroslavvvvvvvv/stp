<template>
  <header class="bg-gray-950 sticky top-0 z-10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 animate-fade-down animate-duration-1000" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="/vite.svg" alt="" />
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/levels" class="text-lg font-extrabold leading-6 text-gray-300 hover:text-white">Тренування</router-link>
        <a href="#" class="text-lg font-extrabold leading-6 text-gray-300 hover:text-white">Marketplace</a>
        <a href="#" class="text-lg font-extrabold leading-6 text-gray-300 hover:text-white">Company</a>
      </PopoverGroup>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
          @click="mobileMenuOpen = false"
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/vite.svg" alt="" />
          </router-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-white" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/levels" class="-mx-3 block rounded-lg px-3 py-2 text-lg font-extrabold leading-7 text-gray-300 hover:text-white">Тренування</router-link>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-lg font-extrabold leading-7 text-gray-300 hover:text-white">Marketplace</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-lg font-extrabold leading-7 text-gray-300 hover:text-white">Company</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>