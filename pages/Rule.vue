<template>
  <div id='rule'>
    <div v-if='this.$route.params.page != null' class='rule'>
      <LastUpdatedDate :path='this.githubPath' />
      <ViewOnGitHub :path='this.githubPath' />
      <Markdown :path='"rule/" + this.$route.params.page' />
    </div>
    <div v-else class='rule-list'>
      <h1>利用規約・条項</h1>

      <p>おこ鯖。を利用する前に必ず一読ください。</p>
      <p>Minecraft サーバーや Discord に参加した時点で同意したものとみなします。</p>

      <h2>
        <NuxtLink to='/rule/terms-of-service'>利用規約</NuxtLink>
      </h2>

      <p>おこ鯖。が提供するものを利用する上で同意する必要のある規約です。</p>

      <h2>
        <NuxtLink to='/rule/penalty-clause'>処罰条項</NuxtLink>
      </h2>
      <p>Minecraft サーバーや Discord でのルールです。</p>

      <h2>
        <NuxtLink to='/rule/building-clause'>建築物条項</NuxtLink>
      </h2>
      <p>Minecraft サーバー内での建築に関する規定です。</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {
  githubPath: string = ""

  private head() {
    return { title: "利用規約・条項"};
  }

  created() {
    this.getGitHubPath()
  }

  updated() {
    this.getGitHubPath()
  }

  getGitHubPath() {
    this.githubPath = "/content/rule/" + this.$route.params.page + ".md"
  }
}
</script>

<style scoped lang="scss">
#rule {
  @extend %title-text;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;

  @include breakpoint($xs) {
    width: 90%;
  }

  .rule-list {
    @extend %title-text-link;
    @extend %normal-text;
  }
}
</style>