<template>
  <div>
    <div class="guide">
      <p>
        <a :href="`https://storage.googleapis.com/flutter_infra/releases/stable/${os}/flutter_windows_${version}.zip`" target="__blank" rel="noopener noreferrer">
          {{ `${version} のダウンロード` }}
        </a>
      </p>
      <p>
        ※ リンク切れなら
        <a :href="`https://flutter.dev/docs/get-started/install/${os}`" target="__blank" rel="noopener noreferrer">こちら</a>
        の指示に従ってSDKをダウンロードしてください
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    os: {
      type: String,
      default: ''
    },
    version: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.guide {
  text-align: left;
}
</style>