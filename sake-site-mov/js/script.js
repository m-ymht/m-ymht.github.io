

  //カルーセル
  $(".bxslider").bxSlider({
    ticker: true,
    speed: 40000,
    minSlides: 2,
    maxSlides: 6,
    slideWidth: 320,
  });

  //西暦を取得しfullYearに代入する
  const fullYear = new Date().getFullYear();
  if (fullYear >= 2025) {
    $("#this-year").text("2024 - " + fullYear);
  } else {
    $("#this-year").text(fullYear);
  };

