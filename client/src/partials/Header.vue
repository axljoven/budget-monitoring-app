<template>
  <div id="site-header" class="mb-8 shadow-md">
    <nav class="site-nav container mx-auto py-2 px-6">

      <!-- Brand -->
      <router-link class="site-brand" to="/">Budget App</router-link>

      <!-- Nav items -->
      <div class="site-nav-list">
        <router-link class="site-nav-list-link" v-for="(link, id) in links" :key="id" :to="link.path">
          {{ link.name }}
        </router-link>
      </div>

    </nav>
  </div>
</template>

<script>
import Config from "@/data/config.json"
export default {
  data() {
    return { links: [] };
  },
  mounted() {
    this.links = Config["site-navigation"];
  }
};
</script>

<style lang="sass" scoped>
#site-header
  $padding: 10px 25px
  
  position: fixed
  top: 0
  left: 0
  right: 0
  background-color: #ffffff
  border-top: 4px solid #3498db

  .site-nav
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center
    align-content: stretch

  .site-brand,
  .site-nav-list-link
    display: inline-block
    padding: $padding
    font-size: 1.05rem
  
  .site-brand
    padding-left: 0
    font-weight: 700
    color: #1abc9c

  .site-nav-list-link
    color: #9a9a9a
    font-weight: 600
    &:last-child
      padding-right: 0

</style>
