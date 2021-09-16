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

### Plugin

개발 중에도 프로젝트 개발을 위한 plugin을 추가할 수 있게 됨.

- Vue에서 제공하는 공식적인 plugin은 구글에 `@vue/cli-plugin-` `vue-cli-plugin` 을 검색했을 때 나오는 추천어!
- Vuetify pulgin 설치해보기 [https://vuetifyjs.com/en/getting-started/installation/](https://vuetifyjs.com/en/getting-started/installation/)

### 컴포넌트를 전역에서 사용하기

main.js에서 컴포넌트를 입력하면 전역으로 사용할 수 있음

- 컴포넌트 선언

    Vue.component('컴포넌트명', 옵션)

### Props

- 프롭스 속성은 컴포넌트 간에 데이터를 전달할 수 있는 컴포넌트 통신 방법.
- `상위 컴포넌트 → 하위 컴포넌트` 로 내려보내는 데이터 속성

```jsx
// 하위 컴포넌트의 내용
var childComponent = {
  props: ['프롭스 속성 명']
}
```