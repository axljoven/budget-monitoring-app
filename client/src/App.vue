<template>
  <div id="app" class="">
    <Header />
    <Controls />
    <div class="container mx-auto px-6 pt-24 pb-16">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/partials/Header";
import Controls from "@/partials/Controls";
export default {
  components: {
    Header,
    Controls
  }
};
</script>
