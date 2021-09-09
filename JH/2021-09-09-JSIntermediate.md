# JS 중급

## 변수와 호이스팅
- var는 선언하기 전에도 사용할 수 있음 (호이스팅), 그러나 값이 할당되어 있지 않다면 undefined라고 뜰 것.

### 호이스팅
스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 작동
- Temporal Dead zone (TDZ) : let과 const는 이 영역에 영향을 받음. TDZ는 코드를 예측 가능하게 하고, 잠재적인 버그를 줄여줌.

### 변수의 생성과정
1. 선언 단계
2. 초기화 단계
3. 할당 단계
- var는 선언과 초기화가 동시에 진행. let은 3단계로 진행. const는 선언+초기화+할당 동시에 진행.
  - 따라서 다음과 같이 작성하는 경우 ```error```
  ```javascript
  const gender;
  gender = "male"; // error
  // const gender = "male"; // good
  ```

### 스코프
- var : 함수스코프
- let const : 블럭스코프
  - 코드 블럭 내에서 선언한 변수는 지역 변수