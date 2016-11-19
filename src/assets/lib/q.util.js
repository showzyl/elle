// export default function test(){
//   console.log(123);
// }
'use strict'

let util = {}

util.jsonp = function(option, callbackName){
  //没有url，函数结束
  if(!option.url || !callbackName){
    return false;
  }
  var data=option.data || {};
  //获得一个唯一的字符串
  var jsc = new Date().getTime();
  //建立暂时的函数式
  data[callbackName]='XD'+jsc++;
  window[data[callbackName]]=function(json){
    option.callback(json);
  }
  var url=option.url+'?'+param(data);
  //获得script
  getScript(url,function(){
    //执行后删除
    setTimeout(function(){
      try{
        delete window[data[callbackName]];
      }catch(e){
        window[data[callbackName]]=undefined;
      }
    }, 50)
  })
  //内部函数
  //格式化参数
  function param(obj) {
    var pairs = [];
    for(var name in obj) {
      var pair = encodeURIComponent(name) + '=' +  encodeURIComponent(obj[name]);
      pairs.push(pair.replace('/%20/g', '+'));
    }
    return pairs.join('&');
  }
  function getScript(url, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = script.onreadystatechange = function() {
      if (!this.readyState ||
        this.readyState === "loaded" ||
        this.readyState === "complete") {
        this.onload = this.onreadystatechange = null;
        document.getElementsByTagName('head')[0].removeChild(this);
        callback();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(script);
  }

}

util.getEl = function (el, tagName) {
  return document.querySelector(el);
  // # id . class tag
  // var first = el.substr(0, 1);
  // console.log(first);

  // if (first === '#') {
  //   return document.getElementById(el.substr(1, el.length))
  // }

  // if (first === '.') {
  //   return document.getElementsByClassName(el.substr(1, el.length))
  // }
}

util.rmEl = function (el) {
  var oParent = el.parentNode;
  if (oParent) {
    oParent.removeChild(el);
  }
}

// 判断页面滚动方向
util.scrollFunc = function () {
  var scrollAction = {x: 0, y: 0}, scrollDirection;
  var diffX = scrollAction.x - window.pageXOffset;
  var diffY = scrollAction.y - window.pageYOffset;
  //console.log(diffX, diffY)
  if (diffX < 0) {
    // Scroll right
    scrollDirection = 'right';
  } else if (diffX > 0) {
    // Scroll left
    scrollDirection = 'left';
  } else if (diffY < 0) {
    // Scroll down
    scrollDirection = 'down';
  } else if (diffY > 0) {
    // Scroll up
    scrollDirection = 'up';
  } else {
    // First scroll event
    //console.log(11111)
    scrollDirection = '';
  }
  scrollAction.x = window.pageXOffset;
  scrollAction.y = window.pageYOffset;
  //console.log(scrollAction, scrollDirection)
  return scrollDirection;
}

// 文档高度
util.getDocumentTop = function () {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

// 可视窗口高度
util.getWindowHeight = function () {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

// 滚动条滚动高度
util.getScrollHeight = function () {
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}


export default util

