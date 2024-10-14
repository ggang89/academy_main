$(document).ready(function () {
  let ww = $(window).width();
  let wh = ww * 0.5;

  function layout() {
    ww = $(window).width();
    wh = $(window).height();
    $(".bg_wrap,.main_wrap").css({
      width: ww,
      height: wh * 3,
    });
    $(".page").css({
      width: ww,
      height: wh,
    });
    $("body").css({
      height: wh * 3,
    });
    if (ww < 1080) {
      wh = ww * 1.6;
      //alert(wh);
      $("body").css({
        height: wh * 3,
      });
      $(".page").css({
        width: ww,
        height: wh,
      });
      $(".bg_wrap,.main_wrap").css({
        width: ww,
        height: wh * 3,
      });
    }
  }

  layout();

  $(window).resize(function () {
    layout();
  });

  // 자동으로 이미지 변경 + 마지막 나무 이미지 오른쪽으로 이동

  $(".title_box").fadeIn(1000, function () {
    $(".title_box")
      .delay(2000)
      .fadeOut(1000, function () {
        let img_num_at = 1;

        setInterval(function () {
          img_num_at++;

          if (img_num_at > 21) {
            img_num_at = 21;
          }

          $(".bg_wrap")
            .children("img")
            .attr({
              src: `./img/tree${img_num_at}.png`,
            });
        }, 500);
      });
  });

  $(".land").css({
    height: 0,
  });

  // 거꾸로 시작하는 페이지 + 배경 색 변경
  let wrap_h = $(".main_wrap").height();
  $(window).scrollTop(wrap_h);
  $(".box").css({
    display: "none",
  });
  setTimeout(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      10000,
      function () {
        $(".bg_wrap").css({
          background: " rgba(40, 203, 239, 0.2)",
        });
        $(".land").css({
          height: "70px",
          background: "saddlebrown",
          opacity: 0.8,
        });

        $(".img_box_sc").animate(
          {
            left: "18%",
          },
          1000,
          function () {
            $(".box_1").fadeIn(500);
          }
        );
      }
    );
  }, 9000);

  // 메뉴 누르면 페이지 이동하는 거

  $(".menu")
    .each(function (index) {
      $(this).attr("data-index", index);
    })
    .click(function () {
      let di = $(this).attr("data-index");
      let page_h = $(".page").height();
      $("html,body").animate({
        scrollTop: page_h * di,
      });
      $(".menu").removeClass("on");
      $(".menu").eq(di).addClass("on");
    });

  //구름 상자 스크롤 다운시 나타나는 거
  let st = $(window).scrollTop();
  let sct = st;
  $(window).scroll(function () {
    st = $(window).scrollTop();

    if (sct < st) {
      d = "down";
      $(".ja").fadeOut(300);
      if (0 < st && st < 600) {
        $(".box_1,.jack_1,.monster").fadeIn(500);
      } else if (830 < st && st < 1300) {
        $(".box_2,.jack_1,.monster").fadeIn(500);
      } else if (1300 < st) {
        $(".box_3,.house,.jack_1,.monster").fadeIn(500);

        sct = st;
      }
    } else if (sct >= st) {
      d = "up";

      $(".box,.jack_1,.house,.monster").fadeOut(500);
      $(".ja").fadeIn(300);
      sct = st;
    }
  });

  //잭,집 나타났다 사라지기

  $(".menu_1").click(function () {
    $(".ja,.monster,.house,.box_2,.box_3").fadeOut();
    $(".box_1").fadeIn(500);
  });
  $(".menu_2").click(function () {
    $(".ja,.monster,.house,.box_1,.box_3").fadeOut();
    $(".box_2").fadeIn(500);
  });
  $(".menu_3").click(function () {
    $(".ja,.monster,.box_1,.box_2").fadeOut();
    $(".box_3,.house").fadeIn(500);
  });
  $(".top_menu").click(function () {
    $(".jack_1").fadeOut();
    $(".monster,.ja").fadeIn(500);
  });

  //마우스
  const cursor = document.getElementById("cursor");
  document.onmousemove = (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  };

  $(".p_box,.mo_logo").on({
    click: function () {
      let i = $(this).index();
      $(".po_link").fadeIn(500);
      $(".po_0").fadeOut(500);
      $(".po_0").eq(i).fadeIn(500);
    },
  });
  $(".but_close").click(function () {
    $(".po_link,.po_0").fadeOut(500);
  });
});
