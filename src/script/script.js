


/////////////////////
//スクロールアクション//
////////////////////
function countScroll () {
	// スクロールしたら発動
	$window.scroll(function() {
		let before_scroll_px = scroll_px;
		// スクロール量を変数に格納
		scroll_px = $(this).scrollTop();
		delta_scroll_px = (scroll_px) - (before_scroll_px);
		sum_delta_scroll_px +=delta_scroll_px;

		//specialsをとめる
		if ( delta_scroll_px < 0 ) {
			$("#clover_main").css("animation-duration", "0s");
			$("#husha_main").css("animation-duration", "0s");
			$("#kanransha_main").css("animation-duration", "0s");

		}

	});
}




$(document).ready(function() {
	$(window).fadeThis({speed: 600, distance: 4});
	$(countScroll());
	// $(addHoverImgChange());
	// $(specialImageRotate());
	// $(renderHandSpinner());
});
