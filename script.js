$(document).ready(function(){
    $('#myModel').modal('show');
});

$(window).on('load',function(){
    setTimeout(function(){
        $('#myModel').modal('hide');
        
},3000);
});

function lockScroll() {
    document.body.classList.toggle('lock-scroll');
};


// function LoadOnce(){
//     window.location.reload();
// }



if (window.location.href.indexOf('reload')==-1) {
    window.location.replace(window.location.href+'?reload');
}

function navbutton() {
    document.getElementById("slider").style.width = "100%";
  }
  
  function navbutton() {
    document.getElementById("slider").style.width = "0%";
  }


    