<template lang="html">
  <div class="notify" v-if="show" :style="setStyle" transition="roll">
    <div class="content">
      {{ options.content }}
    </div>
    <div class="delete" v-if="!options.autoClose" @click="close()">
      ✕
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timers: []
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      }
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setStyle() {
      return {
        color: this.options.textColor || '#fff',
        background: this.options.backgroundColor || 'rgba(0,0,0,0.7)'
      }
    }
  },
  ready() {},
  attached() {},
  methods: {
    close() {
      this.show = false
      this.options = {}
    },
    countDown() {
      if (this.options.autoClose) {
        const t = setTimeout(() => {
          this.close();
        }, this.options.showTime || 3000)
        this.timers.push(t)
      }
    }
  },
  components: {},
  watch: {
    options() {
      this.timers.forEach((timer) => {
        window.clearTimeout(timer)
      })
      this.timers = []
      this.countDown()
    }
  }
};
</script>

<style lang="less">
.notify {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    text-align: center;
    padding: 0.75rem 1rem;
    background-color: red;
    color: #fff;
    top: 0;
    left: 0;
    .content {
      display: flex;
      align-items: center;
      width: ~"calc(100vw - 2rem - 15px)";
      padding-left: 15px;
      justify-content: center;
    }
    .delete {
      display: flex;
      align-items: center;
      cursor:pointer;
      transition:all 0.7s;
      font-size: 18px;
      width:15px;
      height:15px;
      transform-origin:center center;
      &:hover {
        transform: rotateZ(360deg)
      }
    }
}

.roll-transition {
    transition: all .3s ease;
    transform: translate3d(0, 0, 0);
}
.roll-enter,
.roll-leave {
    transform: translate3d(0, -100%, 0);
}
</style>
