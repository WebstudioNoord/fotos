var photos = document.getElementsByClassName("product-gallery-container")[0];
var list = document.getElementsByClassName("cboxElement product-main-photo");
var hrefs='';
for (i = 0; i < list.length; i++) { 
  //list[i].style.border = "5px solid red";
  hrefs+=list[i].getAttribute('href')+'\n';
  
  var a2 = document.createElement('a');
  a2.href = list[i].getAttribute('href');
  //a2.download = list[i].getAttribute('href');
  //a2.download = (list[0].getAttribute('title')+'_'+(i+1)).replace(/[^a-zA-Z0-9_-]/g,'_');
  //a2.download = (document.title+'_'+(i+1)).replace(/[^a-zA-Z0-9_-]/g,'_');
  var ext=list[i].getAttribute('href').split(".").pop().toLowerCase();
  var title=(window.location.pathname).split("/").pop();
  if (list.length>1) {
    title+='-'+(i+1);
  }
  //alert(title[title.length-1]);
  a2.download = title+'.'+ext;
  a2.className = 'download_file';
  photos.appendChild(a2);
}

var button = document.createElement("button");
button.type="button";
button.id = "downloadAll";
var tText = (list.length>1) ? 'Download Images' : 'Download Image';
var t = document.createTextNode(tText);       // Create a text node
button.appendChild(t); 
button.className = 'btn';
button.style.cssText = 'background-color: #ce0000;color: #ffffff;font-size: 22px;line-height: 18px;margin-top: 125px;padding: 15px;text-transform: uppercase;';
photos.appendChild(button);

document.getElementById("downloadAll").addEventListener('click', function() {
    var buttons = document.getElementsByClassName("download_file"); // get all buttons on the page
    if(buttons.length) {
        for (var i = buttons.length - 1; i >= 0; i--) {
          buttons[i].click();
        }
    }
    return false;
});
