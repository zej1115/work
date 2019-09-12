<template>
	<div class="forgotpassword">
    <!-- 找回密码页 -->
    
    <!--通过用户名begin-->
    <div class="userNameWarp">
      <!--找回密码方式-->
      <div class="">
        <span>确认身份</span>
        <span>重置密码</span>
        <span>完成</span>
      </div>
      
      <!---->
      <div class="password_content">
        <div class="">
          <span>用户名称：</span>
          <input type="text" placeholder="请输入密码">
        </div>
        <div>
          <span>验证码：</span>
          <input type="text" placeholder="密码确认">
        </div>
        <button>获取验证码</button>
        <button>下一步</button>
        
        <div>
        
        </div>
      </div>
    </div>
    <!--通过用户名end-->
    
    <!--通过手机号begin-->
    <div class="phoneWrap">
    
    </div>
    <!--通过手机号end-->
  </div>
</template>

<script>
	export default {
		name: "forgot-password"
	}
</script>
<style>
  .pas-input {
    border: 1px;
  }
</style>
