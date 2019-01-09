<script>
//<![CDATA[
var cate = document.getElementById("HTML1").querySelectorAll("li");
var label = document.getElementById("Label1").querySelectorAll("li");
var label_cnt = document.getElementById("Label1").querySelectorAll("li span");

for(var i = 0; i < label.length; i++){
	for(var j = 0; j < cate.length; j++){
	
		if(label[i].querySelector("a").getAttribute("href") == cate[j].querySelector("a").getAttribute("href"))	{
			var cnt = label_cnt[i].innerHTML;
			cate[j].querySelector("a").outerHTML = cate[j].innerHTML + " " + cnt;

			label[i].outerHTML = "";
        } 
    }
}
//]]>
</script>
