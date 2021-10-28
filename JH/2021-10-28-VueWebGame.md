### 데이터 가공 로직에서 computed를 사용하는 이유
- "성능"을 높이기 위함
- computed를 사용하지 않는 경우, 다른 부분이 바뀌어도 계산로직이 다시 계산되는 비효율적인 과정이 발생.
- computed를 사용하는 경우 '캐싱'이 됨. computed에서 캐싱이 되기 때문에 계산 로직을 반복하지 않음.
- 따라서 성능 높일 수 있음


### v-show , v-if의 차이
- 공통점 : 둘다 화면에서 보이지 않게 할 수 있음
- 차이점
  - v-show : false인 경우 style 속성에 의해 display:none 처리가 됨
  - v-if : false일 때 태그가 생성되지 않음. 즉 주석 처리
- 사용에 따라 레이아웃에 영향을 줄 수 있음.


### Vue에서 컴포넌트명은 2 단어 이상으로 지음 (Vue.js 공식문서 스타일가이드 참고)
Ex. `RockScissorsPaper.vue`, `responseCheck.vue`.
- 다른 태그와 헷갈리지 않기 위함


### async를 붙이는 이유는 await을 사용하기 위함
