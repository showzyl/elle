
'use strict'


export default {
  collect(data, cb) {
    var me = this;
    data.route = 'mapi/wishlist/add';
    data.format = 'jsonp';
    this.$http.jsonp(
      window.q.interfaceHost +'index.php?',
      {params: data})
    .then(res => {
      Indicator.close()
      //console.log(res)
      let data = res.body;
      if(data.code+'' === '0'){
        cb && cb(data);
      } else {
        // 无数据
        cb && cb('no data');
      }
    }, err => {
      cb && cb('err');
    })
  },

  getEl(el, tagName) {
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
  },

  rmEl(el) {
    const oParent = el.parentNode;
    if (oParent) {
      oParent.removeChild(el);
    }
  },

  // 判断页面滚动方向
  scrollFunc() {
    let scrollAction = {x: 0, y: 0}, scrollDirection;
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
  },

  // 文档高度
  getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  },

  // 可视窗口高度
  getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  },

  // 滚动条滚动高度
  getScrollHeight() {
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


}

