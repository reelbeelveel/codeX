// browser.js
// Last revised: Sun July 19, 2020 @ 02:11:36 EDT
const Http = new XMLHttpRequest();
const token = getToken();
function getToken() {
    const tokenUrl='https://codexapp.co/api/getToken/';
    Http.open("GET", tokenUrl);
    Http.send();
    console.log("Token call");

    Http.onreadystatechange=(e)=>{
        console.log(`[API Call to api/getToken/]: Recieved token: ${Http.responseText}`);
        return Http.responseText;
    }
}



function generatePreview() {
    var engine = null;
    var lang = null;
    var input = null;
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
