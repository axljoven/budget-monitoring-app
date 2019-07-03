<template>
  <div class="site-controls">
    <router-link to="/new" class="site-controls-item">
      <span class="icon ion-ios-add">
        <span class="site-controls-item-label">Add new entry</span>
      </span>
    </router-link>
    <router-link to="/settings" class="site-controls-item">
      <span class="icon ion-ios-more">
        <span class="site-controls-item-label">Settings</span>
      </span>
    </router-link>
  </div>
</template>

<style lang="sass" scoped>
.site-controls
  position: fixed
  bottom: 20px
  right: 15px
  z-index: 1000

  &-item
    $item-dimension: 55px
    $bg-color: #3498db

    display: flex
    align-items: center
    position: relative
    margin-bottom: 5px
    z-index: 1

    &:last-child
      margin-bottom: 0

    &-label
      $label-bg-color: #ac70ff

      display: none
      align-items: center
      width: max-content
      position: absolute
      right: 80px
      background-color: $label-bg-color
      border-radius: 2px
      padding: 8px 16px
      font-size: 0.8rem
      text-align: right
      color: white
      transition: all .2s

      &:after
        $label-dimension: 12px
        content: ''
        z-index: 0
        display: inline-block
        position: absolute
        right: -5px
        width: $label-dimension
        height: $label-dimension
        background-color: $label-bg-color
        transform: rotate(45deg)

    & .icon
      display: flex
      align-items: center
      justify-content: center
      width: $item-dimension
      height: $item-dimension
      background-color: $bg-color
      border-radius: 100%
      padding: 10px
      box-shadow: 0px 3px 10px rgba(0,0,0,0.3)
      font-size: 1.5rem
      color: white
      transition: all .2s

      &:hover
        background-color: darken($bg-color, 6)
        box-shadow: 0px 2px 5px rgba(0,0,0,0.5)
        .site-controls-item-label
          display: flex
</style>
