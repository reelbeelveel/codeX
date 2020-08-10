// view.js
// Last revised: Mon August 10, 2020 @ 02:13:54 EDT

var engine, highlight, language, plaintext, style, timestamp, time;
var pageId = getParameterByName('id');
if( pageId == null ) {
    // TODO: Select random id from mysql
    alert('NO ID');
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
        engine = await dbFetch(pageId, 'exports', 'engine_type');
        timestamp = await dbFetch(pageId, 'exports', 'timestamp');
        time = new Date(parseInt(timestamp));

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
async function setupCboxOne() {
    try {
        style = await dbFetch(pageId, 'images', 'style');
        highlight = await dbFetch(pageId, 'exports', 'highlight');
        plaintext = await dbFetch(pageId, 'exports', 'plaintext');
        document.querySelector("textarea#codeInput").value = plaintext;
        document.getElementById("previewArea").innerHTML = `<pre><code class="hljs">${highlight}</pre></code>`;
        const previewStyle = document.createElement('link')
        document.querySelector("head").appendChild(previewStyle);
        previewStyle.rel = "stylesheet";
        previewStyle.type= "text/css";
        previewStyle.href=`/css/${style}`;
        generatePreview();
    } catch (err) {
        console.log(err);
    }
}

function checkRadio(){
    var _textarea = document.querySelector('textarea#codeInput');
    var rendered = document.querySelector('div#previewArea'); 
    if(document.querySelector('input.radio#rendered').checked){
        _textarea.style.visibility = "hidden";
        rendered.style.visibility = "visible";
    } else {
        _textarea.style.visibility = "visible";
        rendered.style.visibility = "hidden";
    }
}

function generatePreview() {
    const Http = new XMLHttpRequest();
    var input = document.querySelector("textarea#codeInput").value;
    if(input != ""){
        Http.open("POST", `${apiUrl}/api/create/${engine}${language}/`);
        Http.send(input);
        console.log(`[POST To:] ${apiUrl}/api/create/${engine}${language}/`);
        Http.onreadystatechange=(e)=> {
            var previewText = Http.responseText.replace(/\r|\n/gm, "<br />");
            console.log(`[API Call to api/create]: Recieved: ${previewText}`);
            var preview = document.getElementById("previewArea");
            preview.innerHTML = `<pre><code class="hljs">${previewText}</pre></code>`;
        }
    }
}
