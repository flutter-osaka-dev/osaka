<template>
  <div>
    <div class="env-list">
      <div class="env-list__item">
        <h3>
          <a href="https://developer.android.com/studio/install?hl=ja" target="__blank" rel="noopener noreferrer">
            Android Studio
          </a>
        </h3>
        <p>プログラムを書くために必要</p>
      </div>
      <div class="env-list__item">
        <h3>
          <a href="https://flutter.dev/docs/get-started/install" target="__blank" rel="noopener noreferrer">
            Flutter
          </a>
        </h3>
        <p>モバイルアプリを作成するために必要</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  //
}
</script>

<style scoped>
.env-list {
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 4px 0;
  border: 1px solid #ddd;
}

.env-list__item:first-child {
  border-right: 1px solid #ddd;
}

.env-list__item {
  padding-bottom: 12px;
  width: 50%;
  text-align: center;
}
</style>
