function buy(){
		$.ajax({
			type: "POST",
			url: "http://order.mi.com/buy/submit?" + Math.random(),
			dataType: "json",
			data: {
				Checkout: {
					address_id: 10160125151452116,
					pay_id: 1,
					best_time: 1,
					invoice_type: 4,
					shipment_id: 1,
					pickup_id: "",
					coupons_value: "",
					coupons_type: ""
				}
			},
			timeout: 1e4,
			error: function() {
					buy();
			},
			success: function(e) {
				console.log(e)
				if(e.code != 1){
					buy();
				}
			}
				
		})
};
function url(){
	var that = this;
	that.configData = {
		gid:2160100032
	};
	$.ajax({
				type: "GET",
				url: "//tp.hd.mi.com/hdget/cn?source=bigtap&product="+that.configData.gid+"&addcart=1&m=1&_=" + (new Date).getTime(),
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				jsonpCallback: 'cn'+ that.config.gid,
				timeout: 3e4,
				error: function() {
					
				},
				success: function(t) {
					var n = t.status,
						r = n[that.config.gid].hdurl;
					addShopCart(r);
				}
			})
};
function addShopCart(e) {
			if (!e){url()};
			var t = this,
				n = "//cart.mi.com/cart/add/"+ t.configData.gid +"?source=bigtap&token=" + e;
			$.ajax({
				type: "GET",
				url: n,
				dataType: "jsonp",
				jsonp: "jsonpcallback",
				success: function(e) {
					if(e.code == 1){
						buy();
					}
					}			
			})
		};
