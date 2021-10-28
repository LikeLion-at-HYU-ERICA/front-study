<template>
<div>
  <!-- v-bind 를 생략하여 : 로 작성 가능. 객체 형식으로 활용 가능. -->
  <!-- js에서 css 요소를 표현할 때는 하이픈(-) 인식 안하기에 2개 이상의 단어 대문자로 표기 -->
  <div id = "computer" :style = "computedStyleObject"></div>
  <div>
    <button @click = "onClickButton('바위')">바위</button>
    <button @click = "onClickButton('가위')">가위</button>
    <button @click = "onClickButton('보')">보</button>
  </div>
  <div>{{result}}</div>
  <div> 현재 {{score}} 점입니다. </div>
</div>
</template>

<script>
  // 이미지 위치
  const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
  };

  // 점수표
  const scores = {
    가위: 1,
    바위: 0,
    보: -1,
  };

  const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
      return v[1] === imgCoord;
    })[0];
  };

  let interval = null;

  export default {
    data() {
      return {
        imgCoord: rspCoords.바위,
        result: '',
        score: 0,
      };
    },
    computed: {
      computedStyleObject() {
        return {
          // 캐싱되기에 성능이 좋아짐.
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0`,
        };
      }
    },
    methods: {
      changeHand(){
        interval = setInterval(() => {
          // 0.1초 마다 '바위 -> 가위 -> 보'로 변경되는 로직
          if (this.imgCoord === rspCoords.바위) {
            this.imgCoord = rspCoords.가위;
          } else if (this.imgCoord === rspCoords.가위) {
            this.imgCoord = rspCoords.보;
          } else if (this.imgCoord === rspCoords.보) {
            this.imgCoord = rspCoords.바위;
          }
        }, 100);
      },
      onClickButton(choice) {
        clearInterval(interval); // 잠깐 멈춰 결과를 보여줌
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(this.imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
          this.result = '비겼습니다.';
        } else if ([-1, 2].includes(diff)) {
          this.result = '이겼습니다.';
          this.score += 1;
        } else {
          this.result = '졌습니다.';
          this.score -= 1;
        }
        setTimeout(() => {
          this.changeHand();
        }, 1000);
      },
    },
    // Life Cycle : created, mounted, updated, dstroyed 가 중요
    beforeCreate() {
      console.log('beforeCreate');
    },
    // 컴포넌트가 보여지게 될 때 (화면에 나타나기 전)
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    // 컴포넌트가 보여지게 될 때 (화면에 나타나기 후)
    mounted() {
      console.log('mounted');
      this.changeHand();
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      // 화면에 컴포넌트가 보이지 않을 때도 (가위바위보 컴포넌트가 사라질 경우), interval 코드가 돌 수 있음. 
      // 메모리-누수를 방지해줌. 낭비되는 코드 작동을 멈춰줌.
      clearInterval(interval);
    },
    destroyed() {
      console.log('destroyed');
    },
  };
</script>

<style scoped>
  #computer {
    width: 142px;
    height: 200px;
    background-position: 0 0;
  }
</style>
