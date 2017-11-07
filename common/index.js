require('../css/animate.css');
require('../css/bootstrap.css');
require('../css/flexslider.css');
require('../css/icomoon.css');
require('../css/magnific-popup.css');
require('../css/owl.carousel.min.css');
require('../css/owl.theme.default.min.css');
require('../css/style.css');

// var _mm     = require('./mm.js');
// var _user   = require('./user-service.js');
// // 导航
// var nav = {
//   init : function(){
//     this.bindEvent();
//     this.loadUserInfo();
//     return this;
//   },
//   bindEvent : function(){
//     // 登录点击事件
//     $('.js-login').click(function(){
//       _mm.doLogin();
//     });
//     // 注册点击事件
//     $('.js-register').click(function(){
//       window.location.href = './user-register.html';
//     });
//     // 退出点击事件
//     $('.js-logout').click(function(){
//       _user.logout(function(res){
//         window.location.reload();
//       }, function(errMsg){
//         _mm.errorTips(errMsg);
//       });
//     });
//   },
//   // 加载用户信息
//   loadUserInfo : function(){
//     _user.checkLogin(function(res){
//       $('.user.not-login').hide().siblings('.user.login').show()
//         .find('.username').text(res.username);
//     }, function(errMsg){
//       // do nothing
//     });
//   }
// };
//
// module.exports = nav.init();