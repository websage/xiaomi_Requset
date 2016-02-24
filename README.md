# xiaomi_Requset
request





//添加到购物车
$.ajax({
        url: 'http://cart.mi.com/cart/add/2160100031',
        dataType: 'jsonp',
        jsonp: 'jsonpcallback'
  }).done(function (e){console.log(e)})}();
