<script>
var ListCount = 10;  // 댓글 출력 갯수
var ChrCount = 90;  // 댓글 하나장 문자수

function rctCmts(data) {

  document.write('<ul class="rctCmts">');

  for (var i = 0; i < ListCount; i++) {
    var replyList = ListAuthor = ListContent = ListData = ListUrl = "";

    for (var j = 0; j < data.feed.entry[i].link.length; j++) {
      if (data.feed.entry[i].link[j].rel == 'alternate') { break; }
    }

    if(data.feed.entry[i].link[2] != null) {
      ListUrl= "'" + data.feed.entry[i].link[j].href + "'";
    } else { ListUrl = "'#'" }

    ListAuthor = data.feed.entry[i].author[0].name.$t;
    ListData = data.feed.entry[i].content.$t;
    ListContent = ListData.replace(/(<([^>]+)>)/ig,"").substring(0, ChrCount);

    replyList = "<li><a href="+ListUrl+">"+ListContent+"</a> by " + ListAuthor + "</li>";

    document.write(replyList);
  }
}
</script>
<script src="https://kuzurotest.blogspot.com/feeds/comments/default?alt=json-in-script&callback=rctCmts"></script>