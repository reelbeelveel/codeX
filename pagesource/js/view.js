// view.js
// Last revised: Mon August 03, 2020 @ 07:43:59 EDT

var language;
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
            image.src = `${apiUrl}/api/view/${pageId}/img`;
            image.style = "width: 100%; height: auto;";
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
    try {
        language = await dbFetch(pageId, 'exports', 'code_type');
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
}

// Format elements for contentBox[1]
function setupCboxOne() {
}

setupCboxZero();
setupCboxOne();
