$("body").append(`<div id="allScriptHtml"></div>`)



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
    action = 'alert("invalid value")'
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
          <i class="` + icon + ` -icons"></i><center>` + msg + `</center><b><a href="#" onclick='` + action + `' style="text-decoration: none">` + name + `</a></b>
        </div>
      </div>
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



var boolean = Boolean()

function onhider(id, boolean) {
  if (boolean == true) {
    $(id).css('display', 'none')
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