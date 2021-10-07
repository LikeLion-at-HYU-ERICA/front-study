<template>
    <div>
        <!-- 축약형으로 :class 로 작성 가능 -->
        <div id = "screen" v-bind:class = "state" @click="onClickScreen">{{message}}</div>
        <div>
            <p>평균시간</p>
            <!-- 축약형 @로 작성 가능 -->
            <button v-on:click = "onReset">RESET</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            result : [],
            state : "waiting",
            message : "클릭 후 시작하세요.",
        }
    },
    methods : {
        onReset(){},
        onClickScreen(){
            if (this.state === "waiting"){
                this.state = "ready";
            } else if (this.state = "ready") {
                this.state = "now";
            } else if (this.state = "now") {
                this.state = "waiting";
            }
        }
    }
}
</script>
<style scoped>
#screen{
    width: 300px;
    height: 200px;
    text-align: center;
    user-select: none;
}
#screen.waiting{
    background-color: aquamarine;
}
#screen.ready{
    background-color: plum;
}
#screen.now{
    background-color: greenyellow;
}
</style>
