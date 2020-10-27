<template>
  <div class="container">
    <div id="fb-root"></div>
    <div class="fb-customerchat" attribution="setup_tool" page_id="103764398106758" theme_color="#67b868"></div>
    <Header />
    <ColorModePicker />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker
  },
  mounted() {
    window.fbAsyncInit = function() {
      FB.init({
        xfbml: true,
        version: 'v8.0'
      })
    }
    ;(function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }
}
</script>
