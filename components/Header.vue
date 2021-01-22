<template>
  <div>
    <nav id="nav">
      <div>
        <NuxtLink to="/" class="logo">
          <img alt="logo" src="@/assets/logo.png">
          <span>Okocraft</span>
        </NuxtLink>
      </div>

      <ul :class="{ active: menu, 'top-level': true }">
        <li>
          <NuxtLink to="/rule">
            <font-awesome icon="book" fixed-width />
            利用規約・条項
          </NuxtLink>
          <ul :class="{ active: open_rule, 'top-level': true}">
            <li>
              <NuxtLink to="/rule/terms-of-service">
                利用規約
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rule/penalty-clause">
                処罰条項
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/rule/building-clause">
                建築物条項
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://twitter.com/okocraft" target="_blank" rel="noopener">
            <font-awesome :icon="['fab', 'twitter']" fixed-width />
            Twitter
          </a>
        </li>

        <li>
          <NuxtLink to="/discord">
            <font-awesome :icon="['fab', 'discord']" fixed-width />
            Discord
          </NuxtLink>
        </li>

      </ul>

      <button aria-label="navigation-menu-toggle" id="nav-menu-toggle" @click="menu = !menu">
        <font-awesome icon="bars" />
      </button>

      <transition name="fade">
        <div id="nav-focus" class="overlay-focus" v-if="menu" @click="menu = !menu" />
      </transition>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: false,
        open_rule: false,
      };
    },
    watch: {
      $route() {
        this.menu = false;
        this.open_rule = false;
      },
    },
  } 
</script>

<style scoped lang="scss">
#nav-menu-toggle {
  @include breakpoint($sm) {
    display: none;
  }

  @include breakpoint($xs) {
    position: absolute;
    background: transparent;
    color: $brand-color;
    height: 3rem;
    width: 3rem;
    font-size: 2.5rem;
    border: 0;
    right: 0em;
    margin-right: 0.5em;
    margin-top: auto;
    margin-bottom: auto;
  }
}

#nav {
  padding: 0.25em;
  z-index: 100;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, .25);
  display: flex;
  background-color: $header-background;
  justify-content: space-between;
  font-family: 'Ubuntu', sans-serif;

  @include breakpoint($xs) {
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 2.0em;
    padding: 0.1em;
    padding-right: 0.25em;

    color: $header-title;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;

    &:hover {
      color: $header-title-hover;
      background-color: $header-background-hover;
    }

    img {
      height: 100%;
      width: auto;
      margin: 0.25em;
    }

    span {
      letter-spacing: 0.05em;
    }
  }

  ul {
    background: $header-background;
    display: flex;
    position: absolute;
    flex-direction: column;

    margin: 0;
    padding: 0;
    top: 4rem;
    bottom: 0;
    right: -100%;
    width: 100%;
    max-width: 20rem;
    z-index: 100;
    list-style: none;
    transition: right .2s;

    @include breakpoint($sm) {
      flex-direction: row;
      position: relative;
      max-width: unset;
      width: auto;
      top: unset;
      right: unset;
      background: transparent;
      padding-left: 0.5em;
    }

    &.active {
      @include breakpoint($xs) {
        transition: all .2s;
        right: 0;
        display: initial;
        border-left: thin solid rgba(0, 0, 0, .25);
      }
    }

    &.top-level:not(.active) {
      @include breakpoint($xs) {
        transition: all .2s;
        display: none;
      }
    }

    li {
      display: flex;
      position: relative;
      flex-direction: column;

      @include breakpoint($sm) {
        flex-direction: row;
      }

      a,
      span {
        color: $brand-color;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        text-decoration: none;
        letter-spacing: 0.075rem;
        transition: all .2s;
        width: 100%;
        padding: .5em 1em;

        @include breakpoint($sm) {
          font-size: 1.25rem;
        }

        svg {
          margin-right: 0.25em;
          opacity: .5;
        }

        &:hover {
          background-color: $header-background-hover;
        }
      }

      >ul {
        position: relative;
        top: 0em;
        bottom: auto;
        left: 0em;
        right: auto;
        padding-left: 0em;

        &.active {
          @include breakpoint($xs) {
            right: 0;
            display: initial;
            border-left: thin solid rgba(0, 0, 0, .25);
          }
        }

        &.top-level:not(.active) {
          @include breakpoint($xs) {
            display: none;
          }
        }

        >li {
          @include breakpoint($xs) {
            border-left: 1ex solid $brand-color;
          }
        }

        @include breakpoint($sm) {
          display: none;
          position: absolute;
          flex-direction: column;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          min-width: 100%;
          z-index: 100;
          box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
          background: $header-background;

          li {
            &:hover {
              background-color: $header-background-hover;
            }
          }

          a {
            width: 100%;
          }
        }
      }

      @include breakpoint($sm) {
        &:hover {
          ul {
            display: flex;
          }
        }
      }
    }
  }
}
</style>