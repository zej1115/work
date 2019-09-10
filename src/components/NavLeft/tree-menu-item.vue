<template>
  <div class="tree-menu">
    <div class="tree-menu-item" :class="'tree-menu-item-' + item.level" v-for="(item, index) in menuList">
      <!--<div class="menu-link-box" v-if="item.type === 'link'">-->
      <!---->
      <!--</div>-->

      <router-link class="mouse-hand text-ellipsis pos-relative menu-link"
                   :class="'menu-link-lv' + item.level"
                   tag="div"
                   :title="item.name"
                   :to="{path: item.url}"
                   v-if="item.type === 'link'">
        <span class="menu-link-name">{{ item.name }}</span>
        <i class="pos-abs pos-c-l fa fa-link menu-link-icon-left" aria-hidden="true"></i>
      </router-link>

      <div class="menu-button-box" v-if="item.type === 'button'">
        <div class="mouse-hand text-ellipsis pos-relative menu-button"
             :class="'menu-button-lv' + item.level"
             :title="item.name">
          <span class="menu-button-name">{{ item.name }}</span>
          <i class="pos-abs pos-c-l fa fa-list menu-button-icon-left" aria-hidden="true"></i>

          <svg class="pos-abs pos-c-r menu-button-icon-right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.804 352.193l-415.804 415.632-415.803-415.632 63.616-63.445 352.209 352.017 352.102-352.017z" fill="#333333"></path></svg>

          <!--<i class="pos-abs pos-c-r fa fa-angle-down menu-button-icon-right" aria-hidden="true"></i>-->
        </div>

        <div class="sub-menu" :class="'sub-menu-lv' + + item.level" v-show="item.isSelected" v-if="item.subMenu">
          <tree-menu-item :menuList="item.subMenu"></tree-menu-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tree-menu-item",
    props: ['menuList'],
    mounted() {
      $('.menu-button').unbind("click").on('click', function () {
        // console.log('action');
        $(this).toggleClass('menu-button-opened');
        $(this).siblings('.sub-menu').slideToggle(200);
        $(this).parents('.tree-menu-item').siblings().find('.sub-menu').slideUp(200);
        $(this).parents('.tree-menu-item').siblings().find('.menu-button').removeClass('menu-button-opened');
      });
    }
  }
</script>
