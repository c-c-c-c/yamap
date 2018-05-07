


$("input[name='postNumber']").blur(function(){
		if($(this).val().match(/東京/) ||
			$(this).val().match(/埼玉/)||
			$(this).val().match(/神奈川/)||
			$(this).val().match(/千葉/)

	) {
			console.log("hoge");
			$("#answer").html("<p style= 'font-size: 26px; color:skyblue;'>都会っ子★</p>");
		} else {
			$("#answer").html("<p style= 'font-size: 40px; color:red;'>田舎者！<br>もしくは、、<br>入力ミスのおっちょこちょいめ！！</p>");
			console.log("fuga");
		}

});




// $(document).ready(function() {

	// $(addHoverImgChange());
	// $(specialImageRotate());
	// $(renderHandSpinner());
// });
