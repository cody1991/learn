<template>
  <div>
    <h1>CSS Transitions</h1>
    <button @click="toggleShow">
      <span v-if="isShowing">Hide child</span>
      <span v-else>Show child</span>
    </button>
    <!-- Now, we could just use <transition> out of the box. This will give us a v- prefix for some transition hooks we can use in our CSS. It will offer enter/leave which is the position that the animation starts with on the first frame, enter-active/leave-active while the animation is running- this is the one you’d place the animation properties themselves on, and enter-to/leave-to, which specifies where the element should be on the last frame. -->
    <!-- Personally, I don't usually work with the default v- prefix. I'll always give the transition a name so that there are no collisions if I want to eventually apply another animation. It's not hard to do so, as you can see above, we simply added a name attribute to the transition component: name="fade". -->
    <transition name="fade">
      <css-transitions v-if="isShowing">
        <button @click="toggleShow">
          Close
        </button>
      </css-transitions>
    </transition>
    <hr>
    <h1>CSS Animations</h1>
     <button @click="toggleShow2">
      <span v-if="isShowing2">Get it gone!</span>
      <span v-else>Here we go!</span>
    </button>
    <!-- 
    v-enter
    v-enter-active
    v-enter-to

    v-leave
    v-leave-active
    v-leave-to
    -->
    <transition name="ballmove" enter-active-class="bouncein" leave-active-class="rollout">
      <div v-if="isShowing2">
        <css-animations>
        </css-animations>
      </div>
    </transition>
    <hr>
    <h1>Mode</h1>
    <div class="mode-contain">    
      <mode>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo2.jpg" />
      </mode>
      <mode>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo13.jpg" />
      </mode>
      <mode>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo14.jpeg" />
      </mode>
      <mode>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/cartoonvideo5.jpg" />
      </mode>
    </div>
    <h1>JavaScript</h1>
    <!-- <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"

      @before-Leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
      :css="false">
     </transition> -->

    <!--  <transition 
      @enter="enterEl"
      @leave="leaveEl"
      :css="false">
      put element here
     </transition> -->

      <!-- methods: {
         enterEl(el, done) {
           //entrance animation
           done();
        },
        leaveEl(el, done) {
          //exit animation
          done();
        },
      } -->
  </div>
</template>

<script>
  import cssTransitions from './part-5/css-transitions'
  import cssAnimations from './part-5/css-animations'
  import mode from './part-5/mode'
  export default {
    data () {
      return {
        isShowing: false,
        isShowing2: false
      }
    },
    methods: {
      toggleShow () {
        this.isShowing = !this.isShowing
      },
      toggleShow2 () {
        this.isShowing2 = !this.isShowing2
      }
    },
    components: {
      cssTransitions,
      cssAnimations,
      mode
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<style lang="less">
  .mode-contain{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .ballb(@yaxis:0) {
    transform: translate3d(0, @yaxis, 0);
  }
  .ballmove-enter {
    .ballb(-400px)
  }
  .bouncein {
    animation: bouncein 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .rollout {
    width:60px;
    height:60px;
    animation: rollout 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    div {
      animation: ballroll 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
  }
  @keyframes ballroll {
    0%{
      transform: rotate(0)
    }
    100%{
      transform: rotate(1000deg)
    }
  }
  @keyframes rollout {
    0% {
      transform: translate3d(0, 300px, 0)
    }
    100% {
      transform: translate3d(1000px, 300px, 0)
    }
  }
  @keyframes bouncein {
    1% {
      .ballb(-400px);
    }
    20%, 40%, 60%, 80%, 95%, 99%, 100% {
      .ballb();
    }
    30% {
      .ballb(-80px);
    }
    50% {
      .ballb(-40px);
    }
    70% {
      .ballb(-30px);
    }
    90% {
      .ballb(-15px);
    }
    97% {
      .ballb(-10px);
    }
  }
</style>
