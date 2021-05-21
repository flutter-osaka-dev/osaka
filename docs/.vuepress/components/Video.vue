<template>
  <youtube :video-id="videoId" :player-vars="playerVars" />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      playerVars: {
        origin: `${location.protocol}//${location.hostname}/`
      }
    }
  }
}
</script>
