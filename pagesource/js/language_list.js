// List modified: Sun July 19, 2020 @ 01:26:38 EDT
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
