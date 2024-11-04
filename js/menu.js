$(function () {
  $("header .btn_mobile").click(function () {
    var listaMenu = $("nav.mobile");

    if (listaMenu.is(":hidden") == true) {
      var icone = $(".btn_mobile").find("i");
      icone.removeClass("fa-solid fa-bars");
      icone.addClass("fa-solid fa-x");
      listaMenu.slideToggle();
    } else {
      listaMenu.slideToggle();
      var icone = $(".btn_mobile").find("i");
      icone.removeClass("fa-solid fa-x");
      icone.addClass("fa-solid fa-bars");
    }
  });
});
