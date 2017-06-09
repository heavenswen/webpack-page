import 'assets/css/react.scss' //公共
import 'assets/css/login.scss'//当前
import "assets/css/demo.css"
import Rem from "assets/js/rem.js"

//jquery 写法
import $ from "jquery"
//jquery
(function ($) {
  function b() {
    console.log('b')
  }
  //font rem
  new Rem();

  window.$ = $
  window.jQuery = $
  var load = require("assets/js/jq-load.js");
  var jq = "jquery 引入";
  $('body').append(jq)

  //jquery类
  new $.demo()

  document.querySelector('img').addEventListener("click", function (e) {
    console.log(e.bubbles)
  })
  //vue 计算属性 观察者模式
  let name = {
    first: 'IOS',
    last: "Phone",
    get full() {
      //调用c的时候输出

      return (this.first + ' ' + this.last);

    },
    set full(p) {
      //set value
      let names = p.trim().split(' ')
      this.first = names[0]
      this.last = names[1]
    }
  }
  name.first = 'window'
  //console.log(name.first, name.last, name.full)
  name.full = 'APk PHONE';
  //console.log(name.first, name.last, name.full)
  // console.log(Object.keys(name))//first last full

  //Object.defineProperty(obj, prop, descriptor)
  //参数obj表示的是需要定义属性的那个对象,
  //参数prop表示需要被定义或者修改的属性名,
  //参数descriptor就是我们定义的那个属性prop的描述;
  const dream = { firstName: 'apk', lastName: 'phone' };
  Object.defineProperty(dream, 'name', {
    //value: 'value', //dream.name return dreamapple  but not has get and set
   // writable: true,//是否可写
    enumerable: true,//是否枚举，for 循环用 
    //configurable: false, //这个特性决定了对象的属性是否可以被删除,以及除writable特性外的其它特性是否可以被修改;并且writable特性值只可以是false
    get() {
      return this.firstName + ' ' + this.lastName;
    },
    set(p) {
      let names = p.trim().split(' ')
      this.first = names[0]
      this.last = names[1]
    }
  });

  console.log(Object.keys(dream))

  //dream.name return dreamapple


})($)

