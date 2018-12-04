<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <script>
  //<![CDATA[
      var newerLink = $("a.blog-pager-newer-link");
      var olderLink = $("a.blog-pager-older-link");

      $.get(newerLink.attr("href"), function(newer){
          newerLink.parent().append("<div class='next-title'>"+$(newer).find("h3.post-title").text()+"</div>");
      },"html");

      $.get(olderLink.attr('href'), function(older){
          olderLink.parent().append("<div class='prev-title'>"+$(older).find("h3.post-title").text()+"</div>");
      },"html");
  //]]>
  </script>
</b:if>
