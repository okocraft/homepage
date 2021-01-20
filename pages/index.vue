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
import Vue from 'vue'

export default Vue.extend({})
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
    text-align: center;

    >h1 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 3.2rem;
      letter-spacing: 0.05rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    >h2 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 2.2rem;
      letter-spacing: 0.05rem;
      margin: 1rem;
    }

    >p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      >a {
        color: $link-color;
        text-decoration: none;
      }
    }
  }
}
</style>
