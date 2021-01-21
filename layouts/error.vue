<template>
  <div>
    <Error :code='this.error.statusCode' :message='this.error.message' />
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
};
</script>