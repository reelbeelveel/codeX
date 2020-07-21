// browser.js
// Last revised: Mon July 20, 2020 @ 11:02:40 EDT

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
        }
    }
}
var token = null;
async function getToken() {
    const Http = new XMLHttpRequest();
    const tokenUrl='https://codexapp.co/api/getToken/';
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

    if (token===null){
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = '<span class="error">Could not establish secure connection to codexapp.co/api/</span>';
    } else {
        Http.open("POST", `https://codexapp.co/api/create/${engine}${lang}/${token}/`);
        Http.send(input);
        console.log(`[POST To:] https://codexapp.co/api/create/${engine}${lang}/${token}`);
        Http.onreadystatechange=(e)=> {
            var previewText = Http.responseText.replace(/\r|\n/gm, "<br />");
            console.log(`[API Call to api/create]: Recieved: ${previewText}`);
            var preview = document.getElementById("previewArea");
            preview.innerHTML = previewText;
        }
    }
    }
}
function populateSelections(formId, fields) {
    new Logger ({formid:formId, fields: fields, fieldLength: fields.length});
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
            new Logger({option, select}, `option: ${option} attached to select: ${select}`, 'font-weight: bold;');
        }
    }
}

function generatePlaceholder(lang = null) {
    const Http = new XMLHttpRequest();
    let len, randomIndex, randomLang, previewId, apiId;
    if (lang === null) {
    len = language_list.length;
    randomIndex = Math.floor(Math.random() * (len - 1)) + 1;
    randomLang = language_list[randomIndex];
    previewId = `type_${randomLang.apiId.replace('-', '_')}`;
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

    if (token===null){
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = '<span class="error">Could not establish secure connection to codexapp.co/api/</span>';
    } else {
        Http.open("POST", `https://codexapp.co/api/create/hijs${apiId}/${token}/`);
        Http.send(previewText);
        console.log(`[POST To:] https://codexapp.co/api/create/hijs${apiId}/${token}`);
        Http.onreadystatechange=(e)=> {
            var hiPreviewText = Http.responseText.replace(/\r|\n/gm, "<br />");
            console.log(`[API Call to api/create]: Recieved: ${hiPreviewText}`);
            var hiPreview = document.getElementById("previewArea");
            hiPreview.innerHTML = hiPreviewText;
        }
    }
}


