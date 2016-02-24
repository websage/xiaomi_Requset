# xiaomi_Requset
request





//添加到购物车
$.ajax({
        url: 'http://cart.mi.com/cart/add/2160100031',
        dataType: 'jsonp',
        jsonp: 'jsonpcallback'
  }).done(function (e){console.log(e)})}();



//提交订单
$.ajax({
				type: "POST",
				url: "http://order.mi.com/buy/submit?" + Math.random(),
				dataType: "json",
				data: {
					Checkout: {
			address_id:10160125151452116,
			pay_id:1,
			best_time:1,
			invoice_type:4,
			shipment_id:1,
			pickup_id:"",
			coupons_value:"",
			coupons_type:""
		}
				},
				timeout: 1e4,
				error: function() {},
				success: function(e) {
					console.log(e)
				
//////////////////////////////////////
$.ajax({
        url: 'http://cart.mi.com/cart/add/2160100031',
        dataType: 'jsonp',
        jsonp: 'jsonpcallback'
  }).done(function (e){console.log(e)
	if(e.code != '-1'){
	$.ajax({
				type: "POST",
				url: "http://order.mi.com/buy/submit?" + Math.random(),
				dataType: "json",
				data: {
					Checkout: {
			address_id:10160125151452116,
			pay_id:1,
			best_time:1,
			invoice_type:4,
			shipment_id:1,
			pickup_id:"",
			coupons_value:"",
			coupons_type:""
		}
				},
				timeout: 1e4,
				error: function() {},
				success: function(e) {
					console.log(e)
				}})
}
});




