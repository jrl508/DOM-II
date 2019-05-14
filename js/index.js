// Your code goes here
var coll = document.querySelectorAll(".collapsible");
var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = document.querySelector('.text-content');
//     var image = document.querySelector('.img-content');

//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//       image.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//       image.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = document.querySelector('.content-section');
      var contentIn = document.querySelector('.inverse-content');  
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        contentIn.style.display = "none";

      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        contentIn.style.display = "flex";
        contentIn.style.maxHeight = contentIn.scrollHeight + "px";
      } 
    });
  }

  let inverseContent = document.querySelector('.inverse-content');
  let hiddenContent = inverseContent.style.display = "none";

  inverseContent.addEventListener('load', hiddenContent)