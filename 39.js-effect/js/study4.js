$(document).ready(function () {
  $(".list>li").each(function () {
    let result = Math.round(Math.random() * 1000) % 4
    if (result == 0) { $(this).addClass("mltr") } else if (result == 1) { $(this).addClass("mrtl") } else if (result == 2) { $(this).addClass("mbtt") } else { $(this).addClass("mttb") }
  })

  $(window).scroll(function () {
    let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산한 값
    let winHeight = $(window).height() / 2 // 브라우저화면의 높이(절반,*0.5로도 가능)를 계산


    $(".mltr,.mrtl,.mttb,.mbtt").each(function () {
      if (winst + winHeight > $(this).offset().top) {
        $(this).addClass("on")
      } else {
        $(this).removeClass("on")
      }
    })

  })




})