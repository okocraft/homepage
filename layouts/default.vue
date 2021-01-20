<template>
  <div>
    <header>
      <Header />
    </header>

    <main id=main-contents>
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Ubuntu:wght@500&display=swap');

* {
  box-sizing: border-box;
}

:focus {
  outline: #448aca 1px solid;
}

input:focus {
  outline-offset: unset;
}

html {
  height: 100%;
  font-size: 14px;
}

body {
  margin: 0;
  height: 100%;
  display: flex;
  overflow-x: hidden;
}

code, pre {
  font-family: Consolas;
}

#__nuxt {
  height: 100%;
  width: 100%;
}

#app {
  color: $app-color;
  background-color: $app-background;
  line-height: 1.5;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-contents {
  margin-bottom: 3em;
  width: 100%;
}
</style>
