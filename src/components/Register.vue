<script setup>
import {ref} from "vue";
import {getAuth, createUserWithEmailAndPassword, sendEmailVerification,} from "firebase/auth";
import {useRouter} from "vue-router";
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';

const email = ref("");
const password = ref("");
const router = useRouter()

const SignOn = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;

        // Send email verification
        sendEmailVerification(user)
            .then(() => {
              toast.success('Email для підтвердження відправлено.');
            })
            .catch((error) => {
              toast.error(error.message);
            });

        setTimeout(() => {
          router.push('/');
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
};


</script>

<template>
  <div class="h-screen flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-purple-500 to-pink-500 animate-fade-down animate-duration-1000">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 font-extrabold text-center text-2xl leading-9 tracking-tight text-indigo-700">Реєстрація</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Вкажіть Ваш Email</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required=""
                   class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Створіть пароль</label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                   required=""
                   class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <button type="button"
                  @click="SignOn"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">
            Створити акаунт
          </button>
        </div>
      </form>
      <router-link to="/">
        <p class="mt-10 text-center text-lg font-bold text-gray-300 hover:text-indigo-700">
          Авторизація
        </p>
      </router-link>
    </div>
  </div>
</template>

<style scoped>

</style>