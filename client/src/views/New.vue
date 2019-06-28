<template>
  <div class="page-new">

    <!-- Total -->
    <h1 class="mb-6 font-bold">
      <span class="uppercase total-label">Total</span> <br/>
      <span class="text-4xl total">{{ totalAmount }}</span>
    </h1>

    <!-- Form -->
    <div id="entry-form" class="mb-6">
      <div v-for="(entry, id) in entries" :key="id" class="entry-row shadow appearance-none border rounded w-full px-6 text-gray-700 leading-tight mb-2">
        <div class="flex -mx-6 py-4">
          <!-- Entry name -->
          <div class="entry-input-name w-2/3 px-6">
            <label class="label" :for="`entry-name-${entry.id}`">Name</label>
            <input class="input w-full" v-model="entry.name" :id="`entry-name-${entry.id}`" :name="`entry-name-${entry.id}`"
              type="text" placeholder="Entry name" >
          </div>

          <!-- Cash Spent -->
          <div class="entry-input-spent w-1/3 px-6">
            <label class="label" :for="`entry-spent-${entry.id}`">Cash</label>
            <input class="input w-full" v-model="entry.spent" :id="`entry-spent-${entry.id}`" :name="`entry-spent-${entry.id}`"
              type="text" placeholder="Cash spent">
          </div>
        </div>
      </div> <!-- flex -->
    </div> <!-- #entry form -->
    <button @click="newEntry" class="btn btn-primary">New Entry</button>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      total: 0,
      prevID: 0,
      entries: []
    };
  },
  methods: {
    newEntry() {
      let newID = ++this.prevID;
      this.entries.push({
        id: newID,
        name: `Entry ${newID}`,
        spent: 0
      })
    }
  },
  computed: {
    totalAmount() {
      let total = 0;
      this.entries.forEach(entry => {
          total += Number(entry.spent)
      })
      console.log(JSON.stringify(this.entries))
      if (isNaN(total)) return "Please provide valid value"
      else return "PHP " + parseFloat(total).toFixed(2);
    }
  }
};
</script>

<style lang="sass" scoped>
#entry-form
  .label,
  .input
    &:focus
      outline: none

  .label
    display: block
    margin-bottom: 4px
    font-size: .7rem
    text-transform: uppercase
    font-weight: 700
    color: #9a9a9a

  .input
    font-size: 1.25rem
    font-weight: 400

  .entry-input-spent
    border-left: 1px solid rgba(0,0,0,.1)

.total-label
  color: #9a9a9a

.total
  color: #fb3c5d
</style>
