<template>
  <div
    id="btn07"
    :class="{ active: hamburgerActive }"
    class="btn-trigger"
    @click="hamburger()"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    checkHamburger: {
      type: Boolean,
      default: () => {
        return false
      },
    },
  },
  data: () => ({
    hamburgerActive: false,
  }),
  watch: {
    checkHamburger(value) {
      console.log(value) // eslint-disable-line no-console
      this.hamburgerActive = value
    },
  },
  methods: {
    hamburger() {
      if (this.hamburgerActive === true) {
        // this.hamburgerActive = false
        this.$emit('observeHamburger')
      } else {
        // this.hamburgerActive = true
        this.$emit('observeHamburger')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
/*=============================
.btn-trigger
=============================*/
.btn-trigger {
  position: relative;
  width: 50px;
  height: 44px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.7);
  border: solid 10px transparent;
  box-sizing: content-box !important;
}
.btn-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
}
.btn-trigger,
.btn-trigger span {
  display: inline-block;
  transition: all 0.5s;
  box-sizing: border-box;
}
.btn-trigger span:nth-of-type(1) {
  top: 0;
}
.btn-trigger span:nth-of-type(2) {
  top: 20px;
}
.btn-trigger span:nth-of-type(3) {
  bottom: 0;
}

/*=============================
#btn01
=============================*/
#btn01.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn01.active span:nth-of-type(2) {
  opacity: 0;
}
#btn01.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}

/*=============================
#btn02
=============================*/
#btn02.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(45deg);
  transform: translateY(20px) rotate(45deg);
}
#btn02.active span:nth-of-type(2) {
  opacity: 0;
}
#btn02.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(-45deg);
  transform: translateY(-20px) rotate(-45deg);
}

/*=============================
#btn03
=============================*/
#btn03.active {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
#btn03.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn03.active span:nth-of-type(2) {
  -webkit-transform: translateY(0) rotate(45deg);
  transform: translateY(0) rotate(45deg);
}
#btn03.active span:nth-of-type(3) {
  opacity: 0;
}

/*=============================
#btn04
=============================*/
.btn04-section {
  -webkit-perspective: 1000px;
  perspective: 1000px;
}
#btn04 span:nth-of-type(3),
#btn04.active span:nth-of-type(3) {
  transition: none;
}
#btn04.active {
  -webkit-transform: rotateX(720deg);
  transform: rotateX(720deg);
}
#btn04.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn04.active span:nth-of-type(2) {
  -webkit-transform: translateY(0) rotate(45deg);
  transform: translateY(0) rotate(45deg);
}
#btn04.active span:nth-of-type(3) {
  opacity: 0;
}

/*=============================
#btn05
=============================*/
#btn05.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn05.active span:nth-of-type(2) {
  left: 50%;
  opacity: 0;
  -webkit-animation: active-btn05-bar02 0.8s forwards;
  animation: active-btn05-bar02 0.8s forwards;
}
@-webkit-keyframes active-btn05-bar02 {
  100% {
    height: 0;
  }
}
@keyframes active-btn05-bar02 {
  100% {
    height: 0;
  }
}
#btn05.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}

/*=============================
#btn06
=============================*/
#btn06.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn06.active span:nth-of-type(2) {
  left: 200%;
  opacity: 0;
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
  -webkit-animation: active-btn06-bar02 0.8s forwards;
  animation: active-btn06-bar02 0.8s forwards;
}
@-webkit-keyframes active-btn06-bar02 {
  100% {
    height: 0;
  }
}
@keyframes active-btn06-bar02 {
  100% {
    height: 0;
  }
}
#btn06.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}

/*=============================
#btn07
=============================*/
#btn07 span:nth-of-type(1) {
  -webkit-animation: btn07-bar01 0.75s forwards;
  animation: btn07-bar01 0.75s forwards;
}
@-webkit-keyframes btn07-bar01 {
  0% {
    -webkit-transform: translateY(20px) rotate(45deg);
  }
  50% {
    -webkit-transform: translateY(20px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes btn07-bar01 {
  0% {
    transform: translateY(20px) rotate(45deg);
  }
  50% {
    transform: translateY(20px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#btn07 span:nth-of-type(2) {
  transition: all 0.25s 0.25s;
  opacity: 1;
}
#btn07 span:nth-of-type(3) {
  -webkit-animation: btn07-bar03 0.75s forwards;
  animation: btn07-bar03 0.75s forwards;
}
@-webkit-keyframes btn07-bar03 {
  0% {
    -webkit-transform: translateY(-20px) rotate(-45deg);
  }
  50% {
    -webkit-transform: translateY(-20px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes btn07-bar03 {
  0% {
    transform: translateY(-20px) rotate(-45deg);
  }
  50% {
    transform: translateY(-20px) rotate(0);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#btn07.active span:nth-of-type(1) {
  -webkit-animation: active-btn07-bar01 0.75s forwards;
  animation: active-btn07-bar01 0.75s forwards;
}
@-webkit-keyframes active-btn07-bar01 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  50% {
    -webkit-transform: translateY(20px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(20px) rotate(45deg);
  }
}
@keyframes active-btn07-bar01 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(20px) rotate(0);
  }
  100% {
    transform: translateY(20px) rotate(45deg);
  }
}
#btn07.active span:nth-of-type(2) {
  opacity: 0;
}
#btn07.active span:nth-of-type(3) {
  -webkit-animation: active-btn07-bar03 0.75s forwards;
  animation: active-btn07-bar03 0.75s forwards;
}
@-webkit-keyframes active-btn07-bar03 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  50% {
    -webkit-transform: translateY(-20px) rotate(0);
  }
  100% {
    -webkit-transform: translateY(-20px) rotate(-45deg);
  }
}
@keyframes active-btn07-bar03 {
  0% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(0);
  }
  100% {
    transform: translateY(-20px) rotate(-45deg);
  }
}

/*=============================
#btn08
=============================*/
#btn08.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-315deg);
  transform: translateY(20px) rotate(-315deg);
}
#btn08.active span:nth-of-type(2) {
  opacity: 0;
}
#btn08.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(315deg);
  transform: translateY(-20px) rotate(315deg);
}

/*=============================
#btn09
=============================*/
#btn09.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(315deg);
  transform: translateY(20px) rotate(315deg);
}
#btn09.active span:nth-of-type(2) {
  opacity: 0;
}
#btn09.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(-315deg);
  transform: translateY(-20px) rotate(-315deg);
}

/*=============================
#btn10
=============================*/
#btn10.active {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

/*=============================
#btn11
=============================*/
#btn11.active {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

/*=============================
#btn12
=============================*/
#btn12.active {
  -webkit-transform: rotate(450deg);
  transform: rotate(450deg);
}

/*=============================
#btn13
=============================*/
#btn13.active span:nth-of-type(1),
#btn13.active span:nth-of-type(3) {
  width: 20px;
}
#btn13.active span:nth-of-type(1) {
  -webkit-transform: translate(-1px, 13px) rotate(-45deg);
  transform: translate(-1px, 13px) rotate(-45deg);
}
#btn13.active span:nth-of-type(3) {
  -webkit-transform: translate(-1px, -13px) rotate(45deg);
  transform: translate(-1px, -13px) rotate(45deg);
}

/*=============================
#btn14
=============================*/
#btn14.active {
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
#btn14.active span:nth-of-type(1),
#btn14.active span:nth-of-type(3) {
  width: 20px;
}
#btn14.active span:nth-of-type(1) {
  -webkit-transform: translate(-1px, 13px) rotate(-45deg);
  transform: translate(-1px, 13px) rotate(-45deg);
}
#btn14.active span:nth-of-type(3) {
  -webkit-transform: translate(-1px, -13px) rotate(45deg);
  transform: translate(-1px, -13px) rotate(45deg);
}

/*=============================
#btn15
=============================*/
#btn15.active span:nth-of-type(1),
#btn15.active span:nth-of-type(3) {
  width: 20px;
}
#btn15.active span:nth-of-type(1) {
  -webkit-transform: translate(31px, 13px) rotate(45deg);
  transform: translate(31px, 13px) rotate(45deg);
}
#btn15.active span:nth-of-type(3) {
  -webkit-transform: translate(31px, -13px) rotate(-45deg);
  transform: translate(31px, -13px) rotate(-45deg);
}

/*=============================
#btn16
=============================*/
#btn16.active {
  -webkit-transform: rotate(-360deg);
  transform: rotate(-360deg);
}
#btn16.active span:nth-of-type(1),
#btn16.active span:nth-of-type(3) {
  width: 20px;
}
#btn16.active span:nth-of-type(1) {
  -webkit-transform: translate(31px, 13px) rotate(45deg);
  transform: translate(31px, 13px) rotate(45deg);
}
#btn16.active span:nth-of-type(3) {
  -webkit-transform: translate(31px, -13px) rotate(-45deg);
  transform: translate(31px, -13px) rotate(-45deg);
}

/*=============================
#btn17
=============================*/
#btn17::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  content: '';
  width: 84px;
  height: 84px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0);
  transition: all 0.75s;
}
#btn17.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(45deg);
  transform: translateY(20px) rotate(45deg);
}
#btn17.active span:nth-of-type(2) {
  left: 60%;
  opacity: 0;
  -webkit-animation: active-btn17-bar02 0.8s forwards;
  animation: active-btn17-bar02 0.8s forwards;
}
@-webkit-keyframes active-btn17-bar02 {
  100% {
    height: 0;
  }
}
@keyframes active-btn17-bar02 {
  100% {
    height: 0;
  }
}
#btn17.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(-45deg);
  transform: translateY(-20px) rotate(-45deg);
}
#btn17.active::after {
  border: 4px solid #fff;
}

/*=============================
#btn18
=============================*/
#btn18 span:nth-of-type(1) {
  -webkit-animation: btn18-bar01 0.5s forwards;
  animation: btn18-bar01 0.5s forwards;
}
@-webkit-keyframes btn18-bar01 {
  0% {
    -webkit-transform: translateY(20px) rotate(-45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes btn18-bar01 {
  0% {
    transform: translateY(20px) rotate(-45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#btn18 span:nth-of-type(2) {
  -webkit-animation: btn18-bar02 0.5s forwards;
  animation: btn18-bar02 0.5s forwards;
}
@-webkit-keyframes btn18-bar02 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes btn18-bar02 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#btn18 span:nth-of-type(3) {
  -webkit-animation: btn18-bar03 0.5s forwards;
  animation: btn18-bar03 0.5s forwards;
}
@-webkit-keyframes btn18-bar03 {
  0% {
    -webkit-transform: translateY(-20px) rotate(45deg);
  }
  100% {
    -webkit-transform: translateY(0) rotate(0);
  }
}
@keyframes btn18-bar03 {
  0% {
    transform: translateY(-20px) rotate(45deg);
  }
  100% {
    transform: translateY(0) rotate(0);
  }
}
#btn18::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  content: '';
  width: 30px;
  height: 30px;
  margin: -16px 0 0 -16px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.1s;
  opacity: 0;
}
#btn18.active::after {
  -webkit-animation: circle 0.5s;
  animation: circle 0.5s;
}
@-webkit-keyframes circle {
  0% {
    -webkit-transform: scale(0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(3.5);
    opacity: 0;
  }
}
@keyframes circle {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(3.5);
    opacity: 0;
  }
}
#btn18.active span:nth-of-type(1) {
  -webkit-animation: active-btn18-bar01 0.5s 0.5s forwards;
  animation: active-btn18-bar01 0.5s 0.5s forwards;
}
@-webkit-keyframes active-btn18-bar01 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  100% {
    -webkit-transform: translateY(20px) rotate(-45deg);
  }
}
@keyframes active-btn18-bar01 {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(20px) rotate(-45deg);
  }
}
#btn18.active span:nth-of-type(2) {
  -webkit-animation: active-btn18-bar02 0.5s 0.5s forwards;
  animation: active-btn18-bar02 0.5s 0.5s forwards;
}
@-webkit-keyframes active-btn18-bar02 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes active-btn18-bar02 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
#btn18.active span:nth-of-type(3) {
  -webkit-animation: active-btn18-bar03 0.5s 0.5s forwards;
  animation: active-btn18-bar03 0.5s 0.5s forwards;
}
@-webkit-keyframes active-btn18-bar03 {
  0% {
    -webkit-transform: translateY(0) rotate(0);
  }
  100% {
    -webkit-transform: translateY(-20px) rotate(45deg);
  }
}
@keyframes active-btn18-bar03 {
  0% {
    transform: translateY(0) rotate(0);
  }
  100% {
    transform: translateY(-20px) rotate(45deg);
  }
}

/*=============================
#btn19
=============================*/
#btn19::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  content: '';
  width: 84px;
  height: 84px;
  margin: -45px 0 0 -45px;
  border-radius: 50%;
  border: 4px solid transparent;
  transition: all 0.75s;
}
#btn19.active span:nth-of-type(1) {
  -webkit-transform: translateY(20px) rotate(-45deg);
  transform: translateY(20px) rotate(-45deg);
}
#btn19.active span:nth-of-type(2) {
  left: 60%;
  opacity: 0;
  -webkit-animation: active-btn19-bar02 0.8s forwards;
  animation: active-btn19-bar02 0.8s forwards;
}
@-webkit-keyframes active-btn19-bar02 {
  100% {
    height: 0;
  }
}
@keyframes active-btn19-bar02 {
  100% {
    height: 0;
  }
}
#btn19.active span:nth-of-type(3) {
  -webkit-transform: translateY(-20px) rotate(45deg);
  transform: translateY(-20px) rotate(45deg);
}
#btn19.active::after {
  -webkit-animation: active-btn19 0.7s 0.25s forwards;
  animation: active-btn19 0.7s 0.25s forwards;
}
@-webkit-keyframes active-btn19 {
  0% {
    border-color: transparent;
    -webkit-transform: rotate(0);
  }
  25% {
    border-color: transparent #fff transparent transparent;
  }
  50% {
    border-color: transparent #fff #fff transparent;
  }
  75% {
    border-color: transparent #fff #fff #fff;
  }
  100% {
    border-color: #fff;
    -webkit-transform: rotate(-680deg);
  }
}
@keyframes active-btn19 {
  0% {
    border-color: transparent;
    transform: rotate(0);
  }
  25% {
    border-color: transparent #fff transparent transparent;
  }
  50% {
    border-color: transparent #fff #fff transparent;
  }
  75% {
    border-color: transparent #fff #fff #fff;
  }
  100% {
    border-color: #fff;
    transform: rotate(-680deg);
  }
}

/*=============================
body
=============================*/
body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  background: #9e9e9e;
  word-break: break-all;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
section {
  position: relative;
  width: 150px;
  padding: 80px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  counter-increment: section;
}
/* 1 2 3 4 5 ... */
section:before {
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  color: #fff;
  background: #bababa;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  z-index: +1;
  display: flex;
  justify-content: center;
  align-items: center;
  content: counter(section);
}
p._a {
  font-size: 13px;
  margin: 30px;
}
p._a .link {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding-left: 1.3em;
  text-indent: -1.3em;
}
p._a .link:before {
  content: '';
  display: inline-block;
  width: 5px;
  height: 5px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  margin-right: 10px;
}
</style>
