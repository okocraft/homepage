<template>
  <div id='footer'>
    <div id='footer-nav'>
      <div class='footer-list'>
        <span>
          <NuxtLink to="/rule">
            利用規約・条項
          </NuxtLink>
        </span>

        <ul>
          <li>
            <NuxtLink to="/rule/terms-of-service">利用規約</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rule/penalty-clause">処罰条項</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/rule/building-clause">建築物条項</NuxtLink>
          </li>
        </ul>
      </div>
      <div class='footer-list'>
        <span>その他</span>

        <ul>
          <li>
            <a href="https://twitter.com/okocraft" target="_blank" rel="noopener">
              Twitter
            </a>
          </li>

          <li>
            <NuxtLink to="/discord">
              Discord
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div id="copyright-and-license">
      <small>
        Copyright © 2020-2021 <a href="https://github.com/okocraft">Okocraft</a>
      </small>
      <br />
      <small xmlns:dct="http://purl.org/dc/terms/" xmlns:cc="http://creativecommons.org/ns#">
        <NuxtLink to="/">Okocraft</NuxtLink> is licensed
        under
        <a rel="license" href="https://github.com/okocraft/Okocraft-Web/blob/master/LICENSE">
          CC BY-SA 4.0
          <img alt="cc" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" />
          <img alt="by" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" />
          <img alt="sa" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" />
        </a>
      </small>
    </div>
  </div>
</template>

<style lang="scss">
#footer {
  padding: .3em 1em;
  padding-bottom: 1.5em;
  margin-top: 5rem;
  position: relative;
  font-size: 1.2em;
  flex: 0 0 auto;
  height: auto;
  width: 100%;
  border-top: 0.1em solid gray;
  text-align: center;
  background: $footer-background;

  #footer-nav {
    margin-top: 2.0em;
    margin-bottom: 1.5em;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    width: 90%;

    @include breakpoint($xs) {
      width: 90%;
      display: block;
    }

    .footer-list {
      @extend %normal-text;
      margin-left: auto;
      margin-right: auto;

      >span {
        @extend %link-style;
        border-bottom: $footer-list-title-border solid;
        padding-left: 0.5em;
        padding-right: 0.5em;
        font-size: 1.3rem;
      }

      >ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0.5em;

        >li {
          >a {
            color: $footer-list-item-color;
            transition: all .2s;
            align-items: center;
            text-decoration: none;

            &:hover {
              color: $footer-list-item-hover;
            }
          }
        }
      }
    }
  }

  #copyright-and-license {
    >small {
      @extend %link-style;
      font-size: 0.95rem;
    }
  }
}
</style>