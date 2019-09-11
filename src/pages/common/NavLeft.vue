<template>
  <div class="w100p h100p pd-t62 pos-abs pos-c Main">
    <div class="w100p h12 pos-abs pos-c-t t50 main-top"></div>
    <div class="w100p h100p pos-relative main-menu-content">
      <div class="h100p pos-abs pos-t0 pos-l0 left-box">
        <div class="h100p pos-relative menu-box-wrap" >
          <div class="w100p h100p overflow-hidden pos-abs pos-t0 pos-l0 z-2 menu-box">
            <div class="w100p nav-menu nav-menu-normal">
              <treeMenu :menuList="getMenuData"></treeMenu>
            </div>
            
            <!-- <div class="w100p nav-menu nav-menu-mini" v-if="!menuStatus">
               <treeMenu :menuList="getMenuData"></treeMenu>
             </div>-->
          
          </div>
        </div>
      </div>
      <div class="menu-hidden" @click="menuHidden" :class="isMenuHidden?'menu-hidden-button':'menu-hidden-button2'">
        <svg t="1547011764063" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2801" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M719.2 912.6c14.2-14.2 14.2-37.2 0-51.4L371.7 513.8c-2.8-2.9-2.8-7.5 0-10.3L719.2 156c14.2-14.2 14.2-37.2 0-51.4-14.2-14.2-37.2-14.2-51.4 0L320.3 452c-15.6 15.6-23.4 36-23.4 56.5s7.8 41 23.4 56.5l347.4 347.4c14.3 14.3 37.3 14.3 51.5 0.2z" p-id="2802"></path></svg>
      </div>
      <div class="menu-out" @click="menuOut" :class="isMenuHidden?'menu-out-button2':'menu-out-button'">
        <svg t="1547012722224" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2932" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M324.3 960.1l-72.8-72.8L626.9 512 251.5 136.7l72.8-72.8L772.5 512z" fill="#333333" p-id="2933"></path></svg>
      </div>
      <div class="w100p h100p overflow-hidden right-box" :class="isMenuHidden?'right-box-big':'right-box-small'">
        <div class="w100p h100p pos-relative">
          <div class="w100p h36 lh36 pos-abs pos-t0 pos-l0 z-1 crumb-box">
            <div class="fl pd-l20">当前位置：</div>
            <div class="el-breadcrumb-box">
              <!--{{currentRouteUrl}}-->
              <!--<span>当前位置：</span>-->
              <el-breadcrumb separator=">" class="breadcrumb-container breadcrumb-inner homeBreadCrumb">
                
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" class="homeBreadCrumbItem">
                  {{ item.name }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div class="w100p h100p pd-t36 pos-abs pos-t0 pos-l0 main-content-wrap">
            <div class="w100p h100p overflow-scroll main-content">
              <div class="h100p pd-tb20 pd-lr20">
                <router-view/>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
  // import treeMenu from 'tree-menu-item'
  import treeMenu from './tree-menu-item'
  export default {
    name: "Main",
    components: {
      treeMenu
    },
    data () {
      return {
        //name
        isMenuHidden: false,
        currentRouteName: this.$route.name, //获取组件名称
        currentRouteUrl: this.$route, //获取组件Url
        themeClassName: 'theme-default',
        menuStatus: true,
        
        resMenuData1: [
          {
            id: 1,
            level: 1,
            name: '首页',
            url: '/message',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 2,
            level: 1,
            name: '基础设置',
            url: '/setting',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 201,
                level: 2,
                name: '组织机构',
                url: '/setting/organ',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 202,
                level: 2,
                name: '角色及权限',
                url: '/setting/permission',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 203,
                level: 2,
                name: '用户管理',
                url: '/setting/user-manage',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 20125,
                level: 2,
                name: '账户管理列表',
                url: '/setting/account-record',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 205,
                level: 2,
                name: '账户管理',
                url: '/setting/account-manage',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 206,
                level: 2,
                name: '账户级参数设置',
                url: '/setting/account-setting',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link',
              },
              {
                id: 207,
                level: 2,
                name: '通讯簿管理',
                url: '/setting/contact-manage',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 208,
                level: 2,
                name: '常用短语',
                url: '/setting/sms-keyword',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 209,
                level: 2,
                name: '演示页面1',
                url: '/setting/setting-demo1',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 210,
                level: 2,
                name: '演示页面2',
                url: '/setting/setting-demo2',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
            ]
          },
          {
            id: 3,
            level: 1,
            name: '短信',
            url: '/sms',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 301,
                level: 2,
                name: '上行短信回复模板',
                url: '/sms/up-sms-model',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 302,
                level: 2,
                name: '短信模板',
                url: '/sms/sms-model',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 303,
                level: 2,
                name: '批量短信发送',
                url: '/sms/group-sending',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 304,
                level: 2,
                name: '快捷短信发送',
                url: '/sms/quick-send',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 305,
                level: 2,
                name: '上行短信管理',
                url: '/sms/up-sms-manage',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              }
            ]
          },
          
          {
            id: 4,
            level: 1,
            name: '彩信',
            url: '/mms',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 401,
                level: 2,
                name: '彩信发送',
                url: '/mms/mms-sending',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 402,
                level: 2,
                name: '彩信模板',
                url: '/mms/mms-model',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              }
            ]
          },
          
          {
            id: 5,
            level: 1,
            name: '统计查询',
            url: '/statistical-query',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 501,
                level: 2,
                name: '账户报表',
                url: '/statistical-query/account-record',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 502,
                level: 2,
                name: '账户变动查询',
                url: '/statistical-query/account-change',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 503,
                level: 2,
                name: '发送量报表',
                url: '/statistical-query/amount-record',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 504,
                level: 2,
                name: '已发消息查询',
                url: '/statistical-query/sms-sent',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 505,
                level: 2,
                name: '归档消息查询',
                url: '/statistical-query/sms-type',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 506,
                level: 2,
                name: '黑名单进出查询',
                url: '/statistical-query/blacklist',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              }
            ]
          },
          
          {
            id: 7,
            level: 1,
            name: '组件demo',
            url: '/component-demo',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 701,
                level: 2,
                name: '时间日期插件',
                url: '/component-demo/datetime',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 702,
                level: 2,
                name: '分页导航',
                url: '/component-demo/pagination',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 703,
                level: 2,
                name: '树形菜单',
                url: '/component-demo/tree',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 704,
                level: 2,
                name: '弹窗选择',
                url: '/component-demo/popup-select',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              }
            ]
          }
        ],
        
        resMenuData2: [
          {
            id: 1,
            level: 1,
            name: '首页',
            url: '/service',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 2,
            level: 1,
            name: '公告管理',
            url: '/service/notice-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 3,
            level: 1,
            name: '接口管理',
            url: '/service/api-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'button',
            subMenu: [
              {
                id: 301,
                level: 2,
                name: 'HTTP短信接口服务',
                url: '/service/api-manage/http-sms',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 302,
                level: 2,
                name: 'CMPP短信接口服务',
                url: '/service/api-manage/cmpp-sms',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 303,
                level: 2,
                name: 'WebService短彩信接口服务',
                url: '/service/api-manage/web-service-mms',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 304,
                level: 2,
                name: '数据库短信接口',
                url: '/service/api-manage/db-sms',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 305,
                level: 2,
                name: 'MM7彩信接口',
                url: '/service/api-manage/mm7-mms',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 306,
                level: 2,
                name: '平台级参数设置',
                url: '/service/api-manage/platform-parameter-setting',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 307,
                level: 2,
                name: '平台级黑名单',
                url: '/service/api-manage/platform-blacklist',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 308,
                level: 2,
                name: '通道登记',
                url: '/service/api-manage/channel-record',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 309,
                level: 2,
                name: '违禁词',
                url: '/service/api-manage/banned-word',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              /*{
                                id: 610,
                                level: 2,
                                name: '发送规则',
                                url: '/api-manage/sending-norm',
                                iconName: '',
                                isSelected: false,
                                isExpanded: false,
                                type: 'link'
                            },*/
              {
                id: 311,
                level: 2,
                name: '发送通道管理',
                url: '/service/api-manage/province-network',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 312,
                level: 2,
                name: '上行管理',
                url: '/service/api-manage/up',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 313,
                level: 2,
                name: '状态报告错误码',
                url: '/service/api-manage/status-error-code',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 314,
                level: 2,
                name: '号段管理',
                url: '/service/api-manage/num-section',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 315,
                level: 2,
                name: '账单管理',
                url: '/service/api-manage/bill',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 316,
                level: 2,
                name: '套餐管理',
                url: '/service/api-manage/sms-plan',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              },
              {
                id: 317,
                level: 2,
                name: '开发接口规范',
                url: '/service/api-manage/dev-api-norm',
                iconName: '',
                isSelected: false,
                isExpanded: false,
                type: 'link'
              }
            ]
          },
          {
            id: 4,
            level: 1,
            name: '平台级参数设置',
            url: '/service/platform-params-setting',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 5,
            level: 1,
            name: '平台级黑名单设置',
            url: '/service/platform-blacklist',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 6,
            level: 1,
            name: '敏感词/违禁词',
            url: '/service/block-keywords',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 7,
            level: 1,
            name: '套餐管理',
            url: '/service/plan-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 8,
            level: 1,
            name: '状态报告错误码',
            url: '/service/status-error-code',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 9,
            level: 1,
            name: '号段管理',
            url: '/service/section-number-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 10,
            level: 1,
            name: '号码归属省份',
            url: '/service/num-section-location',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 11,
            level: 1,
            name: '上行管理',
            url: '/service/up-going-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 12,
            level: 1,
            name: '通道登记',
            url: '/service/channel-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 12,
            level: 1,
            name: '发送通道管理',
            url: '/service/channel-sent-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          {
            id: 13,
            level: 1,
            name: '账单管理',
            url: '/service/bill-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
          
          {
            id: 15,
            level: 1,
            name: '预付费充值管理',
            url: '/service/prepayment-recharge-manage',
            iconName: '',
            isSelected: false,
            isExpanded: false,
            type: 'link'
          },
        ]
      }
    },
    
    created() {
      /*console.log(this.$route);
      if (this.$route.matched[0].path === '/message') {
        this.$store.commit('setMenuList', this.resMenuData1); // set menu-list-data to vuex
      }
      else if (this.$route.matched[0].path === '/service') {
        this.$store.commit('setMenuList', this.resMenuData2); // set menu-list-data to vuex
      }*/
      
      this.$store.commit('setMenuList', this.resMenuData1);
    },
    
    computed: {
      getMenuData() {
        return this.$store.state.menuList // get menu-list-data from vuex
      }
    },
    
    methods: {
      /*菜单收缩*/
      menuHidden(){
        this.isMenuHidden = true;
      },
      menuOut(){
        this.isMenuHidden = false;
      },
      // exchange menu style
      exchangeMenuStyle() {
        this.isNormal = !this.isNormal;
        this.$emit('watchChild', this.isNormal)
      },
    },
    mounted() {
      let menuBoxWrap = $('.menu-box');
      menuBoxWrap.mCustomScrollbar({
        set_width: false,
        set_height: false,
        // horizontalScroll: false,
        axis:"y",
        scrollInertia: 100, // 滚动条惯性(值越大惯性越大)
        scrollEasing: "easeOutCirc",
        mouseWheel: true, //
        autoDraggerLength: true,
        scrollButtons: {
          enable: false,
          scrollType: "continuous",
          scrollSpeed: 20,
          scrollAmount: 20
        },
        advanced:{
          updateOnBrowserResize: true,
          updateOnContentResize: true,
          autoExpandHorizontalScroll: true,
          autoScrollOnFocus: true
        },
        callbacks:{
          onScrollStart: function(){},
          onScroll: function(){},
          onTotalScroll: function(){},
          onTotalScrollBack: function(){},
          onTotalScrollOffset: 0,
          whileScrolling: false,
          whileScrollingInterval: 10
        }
      });
    },
    watch: {
      //监听路由，只要路由有变化(路径、参数变化)就执行下面的函数
      $route: {
        handler: function (to, from) {
          this.currentRouteName = to.name;
          this.currentRouteUrl = to.path;
        },
        deep: true
      }
    }
  }
</script>
