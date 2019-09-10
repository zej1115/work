<template>
  <div class="login">
    <div class="w100p h100p overflow-hidden pos-fix pos-c z-1">
      <div class="w100p h100p overflow-hidden pos-abs t0 l0 bg-pic-box">
        <img class="min-w100p max-w100p max-h100p pos-abs t0 l0"
             src="../../static/images/login_bg.jpg" alt="bg-img">
      </div>
      
      <div class="pos-fix pos-c bg-layer z-2"></div>
      
      <div class="bg-color-white br6 w1200 h640 pos-abs pos-c z-3 login-box-wrap">
        
        <div class="display-table fl w740 h100p pd-lr45 pos-relative">
          <div class="block-center display-table-cell v-c">
            <img class="max-w100p mg-b50" src="../../static/images/international_map.jpg">
            <div class="f38 h42 lh42 mg-b14 text-right info-text-1">UMIFIED MESSAGUNG PLATFORM</div>
            <div class="f22 h30 lh30 text-right info-text-2">统一消息平台</div>
          </div>
        </div>
        
        <div class="w1 h100p pos-abs t0 r460 v-line"></div>
        
        <div class="display-table fl w460 h100p pd-lr45 pos-relative">
          <!-- login-box begin -->
          <div class="display-table-cell v-c h300 login-box">
            <div class="form-box">
              <div class="f16 h40 lh40 mg-b30 text-center form-title">
                <span class="f36">登&nbsp;录</span>
              </div>
              <div class="form-content">
                <div class="mg-b20 pos-relative">
                  <input class="br4 f16 w100p pd-lr18 input-text"
                         type="text"
                         v-model="loginData.userId"
                         placeholder="请输入用户名">
                  <div class="f12 w100p h20 lh20 text-error pos-abs l0 b-m20">{{ loginAlarmText.userId }}</div>
                </div>
                <div class="mg-b20 pos-relative">
                  <input class="br4 f16 w100p pd-lr18 input-text"
                         type="password"
                         v-model="loginData.password"
                         placeholder="请输入密码">
                  <div class="f12 w100p h20 lh20 text-error pos-abs l0 b-m20">{{ loginAlarmText.password }}</div>
                </div>
                <div class="mg-b20 pd-r140 pos-relative">
                  <input class="br4 f16 w100p pd-lr18 input-text" type="text"
                         v-model="loginData.verificationCode"
                         placeholder="请输入验证码">
                  <div class="w100 h100p pos-abs pos-c-r verification-code">
                    <img @click="getVerificationCode" class="mouse-hand w100p h100p" alt="verification code">
                  </div>
                  <div class="f12 w100p h20 lh20 text-error pos-abs l0 b-m20">{{ loginAlarmText.verificationCode }}</div>
                </div>
              </div>
              <div class="mg-b10 form-action">
                <button @click="toLogin" class="br4 f18 mouse-pointer w100p pd-tb10 login-submit" type="primary">登录</button>
              </div>
              <div class="clear h20 lh20 other-action">
                <div class="fl forgot-password">
                  密码忘记了？<a @click="forgotPassword" href="javascript:void(0);">找回密码</a>
                </div>
                <div class="fr quick-login">
                  <a href="javascript:void(0);">短信快捷登录</a>
                </div>
              </div>
            </div>
          </div>
          <!-- login-box end -->
        </div>
        
        <div class="color-white f16 w100p h30 lh30 text-center pos-abs b-m80">北京和佳汇智技术有限公司 技术支持</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { get, post } from '../util/http'
  export default {
    name: "Login",
    data() {
      return {
        loginShow: true,
        
        loginData: {
          userId: '',
          password: '',
          verificationCode: ''
        },
        
        loginAlarmText: {
          userId: '',
          password: '',
          verificationCode: ''
        },
        
        pngBase64: '',
        pngToken: '',
      }
    },
    
    created() {
      // this.getVerificationCode();
    },
    
    methods: {
      checkLoginData() {
        let isTrue = true;
        if ($.trim(this.loginData.userId)) {
          this.loginAlarmText.userId = '';
        } else {
          isTrue = false;
          this.loginAlarmText.userId = '请输入用户名';
        }
        
        if ($.trim(this.loginData.password)) {
          this.loginAlarmText.password = '';
        } else {
          isTrue = false;
          this.loginAlarmText.password = '请输入密码';
        }
        
        if ($.trim(this.loginData.verificationCode)) {
          this.loginAlarmText.verificationCode = '';
        } else {
          isTrue = false;
          this.loginAlarmText.verificationCode = '请输入验证码';
        }
        
        return isTrue
      },
      
      //get verificationCode
      getVerificationCode() {
        get('http://172.18.2.16:8090/uaa/api/login/imageCode', {}, 5000).then((res) => {
          let resData = res.data.data;
          this.pngBase64 = resData.png_base64;
          this.pngToken = resData.png_token;
        }).catch((res) => {
          console.log(res);
        });
      },
      
      // login
      toLogin() {
        let isTrue = this.checkLoginData();
        if (isTrue) {
          
          let postData = {
            scope: 'testApp',
            grant_type: 'password',
            username: this.loginData.userId,
            password: this.loginData.password,
            client_id: 'webAppID',
            client_secret: 'webAppSECRET',
            png_token: this.pngToken,
            png_code: this.loginData.verificationCode
          };
          
          let formData = this.$qs.stringify(postData);
          
          /*post('http://172.18.2.16:8090/uaa/oauth/token', formData).then((res) => {
						let resData = res;
						console.log(resData);
						if (resData.status === 200) {
							window.sessionStorage.setItem('loginToken', '12321-21321-324324-45456');
							this.$router.push({ path: '/'});
						}
					});*/
          
          window.sessionStorage.setItem('loginToken', '12321-21321-324324-45456');
          
          this.$router.push({ path: '/'}); // 登录成功则跳转至系统选择页
        }
      },
      
      forgotPassword() {
        this.$router.push({ path: '/forgot-password'});
      }
    }
  }
</script>

<style>
  .login-box-wrap { box-shadow:0 2px 15px 0 rgba(0,0,0,0.14); }
  .login-box-wrap .info-text-1 { color: #E6E6E6; font-family: Arial; }
  .login-box-wrap .info-text-2 { color: #49AFE3 }
  .login-box .form-title span { font-weight: 500; }
  .login-box .input-text { border: 1px solid #D0D0D0; height: 48px; transition: all .3s; }
  .login-box .input-text:focus { border: 2px solid #49AFE3; }
  .login-box .login-submit { background: #49AFE3; color: #fff; height: 54px; transition: all .1s; }
  .login-box .login-submit:hover { background: #59C2F8; }
  .login-box .login-submit:active { background: #3D9ED0; }
  .login-box .forgot-password {  }
  .login-box .forgot-password a, .login-box .quick-login a { color: #49AFE3; }
  .login-box .forgot-password a {  }
  .login-box .quick-login a {  }
</style>
