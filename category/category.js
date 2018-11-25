<!--
JQuery 필수
-->
<script>
var cArr = new Array();
var cObj = new Object();

var label = $('#Label1 .widget-content ul li');
var category = $('#HTML1 .widget-content ul li');

for(var i = 0; i < label.length; i++) {
  cObj.url = label.children('a').eq(i).attr("href");
  cObj.txt = label.children('a').eq(i).text();
  cObj.ltr = label.children('span').eq(i).text();

  cArr.push(cObj);

  for(var j = 0; j < category.length; j++) {
    if(cArr[i].url == category.children('a').eq(j).attr('href')) {
      category.eq(j).append(' ' + cArr[i].ltr);
    }
  }
}
$('#Label1').attr('style', 'display:none');
</script>
