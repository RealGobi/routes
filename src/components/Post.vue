<template>
    <section class="post">
       <h1>{{ post.title }}}</h1>
       <h5>{{ post.body }}}</h5>

    </section>
</template>

<script>
export default {
name:'post',
computed: {
    post() {
        return this.$store.getters.getPostById(this.$route.params.postId);
    }
}
}
</script>

<style>
.post {
    background: rgba(129, 44, 44, 0.15);
    padding: 1rem;
}
</style>
