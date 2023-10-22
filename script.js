$(document).ready(function(){
    $(window).scroll (function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
        }else{
          $('.navbar').removeClass("sticky");
      }
    });
    $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
    });
  });
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  var tablink,tabcontent;
  function opentab(tabname) {
    for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }