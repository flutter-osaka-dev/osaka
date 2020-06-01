<template>
  <youtube :video-id="videoId" />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: ''
    }
  }
}
</script>
