// Your code goes here
// ابدأ بالإستماع لحدث DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // عند تحميل DOM بالكامل، استهدف عنصر الفقرة وقم بتغيير النص الخاص به
    const paragraph = document.getElementById("text");
    paragraph.textContent = "This is really cool!";
  });
  
