function togNav() {
  var nav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  var menu = document.getElementById("menu");
  if (nav.style.width == '80px') {
    nav.style.width = '0';
    main.style.marginLeft = '0';
    menu.classList.add("active");
  } else {
    nav.style.width = "80px";
    main.style.marginLeft = '80px';
    menu.classList.remove("active");
  }
}

$( "#menuicon" ).click(function() {
        $(this).find(".icon").toggleClass('fa-bars fa-stream',1500);
    });
