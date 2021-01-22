<template>
  <div>
    <template v-if="content">
      <transition name="fade" mode="out-in">
        <article>
           <nuxt-content :document='content' />
        </article>
      </transition>
    </template>
    <template v-else-if="failure">
      <Error code=404 message="Not Found" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      pageTitle: null,
      content: null,
      failure: false
    }
  },
  head() {
    return {
      title: this.pageTitle
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    async getContent() {
      this.content = await this.$content(this.path).fetch()

      if (this.title != null) {
        this.pageTitle = this.title
      } else {
        this.pageTitle = this.content.title != null ? this.content.title : this.$route.params.page.replace('-', ' ')
      }
    }
  },
  watch: {
    $route(to) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      this.getContent();
    },
    content() {
      this.failure = this.content == null;
    }
  }
}
</script>

<style lang="scss">
.nuxt-content {
  @extend %title-text;
  @extend %normal-text-link;

  li>ol,
  li>ul {
    margin: 0 0;
  }

  hr {
    height: 2px;
    padding: 0;
    margin: 16px 0;
    background-color: #e7e7e7;
    border: 0 none;
    overflow: hidden;
    box-sizing: content-box;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul:first-child,
  ol:first-child {
    margin-top: 0;
  }

  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #dfe2e5;
    padding: 0 15px;
    color: #777777;
  }

  blockquote blockquote {
    padding-right: 0;
  }

  table {
    padding: 0;
    word-break: initial;
  }

  table tr {
    border-top: 1px solid #dfe2e5;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n),
  thead {
    background-color: #f8f8f8;
  }

  table th {
    font-weight: bold;
    border: 1px solid #dfe2e5;
    border-bottom: 0;
    margin: 0;
    padding: 6px 13px;
  }

  table td {
    border: 1px solid #dfe2e5;
    margin: 0;
    padding: 6px 13px;
  }

  table th:first-child,
  table td:first-child {
    margin-top: 0;
  }

  table th:last-child,
  table td:last-child {
    margin-bottom: 0;
  }

  .CodeMirror-lines {
    padding-left: 4px;
  }

  .code-tooltip {
    box-shadow: 0 1px 1px 0 rgba(0, 28, 36, .3);
    border-top: 1px solid #eef2f2;
  }

  .md-fences,
  code,
  tt {
    border: 1px solid #e7eaed;
    background-color: #f8f8f8;
    border-radius: 3px;
    padding: 0;
    padding: 2px 4px 0px 4px;
    font-size: 0.9em;
  }

  code {
    background-color: #f3f4f4;
    padding: 0 2px 0 2px;
  }
}
</style>