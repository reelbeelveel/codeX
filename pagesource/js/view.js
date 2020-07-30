// view.js
// Last revised: Thu July 30, 2020 @ 05:22:57 EDT

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
    contentBox[0].appendChlid(infoBox);
    var image = document.createElement("img");
    contentBox[0].appendChild(image);
    // TODO: Other image sizes/formats?

    // Load data from SQL (via api) for contentBox[0]
    title.textContent = `My Snippet #${pageId}`;
    // TODO load title:
    //      - add title to tables
    //      - add title to export logic (default title?)
    //      - add title loading query
    infoBox.textContent = "info placeholder"; // TODO <--
    image.src = `${apiUrl}/api/view/${pageId}/img`;
}

// Format elements for contentBox[1]
function setupCboxOne() {
    var title = document.createElement("h2");
    title.textContent = "Actions"
    contentBox[1].appendChild(title);
    // TODO: Add "Actions"
    //       - "Edit" text / Start new create with content
    //       - Download image
    //       - Embed text/html
    //       - Embed image
    //       - Email image/url
    //       - SMS image/url
    //       - Tweet/Facebook
    //       - Clipboard
    //       - etc.
}

setupCboxZero();
setupCboxOne();
