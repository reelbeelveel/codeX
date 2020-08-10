// view.js
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
