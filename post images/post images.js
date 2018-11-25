<script>
//<![CDATA[
var postImg = $(".post-body img");
var newImg = new Array();
var imgSize = new Array();;
var imgUrl = "";

for (var i = 0; i < postImg.length; i++) {

 imgUrl = postImg.eq(i).attr("src");
 imgSize = imgUrl.split("/");
 newImg[i] = imgUrl.replace(imgSize[7], 's0');

 $(".post-body img").eq(i).attr("src", newImg[i]);
}

$(".post-body img").removeAttr("width"); 
$(".post-body img").removeAttr("height");
$(".post-body img").removeAttr("data-original-width"); 
$(".post-body img").removeAttr("data-original-height");
//]]>
</script>