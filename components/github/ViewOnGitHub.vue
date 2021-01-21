<template>
  <div class=view-on-github>
    <span>
      <a :href='"https://github.com/okocraft/homepage/blob/master" + this.path ' target="_blank" rel="noopener">
        <font-awesome :icon="['fab', 'github']" fixed-width />
        GitHub で閲覧する
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.view-on-github {
  font-size: 1.0rem;
  text-align: right;

  >span {
    >a {
      text-decoration: none;
      color: $link-color;
    }
  }
}
</style>
