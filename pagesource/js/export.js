// export.js
// Last revised: Sun August 02, 2020 @ 08:33:23 EDT

var pageId = getParameterByName('id');
if( pageId == null ) {
    // TODO: Select random id from mysql
}

function loadImage(image) {
    const Http = new XMLHttpRequest();
    Http.open("GET", `${apiUrl}/api/view/${pageId}/img`);
    console.log(Http);
    Http.send();
    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4) {
            if (Http.status != 200) throw new Error(`Could not get image id ${pageId}`);
            image.src = `${apiUrl}/api/view/${pageId}/img`;
            image.style = "";
            image.class = "loaded";
        }
    }
}

var contentBox = document.querySelectorAll("div.flex-prop div.main-content");

// Format elements for contentBox[0]
async function setupCboxZero() {
    var title = document.querySelector("div.main-content h2.title");
    var infoSel = "div.main-content table.info";
    var image = document.querySelector("div.main-content img.loading");
    var shareBox = document.createElement("div");
    contentBox[0].appendChild(shareBox);
    try {
        var language = await dbFetch(pageId, 'exports', 'code_type');
        var engine = await dbFetch(pageId, 'exports', 'engine_type');
        var timestamp = await dbFetch(pageId, 'exports', 'timestamp');
        var time = new Date(parseInt(timestamp));
        
        console.log({language, engine, time});

        // Load data from SQL (via api) for contentBox[0]
        title.textContent = `My Snippet #${pageId}`;
        // TODO load title:
        //      - add title to tables
        //      - add title to export logic (default title?)
        //      - add title loading query
        document.querySelector(infoSel + " tr td.id-cell").textContent = pageId;
        document.querySelector(infoSel + " tr td.lang-cell").textContent = language;
        document.querySelector(infoSel + " tr td.engine-cell").textContent = engine;
        document.querySelector(infoSel + " tr td.time-cell").textContent = time;

    } catch (err) {
        console.log(err);
    }
    loadImage(image);
    shareBox.textContent = "share placeholder"; // TODO <--
}
// Format elements for contentBox[1]
function setupCboxOne() {
    var title = document.createElement("h2");
    title.textContent = "Actions"
    contentBox[1].appendChild(title);
    // TODO: Add "Actions"
    //       - Edit text / "sign in to edit"
    //       - Download image
    var downloadLink = document.querySelector("a.downloadimg");
    downloadLink.href = `${apiUrl}/api/view/${pageId}/img`;
    //       - Embed text/html
    //       - Embed image
    //       - Email
    //       - SMS
    //       - Tweet/Facebook
    //       - Clipboard
    //       - etc.
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
