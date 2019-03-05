<template>
  <section class="user">
    <h2>Name: {{ user.name }}</h2>
    <h3>Email: <em> {{ user.email }} </em></h3>
  </section>
</template>

<script>
export default {
  name: 'user',
  computed: {
    user(){
      return this.$store.getters.users.filter(user => user.id == this.$route.params.id)[0];
    }
  }
 
}
</script>
<style scoped lang="scss">
.user {
  background: rgba(132, 94, 163, 0.26);
  padding: 1rem;
}
</style>
