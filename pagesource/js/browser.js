// browser.js
// Last revised: Sun July 26, 2020 @ 01:09:23 EDT

// Comment out one or the other to change where the API is called (debug).
// TODO: instructions for local api hosting
//const apiUrl = 'http://localhost:3000';
const apiUrl = 'https://codexapp.co';

function timeStamp() {
    var d = new Date();
    var days = ["Sun.","Mon.","Tues.","Wed.","Thurs.","Fri.","Sat."];
    var months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec." ];
    var timeZone = "unknown";
    try{
        // Chrome, Firefox
        timeZone = /.*\s(.+)/.exec((new Date()).toLocaleDateString(navigator.language, { timeZoneName:'short' }))[1];
    }catch(e){
        // IE, some loss in accuracy due to guessing at the abbreviation
        // Note: This regex adds a grouping around the open paren as a
        //       workaround for an IE regex parser bug
        timeZone = (new Date()).toTimeString().match(new RegExp("[A-Z](?!.*[\(])","g")).join('');
    }
    return `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} @ ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()} ${timeZone}`;
}
// Disable to hide logs
const loggerEnabled=true;

class Logger {
    constructor(log, title=timeStamp(), style='font-weight: bold;') {
        if(loggerEnabled) {
            console.log(`%c ${title}`, style);
            console.log(log);
            console.trace();
        }
    }
}
var token = undefined;
async function getToken() {
    const Http = new XMLHttpRequest();
    const tokenUrl = `${apiUrl}/api/getToken/`;
    Http.open("GET", tokenUrl);
    console.log("Token call");
    Http.onreadystatechange=(e)=>{
        if(Http.readyState == 4) {
            var status = Http.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                token = Http.responseText;
                new Logger(`[API Call to api/getToken/]: Recieved token: "${token}"`, 'Token Recieved!', 'color: yellow; font-weight: bold;');
                generatePlaceholder();
            } else {
                // Oh no! There has been an error with the request!
                console.log("There was an error with the getToken request.");
                console.log({status: Http.status});
            }
        } 
    }
    Http.send();
}
getToken();


var textareas = document.getElementsByTagName('textarea');
var tabSupportEnabled = true;
if ( textareas ) {
    for(var i = 0; i < textareas.length; i++) {
        textareas[i].addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                tabSupportEnabled = !tabSupportEnabled;
                return false;
            }

            if (e.key == 'Enter' && tabSupportEnabled) {
                if (this.selectionStart == this.selectionEnd) {
                    var sel = this.selectionStart;
                    var text = this.value;
                    while (sel > 0 && text[sel-1] != '\n')
                        sel--;

                    var lineStart = sel;
                    while (text[sel] == ' ' || text[sel]=='\t')
                        sel++;

                    if (sel > lineStart) {
                        document.execCommand('insertText', false, "\n" + text.substr(lineStart, sel-lineStart));
                        this.blur();
                        this.focus();
                        return false();
                    }
                }
            }

            if(e.key == 'Tab' && tabSupportEnabled) {
                if (this.selectionStart == this.selectionEnd) {
                    if (!e.shiftKey) {
                        document.execCommand('insertText', false, '\t');
                    } else {
                        var text = this.value;
                        if (this.selectionStart > 0 && text[this.selectionStart-1] == '\t') {
                            document.execCommand('delete');
                        }
                    }
                } else {
                    var selStart = this.selectionStart;
                    var selEnd = this.selectionEnd;
                    var text = this.value;
                    while (selStart > 0 && text[selStart-1] != '\n')
                        selStart--;
                    while (selEnd > 0 && text[selEnd-1] != '\n' && selEnd < text.length)
                        selEnd++;

                    var lines = text.substr(selStart, selEnd - selStart).split('\n');

                    for (var i = 0; i < lines.length; i++) {
                        if (i == lines.length - 1 && lines[i].length==0) 
                            continue;

                        if (e.shiftKey) {
                            if (lines[i].startsWith('\t'))
                                lines[i] = lines[i].substr(1);
                            else if (lines[i].startsWith("    "))
                                lines[i] = lines[i].substr(4);
                        } else {
                            lines[i] = "\t" + lines[i];
                        }
                        lines = lines.join('\n');

                        this.value = text.substr(0, selStart) + lines + text.substr(selEnd);
                        this.selectionStart = selStart;
                        this.selectionEnd = selStart + lines.length;
                    }
                    return false;
                }
                enabled = true;
                return true;
            }
        });
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

        if (token == undefined){
            new Logger('','No Token!', 'color: red; font-weight: bold;');
            preview.innerHTML = `<span class="error">Could not establish secure connection to ${apiUrl}/api/</span>`;
        } else {
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
            Http.open("POST", `${apiUrl}/api/create/${engine}${lang}/${token}/`);
            Http.send(input);
            console.log(`[POST To:] ${apiUrl}/api/create/${engine}${lang}/${token}`);
            Http.onreadystatechange=(e)=> {
                var previewText = Http.responseText.replace(/\r|\n/gm, "<br />");
                console.log(`[API Call to api/create]: Recieved: ${previewText}`);
                var preview = document.getElementById("previewArea");
                preview.innerHTML = previewText;
            }
        }
    }
}
function populateSelections(fields) {
    new Logger ({fields: fields, fieldLength: fields.length});
    var i, j;
    for(i = 0; i < fields.length; i++) {

        // Loads list of options to populate Datalist
        var list = fields[i].populateWith;
        select = document.querySelector(`select#${fields[i].id}`);

        // Creates Datalist Object, with ID specified from `fields`
        new Logger({list, select});

        // Loop through all objects in list
        for (j = 0; j < list.length; j++){
            // Create option object for object in list
            // Fill Id with index from list
            // Attach option to datalist
            var option = document.createElement("option");
            option.class = `Opt${j}`;
            option.value = list[j].apiId;
            option.innerText = list[j].displayText;
            select.appendChild(option);
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
    console.log(previewId);
    console.log(Object.keys(preview));
    console.log(preview[previewId]);
    let previewText = preview[previewId];

    new Logger({len, randomIndex, randomLang, preview, previewText}, 'generatePlaceholder() Selected: ', 'color: blue; font-weight: bold;');
    document.querySelector(`textarea#codeInput`).placeholder = previewText;
    document.querySelector(`select#engine`).value = 'hijs';

    if (token == undefined){
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = `<span class="error">Could not establish secure connection to ${apiUrl}/api/</span>`;
    } else {
        Http.open("POST", `${apiUrl}/api/create/hijs${apiId}/${token}/`);
        Http.send(previewText);
        console.log(`[POST To:] ${apiUrl}/api/create/hijs${apiId}/${token}`);
        Http.onreadystatechange=(e)=> {
            var hiPreviewText = `<pre><code>${Http.responseText}</code><pre>`;
            console.log(`[API Call to api/create]: Recieved: ${hiPreviewText}`);
            var hiPreview = document.getElementById("previewArea");
            hiPreview.innerHTML = hiPreviewText;
        }
    }
}
const previewStyle = document.createElement('link')
document.querySelector("head").appendChild(previewStyle);
previewStyle.rel = "stylesheet";
previewStyle.type= "text/css";
function refreshSheet() {
    var styleSelect = document.querySelector('select#style');
    previewStyle.href=`/css/styles/${styleSelect.options[styleSelect.selectedIndex].value}`;
}

function getExport() {
    const Http = new XMLHttpRequest();
    var engineSelect= document.querySelector("select#engine");
    var langSelect = document.querySelector("select#lang");

    var engine = engineSelect.options[engineSelect.selectedIndex].value;
    var lang = langSelect.options[langSelect.selectedIndex].value;
    var input = document.querySelector("textarea#codeInput").value;
    var style = document.querySelector("select#style").value;
    var preview = document.querySelector("div#previewArea");

    if (token == undefined){
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = `<span class="error">Could not establish secure connection to ${apiUrl}/api/</span>`;
    } else {
        Http.open("POST", `${apiUrl}/api/export/${engine}${lang}/arg/${style}/${token}/`);
        console.log(`[POST To:] ${apiUrl}/api/export/${engine}${lang}/arg/${style}/${token}`);
        Http.onreadystatechange=(e)=>{
            if (Http.readyState == 4) {
                if(Http.status == 200) window.open(`${apiUrl}/api/export/${Http.responseText}/`, '_blank');
            }
        }
        Http.send(input);
    }
}



