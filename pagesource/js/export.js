// export.js
// Last revised: Mon August 10, 2020 @ 01:31:44 EDT
var language;
var pageId = getParameterByName('id');
if( pageId == null ) {
    // TODO: Select random id from mysql
}

var contentBox = document.querySelectorAll("div.flex-prop div.main-content");
    var image = document.querySelector("div.main-content img#codeImage");
var downloadLink = document.querySelector("a.downloadimg");
var newImg = new Image;
newImg.src = `${apiUrl}/api/view/${pageId}/img`;
newImg.onload = function() {
    console.log("LOADED!!");
    image.src = this.src;
    image.class = "loaded";
    image.style = "width: 100%; height: auto;";
    downloadLink.href = `${apiUrl}/api/view/${pageId}/img`;
    downloadLink.download = `codex-${language}`;
}

    var title = document.querySelector("div.main-content h2.title");
    var infoSel = "div.main-content table.info";
async function setupCboxZero() {
    try {
        language = await dbFetch(pageId, 'exports', 'code_type');
        var engine = await dbFetch(pageId, 'exports', 'engine_type');
        var timestamp = await dbFetch(pageId, 'exports', 'timestamp');
        var time = new Date(parseInt(timestamp));
        
        console.log({language, engine, time});

        // Load data from SQL (via api) for contentBox[0]
        title.textContent = `My Snippet #${pageId}`;
        document.querySelector(infoSel + " tr td.id-cell").textContent = pageId;
        document.querySelector(infoSel + " tr td.lang-cell").textContent = language;
        document.querySelector(infoSel + " tr td.engine-cell").textContent = engine;
        document.querySelector(infoSel + " tr td.time-cell").textContent = time;

    } catch (err) {
        console.log(err);
    }
}
// Format elements for contentBox[1]
async function setupCboxOne() {
    var title = document.querySelector("h2.title2");
    title.textContent = "Actions";
    // TODO: Add "Actions"
    //       - Edit text / "sign in to edit"
    //       - Download image
    var downloadLink = document.querySelector("a.downloadimg");
    downloadLink.href = `${apiUrl}/api/view/${pageId}/img`;
    downloadLink.download = `codex-${language}`;
    //       - Embed text/html
    //       - Embed image
    //       - Email
    //       - SMS
    //       - Tweet/Facebook
    //       - Clipboard
    //       - etc.
    
    // Activate buttons
    document.querySelectorAll(':disabled').forEach(el => {
        el.removeAttribute('disabled');
    })
}
async function pageLoad() {
    await setupCboxZero();
    await setupCboxOne();
}

function CopyImageById(Id) { //http://embed.plnkr.co/CCalCBmouRtAkoE5arHF/
  var imgs = document.createElement('img');
  imgs.src = document.getElementById(Id).src;
  
  var bodys = document.body ;
  bodys.appendChild(imgs);

  if (document.createRange)  
  {
    var myrange = document.createRange();
    myrange.setStartBefore(imgs);
    myrange.setEndAfter(imgs);
    myrange.selectNode(imgs);
  }
  else
  {
    alert ('CreateRange NOT work');
  }
  var sel = window.getSelection();
  sel.addRange(myrange);
  var successful = document.execCommand('copy');
  var msg = successful ? 'successful' : 'unsuccessful';
  bodys.removeChild(imgs);
  document.getElementById('answer').innerHTML="Copy image command was " + msg ;
}

function getUrl() {
     copyToClipboard(`${apiUrl}/v?id=${pageId}`);
}
