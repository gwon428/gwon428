// const boxEls = document.querySelectorAll(".box");

// boxEls 변수는 요소들 => addEvenLisster or classList 같은 명령을 점 표기법으로 바로 연결할 수 없음

// forEach 메소드 : 인수로 하나의 함수 추가 -> 함수 안에서 반복되는 각 요소를 처리할 수 있음
/* 콜백 함수
- 1. 요소 (반복되는 각 요소) : boxEl
- 2. 매개변수 (반복 순서를 가진 매개변수) : index
*/

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(boxEl, index);
// });

const boxEl = document.querySelector(".box");
// querySelector 메소드 => 검색을 통해 찾은 첫 번째 요소 하나만 반환
console.log(boxEl.textContent);

boxEl.textContent = "HEROPY!!";
console.log(boxEl.textContent);
