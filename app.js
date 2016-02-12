'use strict';

var socket = io('http://localhost:8086');

socket.on('market data', function (data) {
	console.log(data);
	var el = '#' + data.provider + ' .bitcoin-price';
	var animation = 'animated pulse';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	$(el)
	.addClass(animation)
	.text('$' + data.close)
	.one(animationEnd, function () {
		$(this).removeClass(animation);
	});
});