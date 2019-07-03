<template>
  <div class="card card-entry">
    <div class="card-header">
      <h4 class="card-title">{{ date }}</h4>
      <div class="card-controls">
        <a href="javascript:void(0)" class="card-controls-item edit">
          <i class="icon ion-md-create"></i>
        </a>
        <a href="javascript:void(0)" class="card-controls-item delete">
          <i class="icon ion-md-trash"></i>
        </a>
      </div>
    </div>
    <p class="card-desc">{{ desc }}</p>
    <p class="card-total">
      <span class="card-total-label">Total</span>
      <span class="card-total-amount">Php {{ total }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: undefined,
      desc: "",
      total: 0
    };
  },
  mounted() {
    this.date = this.entry.date;
    this.desc = this.entry.desc;
    this.total = this.entry.total;
  },
  props: {
    entry: Object
  }
};
</script>

<style lang="sass" scoped>
.card-entry
  border: 1px solid rgba(0,0,0,0.08)
  border-radius: 4px
  box-shadow: 0px 4px 10px rgba(167,167,167,0.5)
  transition: all .1s

  &:hover
    box-shadow: 0px 2px 4px rgba(167,167,167,0.5)

  .card-header,
  .card-desc,
  .card-total
    $padding: 15px 20px
    padding: $padding

  .card-header
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: center
    align-content: stretch
    background-color: #3498db1f
    border-bottom: 1px dashed rgba(0,0,0,0.05)

  .card-title
    font-weight: 700
    font-size: .9rem

  .card-controls-item
    margin-left: 15px

    .icon
      font-size: 1.2rem
      color: rgba(0,0,0,0.1)
      transition: .2s

    &.edit:hover .icon
        color: #1abc9c
    &.delete:hover .icon
        color: #ff4e56

  .card-desc
    font-size: .9rem
    color: rgba(0,0,0,0.5)
    border-bottom: 1px dashed rgba(0,0,0,.05)

  .card-total
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
    align-content: center
    background-color: #f3f3f35c
    font-size: .85rem

    &-label
      text-transform: uppercase
      color: rgba(0,0,0,0.5)

    &-amount
      font-weight: 600
      font-size: .7rem
      color: white
      padding: 5px 14px
      background-color: #1abc9c
      border-radius: 2px
</style>
