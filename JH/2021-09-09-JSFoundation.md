# JS 기초

### 변수
- let : 선언 후 다른 값 할당 가능
- const : 절대 바뀌지 않는 상수 (대문자로 선언하는 것 추천 for 협업)

### 자료형
- String
  - 큰 따옴표, 작은 따옴표
  - 백틱 사용시 변수를 함께 출력 가능   ``` `저는 ${변수} 입니다` ```
- Number
  - 사칙연산가능 
  - 0으로 나누면 무한대가 됨.
  - 숫자를 문자열로 나누면 Not a Number ```NaN``` -> **숫자와 관련한 작업할 때 유용**

### Boolean
- 참과 거짓
- 논리 연산

### Null & Undefined
- Null : 존재하지 않는 값
- Undefined : 할당 되지 않은 값

### 객체형과 심볼형

### typeof 연산자
- 변수의 자료형을 알아내게 도와줌
- API 통신, 다른 개발자가 작성한 변수의 타입을 알아야할 때 사용
- null 은 객체라고 나오는데, null은 객체가 아님..!!! => 초기 오류 But, 호환성을 위해 변경 X

---

### alert (알려줌)

### prompt (입력받음)
- 두 개의 인자를 받을 수 있는데, 2번째 인자는 기본값을 나타냄
- 숫자형을 입력받을 때는 형 변환 작업 필요
```jacvascript
  const toDate = prompt("예약일을 입력하세요","2020-10-");
```

### confirm (확인받음)
- 사용자의 action을 검토할 때 사용
- true/false 값 반환

### alert prompt confirm 의 단점
- 스크립트 일시 정지
- 스타일링 X

---

## 형변환
- 자바스크립트에는 ```자동 형 변환```이 있음.
  - "9080"/2 = 4540
  - "9"/"3" = 3
  - 원인을 찾기 힘든 에러를 만들 수 있으므로, ```명시적 형 변환```이 필요
  
- String()
- Number()
  - Number(null) // 0
  - Number(Undefiend) // NaN
  - Number(0) // false
  - Number('0') // true
  - Number('') // false
  - Number(' ') // true
- Boolean()
  - false : 0, 빈문자열, null, undefined, NaN
  - 이 외에는 true 반환

---

## 연산자

- 연산자에는 우선순위 있음.
- 증가 연산자, 감소 연산자 존재 (전위, 후위)

### 비교 연산자
- 일치 연산자(```===```)는 type까지 비교함. (동등 연산자 (==)는 type은 비교하지 않음.)

### 조건문
- if / else if / else

### 논리 연산자

- ```||``` (or)은 첫 true를 발견하는 즉시 평가 멈춤
- ```&&``` (and)는 첫 false를 발견하는 즉시 평가 멈춤
- 배치하는 순서가 성능을 위해 중요함!
  - 조건의 순서를 조절하여, 많은 데이터가 걸러질 수 있는 확률이 높은 조건 먼저 작성

---

## 반복문
- for / while / do .. while(적어도 한 번은 코드를 실행한다는 점에서 while 과 다름)
- break : 멈추고 빠져나옴
- continue : 멈추고 다음 반복 진행

### case 문
- case가 다양한 경우 if-else 문보다 더 간결하게 작성가능

---

## 함수
- 매개변수 있는 함수 / 없는 함수 작성 가능
- or 활용하기
  ```javascript
    function sayHello(name){
        let newName = name || "friend";
        let msg =   `Hello, ${newName}`;
        console.log(msg);
    }
    sayHello("Jo");
  ```
- 이를 default 활용해 구현할 수 있음
  ```javascript
  function sayHello(name = "friend){
        let msg =   `Hello, ${name}`;
        console.log(msg);
    }
    sayHello("Jo");
  ```
- 반환값이 있는 함수는 return 문 작성
- 하나의 함수가 하나의 작업에 집중하도록 작성, 네이밍 또한 직관적으로

## 함수 선언문 VS 함수 표현식

- 함수 선언문
  - 어디서든 호출 가능
  - 함수 호출 코드를 함수 선언문 위에 작성해도 OK
  - 자바스크립트는 인터프린트언어(위 아래서 아래로 차례로 생성)임에도 불구하고, 실행 전에 함수 선언문의 함수를 모두 생성해놓음 (호이스팅)
  ```javascript
  function sayHello(){
      console.log("Hello");
  }
  ```

- 함수 표현식
- 함수 호출 코드는 함수 표현식 아래에 작성해야함
  ```javascript
  let sayHello = function(){
      console.log("Hello);
  }
  ```

---

### 화살표 함수
```javascript
let add = (num1, num2) => {
    return num1 + num2;
}
```
- 한 줄짜리 코드라면 return, 중괄호 생략 가능

---

## 객체 Object
```javascript
const superman = {
    name : 'joy',
    age : 33, // 맨 뒤의 쉼표는 수정, 이동을 편리하게 하기 위함
}
```
- 접근 
  - ```superman.name```
  - ```superman['age']```
  - 없는 값에 접근하면 undefined
  - 프로퍼티 존재 여부는 ```in``` 을 통해 할 수 있음. (API 통신 등에서 활용)
- 추가
  - ```superman.gender = "male";```
  - ```superman['hairColor'] = "black";```
- 삭제
  - delete superman.hairColor;

## 객체 프로퍼티로 할당된 함수 method
```javasciprt
const superman = {
    name : 'joy',
    age : 33,
    sayHello : function(){ // or fly()
        console.log("안녕! ${name}");
    }
}
```

## 객체와 method 의 관계
- 위에 예제 코드는 에러가 남. name이 결정되지 않았기 때문
- 따라서 this 가 필요!

## 화살표 함수에서의 this
- 화살표 함수는 일반함수와 달리 자신만의 this 를 가지지 않음
- 화살표 함수 내부에서 this 사용시 그 this 는 외부에서 값을(전역 객체) 가져 옴.
- 브라우저 환경에서 전역 window
- node js에서 전역 global

---

## Array
  : 순서가 있는 리스트
- 문자, 숫자, 객체, 함수 포함 가능
- ```legth ```배열의 길이 구해줌
  - ```for``` 반복문에서 활용 가능
  - ```for...of``` 반복문 또한 사용 가능하나, 인덱스는 얻지 못함
- ```push()``` 배열 끝에 요소 추가
- ```pop()``` 배열 끝 요소 제거
- ```unshift()``` 배열 앞에서 추가 (여러 요소 추가 가능)
- ```shift()``` 배열 앞에서 제거




