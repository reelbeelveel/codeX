// export.js
// Last revised: Sun August 02, 2020 @ 12:34:35 EDT

var pageId = getParameterByName('id');
if( pageId == null ) {
    // TODO: Select random id from mysql
}
var contentBox = document.querySelectorAll("main div.flex-prop div.main-content");

// Format elements for contentBox[0]
function setupCboxZero() {
    var title = document.createElement("h2");
    contentBox[0].appendChild(title);
    var infoBox = document.createElement("div");
    contentBox[0].appendChild(infoBox);
    var image = document.querySelector("div.main-content img.loading");
    contentBox[0].appendChild(image);
    var shareBox = document.createElement("div");
    contentBox[0].appendChild(shareBox);

    // Load data from SQL (via api) for contentBox[0]
    title.textContent = `My Snippet #${pageId}`;
    // TODO load title:
    //      - add title to tables
    //      - add title to export logic (default title?)
    //      - add title loading query
    infoBox.textContent = "info placeholder"; // TODO <--
    try {
        const Http = new XMLHttpRequest();
        Http.open("GET", `${apiUrl}/api/view/${pageId}/img`);
        Http.onreadystatechange = (e) => {
            if (Http.readyState == 4) {
                if(Http.status != 200) throw new Error(`Could not get image id ${pageId}`);
        image.src = `${apiUrl}/api/view/${pageId}/img`;
        image.style = "";
        image.class = "loaded";

            }
        }
        Http.send();
    } catch (err) {
        console.log(err);
    }
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
    //       - Embed text/html
    //       - Embed image
    //       - Email
    //       - SMS
    //       - Tweet/Facebook
    //       - Clipboard
    //       - etc.
}

setupCboxZero();
setupCboxOne();
