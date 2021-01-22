<template>
  <div class="container">
    <div id="home">
      <div class=head>
        <img alt="Okocraft image" src='@/assets/home_image.jpg'>
      </div>

      <div class=content>
        <h1>Okocraft</h1>

        <p>A Minecraft Server.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class extends Vue {
  private head() {
    return { title: "Okocraft - A Minecraft Server", titleTemplate: null };
  }
}
</script>

<style scoped lang='scss'>
#home {
  .head {
    position: relative;
    display: flex;
    z-index: 1;

    >img {
      height: 100%;
      width: 100%;
    }
  }

  .content {
    @extend %normal-text-link;
    text-align: center;

    >h1 {
      font-size: 3.0rem;
      letter-spacing: 0.05rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    >h2 {
      font-size: 2.2rem;
      letter-spacing: 0.05rem;
      margin: 1rem;
    }

    >p {
      font-size: 1.2rem;
    }
  }
}
</style>
