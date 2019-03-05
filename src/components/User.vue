<template>
  <section class="user">
    <h2>Name: {{ user.name }}</h2>
    <h3>Email: <em> {{ user.email }} </em></h3>
    <h3>My Posts</h3>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="$router.push(`/user/${user.id}/post/${post.id}`)">{{ post.title}}</li>
    </ul>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'user',
  computed: {
    user(){
      return this.$store.getters.getUserById(this.$route.params.id)[0];
    }, 
    posts(){
      return this.$store.getters.getPostsByUserId(this.$route.params.id)
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
