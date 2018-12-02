function onStart() {
	fillCarousel(12, 200);
};

function fillCarousel(itemsNum, size) {
	var carouselContainer = $(".carousel_container");
	carouselContainer.css("width", (itemsNum * size) + "px");
	carouselContainer.css("height", size + "px");
	for(var i = 1; i < itemsNum + 1; ++i) {
		var el = $("<div></div>");
		var img = $("<img/>");
		img.attr("src", "images/carousel_img_" + i + ".jpg");
		img.css("width", "auto");
		img.css("height", "100%");
		el.append(img);
		el.css("height", "100%");
		el.css("overflow", "hidden");
		el.addClass("carousel_item");
		carouselContainer.append(el);
	}
	var widths = [1]; //[5, 3, 2, 2.5, 2, 5, 2];
	$(".carousel_item").css("flex", function(index) {
		return (widths[index % widths.length]) + "1 auto";
	});
}

$(document).ready(onStart);