

// 2. disable 활성 유틸 함수 만들기
export function disableElement(node) {
  node.disabled = true; // 비활성화, 클릭 허용 안됨
}

export function enableElement(node) {
  node.disabled = false; // 활성화, 클릭 허용 됨
}


// 4. visible 활성 유틸 함수 만들기
// 기록 버튼을 누르면 리스트가 등장하게 설정
export function visibleElement(node) {
  node.hidden = false; // 클래서에서 hidden 없애면 리스트가 보임
}

export function invisibleElement(node) {
  node.hidden = true; // html요소에 hidden이 true니까 리스트가 안보임
}