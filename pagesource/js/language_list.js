// List modified: Mon July 20, 2020 @ 11:03:49 EDT
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
        displayText: 'Apache Access Log',
        fileTypes: [{ }],
        apiId: 'accesslog',
        cdxEnabled: false
    },{
        displayText: 'Action Script',
        fileTypes: [{
            type: '.actionscript',
            common: true
        },{
            type: '.as',
            common: true
        }],
        apiId: 'actionscript',
        cdxEnabled: false
    },{
        displayText: 'Ada',
        fileTypes: [{ 
            type: '.ada',
            common: true
        }],
        apiId: 'ada',
        cdxEnabled: false
    },{
        displayText: 'AngelScript',
        fileTypes: [{ 
            type: '.as',
            common: true
        }],
        apiId: 'angelscript',
        cdxEnabled: false
    },{
        displayText: 'Apache Config',
        fileTypes: [{
            type: '.conf',
            common: true
        }],
        apiId: 'apache',
        cdxEnabled: false
    },{
        displayText: 'AppleScript',
        fileTypes: [{
            type: '.scpt',
            common: true
        }],
        apiId: 'applescript',
        cdxEnabled: false
    },{
        displayText: 'ArcGIS Arcade',
        fileTypes: [{
            type: '.mxd',
            common: true
        },{
            type: '.3dd',
            common: false
        },{
            type: '.adf',
            common: false
        },{
            type: '.apl',
            common: false
        },{
            type: '.apr',
            common: false
        },{
            type: '.dgn',
            common: false
        },{
            type: '.e00',
            common: false
        },{
            type: '.flt',
            common: false
        },{
            type: '.gen',
            common: false
        },{
            type: '.lpk',
            common: false
        },{
            type: '.mpk',
            common: false
        },{
            type: '.msd',
            common: false
        },{
            type: '.nmf',
            common: false
        },{
            type: '.pix',
            common: false
        },{
            type: '.prj',
            common: false
        },{
            type: '.rdf',
            common: false
        },{
            type: '.rlf',
            common: false
        },{
            type: '.style',
            common: false
        },{
            type: '.sxd',
            common: false
        }],
        apiId: 'arcade',
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
