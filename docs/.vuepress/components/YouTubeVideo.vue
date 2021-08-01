<template>
  <YouTube :src="`https://www.youtube.com/watch?v=${videoId}`" @ready="onReady" ref="youtube" />
</template>

<script lang="ts">
import YouTube from 'vue3-youtube'

export default {
  components: {
    YouTube
  },
  props: {
    videoId: {
      type: String,
      default: ''
    }
  },
  methods: {
    onReady() {
      // this.$refs.youtube.playVideo()
    }
  }
}
</script>
