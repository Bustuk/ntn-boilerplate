<template>
  <nav class="">
    <ul class="hidden md:flex fixed top-0 inset-x-0 p-3 h-24 header">
      <li class="flex-1 flex-grow mr-2">
        <img src="../../static/img/gad-logo.png" class="h-20 w-28" alt="" />
      </li>
      <li class="flex-1 flex-grow-0 mr-2 flex items-center link">
        <nuxt-link class="btn block" to="/">Strona główna</nuxt-link>
      </li>
      <li class="flex-1 flex-grow-0 mr-2 text-big flex items-center link">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1 flex-grow-0 mr-2 flex items-center link">
        <nuxt-link class="btn block" to="/people">O nas</nuxt-link>
      </li>
      <li class="flex-1 ml-2 flex-grow-0 flex items-center link relative">
        <SocialIcon :link="''" :icon="'youtube'" />
      </li>
      <li class="flex-1 flex-grow-0 flex items-center link relative">
        <SocialIcon :link="''" :icon="'facebook-f'" />
      </li>
      <li class="flex-1 flex-grow-0 flex items-center link relative">
        <SocialIcon :link="''" :icon="'instagram'" />
      </li>
    </ul>
    <ul class="flex md:hidden fixed top-0 inset-x-0 p-3 h-24 header">
      <li class="flex-1 flex-grow mr-2">
        <img src="../../static/img/gad-logo.png" class="h-20 w-28" alt="" />
      </li>
      <li @click="toggleMenuVisiblity" class="flex-1 flex-grow-0 mr-2 text-big flex items-center link">
        <a class="btn block">Menu</a>
      </li>
    </ul>
    <!-- <div v-bind:class="{ hidden: !menuVisible }" class="w-full h-full fixed top-auto left-0 bg-white opacity-90 z-50">
      menu
    </div> -->
  </nav>
</template>

<script>
import SocialIcon from './SocialIcon'

export default {
  name: 'Header',
  data() {
    return {
      menuVisible: false
    }
  },
  components: {
    SocialIcon
  },
  methods: {
    toggleMenuVisiblity() {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu-visible {
  display: flex !important;
}

.link {
  min-width: max-content;
}
.btn {
  &:hover {
    @apply text-white bg-accent-900;
  }
}
.nuxt-link-exact-active {
  @apply text-accent-100 bg-accent bg-opacity-20;
  &:hover {
    @apply text-accent-100 bg-accent bg-opacity-20;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-accent-600;
    /* &:hover {
      @apply text-white;
    } */
  }
}
.dark-mode {
  & .btn {
    @apply text-accent-100;
  }
}
</style>
