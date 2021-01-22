<template>
  <div class=view-on-github>
    <small>
      <a :href='"https://github.com/okocraft/homepage/blob/master" + this.path ' target="_blank" rel="noopener">
        <font-awesome :icon="['fab', 'github']" fixed-width />
        GitHub で閲覧する
      </a>
    </small>
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
  @extend %normal-text-link;
  text-align: right;
}
</style>
