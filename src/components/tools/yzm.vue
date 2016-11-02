<template lang="html">
  <div class="yzm">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      op: [
        ['零','灵','玲','凌','领','岭','绫','令','伶'],
        ['一','以','已','易','衣','亦','义','艺','仪'],
        ['二','而','儿','耳','贰','铒','贰','迩','饵'],
        ['三','散','伞','叁','弎','霰','㈢','san','叁'],
        ['四','思','斯','丝','似','私','撕','司','寺'],
        ['五','吴','唔','舞','物','武','捂','污','悟'],
        ['六','留','流','柳','溜','遛','馏','硫','琉'],
        ['七','其','器','期','气','奇','起','骑','漆'],
        ['八','巴','拔','扒','霸','钯','粑','坝','叭'],
        ['九','久','酒','旧','救','揪','舅','韭','玖']
      ],
      ctx: null

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
  ready() {
    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  },
  attached() {},
  methods: {
    updateYzm() {
      var gradient = ctx.createLinearGradient(0,0,c.width,0);
      gradient.addColorStop("0","magenta");
      gradient.addColorStop("0.5","blue");
      gradient.addColorStop("1.0","red");
      this.ctx.fillStyle=gradient;
      this.ctx.fillText("w3school.com.cn",10,90);
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
