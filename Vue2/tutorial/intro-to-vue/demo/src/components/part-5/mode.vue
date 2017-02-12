<template>
  <!-- In-out: The current element waits until the new element is done transitioning in to fire -->

  <!-- Out-in: The current element transitions out and then the new element transitions in. -->
  <div class="img-contain">
    <div class="overlay">
      <p class="overlay-text">I don't like this one</p>
      <button @click="toggleShow">Replace</button>
    </div>
    <transition name="flip" mode="out-in">
      <slot v-if="!isShowing"></slot>
      <img v-else src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg">
    </transition>
    <!--  
    <transition name="flip">
      <slot v-if="!isShowing"></slot>
      <img v-else src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg">
    </transition> 
    -->
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isShowing: false
      }
    },
    methods: {
      toggleShow () {
        this.isShowing = !this.isShowing
      }
    }
  }
</script>

<style lang="less">

  .img-contain {
    width:250px;
    height:160px;
    overflow: hidden;
    .flip-enter-active {
      transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    }
    .flip-leave-active {
      transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    }
    .flip-enter, .flip-leave-to {
      transform: scaleY(0) translateZ(0);
      opacity: 0;
    }
    img {
      width:100%;
      transform-origin: 50% 50%;
      cursor: pointer;
      transform: scaleY(1) translateZ(0);
      margin: 5px
    }
    &:hover{
      .overlay {
        opacity: 1;
        background: hsla(50, 0%, 0%, 0.6);
        transition: 0.3s opacity ease-out;
      }
    }
    .overlay {
      position: absolute;
      z-index: 1000;
      display: block;
      width: 250px;
      height:160px;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s opacity ease-in;
    }
    .overlay-text{
      margin-top:40px;
      color: white
    }
  }

</style>
