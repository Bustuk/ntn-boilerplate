<template>
  <main
    v-if="people"
    class="main"
  >
    <h1 class="title text-left">People</h1>
    <ul
      v-for="(person, index) in people"
      :key="index"
      class="articles"
    >
      <nuxt-link
        class="article article--clickable"
        :to="`people/${person.slug}`"
      >
        <h3 class="article-title">{{ person.name }}</h3>
        <div class="mt-4 mb-2">
          <h2 class="inline py-1 px-2 mr-1 bg-accent text-white font-medium rounded-sm dark:bg-accent">{{ person.status }}</h2>
          <p class="inline">{{ person.description }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    people() {
      return this.$store.state.people
    }
  }
}
</script>
