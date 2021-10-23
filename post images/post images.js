<script>
	
// old version
	
//<![CDATA[
var postImg = document.querySelectorAll(".post-body img");	

var newImg = new Array();
var imgSize = new Array();
var imgUrl = "";

for (var i = 0; i < postImg.length; i++) {
	imgUrl = postImg[i].getAttribute("src");
	imgSize = imgUrl.split("/");
	newImg[i] = imgUrl.replace(imgSize[7], 's0');		
	postImg[i].setAttribute("src",  newImg[i]);
	
	postImg[i].removeAttribute("width");
	postImg[i].removeAttribute("height");
	postImg[i].removeAttribute("data-original-width");
	postImg[i].removeAttribute("data-original-height");

}
//]]>
</script>
