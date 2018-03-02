  $(".swiper-container").swiper({
      loop: true,
      autoplay: 1000,
      pagination: '.swiper-pagination'
  });

  $('#login').click(function () {
      /*  $.login("自定义的消息内容", function (username, password) {
           // 这里进行登录操作
       }, function () {
       }); */

      //如果参数过多，建议通过 object 方式传入
      $.login({
          title: '登录',
          text: '请输入用户名和密码',
          username: '', // 默认用户名
          password: '', // 默认密码
          onOK: function (username, password) {
              //点击确认
              $.toast('登录成功!');
          },
          onCancel: function () {
              //点击取消
              $.toast('取消登录!', 'cancel');
          }
      });
  });

$('#register').click(function () {

    //如果参数过多，建议通过 object 方式传入
    $.login({
        title: '注册',
        text: '',
        username: '', // 默认用户名
        password: '', // 默认密码
        onOK: function (username, password) {
            //点击确认
            $.toast('注册成功!');
        },
        onCancel: function () {
            //点击取消
            $.toast('取消注册!', 'cancel');
        }
    });
});