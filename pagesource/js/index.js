// index.js
// Last revised: Sat July 18, 2020 @ 02:54:47 EDT
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



function getFormData() {
    var engine = document.getElementById('engine')
        .value.replace(/\[|\]/gm, "").slice(0,4);
    var lang = document.getElementById('lang').value;
    var input = document.getElementById('codeInput').value;
    console.log({ engine: engine, lang: lang, input:input });
    generatePreview(engine, lang, input);
}
function generatePreview(engine, lang, input) {
    Http.open("POST", `https://codexapp.co/api/create/${engine}${lang}/${token}/`)
    Http.send(input);
    console.log(`[POST To:] https://codexapp.co/api/create/${engine}${lang}/${token}`)
    Http.onreadystatechange=(e)=> {
        console.log(`[API Call to api/create]: Recieved: ${Http.responseText}`);

    }
}
