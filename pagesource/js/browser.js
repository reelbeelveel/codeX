// browser.js
// Last revised: Sun July 19, 2020 @ 03:03:52 EDT

var token = getToken().then(value => {token = value}, reason => { console.log{`Token promise rejected; `} });

async function getToken() {
    const Http = new XMLHttpRequest();
    const tokenUrl='https://codexapp.co/api/getToken/';
    Http.open("GET", tokenUrl);
    console.log("Token call");
    Http.onreadystatechange=(e)=>{
        if(Http.readyState === Http.DONE) {
            var status = Http.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                let res = Http.responseText;
                console.log(`[API Call to api/getToken/]: Recieved token: "${res}"`);
                return res;
            } else {
                // Oh no! There has been an error with the request!
                console.log("There was an error with the getToken request.");
                console.log({status: Http.status});
            }
        } 
    }
    Http.send();
}



function generatePreview() {
    const Http = new XMLHttpRequest();dd
    var engineSelect= document.querySelector("select#engine");
    var langSelect = document.querySelector("select#lang");

    var engine = engineSelect.options[engineSelect.selectedIndex].id;
    var lang = langSelect.options[langSelect.selectedIndex].id;
    var input = document.querySelector("textarea#codeInput").value;

    console.log({token: token});
    Http.open("POST", `https://codexapp.co/api/create/${engine}${lang}/${token}/`)
    Http.send(input);
    console.log(`[POST To:] https://codexapp.co/api/create/${engine}${lang}/${token}`)
    Http.onreadystatechange=(e)=> {
        console.log(`[API Call to api/create]: Recieved: ${Http.responseText}`);
        var preview = document.getElementById("previewArea");
        preview.innerHTML = Http.responseText;
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
        select = document.querySelector(`select#${fields[i].id}`)

        // Creates Datalist Object, with ID specified from `fields`
        console.log({list: list, listLength: list.length, select: select});

        // Loop through all objects in list
        for (j = 0; j < list.length; j++){
            // Create option object for object in list
            // Fill Id with index from list
            // Attach option to datalist
            var option = document.createElement("option");
            option.class = `Opt${j}`;
            option.id = list[j].aopId;
            option.innerHTML = list[j].displayText;
            select.appendChild(option);
            console.log(`option: ${option} attached to select: ${select}`)
            console.log({option: option, select: select});
        }
    }
}
