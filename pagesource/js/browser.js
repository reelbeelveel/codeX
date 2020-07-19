// browser.js
// Last revised: Sun July 19, 2020 @ 05:02:27 EDT

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

    var engine = engineSelect.options[engineSelect.selectedIndex].id;
    var lang = langSelect.options[langSelect.selectedIndex].id;
    var input = document.querySelector("textarea#codeInput").value;
    new Logger({engineSelect, langSelect, engine, lang, input, token}, 'Attempting to generate a Preview.', 'color: orange; font-weight: bold;');

    if (token===null){
        new Logger('','No Token!', 'color: red; font-weight: bold;');
        preview.innerHTML = '<span class="error">Could not establish secure connection to codexapp.co/api/</span>';
    } else {
        Http.open("POST", `https://codexapp.co/api/create/${engine}${lang}/${token}/`);
        Http.send(input);
        console.log(`[POST To:] https://codexapp.co/api/create/${engine}${lang}/${token}`);
        Http.onreadystatechange=(e)=> {
            console.log(`[API Call to api/create]: Recieved: ${Http.responseText}`);
            var preview = document.getElementById("previewArea");
            preview.innerHTML = Http.responseText;
        }
    }
}
// fields = [{
//      id: "lang-list",
//      populateWith: language_list
//  }];
//
function populateSelections(formId, fields) {
    console.log({formid:formId, fields: fields, fieldLength: fields.length});
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
            option.id = list[j].apiId;
            option.innerText = list[j].displayText;
            select.appendChild(option);
            new Logger({option, select}, `option: ${option} attached to select: ${select}`, 'font-weight: bold;');
        }
    }
}


