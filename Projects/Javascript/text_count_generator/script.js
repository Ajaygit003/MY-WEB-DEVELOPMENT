// function calculate_text() {
//     var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit repellendus, aliquid nemo, perspiciatis magnam vitae dolores illo aspernatur obcaecati eveniet voluptates iure optio provident ad quae amet sapiente blanditiis id iusto, est quasi nam? Reprehenderit nobis nemo consequuntur. Natus aspernatur ex possimus voluptas consequuntur eaque cumque. Culpa odit nam explicabo officiis ut voluptas fugit architecto, nihil est nesciunt earum alias dolorum illo illum accusamus neque perspiciatis sunt. Eum accusamus, excepturi beatae vero facilis impedit ut sunt pariatur quidem suscipit cumque neque aperiam reiciendis odit dolor perspiciatis voluptatem reprehenderit nihil quod deleniti necessitatibus repudiandae. Ut, totam! Odio eius repellat consequatur.";
//     var n = document.getElementById("number").value;
//     var words = str.split(" ");
//     var result = "";
//     if(n<=100){
//         for(let i=0;i < n; i++){
//             result+=words[i]+" "
//         }
//     }
//     document.getElementById('result').innerHTML=result;
// }

function calculate_text() {
  var str =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque velit repellendus, aliquid nemo, perspiciatis magnam vitae dolores illo aspernatur obcaecati eveniet voluptates iure optio provident ad quae amet sapiente blanditiis id iusto, est quasi nam? Reprehenderit nobis nemo consequuntur. Natus aspernatur ex possimus voluptas consequuntur eaque cumque. Culpa odit nam explicabo officiis ut voluptas fugit architecto, nihil est nesciunt earum alias dolorum illo illum accusamus neque perspiciatis sunt. Eum accusamus, excepturi beatae vero facilis impedit ut sunt pariatur quidem suscipit cumque neque aperiam reiciendis odit dolor perspiciatis voluptatem reprehenderit nihil quod deleniti necessitatibus repudiandae. Ut, totam! Odio eius repellat consequatur.";
  var n = document.getElementById("number").value;
  if (n > 0 && n <= 100) {
    var words = str.split(" ");
    var result = words.slice(0, n).join(" ");
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML =
      "Please enter a number between 1 and 100.";
  }
}
