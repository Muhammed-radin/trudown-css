
$("body").append(`<div id="allScriptHtml"></div>`)

//alertNot('abc','','some','Msg()','fab fa-dochub')

function alertNot(msg, bgcolor, name, action, icon, sec, color) {
  if (name == undefined, null) {
    name = 'checknow'
  }
  if (bgcolor == undefined) {
    bgcolor = 'white'
  }
  if (msg == undefined) {
    msg = 'you not typed msg'
  }
  if (action == undefined) {
    action = 'alert("code-mistake:invalid value or you note added action")'
  }
  if (icon == undefined) {
    icon = 'fa fa-close'
  }
  if (sec == undefined) {
    sec = '3s'
  }
  $("#allScriptHtml").append(`
      <div class="bg-alrtNotfy">
        <div class="alrtNotfy">
          <i class="` + icon + ` -icons"></i><center>` + msg + `</center><b><a href="#" onclick='actionaaa()' class='button' style="text-decoration: none">` + name + `</a></b>
        </div>
      </div>
      <script>
        function actionaaa() {
          `+action+`
        }
      </script>
      <style>
      .bg-alrtNotfy {
        background: ` + bgcolor + `;
        color: ` + color + `;
        box-shadow: 1px 1px 3px 1px #cfcfcf;
        border-radius: 1px;
        position: fixed;
        top: -10rem;
        width: 90% ;
        margin: .7rem;
        font-family: 'Courier New', Courier, monospace;
        padding: .5rem;
        z-index: 2;
        animation: downNot ` + sec + ` 1;
      }
      </style>
      `)
}

function Msg(msg, color) {
  $('#msg').fadeIn(500)
  $("#allScriptHtml").append(`
      <div class="msg" id="msg">
      <center>` + msg + `</center>
    </div>
    <style>
    .msg {
 background: #ccc;
 width: max-content;
 padding: .8rem;
 border-radius: 25px;
 position: fixed;
 color: ` + color + `;
 padding-left: 2rem;
 padding-right: 2rem;
 top: 80%;
 position: absolute;
  top: 80%;
  left: 50%;
  font-family: 'Courier New', Courier, monospace;
  transform: translate(-50%, -50%);
 z-index: 10;
}
@media screen and (max-width: 650px) {
  .msg {
    
  }
}
    </style>
  `)
  $("#msg").fadeOut(2000, () => {
    $("#msg").remove()
  })
  setInterval(function() {
    $("#msg").fadeOut(2000, () => {
      $("#msg").remove()
    })
  }, 5000)
}
function onAlert(head,message,icon) {
  $("#allScriptHtml").append(`
   <div class="bg alert" id="falert">
    <i class="`+icon+`"></i><span class="m1">`+head+`</span>
    <hr>
    <span class="m1">
       `+message+`
    </span>
    <br>
    <div>
      <button class="sec-button" onclick="onHider('falert',true)">ok</button>
    </div>
  </div>
  `)
}

// onAlert('some','hello','fa fa-warning')


function onHider(id, boolean) {
  if (boolean == true) {
  $('#'+id).fadeOut(500,function (){
    $('#'+id).css('display', 'none')
  })
    //document.getElementById(id).style.display = 'none'
  } else {
    $(id).css('display', 'block')
    // document.getElementById(id).style.display = 'block'
  }
}

function changeToDark() {
  $("body").append('<style></style>')
  $('style').html(`
  :root {
  --grey: white;
  --bg: grey;
  --brdr: white;
  --brdr1: whitesmoke;
}
  `)
}

function changeToLight() {
  $("body").append('<style></style>')
  $('style').html(`
  :root {
  --grey: black;
  --bg: ghostwhite;
  --brdr: white;
  --brdr1: whitesmoke;
}
 `)
}



function openModal(id) {
  $("body").append(`<style></style>`)
  $(id).css('display', 'block')
  document.getElementById(id).style.display = 'block'
}

var elem = document.querySelector("html");
function fullScreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
