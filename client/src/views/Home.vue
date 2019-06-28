<template>
  <div id="page-home">
    <div class="entries px-2">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mb-4" v-for="entry in entries" :key="entry.id">
          <Entry :entry="entry"></Entry>
        </div>
      </div>
      <!-- .flex -->
    </div>
    <!-- .entries -->
  </div>
</template>

<script>
import Entries from "@/data/sample_entries.json";
import Entry from "@/components/cards/Entry";
export default {
  data() {
    return { entries: undefined };
  },
  mounted() {
    this.entries = Entries;
  },
  components: { Entry }
};
</script>
