function toggleVideo1_7() {
  document.getElementById("Video").src = "./videos/1_7.mp4";
}

function toggleVideo8A() {
  document.getElementById("Video2").src = "./videos/8A.mp4";
  document.getElementById("Video2").width = "500"; // 클릭하면 화면크기 500으로 만들기 오예
}

function toggleVideo8B() {
  document.getElementById("Video2").src = "./videos/8B.mp4";
  document.getElementById("Video2").width = "500";

}
function toggleVideo8C() {
  document.getElementById("Video2").src = "./videos/8C.mp4";
  document.getElementById("Video2").width = "500";

}

function toggleVideo11A() {
  document.getElementById("Video3").src = "./videos/11A.mp4";
  document.getElementById("Video3").width = "500";

}

function toggleVideo11B() {
  document.getElementById("Video3").src = "./videos/11B.mp4";
  document.getElementById("Video3").width = "500";
}

function toggleVideo15B() {
  document.getElementById("Video4").src = "./videos/15B.mp4";
  document.getElementById("Video4").width = "500";
}

function toggleVideo15B() {
  document.getElementById("Video4").src = "./videos/15B.mp4";
  document.getElementById("Video4").width = "500";

}

function toggleVideo_Good() {
  document.getElementById("Video5").src = "./videos/Good.mp4";
  document.getElementById("Video5").width = "500";

}

function toggleVideo_Bad() {
  document.getElementById("Video5").src = "./videos/Bad.mp4";
  document.getElementById("Video5").width = "500";

}

$(".start").click(function(){  //스타트버튼을 누르면
      $(".start").fadeOut();
  });

$("#button8A").click(function(){   //8A버턴을 누르면
    $("#button8A").fadeOut();
    $("#button8B").fadeOut();
    $("#button8C").fadeOut();
    $("#Video").fadeOut();

  });

$("#button8B").click(function(){
  $("#button8A").fadeOut();
  $("#button8B").fadeOut();
  $("#button8C").fadeOut();
  $("#Video").fadeOut();
});

$("#button8C").click(function(){ 
  $("#button8A").fadeOut();
  $("#button8B").fadeOut();
  $("#button8C").fadeOut();
  $("#Video").fadeOut();
});

$("#button11A").click(function(){ //11A 버튼을 누르면
  $("#button11A").fadeOut();
  $("#button11B").fadeOut();
  $("#Video2").fadeOut();
});

$("#button11B").click(function(){ //11B 버튼을 누르면
  $("#button11A").fadeOut();
  $("#button11B").fadeOut();
  $("#Video2").fadeOut();
});

$("#button15A").click(function(){ //15A 버튼을 누르면
  $("#button15A").fadeOut();
  $("#button15B").fadeOut();
  $("#Video3").fadeOut();
});

$("#button15B").click(function(){ //15B 버튼을 누르면
  $("#button15A").fadeOut();
  $("#button15B").fadeOut();
  $("#Video3").fadeOut();
});

$("#button_Good").click(function(){ //_Good 버튼을 누르면
  $("#button_Good").fadeOut();
  $("#button_Good").fadeOut();
  $("#Video4").fadeOut();
});

$("#button_Bad").click(function(){ //_Bad 버튼을 누르면
  $("#button_Bad").fadeOut();
  $("#button_Bad").fadeOut();
  $("#Video4").fadeOut();
});

$(document).ready(function(){

  var ve = document.getElementById("Video");      //첫번째 스타트 눌렀을때 비디오화면
  var ve2 = document.getElementById("Video2");    // 두번째 분기 8A 비디오화면
  var ve3 = document.getElementById("Video3");    // 11번째 실험 세번째 분기 화면
  var ve4 = document.getElementById("Video4");    // 마지막 화면


  if( ve != null && ve.addEventListener) {

      ve.addEventListener('ended', function() {

        $("#button8A").show();
        $("#button8B").show();
        $("#button8C").show();

      },false);

  }

  if( ve2 != null && ve2.addEventListener) {      

    ve2.addEventListener('ended', function() {  //8번째 분기 화면이 멈추면

      $("#button11A").show();
      $("#button11B").show();

    },false);

}

if( ve3 != null && ve3.addEventListener) {

  ve3.addEventListener('ended', function() {

    $("#button15A").show();
    $("#button15B").show();

  },false);

}

if( ve4 != null && ve4.addEventListener) {

  ve4.addEventListener('ended', function() {

    $("#button_Good").show();
    $("#button_Bad").show();

  },false);

}


});
