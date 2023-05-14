<script setup>
import { onMounted, ref } from 'vue'

import { useStore } from '@/store'
import useMouseClick from '@/composables/useMouse'
import api from '@/api'

const store = useStore()
const mouse = useMouseClick()

const sentence = ref('君子不器。')

onMounted(() => {
  fetchSentence()
})

async function fetchSentence() {
  const resp = await api.oneSentence()
  sentence.value = resp.hitokoto
}
</script>

<template>
  <div class="mx-5">
    <div class="my-5 space-y-5">
      <img src="@/assets/vue.svg" alt="vue">
      <div class="flex items-center gap-4">
        iconify
        <div class="i-mdi:emoticon-happy-outline hover:i-mdi:emoticon-happy-outline text-3xl text-yellow-500 hover:text-red-500" />
      </div>
      <div>
        <button class="mr-5 bg-amber-500 btn hover:bg-amber-600" @click="fetchSentence">
          Fetch API
        </button>
        {{ sentence }}
      </div>

      <div>
        <div class="mr-5 bg-blue-500 btn hover:bg-blue-600" @click="store.increment">
          Increase Store Count
        </div>
        <span class="text-xl font-bold text-green-400">
          {{ store.count }}
        </span>
      </div>

      <div>
        <RouterLink to="/hello">
          <div class="bg-red-500 btn hover:bg-red-600">
            To Hello Page
          </div>
        </RouterLink>
      </div>

      <div>
        <div class="inline-block border p-4">
          useMouseClick hook
          <p>
            Mouse click x:
            <span class="text-lg font-bold text-red-500">
              {{ mouse.x }}
            </span>
          </p>
          <p>
            Mouse click y:
            <span class="text-lg font-bold text-blue-500">
              {{ mouse.y }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
