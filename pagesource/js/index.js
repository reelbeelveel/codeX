// index.js
// Last revised: Sat July 18, 2020 @ 08:13:26 EDT
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



function getFormData(fields) {
    console.log(typeof(fields));
    console.log(fields);
    var i;
    var returns = {};
    for(i = 0; i < fields.length - 1; i++){
        console.log({returns: returns, rtype: typeof(returns), fields: fields, ftype: typeof(fields), i: i, fields_i: fields[i]});
        returns[`${fields[i]}`] = document.getElementById(fields[i]).value;
    }
    console.log(returns);
    return (returns);
}
function generatePreview() {
    var formData = getFormData(new Array("engine", "lang", "input"));
    var engine = formData.engine.replace(/\[|\]/gm, "").slice(0,4);
    var lang = formData.lang;
    var input = formData.input;
    Http.open("POST", `https://codexapp.co/api/create/${engine}${lang}/${token}/`)
    Http.send(input);
    console.log(`[POST To:] https://codexapp.co/api/create/${engine}${lang}/${token}`)
    Http.onreadystatechange=(e)=> {
        console.log(`[API Call to api/create]: Recieved: ${Http.responseText}`);

    }
}

var language_list = [
    {
        displayText: 'Auto',
        hijsName: 'auto',
        filetypes: [
            {
                type: '.*',
                common: true
            }],
        prettyName: 'Automatic Highlight', // Experimental, does nothing
        cdxEnabled: false
    },{
        displayText: 'Bash',
        fileTypes: [
            {
                type: '.bash',
                common: false
            },{
                type: '.bashrc',
                common: false
            },{
                type: '.sh',
                common: true
            },{
                type: '.zsh',
                common: true
            }],
        hijsName: 'bash',
        cdxEnabled: true
    },{
        displayText: 'C++',
        fileTypes: [{
            type: '.cpp',
            common: true
        }],
        hijsName: 'cpp',
        cdxEnabled: false
    },{
        displayText: 'JavaScript',
        fileTypes: [{
            type: '.js',
            common: true
        },{
            type: '.json',
            common: false
        }],
        hijsName: 'javascript',
        cdxEnabled: false
    },{
        displayText: 'Markdown',
        fileTypes: [{
            type: '.md',
            common: true
        }],
        hijsName: 'md',
        cdxEnabled: false
    },{
        displayText: 'Python',
        fileTypes: [{
            type: '.py',
            common: true
        },{
            type: '.py2',
            common: false
        },{
            type: '.py3',
            common: true
        },{
            type: '.pyc',
            common: false
        }],
        hijsName: 'py',
        cdxEnabled: false
    }];
