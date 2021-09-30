# **Vue.js Tutorial**

: 컴포넌트(Component) 기반의 SPA(Single Page Application)을 구축할 수 있게 해주는 프레임워크

- Component : 웹을 구성하는 다양한 UI 요소로, **재사용** 가능하도록 구조화 한 것.
- SPA : 단일 페이지 어플리케이션. 하나의 페이지 안에서 **필요한 영역만 로딩**되는 형태로 빠른 페이지 변환과 적은 트래픽 양이라는 특징 존재.

### Vue 시작하기

: Vue CLI(Command Line Interface)는 프로젝트 구조를 자동으로 셋팅, 라이브러리, 웹팩 설정에 대한 고민을 덜어주는 툴.

- CLI 글로벌로 설치 `npm install -g @vue/cli`
- 프로젝트 생성하기 `vue create <프로젝트명>`
    - preset 선택가능. 이 부분에 대해서는 다음에 자세히 알아보도록 하고
    - default는 babel, eslint 포함하고 있음.
- 프로젝트 폴더로 들어가서 `npm run serve` 한 후 로컬 서버에 들어가면 성공적으로 vue project가 생성된 것 확인 가능.

### CLI 2.x 와 CLI 3.x 간단 비교

: CLI 2.x 에서는 `npm install` 통해 package.json에 명세되어 있는 노드 모듈을 설치했어야 함.

: JS 프레임워크는 여러가지 부품을 가지고 자동차를 조립하는 느낌

- **node_modules**가 바로 부품을 모아놓은 곳이라고 할 수 있음
- 설치 내역을 적어두는 곳은 **pakage.json**

: CLI 3.x 부터는 **node_modules**가 프로젝트 생성시 만들어짐.

---

### Plugin

개발 중에도 프로젝트 개발을 위한 plugin을 추가할 수 있게 됨.

- Vue에서 제공하는 공식적인 plugin은 구글에 `@vue/cli-plugin-` `vue-cli-plugin` 을 검색했을 때 나오는 추천어!
- Vuetify pulgin 설치해보기 [https://vuetifyjs.com/en/getting-started/installation/](https://vuetifyjs.com/en/getting-started/installation/)

---

### 컴포넌트를 전역에서 사용하기

main.js에서 컴포넌트를 입력하면 전역으로 사용할 수 있음

- 컴포넌트 선언

    Vue.component('컴포넌트명', 옵션)

---

### Props

- 프롭스 속성은 컴포넌트 간에 데이터를 전달할 수 있는 컴포넌트 통신 방법.
- `상위 컴포넌트 → 하위 컴포넌트` 로 내려보내는 데이터 속성

```jsx
// 하위 컴포넌트의 내용
var childComponent = {
  props: ['프롭스 속성 명']
}
```

---

### getters

- 컴포넌트에서 VueX 데이터 접근할 때, 중복 코드를 반복 호출하는 문제점
    - `getters` 통해 해결
- 반복되는 코드를 줄여주는 component의 computed 속성과 비슷한 역할을 하는 `getters`

- computed와 다른 점 : 사용되고 있는 값을 활용하기 위해선, 함수에게 미리 알려줘야함

<store.js>

```jsx
getters: { // computed
    allUserCount : function(state) { 
      return state.allUsers.length;
    }
  },
```

```jsx
// arrow function인 경우

getters: { // computed
    allUserCount : state => { 
      return state.allUsers.length;
    }
  },
```

### Mapping getters - 1

- map getters 는 getters의 지도라고 표현할 수 있음.

- map getters는 `store.getters.~` 를 반복해서 작성해야하는 번거로움을 해결해줌.
    - store.js에서 getters에 선언되어 있는 값들을 컴포넌트 내로 간단하게 불러주는 역할을 함.
    - 컴포넌트 내에 import를 해서 사용함.
- map getters를 통해, 값이 선언된 것 처럼 사용할 수 있게 됨.
- `$store.getters`를 지우고 사용할 수 있음.

<store.js>

```jsx
// state를 첫 번째 인자에 써줘야 두 번째 인자에 getters가 올 수 있음
percentOfSeoul : (state, getters) => {
      return Math.round(getters.countOfSeoul/getters.allUserCount * 100)
    } // getters 안에 정의되어있는 값들을 활용
```

<AllUsers.vue>

```jsx
import { mapGetters } from 'vuex';

computed : {
      // map getters를 통해, 값이 선언된 것 처럼 사용할 수 있게 됨.
      // $store.getters를 지우고 사용할 수 있음.
      ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])
    },
```

```html
<!-- 기존에는 {{store.getters.allUserCount}} 등의 형식으로 작성됨 -->

<h1>All Users ({{allUserCount}})</h1>
<h3>Seoul Users : {{countOfSeoul}} ({{percentOfSeoul}} %)</h3>
```

---

### Mapping getters - 2

- 직관적으로 값을 변경하는 방법!

### map getters

- 객체형식으로 작성시 값이 선언되는 이름을 변경할 수 있음.

```jsx
...mapGetters({
        count : 'allUsersCount',
        count_seoul : 'countOfSeoul',
        percent_seoul : 'percentOfSeoul'
      })
```

### map state

- state 값을 직관적으로 선언할 수 있음.

```jsx
...mapState(['allUsers'])
```

---

### Mutations

- '변이'라는 의미를 가진 mutation은 state값을 변화시키는 역할을 함.
- 각각 컴포넌트에서 함수들로 state 접근이 아니라 mutation에 커밋해서 state 값 변경

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df2c0712-370a-4d54-8792-6eb485038ba3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df2c0712-370a-4d54-8792-6eb485038ba3/Untitled.png)

- State와 getters를 통해 컴포넌트에 접근하는 경우의 구조

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16b18c07-c276-4e90-ade0-59b752ae9530/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/16b18c07-c276-4e90-ade0-59b752ae9530/Untitled.png)

- 기능이 컴포넌트에 포함되어 있을 때의 구조
- 같은 기능을 가지고 있는 컴포넌트라도, 각 컴포넌트에서 함수가 실행되어 state를 변화시킴.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0c79a36-350d-4135-945a-6e30ef8eae88/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c0c79a36-350d-4135-945a-6e30ef8eae88/Untitled.png)

- 같은 기능을 하는 함수를 mutations 내에 만들어놓고, 이 mutation을 각각의 함수에서 실행시키는 것! (`commit`)
- 코드를 간단하게 할 수 있음

### mapMutation

- form 안에 작성된 값들을 같이 넘겨줘야 하는데, 그 값을 받는 인자 `payload` 를 만들어주어야 함.

<store.js>

```jsx
mutations: {
    addUser : (state, payload) => {
      state.allUsers.push(payload)
    }
 },
```

<SignUp.vue>

```jsx
import { mapMutations } from 'vuex'

...

methods: {
      ...mapMutations(['addUser']), //eventBus 부분을 대체할 예정
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        this.addUser(userObj) // userObj라는 인자는 payload 위치로 가게 됨. payload를 allUsers state에 push함.
        this.clearForm()
      },

...
```

### commit을 통해 mutation을 실행시키는 방식

<SignUp.vue>

```jsx
this.$store.commit('addUser', userObj)
```

- 괄호 안의 mutation을 실행하며, 넘겨줄 payload 인자를 작성해줌

---

### Actions

- mutation은 필요에 의해 기능을 제한시켜 놓음 : 모든 기능이 `동기`로 동작하는 것.
    - mutation : 동기로 동작
    - action : 비동기로 동작
    
- mutation은 목적은 state 관리.
    - 하나의 데이터에 여러 개의 컴포넌트가 접근하려 할 때, 이것들을 효율적으로 관리하는 것.
    - 비동기 로직이 포함이 되면, 같은 값에 대해 여러 개의 컴포넌트에서 변경을 요청했을 때, 그 순서를 알기가 어려움.
- 이를 막기 위해 비동기 로직은 **actions**에서 처리하게 됨.

**정리**

state를 변화시킬 때  : mutation

mutation을 동작시키는 비즈니스 로직 : actions

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feab9752-bddc-46eb-825a-9727493b9cea/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/feab9752-bddc-46eb-825a-9727493b9cea/Untitled.png)

- `dispatch`를 사용해 actions를 실행하고, mutation가 commit되면 state가 변경됨.

<store.js>

```jsx
actions: {
    // mutation을 commit하는 actions
    addUser : context => {
      context.commit('addUser') // mutation의 addUser를 commit 한다.
    }
  }
```

**혹은** 좀 더 간편하게 쓰기 위해선 객체 형태로 불러옴.

```jsx
actions: {
    // context와 payload가 있는데, context는 commit을 간단하게 써주기 위해 객체 형태로 불러온 것이고, 뒤에는 payload가 인자로 들어옴,
    addUser : ({ commit }, payload) => { // function({ commit })
      commit('addUser', payload)
    }
	}
```

<SignUp.vue>

```jsx
methods: {
      ...mapMutations(['addUser']), //eventBus 부분을 대체할 예정
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
  
        this.$store.dispatch('addUsers', userObj) // actions에 있는 addUser를 실행시킬 것. userObj를 payload로 넘김.
        this.clearForm()
      },
```

### mapActions

```jsx
import { mapActions } from 'vuex'

...
methods: {
      ...mapActions(['addUser']),
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        // this.$store.dispatch('addUser', userObj) // actions에 있는 addUser를 실행시킬 것. userObj를 payload로 넘김.
        this.addUser(UserObj)
        this.clearForm()
      },

...
```
