<template>
  <section class="not-found-section">
    <h1>
      <font-awesome icon="exclamation-circle" />
      {{ this.title }}!
    </h1>

    <div v-if="code === 404" class="error">
      <p>指定されたリンクのページ "<code>{{ this.$route.path }}</code>" は見つかりませんでした。</p>
      <p>The page "<code>{{ this.$route.path }}</code>" couldn't be found.</p>
    </div>
    <div v-else class="error">
      <p>エラーが発生しました。</p>
      <p>An error has been occurred.</p>
      <br />
      <p>Message: {{ this.message }}</p>
    </div>

     <p><NuxtLink to="/">トップページに戻る</NuxtLink> | <NuxtLink to="/">Return to top</NuxtLink></p>

  </section>
</template>

<script>
export default {
  name: 'error component',
  data() {
    return {
      title: ""
    }
  },
  head(){
    return {title: this.title}
  },
  props: ['code', 'message'],
  created() {
    this.title = this.code === 404 ? "Not Found" : "Error Occurred"
  }
};
</script>

<style lang="scss" scoped>
.not-found-section {
  @extend %normal-text-link;

  flex-direction: column;
  align-items: center;
  padding: 4rem;

  h1 {
    position: relative;
    font-size: 3.0em;

    >svg {
      color: $error-color;
      z-index: 1;
      opacity: .5;
      margin-right: 0.5em;
    }

    >span {
      z-index: 2;
    }
  }

  .error {
    @extend %normal-text;
    >p {
      color: $error-color;
    }
  }
}
</style>