<template lang="html">
  <div class="ab-slidenav">
   <ul id="slide-out" class="side-nav">
    <li>
      <div class="userView">
      <img class="background">
      <a href="#!user"><img class="circle" :src="img">haha</a>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
      </div>
    </li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main'}"><i class="fa fa-pencil" aria-hidden="true"></i>记一笔</a></li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main/bill-query'}"><i class="fa fa-search" aria-hidden="true"></i>账单查询</a></li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main/bill-query'}"><i class="fa fa-line-chart" aria-hidden="true"></i>统计分析</a></li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main/bill-query'}" href="#!"><i class="fa fa-users" aria-hidden="true"></i>联手记账</a></li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main/bill-query'}"><i class="fa fa-bell" aria-hidden="true"></i>记账提醒</a></li>
    <li><a @click="HideNav" class="waves-effect" v-link="{path:'/main/bill-query'}"><i class="fa fa-money" aria-hidden="true"></i>借点钱</a></li>
  </ul>
  <div class="titlebar row">
    <div class="col s12">
      <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars material-icons" aria-hidden="true"></i>&nbsp;</a>
      <span>微记账</span>
      <span class='refresh'><i class="fa fa-refresh" aria-hidden="true"></i></span>
    </div>
  </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      img: 'https://img1.doubanio.com/img/musician/large/22817.jpg'
    };
  },
  computed: {},
  ready() {
    $(".button-collapse").sideNav();
  },
  attached() {},
  methods: {
    HideNav: function() {
      $('.button-collapse').sideNav('hide');
    }
  },
  components: {}
};
</script>

<style lang="less">
.ab-slidenav {
    .userView {
        background: #ee6e73;
    }
    .titlebar {
        background: #ee6e73;
        margin-bottom: 0;
        .s12 {
            padding-top: 1rem;
            padding-bottom: 1rem;
            span {
                color: #fff;
            }
            .refresh {
                float: right;
                padding-right: 10px;
            }
        }
    }
    .button-collapse {
        padding: 10px;
        .fa.fa-bars {
            color: #fff;
        }
    }
    .side-nav li > a {
        .fa-pencil {
            color: #ee6e73;
        }
        .fa-search {
            color: #a300ff;
        }
        .fa-line-chart {
            color: #6fe26f;
        }
        .fa-users {
            color: #6287e4;
        }
        .fa-bell {
            color: #ffab00;
        }
        .fa-money {
            color: #00ffb3;
        }
    }
}
</style>
