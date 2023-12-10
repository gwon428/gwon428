const boxEl = document.querySelector(".box");

console.log(boxEl);

boxEl.addEventListener("click", function () {
  // ddEventListener : 요소에서 이벤트가 발생하는지 듣고 있다가 실제 이벤트가 발생하면 연결된 함수 실행
  console.log("Click!!!");
  boxEl.classList.add("active");

  let hasActive = boxEl.classList.contains("active");
  //   contains : 속성의 값이 있는지 확인하는 메소드
  console.log(hasActive);

  boxEl.classList.remove("active");
  hasActive = boxEl.classList.contains("active");
  console.log(hasActive);
});
