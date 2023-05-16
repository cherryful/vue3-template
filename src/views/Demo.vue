<script setup>
import { onMounted, ref } from 'vue'
import Button from '@/components/Button.vue'

import { useStore } from '@/store'
import useMouseClick from '@/composables/useMouse'
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
    <img src="@/assets/vue.svg" alt="vue">

    <div class="flex items-center gap-4">
      <span> iconify </span>
      <div class="i-mdi:emoticon-happy-outline text-3xl text-yellow-500 hover:i-mdi:emoticon-happy-outline hover:text-red-500" />
    </div>

    <div class="flex items-center gap-4">
      <Button type="primary" @click="fetchSentence">
        Fetch API
      </Button>
      {{ sentence }}
    </div>

    <div class="flex items-center gap-4">
      <Button type="secondary" @click="store.increment">
        Increase Store Count
      </Button>
      <span class="text-xl font-bold text-green-400">
        {{ store.count }}
      </span>
    </div>

    <div>
      <RouterLink to="/hello">
        <Button type="accent">
          To Hello Page
        </Button>
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
</template>
