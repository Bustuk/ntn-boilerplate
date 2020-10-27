<template>
  <div>
    <a :href="link" :class="`${icon} icon-buttons`">
      <font-awesome-icon :icon="['fab', icon]" />
      <span></span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    link: String,
    icon: String
  }
}
</script>

<style lang='postcss'>
/* Wrapper */
.icon-buttons {
  background-color: theme('colors.primary.100');
  border-radius: 2.7rem;
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 2.7rem;
  line-height: 2.7rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 2.7rem;
  justify-content: center;
  align-items: center;
}
.icon-buttons svg {
  position: absolute;
  background: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 10;
  color: theme('colors.accent.900');
}
.icon-buttons span {
  background-color: theme('colors.accent.900');
  border-radius: 0;
  display: block;
  height: 0;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  width: 0;
}
.icon-buttons:hover span {
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2.8rem;
  margin: -1.4rem;
}
.icon-buttons:hover svg {
  color: theme('colors.primary.100');
  fill: theme('colors.primary.100');
}

.dark-mode {
  & .icon-buttons:hover {
    background-color: inherit;
  }
}
</style>
