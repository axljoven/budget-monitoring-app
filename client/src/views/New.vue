<template>
  <div class="page-new">

    <!-- Total -->
    <h1 class="mb-6 font-bold">
      <span class="uppercase total-label">Total</span> <br/>
      <span class="text-4xl total">{{ totalAmount }}</span>
    </h1>

    <!-- Form -->
    <div id="entry-form" class="mb-6">
      <div v-for="(entry, id) in entries" :key="id" class="entry-row shadow appearance-none border rounded text-gray-700 leading-tight mb-2 flex items-center justify-between items-stretch">
        <div class="w-full flex py-4">
          <!-- Entry name -->
          <div class="entry-input-name w-2/3 px-6 flex flex-col justify-center">
            <label class="label" :for="`entry-name-${entry.id}`">Name</label>
            <input class="input w-full" v-model="entry.name" :id="`entry-name-${entry.id}`" :name="`entry-name-${entry.id}`"
              type="text" placeholder="Entry name" >
          </div>

          <!-- Cash Spent -->
          <div class="entry-input-spent w-1/3 px-6 flex flex-col justify-center">
            <label class="label" :for="`entry-spent-${entry.id}`">Cash</label>
            <div class="flex items-center">
              <label class="font-bold input-spent-label" :for="`entry-spent-${entry.id}`">PHP</label>
              <input class="input input-spent text-right pl-3 w-full" type="text" minlength="1" maxlength="10" v-model="entry.spent" :id="`entry-spent-${entry.id}`" :name="`entry-spent-${entry.id}`"
                placeholder="Cash spent">
            </div>
          </div>
        </div> <!-- flex -->

        <!-- Delete -->
        <a href="javascript:void(0)" class="delete" @click="deleteEntry(entry.id)">
          <i class="icon ion-md-close"></i>
        </a>

      </div> 
    </div> <!-- #entry form -->

    <!-- New Entry -->
    <button @click="newEntry" class="btn btn-ghost mr-2">New Entry</button>

    <!-- Save Entries -->
    <button @click="saveEntry" class="btn btn-primary">Save</button>

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
    getTotal() {
      let total = 0;
      this.entries.forEach(entry => total += entry.spent );
      return Number(total);
    },
    newEntry() {
      let newID = ++this.prevID;
      this.entries.push({
        id: newID,
        name: `Entry ${newID}`,
        spent: 0
      })
    },
    deleteEntry(entryId) {
      this.entries = this.entries.filter(entry => entry.id != entryId)
    },
    prepareEntry() {
      let dateCreated = new Date()
      let data = JSON.stringify(this.entries)
      let total = this.getTotal()
    },
    saveEntry() {
      if (isNaN(this.getTotal()) || this.entries.length <= 0 ) {
          alert('Make sure you have atleast 1 entry and the total is a numeric value')
        } else {
          this.prepareEntry()
      }
    },
  },
  computed: {
    totalAmount() {
      let total = 0;
      this.entries.forEach(entry => {
          total += Number(entry.spent)
      })
      if (isNaN(total)) return "Please provide valid value"
      else return "PHP " + parseFloat(total).toFixed(2);
    }
  }
};
</script>

<style lang="sass" scoped>
#entry-form
  .entry-row
    position: relative

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

  .input,
  .input-spent-label
    font-size: 1.25rem
    font-weight: 600

    &-spent::before
      content: 'PHP'
      display: inline-block

  .entry-input-spent
    border-left: 1px solid rgba(0,0,0,.1)

.total-label
  color: #9a9a9a

.total
  color: #fb3c5d

.delete,
.icon
  transition: all .2s

.delete
  display: flex
  align-items: center
  justify-content: center
  padding: 20px 30px
  background-color: #f3f3f3
  width: 50px

  .icon
    color: #a0a0a0

  &:hover
    background-color: #fb3c5d
    .icon
      color: white

</style>
