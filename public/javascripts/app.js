(function () {

    var imgList = document.getElementsByTagName('img');

    function init() {
        for (var i = 0; i < imgList.length; i++) {
            ~function (i) {
                var curImg = imgList[i];

                if (curImg.isLoad) return;

                var curImgT = utils.offset(curImg).top + curImg.offsetHeight;

                var winT = (document.documentElement.clientHeight || document.body.clientHeight) + (document.documentElement.scrollTop || document.body.scrollTop);

                if (curImgT < winT) {
                    var oImg = new Image;
                    oImg.src = curImg.getAttribute("trueImg");
                    oImg.onload = function () {

                        curImg.src = this.src;
                        curImg.isLoad = true;
                        fadeIn(curImg);
                    }
                }
            }(i);
        }
    }

    function fadeIn(curImg) {
        var step = (1 / 100) * 10;
        var count = 0;
        var timer = window.setInterval(function () {
                                           if (count >= 1) {
                                               window.clearInterval(timer);
                                               curImg.style.opacity = 1;
                                               curImg.style.filter = "alpha(opacity=100)";
                                               return;
                                           }
                                           count += step;
                                           curImg.style.opacity = count;
                                           curImg.style.filter = "alpha(opacity=" + count * 100 + ")";
                                       }, 10
        );
    }

    var utils = {};
    utils.offset = function (curEle) {
        var t = curEle.offsetTop, l = curEle.offsetLeft, p = curEle.offsetParent;
        while (p) {
            if (navigator.userAgent.indexOf("MSIE 8.0") === -1) {
                t += p.clientTop;
                l += p.clientLeft;
            }
            t += p.offsetTop;
            l += p.offsetLeft;
            p = p.offsetParent;
        }
        return {top: t, left: l};
    };

    window.setTimeout(function () {
        init()
    }, 0);
    window.onscroll = init;


})()

itemList("money_item_list", 'bgOrange');
itemList('fyList', 'fyListBg')
function itemList(list1, list2) {
    var fys = document.getElementsByClassName(list1)
    for (var o = 0, lengthA = fys.length; o < lengthA; o++) {
        fyList(fys[o], list2)
    }
}
function fyList(a, b) {
    $(a).find('li').click(function () {
                              var fyList = $(a).find('li');
                              for (var i = 0, len = fyList.length; i < len; i++) {
                                  if (this === fyList.get(i)) {
                                      fyList.get(i).className = b
                                  } else {
                                      fyList.get(i).className = ""

                                  }
                              }
                          })
}


$(".sign").click(function () {
                     if ($(this).text() === '登录') {

                         login();
//                             register();
                         $('.sign_on').css('display', 'block');
                     } else {

                         $('#bandCard').css('display', 'none');
                         $('.my_account').css('display', 'block');

                     }
                 }
)
//注册页面
$('.id_zh').click(function () {
//        window.open('register.html')
                      register();
                  }
)
$('.id_helpIng').click(function () {
                           window.open('helpIng.html')
                       }
)
code('banCard0', 'bandCard', 'banCard0', 'navColor', 'div');
code('bandCard1', 'bandCard2', 'bandCard1', 'greenNum', 'li');
code('my_accountLeft', 'my_accountRight', 'my_account01', 'bg', 'div');
$('.my_accountRight .my_account01').css('display', 'none');
$('.banOuter .bandCard1').css('display', 'none');
function code(a, b, c, d, e) {
    var ulList = document.getElementById(a), ulLists = ulList.getElementsByTagName(e);
    var divList = document.getElementById(b), divLists = divList.getElementsByClassName(c);
    ~function bindCard(far, son) {
        for (var i = 0, len = far.length; i < len; i++) {
            ~function (i) {
                far[i].onclick = function (e) {
                    e.stopPropagation()
                    e.returnValue = false;
                    for (var j = 0, len = son.length; j < len; j++) {
                        if (j === i) {
                            if (e.target === far[i]) {
                                $('#bandCard').css('display', 'block');
                                $('.my_account').css('display', 'none')
                            } else {
                                $('#bandCard').css('display', 'none');
                                $('.my_account').css('display', 'block')
                            }

                            far[i].className = d;
                            son[i].className = c + " navDis";

                            continue;
                        } else {

                            far[j].className = "  pointer ";
                            son[j].className = c;

                        }
                    }
                }
            }(i)
        }
    }(ulLists, divLists)
}

$('#true_qd').click(function () {
//            init()
                        var boole = document.getElementById('bool');
                        if (!boole.bool) {
                            boole.setAttribute('bool', 'true');
                        }


                        if (!!(boole.bool = "true")) {
                            boole.setAttribute('bool', 'false');
                            $(this).text('已签到');
                            $(this).attr("class", 'noqd')
                            $('#my_account_qd').css('display', 'block');

                            accountQianDao();
                            $('#true_qd').unbind('click');
                            return;
                        }

                    })
function accountQianDao() {
    var timer = window.setTimeout(function () {
                                      $('#my_account01Top').css('display', 'none');
                                      $('#my_account01Foot').css('display', 'block');
                                      $('#my_account_qd').css('display', 'none');

                                      window.clearTimeout(timer);
                                      accountQianDao = null;
                                  }, 3000
    )
}
$('#bool').click(function () {
                     $('#my_account01Top').css('display', 'block');
                     $('#my_account01Foot').css('display', 'none');
                 })