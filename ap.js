//this to select grandparent
const questions = document.querySelectorAll(".question");
/*=====loop over the entire granparentEl===*/

questions.forEach(function (question) {
  //console.log(question);
  //to select a button inorder to limit
  const btn = question.querySelector(".question-icon");
  //console.log(btn);
  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});
