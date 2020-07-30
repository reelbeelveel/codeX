// create.js
// Last revised: Thu July 30, 2020 @ 05:44:37 EDT

var textareas = document.getElementsByTagName('textarea');
if ( textareas ) {
    for(var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener('keydown', (e) => {
            if(e.key == 'Tab') { // tab was pressed
                // get caret position/selection
                var start = this.selectionStart;
                var end = this.selectionEnd;
                var target = e.target;
                var value = target.value;
                // set textarea value to: text before caret + tab + text after caret
                target.value = value.substring(0, start)
                    + "\t"
                    + value.substring(end);
                // put caret at right position again (add one for the tab)
                this.selectionStart = this.selectionEnd = start + 1;
                // prevent the focus lose
                e.preventDefault();
            }
        }, false);
    }
}

var langDetect = document.createElement('div');
var detectVisible = false;
function generatePreview() {
    const Http = new XMLHttpRequest();
    var engineSelect= document.querySelector("select#engine");
    var langSelect = document.querySelector("select#lang");

    var engine = engineSelect.options[engineSelect.selectedIndex].value;
    var lang = langSelect.options[langSelect.selectedIndex].value;
    var input = document.querySelector("textarea#codeInput").value;
    if(input == ""){
        generatePlaceholder(lang);
    } else {
        new Logger({engineSelect, langSelect, engine, lang, input, token}, 'Attempting to generate a Preview.', 'color: orange; font-weight: bold;');

        if (lang == "auto"){
            // TODO: Get Predicted Languages
            const xhr = new XMLHttpRequest();
            xhr.open("POST", `${apiUrl}/api/detect/`);
            xhr.send(input);
            xhr.onreadystatechange=(e)=> {
                var detected = xhr.responseText;
                for(var i = 1; i < language_list.length; i++){
                    if(language_list[i].apiId == detected) {
                        detected = language_list[i].displayText;
                        detectVisible = true;
                        break;
                    }
                }
                langDetect.innerHTML = `Detected: ${detected}`;
                document.querySelector(`div#previewPanel.main-content`).appendChild(langDetect);
            }
        } else if (detectVisible) {
            document.querySelector('div#previewPanel.main-content').removeChild(langDetect);
            detectVisible = false;
        }
        Http.open("POST", `${apiUrl}/api/create/${engine}${lang}/`);
        Http.send(input);
        console.log(`[POST To:] ${apiUrl}/api/create/${engine}${lang}/`);
        Http.onreadystatechange=(e)=> {
            var previewText = Http.responseText.replace(/\r|\n/gm, "<br />");
            console.log(`[API Call to api/create]: Recieved: ${previewText}`);
            var preview = document.getElementById("previewArea");
            preview.innerHTML = `<pre><code class="hljs">${previewText}</pre></code>`;
        }
    }
}

function generatePlaceholder(lang = null) {
    const Http = new XMLHttpRequest();
    let len, randomIndex, randomLang, previewId, apiId;
    if (lang == null) {
        len = language_list.length;
        randomIndex = Math.floor(Math.random() * (len - 1)) + 1;
        randomLang = language_list[randomIndex];
        previewId = `type_${randomLang.apiId.replace(/-|\./gm, '_')}`;
        apiId = randomLang.apiId;
        document.querySelector(`select#lang`).value = randomLang.apiId;
    } else {
        previewId = `type_${lang.replace('-', '_')}`;
        apiId = lang;
    }
    let previewText = preview[previewId];

    new Logger({len, randomIndex, randomLang, preview, previewText}, 'generatePlaceholder() Selected: ', 'color: blue; font-weight: bold;');
    document.querySelector(`textarea#codeInput`).placeholder = previewText;
    document.querySelector(`select#engine`).value = 'hijs';
    Http.open("POST", `${apiUrl}/api/create/hijs${apiId}/`);
    Http.send(previewText);
    console.log(`[POST To:] ${apiUrl}/api/create/hijs${apiId}/`);
    Http.onreadystatechange=(e)=> {
        var hiPreviewText = `<pre><code class="hljs">${Http.responseText}</code><pre>`;
        var hiPreview = document.getElementById("previewArea");
        hiPreview.innerHTML = hiPreviewText;
    }
}
const previewStyle = document.createElement('link')
document.querySelector("head").appendChild(previewStyle);
previewStyle.rel = "stylesheet";
previewStyle.type= "text/css";
function refreshSheet() {
    var styleSelect = document.querySelector('select#style');
    previewStyle.href=`/css/${styleSelect.options[styleSelect.selectedIndex].value}`;
}

function getExport() {
    const Http = new XMLHttpRequest();
    var engineSelect = document.querySelector("select#engine");
    var langSelect = document.querySelector("select#lang");
    var engine = engineSelect.options[engineSelect.selectedIndex].value;
    var lang = langSelect.options[langSelect.selectedIndex].value;
    var input = document.querySelector("textarea#codeInput").value;
    var style = document.querySelector("select#style").value;
    var preview = document.querySelector("div#previewArea");
    if (token == undefined) {
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = `<span class="error">Could not establish secure connection to ${apiUrl}/api/</span>`;
    } else {
        Http.open("POST", `${apiUrl}/api/export/${engine}${lang}/img/${style}/${token}/`);
        console.log(`[POST To:] ${apiUrl}/api/export/${engine}${lang}/img/${style}/${token}`);
        Http.onreadystatechange=(e)=>{
            if (Http.readyState == 4) {
                if(Http.status == 200) window.location.href = `${apiUrl}/export`;
                // TODO: Make this open in-page "pop-up"?
            }
        }
        Http.send(input);
        getToken();
    }
}

function quickShare(){
    const Http = new XMLHttpRequest();
    var engineSelect = document.querySelector("select#engine");
    var langSelect = document.querySelector("select#lang");
    var engine = engineSelect.options[engineSelect.selectedIndex].value;
    var lang = langSelect.options[langSelect.selectedIndex].value;
    var input = document.querySelector("textarea#codeInput").value;
    var style = document.querySelector("select#style");
    var preview = document.querySelector("div#previewArea");
    if (token == undefined) {
        new Logger('', 'No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = `<span class="error">Could not establish secure connection to ${apiUrl}/api/</span>`;
    } else {
        Http.open("POST", `${apiUrl}/api/export/${engine}${lang}/img/${style}/${token}`);
        Http.onreadystatechange=(e) => {
            if(Http.readyState == 4) {
                if(Http.status == 200) copyToClipboard(`${apiUrl}/view`);
            }
        }
        Http.send(input);
        getToken();
    }
}
