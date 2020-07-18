// Script modified: Fri July 17, 2020 @ 04:42:16 EDT

function getFormData() {
    var engine = document.getElementById('engine')
        .value.replace(/\[|\]/gm, "").slice(0,4);
    var lang = document.getElementById('lang').value;
    var input = document.getElementById('codeInput').value;
    console.log({ engine: engine, lang: lang, input:input });
    generatePreview(engine, lang, input);
}
function generatePreview(engine, lang, input) {
    
}
