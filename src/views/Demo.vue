<script setup>
import { onMounted, ref } from 'vue'
import Button from '@/components/Button.vue'
import { useStore } from '@/store'
import useMouseClick from '@/composables/useMouseClick'
import api from '@/api'

const store = useStore()
const mouse = useMouseClick()

const sentence = ref('君子不器。')

async function fetchSentence() {
  const resp = await api.oneSentence()
  sentence.value = resp.hitokoto
}

onMounted(() => {
  fetchSentence()
})
</script>

<template>
  <div class="m-5 space-y-5">
    <div class="flex items-center gap-4">
      <span class="w-24"> assets </span>
      <img src="@/assets/vue.svg" alt="vue">
    </div>

    <div class="flex items-center gap-4">
      <span class="w-24"> iconify </span>
      <div class="i-mdi:emoticon-happy-outline hover:i-mdi:emoticon-happy-outline text-3xl text-yellow-500 hover:text-red-500" />
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <span class="w-24"> Fetch </span>
      <Button @click="fetchSentence">
        GET https://v1.hitokoto.cn?c=i
      </Button>
      <span>
        {{ sentence }}
      </span>
    </div>

    <div class="flex items-center gap-4">
      <span class="w-24"> Pinia </span>
      <Button type="secondary" @click="store.increment">
        Increase Store Count
      </Button>
      <span class="text-xl font-bold text-green-400">
        {{ store.count }}
      </span>
    </div>

    <div class="flex items-center gap-4">
      <span class="w-24"> Vue Router </span>
      <RouterLink class="inline-block" to="/hello">
        <Button type="accent">
          To Hello Page
        </Button>
      </RouterLink>
      <RouterLink class="inline-block" to="/404">
        <Button type="error">
          To 404 Page
        </Button>
      </RouterLink>
    </div>

    <div class="inline-block border p-4">
      useMouseClick hook
      <p>
        Mouse click x:
        <span class="ml-2 text-lg font-bold text-red-500">
          {{ mouse.x }}
        </span>
      </p>
      <p>
        Mouse click y:
        <span class="ml-2 text-lg font-bold text-blue-500">
          {{ mouse.y }}
        </span>
      </p>
    </div>
  </div>
</template>
