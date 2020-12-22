<template>
  <article
    v-if="person"
    class="main article"
  >
    <h1 class="article-title">{{ person.name }}</h1>
    <h1 class="article-title">{{ person.surname }}</h1>
    <p class="mt-4">{{ person.description }}</p>
    <img
      class="cover-image"
      :src="person.cover"
    >
    <!-- <div
      class="block mt-8 mb-4"
      v-html="$md.render(person.description)"
    /> -->
    <div v-if="person.gallery">
      <img
        v-for="image in person.gallery"
        class="image"
        :key="image.id"
        :src="image"
      >
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { person: payload }
    else
      return {
        person: await require(`~/assets/content/people/${params.person}.json`)
      }
  }
}
</script>
