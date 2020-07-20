// List modified: Mon July 20, 2020 @ 10:36:44 EDT
var language_list = [
    {
        displayText: 'Auto',
        fileTypes: [{
                type: '.*',
                common: true
            }],
        apiId: 'auto',
        prettyName: 'Automatic Highlight', // Experimental, does nothing
        cdxEnabled: false
    },{
        displayText: '1C:Enterprise',
        fileTypes: [{ }],
        apiId: '1c',
        cdxEnabled: false
    },{
        displayText: 'Augmented Backus-Naur Form',
        fileTypes: [{ 
            type: '.abnf',
            common: false
        },{
            type: '.bnf',
            common: false
        }],
        apiId: 'abnf',
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
        apiId: 'bash',
        cdxEnabled: true
    },{
        displayText: 'C++',
        fileTypes: [{
            type: '.cpp',
            common: true
        }],
        apiId: 'cpp',
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
        apiId: 'javascript',
        cdxEnabled: false
    },{
        displayText: 'Markdown',
        fileTypes: [{
            type: '.md',
            common: true
        }],
        apiId: 'md',
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
        apiId: 'py',
        cdxEnabled: false
    }];
