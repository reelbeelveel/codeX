// List modified: Tue July 28, 2020 @ 01:42:50 EDT
var preview = {};
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
        displayText: 'Arduino',
        fileTypes: [{
            type: '.ino',
            common: true
        }],
        apiId: 'arduino',
        cdxEnabled: false
    },{
        displayText: 'ARM Assembly',
        fileTypes: [{
            type: '.s',
            common: true
        }],
        apiId: 'armasm',
        cdxEnabled: false
    },{
        displayText: 'AsciiDoc',
        fileTypes: [{
            type: '.txt',
            common: true
        }],
        apiId: 'asciidoc',
        cdxEnabled: false
    },{
        displayText: 'AspectJ',
        fileTypes: [{
            type: '.aj',
            common: true
        }],
        apiId: 'aspectj',
        cdxEnabled: false
    },{
        displayText: 'AutoHotkey',
        fileTypes: [{
            type: '.ahk',
            common: true
        }],
        apiId: 'autohotkey',
        cdxEnabled: false
    },{
        displayText: 'AutoIt',
        fileTypes: [{
            type: '.au3',
            common: true
        }],
        apiId: 'autoit',
        cdxEnabled: false
    },{
        displayText: 'AVR Assembly',
        fileTypes: [{
            type: '.asm',
            common: true
        }],
        apiId: 'avrasm',
        cdxEnabled: false
    },{
        displayText: 'Awk',
        fileTypes: [{
            type: '.awk',
            common: true
        }],
        apiId: 'awk',
        cdxEnabled: false
    },{
        displayText: 'MS Axapta/Dynamics AX',
        fileTypes: [{
            type: '.ald',
            common: 'false'
        },{
            type: '.alc',
            common: 'false'
        },{
            type: '.ali',
            common: 'false'
        },{
            type: '.alt',
            common: 'false'
        },{
            type: '.aoi',
            common: 'false'
        },{
            type: '.add',
            common: 'false'
        },{
            type: '.adi',
            common: 'false'
        },{
            type: '.ahd',
            common: 'false'
        },{
            type: '.ahi',
            common: 'false'
        },{
            type: '.aod',
            common: 'false'
        },{
            type: '.khd',
            common: 'false'
        },{
            type: '.khi',
            common: 'false'
        },{
            type: '.ktd',
            common: 'false'
        },{
            type: 'kti',
            common: 'false'
        },{
            type: '.auc',
            common: 'false'
        },{
            type: '.aoc',
            common: 'false'
        }],
        apiId: 'axapta',
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
        displayText: 'BASIC',
        fileTypes: [{}],
        apiId: 'basic',
        cdxEnabled: false
    },{
        displayText: 'Backus-Naur Form',
        fileTypes: [{
            type: '.bnf',
            common: true
        }],
        apiId: 'bnf',
        cdxEnabled: false
    },{
        displayText: 'Brainfuck',
        fileTypes: [{}],
        apiId: 'brainfuck',
        cdxEnabled: false
    },{
        displayText: 'C',
        fileTypes: [{
            type: '.c',
            common: true
        }],
        apiId: 'c',
        cdxEnabled: false
    },{
        displayText: 'C/AL',
        fileTypes: [{}],
        apiId: 'cal',
        cdxEnabled: false
    },{
        displayText: "Cap'n Proto",
        fileTypes: [{}],
        apiId: 'capnproto',
        cdxEnabled: false
    },{
        displayText: 'Ceylon',
        fileTypes: [{}],
        apiId: 'ceylon',
        cdxEnabled: false
    },{
        displayText: 'Clean',
        fileTypes: [{}],
        apiId: 'clean',
        cdxEnabled: false
    },{
        displayText: 'Clojure',
        fileTypes: [{}],
        apiId: 'clojure',
        cdxEnabled: false
    },{
        displayText: 'Clojure REPL',
        fileTypes: [{}],
        apiId: 'clojure-repl',
        cdxEnabled: false
    },{
        displayText: 'CMake',
        fileTypes: [{}],
        apiId: 'cmake',
        cdxEnabled: false
    },{
        displayText: 'CoffeeScript',
        fileTypes: [{}],
        apiId: 'coffeescript',
        cdxEnabled: false
    },{
        displayText: 'Coq',
        fileTypes: [{}],
        apiId: 'coq',
        cdxEnabled: false
    },{
        displayText: 'Caché Object Script',
        fileTypes: [{}],
        apiId: 'cos',
        cdxEnabled: false
    },{
        displayText: 'C++',
        fileTypes: [{
            type: '.cpp',
            common: true
        }],
        apiId: 'cpp',
        cdxEnabled: false
    },{
        displayText:'crmsh',
        fileTypes: [{}],
        apiId: 'crmsh',
        cdxEnabled: false
    },{
        displayText: 'Crystal',
        fileTypes: [{}],
        apiId: 'crystal',
        cdxEnabled: false
    },{
        displayText: 'C#',
        fileTypes: [{
            type: '.c#',
            common: true
        }],
        apiId: 'csharp',
        cdxEnabled: false
    },{
        displayText: 'CSP',
        fileTypes: [{}],
        apiId: 'csp',
        cdxEnabled: false
    },{
        displayText: 'CSS',
        fileTypes: [{}],
        apiId: 'css',
        cdxEnabled: false
    },{
        displayText: 'D',
        fileTypes: [{}],
        apiId: 'd',
        cdxEnabled: false
    },{
        displayText: 'Dart',
        fileTypes: [{}],
        apiId: 'dart',
        cdxEnabled: false
    },{
        displayText: 'Delphi',
        fileTypes: [{}],
        apiId: 'delphi',
        cdxEnabled: false
    },{
        displayText: 'Diff',
        fileTypes: [{}],
        apiId: 'diff',
        cdxEnabled: false
    },{
        displayText: 'Django',
        fileTypes: [{}],
        apiId: 'django',
        cdxEnabled: false
    },{
        displayText: 'DNS Zone',
        fileTypes: [{}],
        apiId: 'dns',
        cdxEnabled: false
    },{
        displayText: 'Dockerfile',
        fileTypes: [{}],
        apiId: 'dockerfile',
        cdxEnabled: false
    },{
        displayText: 'DOS Batch file',
        fileTypes: [{
            type: '.bat',
            common: true
        }],
        apiId: 'dos',
        cdxEnabled: false
    },{
        displayText: 'dsconfig',
        fileTypes: [{}],
        apiId: 'dsconfig',
        cdxEnabled: false
    },{
        displayText: 'Device Tree',
        fileTypes: [{}],
        apiId: 'dts',
        cdxEnabled: false
    },{
        displayText: 'Dust',
        fileTypes: [{}],
        apiId: 'dust',
        cdxEnabled: false
    },{
        displayText: 'Extended Backus-Naur Form',
        fileTypes: [{
            type: '.bnf',
            common: true
        }],
        apiId:'ebnf',
        cdxEnabled: false
    },{
        displayText:'Elixir',
        fileTypes: [{}],
        apiId: 'elixir',
        cdxEnabled: false
    },{
        displayText: 'Elm',
        fileTypes: [{}],
        apiId: 'elm',
        cdxEnabled: false
    },{
        displayText: 'ERB (Embedded Ruby)',
        fileTypes: [{
            type: '.ruby',
            common: true
        }],
        apiId: 'erb',
        cdxEnabled: false
    },{
        displayText: 'Erlang REPL',
        fileTypes: [{}],
        apiId: 'erlang-repl',
        cdxEnabled: false
    },{
        displayText: 'Erlang',
        fileTypes: [{}],
        apiId: 'erlang',
        cdxEnabled: false
    },{
        displayText: 'MS Excel Formulae',
        fileTypes: [{}],
        apiId: 'excel',
        cdxEnabled: false
    },{
        displayText: 'Fix',
        fileTypes: [{}],
        apiId: 'fix',
        cdxEnabled: false
    },{
        displayText: 'Flix',
        fileTypes: [{}],
        apiId: 'flix',
        cdxEnabled: false
    },{
        displayText: 'Fortran',
        fileTypes: [{}],
        apiId: 'fortran',
        cdxEnabled: false
    },{
        displayText: 'F#',
        fileTypes: [{}],
        apiId: 'fsharp',
        cdxEnabled: false
    },{
        displayText: 'GAMS',
        fileTypes: [{}],
        apiId: 'gams',
        cdxEnabled: false
    },{
        displayText: 'GAUSS',
        fileTypes: [{}],
        apiId: 'gauss',
        cdxEnabled: false
    },{
        displayText: 'G-Code (ISO 6983)',
        fileTypes: [{}],
        apiId: 'gcode',
        cdxEnabled: false
    },{
        displayText: 'Gherkin',
        fileTypes: [{}],
        apiId: 'gherkin',
        cdxEnabled: false
    },{
        displayText: 'GLSL',
        fileTypes: [{}],
        apiId: 'glsl',
        cdxEnabled: false
    },{
        displayText: 'GML',
        fileTypes: [{
            type: '.gml',
            common: true
        }],
        apiId: 'gml',
        cdxEnabled: false
    },{
        displayText: "Go",
        fileTypes: [{}],
        apiId: 'go',
        cdxEnabled: false
    },{
        displayText: 'Golo',
        fileTypes: [{}],
        apiId: 'golo',
        cdxEnabled: false
    },{
        displayText: 'Gradle',
        fileTypes: [{}],
        apiId: 'gradle',
        cdxEnabled: false
    },{
        displayText: 'Groovy',
        fileTypes: [{}],
        apiId: 'groovy',
        cdxEnabled: false
    },{
        displayText: 'HAML',
        fileTypes: [{}],
        apiId: 'haml',
        cdxEnabled: false
    },{
        displayText: 'Handlebars',
        fileTypes: [{}],
        apiId: 'handlebars',
        cdxEnabled: false
    },{
        displayText: 'Haskell',
        fileTypes: [{}],
        apiId: 'haskell',
        cdxEnabled: false
    },{
        displayText: 'Haxe',
        fileTypes: [{}],
        apiId: 'haxe',
        cdxEnabled: false
    },{
        displayText: 'HSP',
        fileTypes: [{}],
        apiId: 'hsp',
        cdxEnabled: false
    },{
        displayText: 'HTML',
        fileTypes: [{
            type: '.html',
            common: true
        }],
        apiId: 'xml',
        cdxEnabled: false
    },{
        displayText: 'HTTP',
        fileTypes: [{}],
        apiId: 'http',
        cdxEnabled: false
    },{
        displayText: 'Hy',
        fileTypes: [{}],
        apiId: 'hy',
        cdxEnabled: false
    },{
        displayText: 'Inform 7',
        fileTypes: [{}],
        apiId: 'inform7',
        cdxEnabled: false
    },{
        displayText:'INI',
        fileTypes: [{}],
        apiId: 'ini',
        cdxEnabled: false
    },{
        displayText: 'IRPF90',
        fileTypes: [{}],
        apiId: 'irpf90',
        cdxEnabled: false
    },{
        displayText: 'ISBL',
        fileTypes: [{}],
        apiId: 'isbl',
        cdxEnabled: false
    },{
        displayText: 'Java',
        fileTypes: [{
            type: '.java',
            common: true
        }],
        apiId: 'java',
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
        displayText: 'JBoss CLI',
        fileTypes: [{}],
        apiId: 'jboss-cli',
        cdxEnabled: false
    },{
        displayText: 'JSON',
        fileTypes: [{
            type: '.json',
            common: true
        }],
        apiId: 'json',
        cdxEnabled: false
    },{
        displayText: 'Julia',
        fileTypes: [{}],
        apiId: 'julia',
        cdxEnabled: false
    },{
        displayText: 'Julia REPL',
        fileTypes: [{}],
        apiId: 'julia-repl',
        cdxEnabled: false
    },{
        displayText: 'Kotlin',
        fileTypes: [{}],
        apiId: 'kotlin',
        cdxEnabled: false
    },{
        displayText: 'Lasso',
        fileTypes: [{}],
        apiId: 'lasso',
        cdxEnabled: false
    },{
        displayText: 'LaTeX',
        fileTypes: [{
            type: '.tex',
            common: true
        }],
        apiId: 'latex',
        cdxEnabled: false
    },{
        displayText: 'LDIF',
        fileTypes: [{}],
        apiId: 'ldif',
        cdxEnabled: false
    },{
        displayText: 'Leaf',
        fileTypes: [{}],
        apiId: 'leaf',
        cdxEnabled: false
    },{
        displayText: 'Less',
        fileTypes: [{}],
        apiId: 'less',
        cdxEnabled: false
    },{
        displayText: 'Lisp',
        fileTypes: [{}],
        apiId: 'lisp',
        cdxEnabled: false
    },{
        displayText: 'LiveCode',
        fileTypes: [{}],
        apiId: 'livecodeserver',
        cdxEnabled: false
    },{
        displayText: 'LiveScript',
        fileTypes: [{}],
        apiId: 'livescript',
        cdxEnabled: false
    },{
        displayText: 'LLVM IR',
        fileTypes: [{}],
        apiId: 'llvm',
        cdxEnabled: false
    },{
        displayText: 'Linden Scripting Language (LSL)',
        fileTypes: [{}],
        apiId: 'lsl',
        cdxEnabled: false
    },{
        displayText: 'Lua',
        fileTypes: [{}],
        apiId: 'lua',
        cdxEnabled: false
    },{
        displayText: 'Makefile',
        fileTypes: [{}],
        apiId: 'makefile',
        cdxEnabled: false
    },{
        displayText: 'Markdown',
        fileTypes: [{
            type: '.md',
            common: true
        }],
        apiId: 'markdown',
        cdxEnabled: false
    },{
        displayText: 'Mathematica',
        fileTypes: [{}],
        apiId: 'mathematica',
        cdxEnabled: false
    },{
        displayText: 'Matlab',
        fileTypes: [{}],
        apiId: 'matlab',
        cdxEnabled: false
    },{
        displayText: 'Maxima',
        fileTypes: [{}],
        apiId: 'maxima',
        cdxEnabled: false
    },{
        displayText: 'MEL',
        fileTypes: [{}],
        apiId: 'mel',
        cdxEnabled: false
    },{
        displayText: 'Mercury',
        fileTypes: [{}],
        apiId: 'mercury',
        cdxEnabled: false
    },{
        displayText: 'MIPS Assembly',
        fileTypes: [{}],
        apiId: 'mipsasm',
        cdxEnabled: false
    },{
        displayText: 'Mizar',
        fileTypes: [{}],
        apiId: 'mizar',
        cdxEnabled: false
    },{
        displayText: 'Mojolicious',
        fileTypes: [{}],
        apiId: 'mojolicious',
        cdxEnabled: false
    },{
        displayText: 'Monkey',
        fileTypes: [{}],
        apiId: 'monkey',
        cdxEnabled: false
    },{
        displayText: 'MoonScript',
        fileTypes: [{}],
        apiId: 'moonscript',
        cdxEnabled: false
    },{
        displayText: 'N1QL',
        fileTypes: [{}],
        apiId: 'n1ql',
        cdxEnabled: false
    },{
        displayText: 'Nginx Config',
        fileTypes: [{}],
        apiId: 'nginx',
        cdxEnabled: false
    },{
        displayText: 'Nim',
        fileTypes: [{}],
        apiId: 'nim',
        cdxEnabled: false
    },{
        displayText: 'Nix',
        fileTypes: [{}],
        apiId: 'nix',
        cdxEnabled: false
    },{
        displayText: 'NSIS',
        fileTypes: [{}],
        apiId: 'nsis',
        cdxEnabled: false
    },{
        displayText: 'Objective-C',
        fileTypes: [{}],
        apiId: 'objectivec',
        cdxEnabled: false
    },{
        displayText: 'OCaml',
        fileTypes: [{}],
        apiId: 'ocaml',
        cdxEnabled: false
    },{
        displayText: 'OpenSCAD',
        fileTypes: [{}],
        apiId: 'openscad',
        cdxEnabled: false
    },{
        displayText: 'Oxygene',
        fileTypes: [{}],
        apiId: 'oxygene',
        cdxEnabled: false
    },{
        displayText: 'Parser3',
        fileTypes: [{}],
        apiId: 'parser3',
        cdxEnabled: false
    },{
        displayText: 'Packet Filter Config',
        fileTypes: [{}],
        apiId: 'pf',
        cdxEnabled: false
    },{
        displayText: 'Perl',
        fileTypes: [{}],
        apiId: 'perl',
        cdxEnabled: false
    },{
        displayText: 'PHP',
        fileTypes: [{}],
        apiId: 'php',
        cdxEnabled: false
    },{
        displayText: 'PHP Template',
        fileTypes: [{}],
        apiId: '',
        cdxEnabled: false
    },{
        displayText: 'PL/pgSQL',
        fileTypes: [{}],
        apiId: 'pgSQL',
        cdxEnabled: false
    },{
        displayText: 'Plain Text',
        fileTypes: [{}],
        apiId: 'plaintext',
        cdxEnabled: false
    },{
        displayText: 'Pony',
        fileTypes: [{}],
        apiId: 'pony',
        cdxEnabled: false
    },{
        displayText: 'PostgreSQL',
        fileTypes: [{}],
        apiId: 'pgsql',
        cdxEnabled: false
    },{
        displayText: 'PowerShell',
        fileTypes: [{}],
        apiId: 'powershell',
        cdxEnabled: false
    },{
        displayText: 'Processing',
        fileTypes: [{}],
        apiId: 'processing',
        cdxEnabled: false
    },{
        displayText: 'Prolog',
        fileTypes: [{}],
        apiId: 'prolog',
        cdxEnabled: false
    },{
        displayText: '.properties',
        fileTypes: [{}],
        apiId: 'properties',
        cdxEnabled: false
    },{
        displayText: 'Protocol Buffers',
        fileTypes: [{}],
        apiId: 'protobuf',
        cdxEnabled: false
    },{
        displayText: 'Puppet',
        fileTypes: [{}],
        apiId: 'puppet',
        cdxEnabled: false
    },{
        displayText: 'PureBASIC',
        fileTypes: [{}],
        apiId: 'purebasic',
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
        apiId: 'python',
        cdxEnabled: false
    },{
        displayText: 'Python Profiler',
        fileTypes: [{}],
        apiId: 'profile',
        cdxEnabled: false
    },{
        displayText: 'Python REPL',
        fileTypes: [{}],
        apiId: 'python-repl',
        cdxEnabled: false
    },{
        displayText: 'Q',
        fileTypes: [{}],
        apiId: 'q',
        cdxEnabled: false
    },{
        displayText: 'QML',
        fileTypes: [{}],
        apiId: 'qml',
        cdxEnabled: false
    },{
        displayText: 'R',
        fileTypes: [{}],
        apiId: 'r',
        cdxEnabled: false
    },{
        displayText: 'ReasonML',
        fileTypes: [{}],
        apiId: 'reasonml',
        cdxEnabled: false
    },{
        displayText: 'RIB (RenderMan)',
        fileTypes: [{}],
        apiId: 'rib',
        cdxEnabled: false
    },{
        displayText: 'Roboconf',
        fileTypes: [{}],
        apiId: 'roboconf',
        cdxEnabled: false
    },{
        displayText: 'RouterOS (MicroTik)',
        fileTypes: [{}],
        apiId: 'routeros',
        cdxEnabled: false
    },{
        displayText: 'RSL (RenderMan)',
        fileTypes: [{}],
        apiId: 'rsl',
        cdxEnabled: false
    },{
        displayText: 'Ruby',
        fileTypes: [{
            type: '.ruby',
            common: true
        }],
        apiId: 'ruby',
        cdxEnabled: false
    },{
        displayText: 'Rules Language (Oracle)',
        fileTypes: [{}],
        apiId: 'ruleslanguage',
        cdxEnabled: false
    },{
        displayText: 'Rust',
        fileTypes: [{}],
        apiId: 'rust',
        cdxEnabled: false
    },{
        displayText: 'SAS',
        fileTypes: [{}],
        apiId: 'sas',
        cdxEnabled: false
    },{
        displayText: 'Scala',
        fileTypes: [{}],
        apiId: 'scala',
        cdxEnabled: false
    },{
        displayText: 'Scheme',
        fileTypes: [{}],
        apiId: 'scheme',
        cdxEnabled: false
    },{
        displayText: 'Scilab',
        fileTypes: [{}],
        apiId: 'scilab',
        cdxEnabled: false
    },{
        displayText: 'SCSS',
        fileTypes: [{}],
        apiId: 'scss',
        cdxEnabled: false
    },{
        displayText: 'Shell Session',
        fileTypes: [{}],
        apiId: 'shell',
        cdxEnabled: false
    },{
        displayText: 'Smali',
        fileTypes: [{}],
        apiId: 'smali',
        cdxEnabled: false
    },{
        displayText: 'Smalltalk',
        fileTypes: [{}],
        apiId: 'smalltalk',
        cdxEnabled: false
    },{
        displayText: 'SML (StandardML)',
        fileTypes: [{}],
        apiId: 'sml',
        cdxEnabled: false
    },{
        displayText: 'SQF',
        fileTypes: [{}],
        apiId: 'sqf',
        cdxEnabled: false
    },{
        displayText: 'SQL',
        fileTypes: [{}],
        apiId: 'sql',
        cdxEnabled: false
    },{
        displayText: 'Stan',
        fileTypes: [{}],
        apiId: 'stan',
        cdxEnabled: false
    },{
        displayText: 'Stata',
        fileTypes: [{}],
        apiId: 'stata',
        cdxEnabled: false
    },{
        displayText: 'STEP Part 21',
        fileTypes: [{}],
        apiId: 'step21',
        cdxEnabled: false
    },{
        displayText: 'Stylus',
        fileTypes: [{}],
        apiId: 'stylus',
        cdxEnabled: false
    },{
        displayText: 'SubUnit',
        fileTypes: [{}],
        apiId: 'subunit',
        cdxEnabled: false
    },{
        displayText: 'Swift',
        fileTypes: [{}],
        apiId: 'swift',
        cdxEnabled: false
    },{
        displayText: 'Tagger Script',
        fileTypes: [{}],
        apiId: 'taggerscript',
        cdxEnabled: false
    },{
        displayText: 'Test Anything Protocol',
        fileTypes: [{}],
        apiId: 'tap',
        cdxEnabled: false
    },{
        displayText: 'Tcl',
        fileTypes: [{}],
        apiId: 'tcl',
        cdxEnabled: false
    },{
        displayText: 'Thrift',
        fileTypes: [{}],
        apiId: 'thrift',
        cdxEnabled: false
    },{
        displayText: 'TOML',
        fileTypes: [{}],
        apiId: 'ini',
        cdxEnabled: false
    },{
        displayText: 'TP',
        fileTypes: [{}],
        apiId: 'tp',
        cdxEnabled: false
    },{
        displayText: 'Twig',
        fileTypes: [{}],
        apiId: 'twig',
        cdxEnabled: false
    },{
        displayText: 'TypeScript',
        fileTypes: [{}],
        apiId: 'typescript',
        cdxEnabled: false
    },{
        displayText: 'Vala',
        fileTypes: [{}],
        apiId: 'vala',
        cdxEnabled: false
    },{
        displayText: 'VBScript',
        fileTypes: [{}],
        apiId: 'vbscript',
        cdxEnabled: false
    },{
        displayText: 'VBScript in HTML',
        fileTypes: [{}],
        apiId: 'vbscript-html',
        cdxEnabled: false
    },{
        displayText: 'Visual Basic .NET',
        fileTypes: [{}],
        apiId: 'vbnet',
        cdxEnabled: false
    },{
        displayText: 'Verilog',
        fileTypes: [{}],
        apiId: 'verilog',
        cdxEnabled: false
    },{
        displayText: 'VHDL',
        fileTypes: [{}],
        apiId: 'vhdl',
        cdxEnabled: false
    },{
        displayText: 'Vimscript',
        fileTypes: [{
            type: '.vim',
            common: true
        },{
            type: '.vimrc',
            common: false
        }],
        apiId: 'vim',
        cdxEnabled: false
    },{
        displayText: 'x86 Assembly',
        fileTypes: [{}],
        apiId: 'x86asm',
        cdxEnabled: false
    },{
        displayText: 'XL',
        fileTypes: [{}],
        apiId: 'xl',
        cdxEnabled: false
    },{
        displayText: 'XML',
        fileTypes: [{
            type: '.xml',
            common: true
        }],
        apiId: 'xml',
        cdxEnabled: false
    },{
        displayText: 'XQuery',
        fileTypes: [{}],
        apiId: 'xquery',
        cdxEnabled: false
    },{
        displayText: 'YAML',
        fileTypes: [{}],
        apiId: 'yaml',
        cdxEnabled: false
    },{
        displayText: 'Zephir',
        filetypes: [{}],
        apiId: 'zephir',
        cdxEnabled: false
    }];
preview.type_auto =  'YouHaveTo({start: typing_something, to: see_a_preview});';
preview.type_1c = `#ЗагрузитьИзФайла ext_module.txt // директива 7.7
#Если Клиент ИЛИ НаКлиенте Тогда // инструкции препроцессора
    &НаКлиентеНаСервереБезКонтекста // директивы компиляции
    Функция ТолстыйКлиентОбычноеПриложение(Знач Параметр1 = Неопределено, // комментарий
        Параметр2 = "", ПараметрN = 123.45, ПарамNN) Экспорт // еще комментарий
        Попытка
            Результат_Булевы_Значения = Новый Структура("П1, П2", Истина, Ложь, NULL, Неопределено);
            Перейти ~МеткаGOTO; // комментарий
            РезультатТаблицаДат = Новый ТаблицаЗначений;
            РезультатТаблицаДат.Колонки.Добавить("Колонка1", 
            Новый ОписаниеТипов("Дата", , ,
            Новый КвалификаторыДаты(ЧастиДаты.ДатаВремя));
            НС = РезультатТаблицаДат.Добавить(); НС["Колонка1"] = '20170101120000');
        Исключение
            ОписаниеОшибки = ОписаниеОшибки(); // встроенная функция
            Масс = Новый Массив; // встроенный тип
            Для Каждого Значение Из Масс Цикл
                Сообщить(Значение + Символы.ПС + "
                |продолжение строки"); // продолжение многострочной строки
                Продолжить; Прервать;
            КонецЦикла;
            СправочникСсылка   = Справочники.Языки.НайтиПоНаименованию("ru"); // встроенные типы
            СправочникОбъект   = СправочникСсылка.ПолучитьОбъект();
            ПеречислениеСсылка = Перечисления.ВидыМодификацииДанных.Изменен;
            ВызватьИсключение ОписаниеОшибки;
        КонецПопытки;
        ~МеткаGOTO: // еще комментарий
        ВД = ВидДвиженияБухгалтерии.Дебет;
    КонецФункции // ТолстыйКлиентОбычноеПриложение()
#КонецЕсли`;

preview.type_abnf = `; line comment

ruleset     =   [optional] *(group1 / group2 / SP) CRLF ; trailing comment

group1      =   alt1
group1      =/  alt2

alt1        =   %x41-4D / %d78-90

alt2        =   %b00100001

group2      =   *1DIGIT / 2*HEXDIG / 3*4OCTET

optional    =   hex-codes
                / literal
                / sensitive
                / insensitive

hex-codes   =   %x68.65.6C.6C.6F
literal     =   "string literal"
sensitive   =   %s"case-sensitive string"
insensitive =   %i"case-insensitive string"`;


preview.type_accesslog = `20.164.151.111 - - [20/Aug/2015:22:20:18 -0400] "GET /mywebpage/index.php HTTP/1.1" 403 772 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.220 Safari/535.1"`;

preview.type_actionscript = `package org.example.dummy {
    import org.dummy.*;

    /*define package inline interface*/
    public interface IFooBarzable {
        public function foo(... pairs):Array;
    }

    public class FooBar implements IFooBarzable {
        static private var cnt:uint = 0;
        private var bar:String;

        //constructor
        public function TestBar(bar:String):void {
            bar = bar;
            ++cnt;
        }

        public function foo(... pairs):Array {
            pairs.push(bar);
            return pairs;
        }
    }
}`;

preview.type_ada = `package body Sqlite.Simple is

      Foo : int := int'Size;
      Bar : int := long'Size;

      Error_Message_C : chars_ptr := Sqlite_Errstr (Error);
      Error_Message : String := Null_Ignore_Value (Error_Message_C);
   begin

      Named : for Index in Foo..Bar loop
          Put ("Hi[]{}");
      end loop Named;

      Foo := Bar;
   end Message;

end Sqlite.Simple;`;

preview.type_angelscript = `interface IInterface
{
    void DoSomething();
}

namespace MyApplication
{
    /*
     * This ia a test class.
     */
    class SomeClass : IInterface
    {
        array<float> m_arr;

        array<SomeClass@> m_children;
        array<array<SomeClass@>> m_subChildren; // Nested templates

        int m_thing;

        SomeClass()
        {
            // Add some integers
            m_arr.insertLast(1.0f);
            m_arr.insertLast(1.75f);
            m_arr.insertLast(3.14159f);
            uint x = 0x7fff0000;
            int y = 9001;
        }

        int get_Thing() property { return m_thing; }
        void set_Thing(int x) property { m_thing = x; }

        void DoSomething()
        {
            print("Something! " + 'stuff.');
            for (uint i = 0; i < m_arr.length(); i++) {
                print("  " + i + ": " + m_arr[i]);
            }
        }

        protected void SomeProtectedFunction()
        {
            try {
                DoSomething();
            } catch {
                print("Exception while doing something!");
            }
        }
    }
}

void Main()
{
    SomeClass@ c = SomeClass();
    c.DoSomething();
}`;

preview.type_apache = `# rewrites rules for wordpress pretty url
LoadModule rewrite_module  modules/mod_rewrite.so
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.php [NC,L]

ExpiresActive On
ExpiresByType application/x-javascript  "access plus 1 days"

Order Deny,Allow
Allow from All

<Location /maps/>
  RewriteMap map txt:map.txt
  RewriteMap lower int:tolower
  RewriteCond %{REQUEST_URI} ^/([^/.]+)\\.html$ [NC]
  RewriteCond \${map:\${lower:%1}|NOT_FOUND} !NOT_FOUND
  RewriteRule .? /index.php?q=\${map:\${lower:%1}} [NC,L]
</Location>`;

preview.type_applescript = `repeat 5 times
    if foo is greater than bar then
        display dialog "Hello there"
    else
        beep
    end if
end repeat

(* comment (*nested comment*) *)
on do_something(s, y)
    return {s + pi, y mod 4}
end do_something

do shell script "/bin/echo 'hello'"`;

preview.type_arcade = `/* Highlight.js est for Arcade */
function testGeometry(element, point) {
    if (point.y != -1)
        return point;
    for (var i = 0 / 2; i < element.length; i++) {
        if (checkCondition($map.element[i]) === Infinity) {
            return DistanceGeodetic(element[i]);
        }
    }
    return element;
}
var filePath = "literal " + TextFormatting.BackSlash + TextFormatting.SingleQuote + ".ext"
var d = Dictionary("field1", 1, "field2",2);
return FeatureSet($map, ["POPULATION", "ELECTION-DATA"]);`;

preview.type_arduino = `/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.

  This example code is in the public domain.
 */

// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int led = 13;

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}

// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);               // wait for a second
}`;

preview.type_armasm = `.text

.global connect
connect:
    mov     r3, #2              ; s->sin_family = AF_INET
    strh    r3, [sp]
    ldr     r3, =server_port    ; s->sin_port = server_port
    ldr     r3, [r3]
    strh    r3, [sp, #2]
    ldr     r3, =server_addr    ; s->sin_addr = server_addr
    ldr     r3, [r3]
    str     r3, [sp, #4]
    mov     r3, #0              ; bzero(&s->sin_zero)
    str     r3, [sp, #8]
    str     r3, [sp, #12]
    mov     r1, sp      ; const struct sockaddr *addr = sp

    ldr     r7, =connect_call
    ldr     r7, [r7]
    swi     #0

    add     sp, sp, #16
    pop     {r0}        ; pop sockfd

    pop     {r7}
    pop     {fp, ip, lr}
    mov     sp, ip
    bx      lr

.data
socket_call:   .long 281
connect_call:  .long 283

/* all addresses are network byte-order (big-endian) */
server_addr:            .long 0x0100007f ; localhost
server_port:            .hword 0x0b1a`;

preview.type_asciidoc = `Hello, World!
============
Author Name, <author@domain.foo>

you can write text http://example.com[with links], optionally
using an explicit link:http://example.com[link prefix].

* single quotes around a phrase place 'emphasis'
** alternatively, you can put underlines around a phrase to add _emphasis_
* astericks around a phrase make the text *bold*
* pluses around a phrase make it +monospaced+
` + "* `smart' quotes using a leading backtick and trailing single quote" + `
` + "** use two of each for double ``smart'' quotes" + `

- escape characters are supported
- you can escape a quote inside emphasized text like 'here\\'s johnny!'

term:: definition
 another term:: another definition

// this is just a comment

Let's make a break.

'''

////
we'll be right with you

after this brief interruption.
////

== We're back!

Want to see a image::images/tiger.png[Tiger]?

.Nested highlighting
++++
<this_is inline="xml"></this_is>
++++

____
asciidoc is so powerful.
____

another quote:

[quote, Sir Arthur Conan Doyle, The Adventures of Sherlock Holmes]
____
When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.
____

Getting Literal
---------------

 want to get literal? prefix a line with a space.

....
I'll join that party, too.
....

. one thing (yeah!)
` + ". two thing `i can write code`, and `more` wipee!" + `

NOTE: AsciiDoc is quite cool, you should try it.`;

preview.type_aspectj = `package com.aspectj.syntax;
import org.aspectj.lang.annotation.AdviceName;

privileged public aspect LoggingAspect percflowbelow(ajia.services.*){
  private pointcut getResult() : call(* *(..) throws SQLException) && args(Account, .., int);
  @AdviceName("CheckValidEmail")
  before (Customer hu) : getResult(hu){		
    System.out.println("Your mail address is valid!");
  }
  Object around() throws InsufficientBalanceException: getResult() && call(Customer.new(String,String,int,int,int)){
    return	proceed();
  }
  public Cache getCache() {
    return this.cache;
  }
  pointcut beanPropertyChange(BeanSupport bean, Object newValue): execution(void BeanSupport+.set*(*)) && args(newValue) && this(bean);
  declare parents: banking.entities.* implements BeanSupport;
  declare warning : call(void TestSoftening.perform()): "Please ensure you are not calling this from an AWT thread";
  private String Identifiable.id;
  public void Identifiable.setId(String id) {
    this.id = id;
  }
}`;

preview.type_autohotkey = `; hotkeys and hotstrings
#a::WinSet, AlwaysOnTop, Toggle, A
#Space::
  MsgBox, Percent sign (\`%) need to be escaped.
  Run "C:\\Program Files\\some\\program.exe"
  Gosub, label1
return
::btw::by the way
; volume
#Numpad8::Send {Volume_Up}
#Numpad5::Send {Volume_Mute}
#Numpad2::Send {Volume_Down}

label1:
  if (Clipboard = "")
  {
    MsgBox, , Clipboard, Empty!
  }
  else
  {
    StringReplace, temp, Clipboard, old, new, All
    MsgBox, , Clipboard, %temp%
  }
return`;

preview.type_autoit = `#NoTrayIcon
#AutoIt3Wrapper_Run_Tidy=Y
#include <Misc.au3>

_Singleton(@ScriptName) ; Allow only one instance
example(0, 10)

Func example($min, $max)
    For $i = $min To $max
        If Mod($i, 2) == 0 Then
            MsgBox(64, "Message", $i & ' is even number!')
        Else
            MsgBox(64, "Message", $i & ' is odd number!')
        EndIf
    Next
EndFunc   ;==>example`;

preview.type_avrasm = `;* Title:       Block Copy Routines
;* Version:     1.1

.include "8515def.inc"

        rjmp    RESET       ;reset handle

.def    flashsize=r16       ;size of block to be copied

flash2ram:
        lpm                 ;get constant
        st      Y+,r0       ;store in SRAM and increment Y-pointer
        adiw    ZL,1        ;increment Z-pointer
        dec     flashsize
        brne    flash2ram   ;if not end of table, loop more
        ret

.def    ramtemp =r1         ;temporary storage register
.def    ramsize =r16        ;size of block to be copied`;

preview.type_awk = `BEGIN {
  POPService  = "/inet/tcp/0/emailhost/pop3"
  RS = ORS = "\\r\\n"
  print "user name"            |& POPService
  POPService                    |& getline
  print "pass password"         |& POPService
  POPService                    |& getline
  print "retr 1"                |& POPService
  POPService                    |& getline
  if ($1 != "+OK") exit
  print "quit"                  |& POPService
  RS = "\\r\\n\\\\.\\r\\n"
  POPService |& getline
  print $0
  close(POPService)
}`;

preview.type_axapta = `class ExchRateLoadBatch extends RunBaseBatch {
  ExchRateLoad rbc;
  container currencies;
  boolean actual;
  boolean overwrite;
  date beg;
  date end;

  #define.CurrentVersion(5)

  #localmacro.CurrentList
    currencies,
    actual,
    beg,
    end
  #endmacro
}

public boolean unpack(container packedClass) {
  container       base;
  boolean         ret;
  Integer         version    = runbase::getVersion(packedClass);

  switch (version) {
    case #CurrentVersion:
      [version, #CurrentList] = packedClass;
      return true;
    default:
      return false;
  }
  return ret;
}`;

preview.type_basic = `10 CLS
20 FOR I = 0 TO 15
22 FOR J = 0 TO 7
30 COLOR I,J
40 PRINT " ** ";
45 NEXT J
46 COLOR I,0
47 GOSUB 100
48 PRINT
50 NEXT I
60 COLOR 15,0
99 END
100 FOR T = 65 TO 90
101 PRINT CHR$(T);
102 NEXT T
103 RETURN
200 REM Data types test
201 TOTAL# = 3.30#		'Double precision variable
202 BALANCE! = 3!		'Single precision variable
203 B2! = 12e5			'120000
204 ITEMS% = 10			'Integer variable
205 HEXTEST = &H12DB	'Hex value`;

preview.type_bash = `#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}

echo '"quoted"' | tr -d \\" > text.txt`;

preview.type_bnf = `<syntax>         ::= <rule> | <rule> <syntax>
<rule>           ::= <opt-whitespace> "<" <rule-name> ">" <opt-whitespace> "::=" <opt-whitespace> <expression> <line-end>
<opt-whitespace> ::= " " <opt-whitespace> | ""
<expression>     ::= <list> | <list> <opt-whitespace> "|" <opt-whitespace> <expression>
<line-end>       ::= <opt-whitespace> <EOL> | <line-end> <line-end>
<list>           ::= <term> | <term> <opt-whitespace> <list>
<term>           ::= <literal> | "<" <rule-name> ">"
<literal>        ::= '"' <text> '"' | "'" <text> "'"`;

preview.type_brainfuck = `++++++++++
[ 3*10 and 10*10
  ->+++>++++++++++<<
]>>
[ filling cells
  ->++>>++>++>+>++>>++>++>++>++>++>++>++>++>++>++>++[</]<[<]<[<]>>
]<
+++++++++<<
[ rough codes correction loop
  ->>>+>+>+>+++>+>+>+>+>+>+>+>+>+>+>+>+>+>+[<]<
]
more accurate сodes correction
>>>++>
-->+++++++>------>++++++>++>+++++++++>++++++++++>++++++++>--->++++++++++>------>++++++>
++>+++++++++++>++++++++++++>------>+++
rewind and output
[<]>[.>]`;

preview.type_c = `#include <stdio.h>
int main() {
    int n, i;
    unsigned long long fact = 1;
    printf("Enter an integer: ");
    scanf("%d", &n);

    // shows error if the user enters a negative integer
    if (n < 0)
        printf("Error! Factorial of a negative number doesn't exist.");
    else {
        for (i = 1; i <= n; ++i) {
            fact *= i;
        }
        printf("Factorial of %d = %llu", n, fact);
    }

    return 0;
}`;

preview.type_cal = `OBJECT Codeunit 11 Gen. Jnl.-Check Line
{
  OBJECT-PROPERTIES
  {
    Date=09-09-14;
    Time=12:00:00;
    Version List=NAVW18.00;
  }
  PROPERTIES
  {
    TableNo=81;
    Permissions=TableData 252=rimd;
    OnRun=BEGIN
            GLSetup.GET;
            RunCheck(Rec);
          END;

  }
  CODE
  {
    VAR
      Text000@1000 : TextConst 'ENU=can only be a closing date for G/L entries';
      Text001@1001 : TextConst 'ENU=is not within your range of allowed posting dates';

    PROCEDURE ErrorIfPositiveAmt@2(GenJnlLine@1000 : Record 81);
    BEGIN
      IF GenJnlLine.Amount > 0 THEN
        GenJnlLine.FIELDERROR(Amount,Text008);
    END;

    LOCAL PROCEDURE CheckGenJnlLineDocType@7(GenJnlLine@1001 : Record 81);
  }
}`;

preview.type_capnproto = `@0xdbb9ad1f14bf0b36;  # unique file ID, generated by \`capnp id\`

struct Person {
  name @0 :Text;
  birthdate @3 :Date;

  email @1 :Text;
  phones @2 :List(PhoneNumber);

  struct PhoneNumber {
    number @0 :Text;
    type @1 :Type;

    enum Type {
      mobile @0;
      home @1;
      work @2;
    }
  }
}

struct Date {
  year @0 :Int16;
  month @1 :UInt8;
  day @2 :UInt8;
  flags @3 :List(Bool) = [ true, false, false, true ];
}

interface Node {
  isDirectory @0 () -> (result :Bool);
}

interface Directory extends(Node) {
  list @0 () -> (list: List(Entry));
  struct Entry {
    name @0 :Text;
    node @1 :Node;
  }

  create @1 (name :Text) -> (file :File);
  mkdir @2 (name :Text) -> (directory :Directory)
  open @3 (name :Text) -> (node :Node);
  delete @4 (name :Text);
  link @5 (name :Text, node :Node);
}

interface File extends(Node) {
  size @0 () -> (size: UInt64);
  read @1 (startAt :UInt64 = 0, amount :UInt64 = 0xffffffffffffffff)
       -> (data: Data);
  # Default params = read entire file.

  write @2 (startAt :UInt64, data :Data);
  truncate @3 (size :UInt64);
}`;

preview.type_ceylon = `shared void run() {
    print("Hello, \`\` process.arguments.first else "World" \`\`!");
}
class Counter(count=0) {
    variable Integer count;
    shared Integer currentValue => count;
    shared void increment() => count++;
}`;

preview.type_clean = `module fsieve

import StdClass; // RWS
import StdInt, StdReal

NrOfPrimes :== 3000

primes :: [Int]
primes = pr where pr = [5 : sieve 7 4 pr]

sieve :: Int !Int [Int] -> [Int]
sieve g i prs
| isPrime prs g (toInt (sqrt (toReal g))) = [g : sieve\` g i prs]
| otherwise                               = sieve (g + i) (6 - i) prs

sieve\` :: Int Int [Int] -> [Int]
sieve\` g i prs = sieve (g + i) (6 - i) prs

isPrime :: [Int] !Int Int -> Bool
isPrime [f:r] pr bd
| f>bd        =  True
| pr rem f==0 =  False
| otherwise   =  isPrime r pr bd

select :: [x] Int -> x
select [f:r] 1 = f
select [f:r] n = select r (n - 1)

Start :: Int
Start = select [2, 3 : primes] NrOfPrimes`;

preview.type_clojure = `(def ^:dynamic chunk-size 17)

(defn next-chunk [rdr]
  (let [buf (char-array chunk-size)
        s (.read rdr buf)]
  (when (pos? s)
    (java.nio.CharBuffer/wrap buf 0 s))))

(defn chunk-seq [rdr]
  (when-let [chunk (next-chunk rdr)]
    (cons chunk (lazy-seq (chunk-seq rdr)))))`; 

preview.type_clojure_repl = `user=> (defn f [x y]
  #_=>   (+ x y))
#'user/f
user=> (f 5 7)
12
user=> nil
nil`;

preview.type_cmake = `cmake_minimum_required(VERSION 2.8.8)
project(cmake_example)

# Show message on Linux platform
if (\${CMAKE_SYSTEM_NAME} MATCHES Linux)
    message("Good choice, bro!")
endif()

# Tell CMake to run moc when necessary:
set(CMAKE_AUTOMOC ON)
# As moc files are generated in the binary dir,
# tell CMake to always look for includes there:
set(CMAKE_INCLUDE_CURRENT_DIR ON)

# Widgets finds its own dependencies.
find_package(Qt5Widgets REQUIRED)

add_executable(myproject main.cpp mainwindow.cpp)
qt5_use_modules(myproject Widgets)`;

preview.type_coffeescript = `grade = (student, period=(if b? then 7 else 6)) ->
  if student.excellentWork
    "A+"
  else if student.okayStuff
    if student.triedHard then "B" else "B-"
  else
    "C"

class Animal extends Being
  constructor: (@name) ->

  move: (meters) ->
    alert @name + " moved #{meters}m."`;

preview.type_cos = `#dim test as %Library.Integer
SET test = 123.099
set ^global = %request.Content
Write "Current date """, $ztimestamp, """, result: ", test + ^global = 125.099
do ##class(Cinema.Utils).AddShow("test") // class method call
do ##super() ; another one-line comment
d:(^global = 2) ..thisClassMethod(1, 2, "test")
/*
 * Sub-languages support:
 */
&sql( SELECT * FROM Cinema.Film WHERE Length > 2 )
&js<for (var i = 0; i < String("test").split("").length); ++i) {
    console.log(i);
}>
&html<<!DOCTYPE html>
<html>
<head> <meta name="test"/> </head>
<body>Test</body>
</html>>

quit $$$OK`;


preview.type_coq = `Inductive seq : nat -> Set :=
| niln : seq 0
| consn : forall n : nat, nat -> seq n -> seq (S n).

Fixpoint length (n : nat) (s : seq n) {struct s} : nat :=
  match s with
  | niln => 0
  | consn i _ s' => S (length i s')
  end.

Theorem length_corr : forall (n : nat) (s : seq n), length n s = n.
Proof.
  intros n s.

  (* reasoning by induction over s. Then, we have two new goals
     corresponding on the case analysis about s (either it is
     niln or some consn *)
  induction s.

    (* We are in the case where s is void. We can reduce the
       term: length 0 niln *)
    simpl.

    (* We obtain the goal 0 = 0. *)
    trivial.

    (* now, we treat the case s = consn n e s with induction
       hypothesis IHs *)
    simpl.

    (* The induction hypothesis has type length n s = n.
       So we can use it to perform some rewriting in the goal: *)
    rewrite IHs.

    (* Now the goal is the trivial equality: S n = S n *)
    trivial.

  (* Now all sub cases are closed, we perform the ultimate
     step: typing the term built using tactics and save it as
     a witness of the theorem. *)
Qed.`;

preview.type_cpp = `#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\\\\\"; // this is an error

  return -2e3 + 12l;
}`;

preview.type_crmsh = `node webui
node 168633611: node1
rsc_template web-server apache \
    params port=8000 \
    op monitor interval=10s
# Never use this STONITH agent in production!
primitive development-stonith stonith:null \
    params hostlist="webui node1 node2 node3"
primitive proxy systemd:haproxy \
    op monitor interval=10s
primitive proxy-vip IPaddr2 \
    params ip=10.13.37.20
primitive srv1 @web-server
primitive srv2 @web-server
primitive test1 Dummy
primitive test2 IPaddr2 \
    params ip=10.13.37.99
primitive vip1 IPaddr2 \
    params ip=10.13.37.21 \
    op monitor interval=20s
primitive vip2 IPaddr2 \
    params ip=10.13.37.22 \
    op monitor interval=20s
group g-proxy proxy-vip proxy
group g-serv1 vip1 srv1
group g-serv2 vip2 srv2
# Never put the two web servers on the same node
colocation co-serv -inf: g-serv1 g-serv2
# Never put any web server or haproxy on webui
location l-avoid-webui { g-proxy g-serv1 g-serv2 } -inf: webui
# Prever to spread groups across nodes
location l-proxy g-proxy 200: node1
location l-serv1 g-serv1 200: node2
location l-serv2 g-serv2 200: node3
property cib-bootstrap-options: \
    stonith-enabled=true \
    no-quorum-policy=ignore \
    placement-strategy=balanced \
    have-watchdog=false \
    dc-version="1.1.13-1.1.13+git20150827.e8888b9" \
    cluster-infrastructure=corosync \
    cluster-name=hacluster
rsc_defaults rsc-options: \
    resource-stickiness=1 \
    migration-threshold=3
op_defaults op-options: \
    timeout=600 \
    record-pending=true`;

preview.type_crystal = `class Person
  def initialize(@name : String)
  end

  def greet
    puts "Hi, I'm #{@name}"
  end
end

class Employee < Person
end

employee = Employee.new "John"
employee.greet         # => "Hi, I'm John"
employee.is_a?(Person) # => true

@[Link("m")]
lib C
  # In C: double cos(double x)
  fun cos(value : Float64) : Float64
end

C.cos(1.5_f64) # => 0.0707372

s = uninitialized String
s = <<-'STR'
\\hello\\world
\\hello\\world
STR`;

preview.type_csharp = `using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}`;

preview.type_csp = `Content-Security-Policy:
    default-src 'self';
    style-src 'self' css.example.com;
    img-src *.example.com;
    script-src 'unsafe-eval' 'self' js.example.com 'nonce-Nc3n83cnSAd3wc3Sasdfn939hc3'`;

preview.type_css = `@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`;

preview.type_d = `#!/usr/bin/rdmd
// Computes average line length for standard input.
import std.stdio;

/+
  this is a /+ nesting +/ comment
+/

enum COMPILED_ON = __TIMESTAMP__;  // special token

enum character = '©';
enum copy_valid = '&copy;';
enum backslash_escaped = '\\\\';

// string literals
enum str = \`hello "world"!\`;
enum multiline = r"lorem
ipsum
dolor";  // wysiwyg string, no escapes here allowed
enum multiline2 = "sit
amet
\\"adipiscing\\"
elit.";
enum hex = x"66 6f 6f";   // same as "foo"

#line 5

// float literals
enum f = [3.14f, .1, 1., 1e100, 0xc0de.01p+100];

static if (something == true) {
   import std.algorithm;
}

void main() pure nothrow @safe {
    ulong lines = 0;
    double sumLength = 0;
    foreach (line; stdin.byLine()) {
        ++lines;
        sumLength += line.length;
    }
    writeln("Average line length: ",
        lines ? sumLength / lines : 0);
}`;

preview.type_dart = `library app;
import 'dart:html';

part 'app2.dart';

/**
 * Class description and [link](http://dartlang.org/).
 */
@Awesome('it works!')
class SomeClass<S extends Iterable> extends BaseClass<S> implements Comparable {
  factory SomeClass(num param);
  SomeClass._internal(int q) : super() {
    assert(q != 1);
    double z = 0.0;
  }

  /// **Sum** function
  int sum(int a, int b) => a + b;

  ElementList els() => querySelectorAll('.dart');
}

String str = ' (${'parameter' + 'zxc'})';
String str = " (${true ? 2 + 2 / 2 : null})";
String str = " ($variable)";
String str = r'\\nraw\\';
String str = r"\\nraw\\";
var str = '''
Something \${2+3}
''';
var str = r"""
Something \${2+3}
""";

checkVersion() async {
  var version = await lookUpVersion();
}`;

preview.type_delphi = `TList = Class(TObject)
Private
  Some: String;
Public
  Procedure Inside; // Suxx
End;{TList}

Procedure CopyFile(InFileName, var OutFileName: String);
Const
  BufSize = 4096; (* Huh? *)
Var
  InFile, OutFile: TStream;
  Buffer: Array[1..BufSize] Of Byte;
  ReadBufSize: Integer;
Begin
  InFile := Nil;
  OutFile := Nil;
  Try
    InFile := TFileStream.Create(InFileName, fmOpenRead);
    OutFile := TFileStream.Create(OutFileName, fmCreate);
    Repeat
      ReadBufSize := InFile.Read(Buffer, BufSize);
      OutFile.Write(Buffer, ReadBufSize);
    Until ReadBufSize<>BufSize;
    Log('File ''' + InFileName + ''' copied'#13#10);
  Finally
    InFile.Free;
    OutFile.Free;
  End;{Try}
End;{CopyFile}`;

preview.type_diff = `Index: languages/ini.js
===================================================================
--- languages/ini.js    (revision 199)
+++ languages/ini.js    (revision 200)
@@ -1,8 +1,7 @@
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
-  defaultMode:
-  {
+  defaultMode: {
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\\\s]'
   },

*** /path/to/original timestamp
--- /path/to/new      timestamp
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!

! compress the size of the
! changes.

  It is important to spell`;

preview.type_django = `{% if articles|length %}
{% for article in articles %}

{% custom %}

{# Striped table #}
<tr class="{% cycle odd,even %}">
  <td>{{ article|default:"Hi... " }}</td>
  <td {% if article.today %}class="today"{% endif %}>
    Published on {{ article.date }}
  </td>
</tr>

{% endfor %}
{% endif %}`;

preview.type_dns = `$ORIGIN example.com.    ; designates the start of this zone file in the namespace
$TTL 1h                 ; default expiration time of all resource records without their own TTL value
example.com.  IN  SOA   ns.example.com. username.example.com. ( 2007120710 1d 2h 4w 1h )
example.com.  IN  NS    ns                    ; ns.example.com is a nameserver for example.com
example.com.  IN  NS    ns.somewhere.example. ; ns.somewhere.example is a backup nameserver for example.com
example.com.  IN  MX    10 mail.example.com.  ; mail.example.com is the mailserver for example.com
@             IN  MX    20 mail2.example.com. ; equivalent to above line, "@" represents zone origin
@             IN  MX    50 mail3              ; equivalent to above line, but using a relative host name
example.com.  IN  A     192.0.2.1             ; IPv4 address for example.com
              IN  AAAA  2001:db8:10::1        ; IPv6 address for example.com
ns            IN  A     192.0.2.2             ; IPv4 address for ns.example.com
              IN  AAAA  2001:db8:10::2        ; IPv6 address for ns.example.com
www           IN  CNAME example.com.          ; www.example.com is an alias for example.com
wwwtest       IN  CNAME www                   ; wwwtest.example.com is another alias for www.example.com
mail          IN  A     192.0.2.3             ; IPv4 address for mail.example.com
mail2         IN  A     192.0.2.4             ; IPv4 address for mail2.example.com
mail3         IN  A     192.0.2.5             ; IPv4 address for mail3.example.com`;

preview.type_dockerfile = `# Example instructions from https://docs.docker.com/reference/builder/
FROM ubuntu:14.04

MAINTAINER example@example.com

ENV foo /bar
WORKDIR \${foo}   # WORKDIR /bar
ADD . $foo       # ADD . /bar
COPY \\$foo /quux # COPY $foo /quux
ARG   VAR=FOO

RUN apt-get update && apt-get install -y software-properties-common\
    zsh curl wget git htop\
    unzip vim telnet
RUN ["/bin/bash", "-c", "echo hello \${USER}"]

CMD ["executable","param1","param2"]
CMD command param1 param2

EXPOSE 1337

ENV myName="John Doe" myDog=Rex\\ The\\ Dog \
    myCat=fluffy

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy

ADD hom* /mydir/        # adds all files starting with "hom"
ADD hom?.txt /mydir/    # ? is replaced with any single character

COPY hom* /mydir/        # adds all files starting with "hom"
COPY hom?.txt /mydir/    # ? is replaced with any single character
COPY --from=foo / .

ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2

VOLUME ["/data"]

USER daemon

LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \\
that label-values can span multiple lines."

WORKDIR /path/to/workdir

ONBUILD ADD . /app/src

STOPSIGNAL SIGKILL

HEALTHCHECK --retries=3 cat /health

SHELL ["/bin/bash", "-c"]`;

preview.type_dos = `cd \
copy a b
ping 192.168.0.1
@rem ping 192.168.0.1
net stop sharedaccess
del %tmp% /f /s /q
del %temp% /f /s /q
ipconfig /flushdns
taskkill /F /IM JAVA.EXE /T

cd Photoshop/Adobe Photoshop CS3/AMT/
if exist application.sif (
    ren application.sif _application.sif
) else (
    ren _application.sif application.sif
)

taskkill /F /IM proquota.exe /T

sfc /SCANNOW

set path = test

xcopy %1\\*.* %2`;

preview.type_dsconfig = `# Create client connection policies
dsconfig create-client-connection-policy \\
  --policy-name "Restrictive Client Connection Policy" \\
  --set "description:Restrictive Client Connection Policy" \\
  --set enabled:true --set evaluation-order-index:1000 \\
  --set "connection-criteria:User.0 Connection Criteria" \\
  --set maximum-concurrent-connections:2 \\
  --set "maximum-connection-duration:1 s" \\
  --set "maximum-idle-connection-duration:1 s" \\
  --set maximum-operation-count-per-connection:1000
create-client-connection-policy \\
  --policy-name "Another Client Connection Policy" \\
  --set enabled:true --set evaluation-order-index:100 \\
  --set 'connection-criteria:User.1 Connection Criteria' \\
  --reset maximum-concurrent-connections
# Configure global ACIs
dsconfig set-access-control-handler-prop \\
 --add global-aci:'(target="ldap:///cn=config")(targetattr="*")(version 3.0; acl "Allow access to the config tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)' \\
 --add global-aci:'(target="ldap:///cn=monitor")(targetattr="*")(version 3.0; acl "Allow access to the monitor tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)' \\
 --remove global-aci:'(target="ldap:///cn=alerts")(targetattr="*")(version 3.0; acl "Allow access to the alerts tree by cn=admin,c=us"; allow(all) groupdn="ldap:///cn=directory administrators,ou=groups,c=us";)'
# Delete error logger
dsconfig delete-log-publisher --publisher-name "File-Based Error Logger"`;

preview.type_dts = `/*
 *  Copyright (C) 2011 - 2014 Xilinx
 *
 * This software is licensed under the terms of the GNU General Public
 * License version 2, as published by the Free Software Foundation, and
 * may be copied, distributed, and modified under those terms.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
/include/ "skeleton.dtsi"

/ {
    compatible = "xlnx,zynq-7000";

    pmu {
        compatible = "arm,cortex-a9-pmu";
        interrupts = <0 5 4>, <0 6 4>;
        interrupt-parent = <&intc>;
        reg = < 0xf8891000 0x1000 0xf8893000 0x1000 >;
    };

    regulator_vccpint: fixedregulator@0 {
        compatible = "regulator-fixed";
        regulator-name = "VCCPINT";
        regulator-min-microvolt = <1000000>;
        regulator-max-microvolt = <1000000>;
        regulator-boot-on;
        regulator-always-on;
    };

    amba: amba {
        compatible = "simple-bus";
        #address-cells = <1>;
        #size-cells = <1>;
        interrupt-parent = <&intc>;
        ranges;

        adc: adc@f8007100 {
            compatible = "xlnx,zynq-xadc-1.00.a";
            reg = <0xf8007100 0x20>;
            interrupts = <0 7 4>;
            interrupt-parent = <&intc>;
            clocks = <&clkc 12>;
        };

        i2c0: i2c@e0004000 {
            compatible = "cdns,i2c-r1p10";
            status = "disabled";
            clocks = <&clkc 38>;
            interrupt-parent = <&intc>;
            interrupts = <0 25 4>;
            reg = <0xe0004000 0x1000>;
            #address-cells = <1>;
            #size-cells = <0>;
        };

        L2: cache-controller@f8f02000 {
            compatible = "arm,pl310-cache";
            reg = <0xF8F02000 0x1000>;
            interrupts = <0 2 4>;
            arm,data-latency = <3 2 2>;
            arm,tag-latency = <2 2 2>;
            cache-unified;
            cache-level = <2>;
        };

    };
};`;

preview.type_dust = `<h3>Hours</h3>

<ul>
  {#users}
  <li {hello}>{firstName}</li>{~n}
  {/users}
</ul>`;

preview.type_ebnf = `(* line comment *)

rule        =   [optional] , symbol , { letters } , ( digit | symbol ) ;

optional    =   ? something unnecessary ? ; (* trailing comment *)

symbol      =   '!' | '@' | '#' | '$' | '%' | '&' | '*' ;
digit       =   "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;
letter      =   "A" | "B" | "C" | "D" | "E" | "F" | "G"
              | "H" | "I" | "J" | "K" | "L" | "M" | "N"
              | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
              | "V" | "W" | "X" | "Y" | "Z" ;`;

preview.type_elixir = `defrecord Person, first_name: nil, last_name: "Dudington" do
  def name record do # huh ?
    "#{record.first_name} #{record.last_name}"
  end
end

defrecord User, name: "José", age: 25

guy = Person.new first_name: "Guy"
guy.name

defmodule ListServer do
  @moduledoc """
  This module provides an easy to use ListServer, useful for keeping
  lists of things.
  """
  use GenServer.Behaviour
  alias Foo.Bar

  ### Public API
  @doc """
  Starts and links a new ListServer, returning {:ok, pid}

  ## Example

    iex> {:ok, pid} = ListServer.start_link

  """
  def start_link do
    :gen_server.start_link({:local, :list}, __MODULE__, [], [])
  end

  ### GenServer API
  def init(list) do
    {:ok, list}
  end

  # Clear the list
  def handle_cast :clear, list do
    {:noreply, []}
  end
end

{:ok, pid} = ListServer.start_link
pid <- {:foo, "bar"}

greeter = fn(x) -> IO.puts "hey #{x}" end
greeter.("Bob")`;

preview.type_elm = `import Browser
import Html exposing (div, button, text)
import Html.Events exposing (onClick)

type Msg
    = Increment

main =
    Browser.sandbox
        { init = 0
        , update = \\msg model -> model + 1
        , view = view
        }

view model =
    div []
        [ div [] [ text (String.fromInt model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]

chars =
    String.cons 'C' <| String.cons 'h' <| "ars"`;

preview.type_erb = `<%# this is a comment %>

<% @posts.each do |post| %>
  <p><%= link_to post.title, post %></p>
<% end %>

<%- available_things = things.select(&:available?) -%>
<%%- x = 1 + 2 -%%>
<%% value = 'real string #{@value}' %%>
<%%= available_things.inspect %%>`;

preview.type_erlang_repl = `1> Str = "abcd".
"abcd"
2> L = test:length(Str).
4
3> Descriptor = {L, list_to_atom(Str)}.
{4,abcd}
4> L.
4
5> b().
Descriptor = {4,abcd}
L = 4
Str = "abcd"
ok
6> f(L).
ok
7> b().
Descriptor = {4,abcd}
Str = "abcd"
ok
8> {L, _} = Descriptor.
{4,abcd}
9> L.
4
10> 2#101.
5
11> 1.85e+3.
1850`;

preview.type_erlang = `-module(ssh_cli).

-behaviour(ssh_channel).

-include("ssh.hrl").
%% backwards compatibility
-export([listen/1, listen/2, listen/3, listen/4, stop/1]).

if L =/= [] ->      % If L is not empty
    sum(L) / count(L);
true ->
    error
end.

%% state
-record(state, {
    cm,
    channel
   }).

-spec foo(integer()) -> integer().
foo(X) -> 1 + X.

test(Foo)->Foo.

init([Shell, Exec]) ->
    {ok, #state{shell = Shell, exec = Exec}};
init([Shell]) ->
    false = not true,
    io:format("Hello, \\"~p!~n", [atom_to_list('World')]),
    {ok, #state{shell = Shell}}.

concat([Single]) -> Single;
concat(RList) ->
    EpsilonFree = lists:filter(
        fun (Element) ->
            case Element of
                epsilon -> false;
                _ -> true
            end
        end,
        RList),
    case EpsilonFree of
        [Single] -> Single;
        Other -> {concat, Other}
    end.

union_dot_union({union, _}=U1, {union, _}=U2) ->
    union(lists:flatten(
        lists:map(
            fun (X1) ->
                lists:map(
                    fun (X2) ->
                        concat([X1, X2])
                    end,
                    union_to_list(U2)
                )
            end,
            union_to_list(U1)
        ))).`;

preview.type_excel = `=IF(C10 <= 275.5, "Unprofitable", "Profitable")`;

preview.type_fix = `8=FIX.4.2␁9=0␁35=8␁49=SENDERTEST␁56=TARGETTEST␁34=00000001526␁52=20120429-13:30:08.137␁1=ABC12345␁11=2012abc1234␁14=100␁17=201254321␁20=0␁30=NYSE␁31=108.20␁32=100␁38=100␁39=2␁40=1␁47=A␁54=5␁55=BRK␁59=2␁60=20120429-13:30:08.000␁65=B␁76=BROKER␁84=0␁100=NYSE␁111=100␁150=2␁151=0␁167=CS␁377=N␁10000=SampleCustomTag␁10=123␁

8=FIX.4.29=035=849=SENDERTEST56=TARGETTEST34=0000000152652=20120429-13:30:08.1371=ABC1234511=2012abc123414=10017=20125432120=030=NYSE31=108.2032=10038=10039=240=147=A54=555=BRK59=260=20120429-13:30:08.00065=B76=BROKER84=0100=NYSE111=100150=2151=0167=CS377=N10000=SampleCustomTag10=123
`;

preview.type_flix = `/**
 * An example of Flix for syntax highlighting.
 */

// Here is a namespace.
namespace a.b.c {

    // Here are some literals.
    def b: Bool = true
    def c: Char = 'a'
    def f: Float = 1.23
    def i: Int = 42
    def s: Str = "string"

    // Here are some relations.
    rel LitStm(r: Str, c: Int)
    rel AddStm(r: Str, x: Str, y: Str)
    rel DivStm(r: Str, x: Str, y: Str)

    // Here is a lattice.
    lat LocalVar(k: Str, v: Constant)

    // Here is an index.
    index LitStm{{r}, {r, c}}

    // Here is an enum.
    enum Constant {
          case Top,

        case Cst(Int),

          case Bot
    }

    // Here is a function.
    def leq(e1: Constant, e2: Constant): Bool = match (e1, e2) with {
        case (Constant.Bot, _)                      => true
        case (Constant.Cst(n1), Constant.Cst(n2))   => n1 == n2
        case (_, Constant.Top)                      => true
        case _                                      => false
    }

    // Here are some rules.
    LocalVar(r, alpha(c)) :- LitStm(r, c).

    LocalVar(r, sum(v1, v2)) :- AddStm(r, x, y),
                                LocalVar(x, v1),
                                LocalVar(y, v2).
}`;

preview.type_fortran = `subroutine test_sub(k)
    implicit none

  !===============================
  !   This is a test subroutine
  !===============================

    integer, intent(in)           :: k
    double precision, allocatable :: a(:)
    integer, parameter            :: nmax=10
    integer                       :: i

    allocate (a(nmax))

    do i=1,nmax
      a(i) = dble(i)*5.d0
    enddo

    print *, 'Hello world'
    write (*,*) a(:)

end subroutine test_sub`;

preview.type_fsharp = `open System

// Single line comment...
(*
  This is a
  multiline comment.
*)
let checkList alist =
    match alist with
    | [] -> 0
    | [a] -> 1
    | [a; b] -> 2
    | [a; b; c] -> 3
    | _ -> failwith "List is too big!"


let text = "Some text..."
let text2 = @"A ""verbatim"" string..."
let catalog = """
Some "long" string...
"""

let rec fib x = if x <= 2 then 1 else fib(x-1) + fib(x-2)

let fibs =
    Async.Parallel [ for i in 0..40 -> async { return fib(i) } ]
    |> Async.RunSynchronously

type Sprocket(gears) =
  member this.Gears : int = gears

[<AbstractClass>]
type Animal =
  abstract Speak : unit -> unit

type Widget =
  | RedWidget
  | GreenWidget

type Point = {X: float; Y: float;}

[<Measure>]
type s
let minutte = 60<s>

type DefaultMailbox<'a>() =
    let mutable inbox = ConcurrentQueue<'a>()
    let awaitMsg = new AutoResetEvent(false)`;

preview.type_gams = `SETS
    I   canning plants   / SEATTLE, SAN-DIEGO /
    J   markets          / NEW-YORK, CHICAGO, TOPEKA / ;
PARAMETERS
    A(I)  capacity of plant i in cases
      /    SEATTLE     350
           SAN-DIEGO   600  /
    B(J)  demand at market j in cases
      /    NEW-YORK    325
           CHICAGO     300
           TOPEKA      275  / ;
TABLE D(I,J)  distance in thousands of miles
                  NEW-YORK       CHICAGO      TOPEKA
    SEATTLE          2.5           1.7          1.8
    SAN-DIEGO        2.5           1.8          1.4  ;
SCALAR F  freight in dollars per case per thousand miles  /90/ ;
PARAMETER C(I,J)  transport cost in thousands of dollars per case ;
          C(I,J) = F * D(I,J) / 1000 ;
VARIABLES
    X(I,J)  shipment quantities in cases
    Z       total transportation costs in thousands of dollars ;
POSITIVE VARIABLE X ;
EQUATIONS
    COST        define objective function
    SUPPLY(I)   observe supply limit at plant i
    DEMAND(J)   satisfy demand at market j ;
COST ..        Z  =E=  SUM((I,J), C(I,J)*X(I,J)) ;
SUPPLY(I) ..   SUM(J, X(I,J))  =L=  A(I) ;
DEMAND(J) ..   SUM(I, X(I,J))  =G=  B(J) ;
MODEL TRANSPORT /ALL/ ;
SOLVE TRANSPORT USING LP MINIMIZING Z ;`;

preview.type_gauss = `// This is a test
#include pv.sdf

proc (1) = calc(local__row, fin);
    if local__row;
        nr = local__row;
    else;
        k = colsf(fin);
        nr = floor(minc(maxbytes/(k*8*3.5)|maxvec/(k+1)));
    endif;
    retp(nr);
endp;

s = "{% test string %}";

fn twopi=pi*2;

/* Takes in multiple numbers.
   Output sum */
keyword add(str);
   local tok,sum;
   sum = 0;
   do until str $== "";
      { tok, str } = token(str);
      sum = sum + stof(tok);
   endo;
   print "Sum is: " sum;
endp;`;

preview.type_gcode = `O003 (DIAMOND SQUARE)
N2 G54 G90 G49 G80
N3 M6 T1 (1.ENDMILL)
N4 M3 S1800
N5 G0 X-.6 Y2.050
N6 G43  H1  Z.1
N7 G1 Z-.3 F50.
N8 G41 D1 Y1.45
N9 G1 X0 F20.
N10 G2 J-1.45
(CUTTER COMP CANCEL)
N11 G1 Z-.2 F50.
N12 Y-.990
N13 G40
N14 G0 X-.6 Y1.590
N15 G0 Z.1
N16 M5 G49 G28 G91 Z0
N17 CALL O9456
N18 #500=0.004
N19 #503=[#500+#501]
N20 VC45=0.0006
VS4=0.0007
N21 G90 G10 L20 P3 X5.Y4. Z6.567
N22 G0 X5000
N23 IF [#1 LT 0.370] GOTO 49
N24 X-0.678 Y+.990
N25 G84.3 X-0.1
N26 #4=#5*COS[45]
N27 #4=#5*SIN[45]
N28 VZOFZ=652.9658
%`;

preview.type_gherkin = `# language: en
Feature: Addition
  In order to avoid silly mistakes
  As a math idiot
  I want to be told the sum of two numbers

  @this_is_a_tag
  Scenario Outline: Add two numbers
    * I have a calculator
    Given I have entered <input_1> into the calculator
    And I have entered <input_2> into the calculator
    When I press <button>
    Then the result should be <output> on the screen
    And I have a string like
    """
    Here is
    some
    multiline text
    """

  Examples:
    | input_1 | input_2 | button | output |
    | 20      | 30      | add    | 50     |
    | 2       | 5       | add    | 7      |
    | 0       | 40      | add    | 40     |`;

preview.type_glsl = `// vertex shader
#version 150
in  vec2 in_Position;
in  vec3 in_Color;

out vec3 ex_Color;
void main(void) {
    gl_Position = vec4(in_Position.x, in_Position.y, 0.0, 1.0);
    ex_Color = in_Color;
}


// geometry shader
#version 150

layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

void main() {
  for(int i = 0; i < gl_in.length(); i++) {
    gl_Position = gl_in[i].gl_Position;
    EmitVertex();
  }
  EndPrimitive();
}


// fragment shader
#version 150
precision highp float;

in  vec3 ex_Color;
out vec4 gl_FragColor;

void main(void) {
    gl_FragColor = vec4(ex_Color, 1.0);
}`;

preview.type_gml = `/// @description Collision code
// standard collision handling

// Horizontal collisions
if(place_meeting(x+hspd, y, obj_wall)) {
    while(!place_meeting(x+sign(hspd), y, obj_wall)) {
        x += sign(hspd);
    }
    hspd = 0;
}
x += hspd;

// Vertical collisions
if(place_meeting(x, y+vspd, collide_obj)) {
    while(!place_meeting(x, y+sign(vspd), collide_obj)) {
        y += sign(vspd);
    }
    vspd = 0;
}
y += vspd;

show_debug_message("This is a test");`;

preview.type_go = `package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\\\`)
    go println(len("hello world!"))
    return
}`;

preview.type_golo = `module hello

function dyno = -> DynamicObject()

struct human = { name }

@annotated
function main = |args| {
    let a = 1
    var b = 2

    println("hello") 

    let john = human("John Doe")
}`;

preview.type_gradle = `apply plugin: 'android'

android {
    compileSdkVersion 19
    buildToolsVersion "19.1"

    defaultConfig {
        minSdkVersion 15
        targetSdkVersion 19
        versionCode 5
        versionName "0.4.4"
    }

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_7
        targetCompatibility JavaVersion.VERSION_1_7
    }
    signingConfigs {
        release
    }
    buildTypes {
        release {
            // runProguard true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.txt'
            signingConfig signingConfigs.release
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])

    compile 'com.example:example-lib:1.0.0'
}


def propFile = file('../signing.properties')
if( propFile.canRead() ) {
    def Properties p = new Properties()
    p.load(new FileInputStream(propFile))

    if( p!=null
    &&  p.containsKey("STORE_FILE")
    &&  p.containsKey('STORE_PASSWORD')
    &&  p.containsKey('KEY_ALIAS')
    &&  p.containsKey('KEY_PASSWORD')
    ) {
        println "RELEASE_BUILD: Signing..."

        android.signingConfigs.release.storeFile = file( p['STORE_FILE'] )
        android.signingConfigs.release.storePassword = p['STORE_PASSWORD']
        android.signingConfigs.release.keyAlias = p['KEY_ALIAS']
        android.signingConfigs.release.keyPassword = p['KEY_PASSWORD']
    } else {
        println "RELEASE_BUILD: Required properties in signing.properties are missing"
        android.buildTypes.release.signingConfig = null
    }
} else {
    println "RELEASE_BUILD: signing.properties not found"
    android.buildTypes.release.signingProperties = null
}`;

preview.type_groovy = `#!/usr/bin/env groovy
package model

import groovy.transform.CompileStatic
import java.util.List as MyList

trait Distributable {
    void distribute(String version) {}
}

@CompileStatic
class Distribution implements Distributable {
    double number = 1234.234 / 567
    def otherNumber = 3 / 4
    boolean archivable = condition ?: true
    def ternary = a ? b : c
    String name = "Guillaume"
    Closure description = null
    List<DownloadPackage> packages = []
    String regex = ~/.*foo.*/
    String multi = '''
        multi line string
    ''' + """
        now with double quotes and \${gstring}
    """ + $/
        even with dollar slashy strings
    /$

    /**
     * description method
     * @param cl the closure
     */
    void description(Closure cl) { this.description = cl }

    void version(String name, Closure versionSpec) {
        def closure = { println "hi" } as Runnable

        MyList ml = [1, 2, [a: 1, b:2,c :3]]
        for (ch in "name") {}

        // single line comment
        DownloadPackage pkg = new DownloadPackage(version: name)

        check that: true

        label:
        def clone = versionSpec.rehydrate(pkg, pkg, pkg)
        /*
            now clone() in a multiline comment
        */
        clone()
        packages.add(pkg)

        assert 4 / 2 == 2
    }
}`;

preview.type_haml = `!!! XML
%html
  %body
    %h1.jumbo{:id=>"a", :style=>'font-weight: normal', :title=>title} highlight.js
    /html comment
    -# ignore this line
    %ul(style='margin: 0')
    -items.each do |i|
      %i= i
    = variable
    =variable2
    ~ variable3
    ~variable4
    The current year is #{DataTime.now.year}.`;

preview.type_handlebars = `<div class="entry">
  {{!-- only show if author exists --}}
  {{#if author}}
    <h1>{{firstName}} {{lastName}}</h1>
  {{/if}}
</div>`;

preview.type_haskell = `{-# LANGUAGE TypeSynonymInstances #-}
module Network.UDP
( DataPacket(..)
, openBoundUDPPort
, openListeningUDPPort
, pingUDPPort
, sendUDPPacketTo
, recvUDPPacket
, recvUDPPacketFrom
) where

import qualified Data.ByteString as Strict (ByteString, concat, singleton)
import qualified Data.ByteString.Lazy as Lazy (ByteString, toChunks, fromChunks)
import Data.ByteString.Char8 (pack, unpack)
import Network.Socket hiding (sendTo, recv, recvFrom)
import Network.Socket.ByteString (sendTo, recv, recvFrom)

-- Type class for converting StringLike types to and from strict ByteStrings
class DataPacket a where
  toStrictBS :: a -> Strict.ByteString
  fromStrictBS :: Strict.ByteString -> a

instance DataPacket Strict.ByteString where
  toStrictBS = id
  {-# INLINE toStrictBS #-}
  fromStrictBS = id
  {-# INLINE fromStrictBS #-}

openBoundUDPPort :: String -> Int -> IO Socket
openBoundUDPPort uri port = do
  s <- getUDPSocket
  bindAddr <- inet_addr uri
  let a = SockAddrInet (toEnum port) bindAddr
  bindSocket s a
  return s

pingUDPPort :: Socket -> SockAddr -> IO ()
pingUDPPort s a = sendTo s (Strict.singleton 0) a >> return ()`;

preview.type_haxe = `package my.package;

#if js
import js.Browser;
#elseif sys
import Sys;
#else
import Date;
#end

import Lambda;
using Main.IntExtender;

extern class Math {
    static var PI(default,null) : Float;
    static function floor(v:Float):Int;
}

/**
 * Abstract forwarding
 */
abstract MyAbstract(Int) from Int to Int {
    inline function new(i:Int) {
        this = i;
    }

    @:op(A * B)
    public function multiply(rhs:MyAbstract) {
        return this * rhs;
    }
}

// an enum
enum Color {
    Red;
    Green;
    Blue;
    Rgb(r:Int, g:Int, b:Int);
}

@:generic
class Gen<T> {
    var v:T;
    public function new(v:T) {
        this.v = v;
    }

    public var x(get, set):T;

    private inline function get_x():T
        return v;

    private inline function set_x(x:T):T
        return v = x;
}

class Main extends BaseClass implements SomeFunctionality {
    var callback:Void->Void = null;
    var myArray:Array<Float> = new Array<Float>();
    var arr = [4,8,0,3,9,1,5,2,6,7];

    public function new(x) {
        super(x);
    }

    public static function main() {
        trace('What\\'s up?');
        trace('Hi, \${name}!');

        // switch statements!
        var c:Color = Color.Green;
        var x:Int = switch(c) {
            case Red: 0;
            case Green: 1;
            case Blue: 2;
            case Rgb(r, g, b): 3;
            case _: -1;
        }

        for(i in 0...3) {
            trace(i);
            continue;
            break;
        }

        do {
            trace("Hey-o!");
        } while(false);

        var done:Bool = false;
        while(!done) {
            done = true;
        }

        var H:Int = cast new MyAbstract(42);
        var h:Int = cast(new MyAbstract(31), Int);

        try {
            throw "error";
        }
        catch(err:String) {
            trace(err);
        }

        var map = new haxe.ds.IntMap<String>();
        var f = map.set.bind(_, "12");
    }

    function nothing():Void
        trace("nothing!");

    private inline function func(a:Int, b:Float, ?c:String, d:Bool=false):Dynamic {
        return {
            x: 0,
            y: true,
            z: false,
            a: 1.53,
            b: 5e10,
            c: -12,
            h: null
        };
    }


    override function quicksort( lo : Int, hi : Int ) : Void {
        var i = lo;
        var j = hi;
        var buf = arr;
        var p = buf[(lo+hi)>>1];
        while( i <= j ) {
            while( arr[i] > p ) i++;
            while( arr[j] < p ) j--;
            if( i <= j ) {
                var t = buf[i];
                buf[i++] = buf[j];
                buf[j--] = t;
            }
        }
        if( lo < j ) quicksort( lo, j );
        if( i < hi ) quicksort( i, hi );
    }
}`;

preview.type_hsp = `#include "foo.hsp"

    // line comment
    message = "Hello, World!"
    message2 = {"Multi
    line
    string"}
    num = 0
    mes message

    input num : button "sqrt", *label
    stop

*label
    /*
     block comment
    */
    if(num >= 0) {
        dialog "sqrt(" + num + ") = " + sqrt(num)
    } else {
        dialog "error", 1
    }
    stop`;

preview.type_http = `POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 137

{
  "status": "ok",
  "extended": true,
  "results": [
    {"value": 0, "type": "int64"},
    {"value": 1.0e+3, "type": "decimal"}
  ]
}`;

preview.type_hy = `#!/usr/bin/env hy

(import os.path)

(import hy.compiler)
(import hy.core)


;; absolute path for Hy core
(setv *core-path* (os.path.dirname hy.core.--file--))


(defn collect-macros [collected-names opened-file]
  (while True
    (try
     (let [data (read opened-file)]
       (if (and (in (first data)
                    '(defmacro defmacro/g! defn))
                (not (.startswith (second data) "_")))
         (.add collected-names (second data))))
     (except [e EOFError] (break)))))


(defmacro core-file [filename]
  \`(open (os.path.join *core-path* ~filename)))


(defmacro contrib-file [filename]
  \`(open (os.path.join *core-path* ".." "contrib" ~filename)))


(defn collect-core-names []
  (doto (set)
        (.update hy.core.language.*exports*)
        (.update hy.core.shadow.*exports*)
        (collect-macros (core-file "macros.hy"))
        (collect-macros (core-file "bootstrap.hy"))))`;

preview.type_inform7 = `Book 1 - Language Definition Testing File

[Comments in Inform 7 can be [nested] inside one another]

Syntax highlighting is an action applying to one thing.
Understand "highlight [something preferably codeish]" as syntax highlighting.

Code is a kind of thing. Code is usually plural-named.

Code can be highlighted. Code is usually not highlighted.

Check syntax highlighting:
  unless the noun is code:
    say "[The noun] isn't source code you can highlight.";
    rule fails.

Carry out syntax highlighting:
  now the noun is highlighted.

Table of Programming Languages
language  utility
ruby      "Web back-end development"
lua       "Embedded scripting"
erlang    "High-concurrency server applications"`;

preview.type_ini = `; boilerplate
[package]
name = "some_name"
authors = ["Author"]
description = "This is \\
a description"

[[lib]]
name = \${NAME}
default = True
auto = no
counter = 1_000`;

preview.type_irpf90 = ` BEGIN_PROVIDER [ integer(bit_kind), psi_det_sorted_bit, (N_int,2,psi_det_size) ]
&BEGIN_PROVIDER [ double precision, psi_coef_sorted_bit, (psi_det_size,N_states) ]
 implicit none
 BEGIN_DOC
 ! Determinants on which we apply <i|H|psi> for perturbation.
 ! They are sorted by determinants interpreted as integers. Useful
 ! to accelerate the search of a random determinant in the wave
 ! function.
 END_DOC
 integer :: i,j,k
 integer, allocatable ::  iorder(:)
 integer*8, allocatable :: bit_tmp(:)
 integer*8, external :: det_search_key

 allocate ( iorder(N_det), bit_tmp(N_det) )

 do i=1,N_det
   iorder(i) = i
   !DIR$ FORCEINLINE
   bit_tmp(i) = det_search_key(psi_det(1,1,i),N_int)
 enddo
 call isort(bit_tmp,iorder,N_det)
 !DIR$ IVDEP
 do i=1,N_det
  do j=1,N_int
    psi_det_sorted_bit(j,1,i) = psi_det(j,1,iorder(i))
    psi_det_sorted_bit(j,2,i) = psi_det(j,2,iorder(i))
  enddo
  do k=1,N_states
    psi_coef_sorted_bit(i,k) = psi_coef(iorder(i),k)
  enddo
 enddo

 deallocate(iorder, bit_tmp)

END_PROVIDER
`;

preview.type_isbl = `﻿  // Описание констант
  ADD_EQUAL_NUMBER_TEMPLATE = "%s.%s = %s"
  EMPLOYEES_REFERENCE = "РАБ"
  /********************************************* 
   *  Получить список кодов или ИД работников, *
   *  соответствующих текущему пользователю    *
   *********************************************/
  Employees: IReference.РАБ = CreateReference(EMPLOYEES_REFERENCE; 
    ArrayOf("Пользователь"; SYSREQ_STATE); MyFunction(FALSE; MyParam * 0.05))
  Employees.Events.DisableAll
  EmployeesTableName = Employees.TableName
  EmployeesUserWhereID = Employees.AddWhere(Format(ADD_EQUAL_NUMBER_TEMPLATE; 
    ArrayOf(EmployeesTableName; Employees.Requisites("Пользователь").SQLFieldName; 
    EDocuments.CurrentUser.ID)))
  Employees.Open()
  Result = CreateStringList()
  foreach Employee in Employees
    if IsResultCode
      Result.Add(Employee.SYSREQ_CODE)
    else
      Result.Add(Employee.SYSREQ_ID)
    endif  
  endforeach
  Employees.Close()
  Employees.DelWhere(EmployeesUserWhereID)
  Employees.Events.EnableAll
  Employees = nil`;

preview.type_java = `/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    log("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}`;

preview.type_javascript = `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;`;

preview.type_jboss_cli = `jms-queue add --queue-address=myQueue --entries=queue/myQueue

deploy /path/to/file.war

/system-property=prop1:add(value=value1)



/extension=org.jboss.as.modcluster:add

./foo=bar:remove

/subsystem=security/security-domain=demo-realm/authentication=classic:add

/subsystem=security/security-domain=demo-realm/authentication=classic/login-module=UsersRoles:add( \\
    code=UsersRoles, \\
    flag=required, \\
    module-options=  { \\
         usersProperties=auth/demo-users.properties, \\
         rolesProperties =auth/demo-roles.properties,  \\
         hashAlgorithm= MD5, \\
         hashCharset="UTF-8"  \\
    } \\
)`;

preview.type_json = `[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]`;

preview.type_julia = `### Types

# Old-style definitions

immutable Point{T<:AbstractFloat}
    index::Int
    x::T
    y::T
end

abstract A

type B <: A end

typealias P Point{Float16}

# New-style definitions

struct Plus
    f::typeof(+)
end

mutable struct Mut
    mutable::A          # mutable should not be highlighted (not followed by struct)
    primitive::B        # primitive should not be highlighted (not followed by type)
end

primitive type Prim 8 end

abstract type Abstr end

### Modules

module M

using X
import Y
importall Z

export a, b, c

end # module

baremodule Bare
end

### New in 0.6

# where, infix isa, UnionAll
function F{T}(x::T) where T
    for i in x
        i isa UnionAll && return
    end
end

### Miscellaneous

#=
Multi
Line
Comment
=#
function method0(x, y::Int; version::VersionNumber=v"0.1.2")
    """
    Triple
    Quoted
    String
    """

    @assert π > e

    s = 1.2
    変数 = "variable"

    if s * 100_000 ≥ 5.2e+10 && true || x === nothing
        s = 1. + .5im
    elseif 1 ∈ [1, 2, 3]
        println("s is $s and 変数 is $変数")
    else
        x = [1 2 3; 4 5 6]
        @show x'
    end

    local var = rand(10)
    global g = 44
    var[1:5]
    var[5:end-1]
    var[end]

    opt = "-la"
    run(\`ls $opt\`)

    try
        ccall(:lib, (Ptr{Void},), Ref{C_NULL})
    catch
        throw(ArgumentError("wat"))
    finally
        warn("god save the queen")
    end

    '\\u2200' != 'T'

    return 5s / 2
end`;

preview.type_julia_repl = `julia> function foo(x) x + 1 end
foo (generic function with 1 method)

julia> foo(42)
43

julia> foo(42) === 43.
false


Here we match all three lines of code:

julia> function foo(x::Float64)
           42. - x
       end
foo (generic function with 2 methods)

julia> for x in Any[1, 2, 3.4]
          println("foo($x) = $(foo(x))")
       end
foo(1) = 2
foo(2) = 3
foo(3.4) = 38.6


... unless it is not properly indented:

julia> function foo(x)
    x + 1
end


Ordinary Julia code does not get highlighted:

Pkg.add("Combinatorics")
abstract type Foo end`;

preview.type_kotlin = `import kotlin.lang.test

trait A {
    fun x()
}

fun xxx() : Int {
    return 888
}

public fun main(args : Array<String>) {
}`;

preview.type_lasso = `<?LassoScript
/* Lasso 8 */
  local('query' = 'SELECT * FROM \`'+var:'table'+'\` WHERE \`id\` > 10
    ORDER BY \`Name\` LIMIT 30');
  Inline: -Username=$DBuser, -Password=$DBpass, -Database=$DBname, -sql=#query;
    var("class1.name" = (found_count != 0 ? "subtotal" | "nonefound"),
        "total_amount" = found_count || "No results");
    records;
      output: "<tr>"loop_count"</tr>";
    /records;
  /Inline;
?><div class="[$class1.name]">[$total_amount]</div>
<?lasso
/* Lasso 9 */ ?>
[noprocess] causes [delimiters] to be <?=skipped?> until the next [/noprocess]
[
  define strings.combine(value::string, ...other)::string => {
    local(result = #value->append(#other->asString&trim))
    return set(#result, not #other, \\givenBlock)
  }
  /**! descriptive text */
  define person => type {
    parent entity
    data name::string, protected nickname, birthdate :: date
    data private ssn = null
    private showAge() => frozen { return ..age }
    protected fullName() => \`"\` + .nickname + \`"\` + .'name'
    public ssnListed::boolean => .ssn() ? true | false
  }
  define person->name=(value) => {
    .'name' = #value
    return self->'name'
  }
  define bytes->+(rhs::bytes) => bytes(self)->append(#rhs)&
] <!-- an HTML comment <?=disables delimiters?> as well -->
[no_square_brackets] disables [square brackets] for the rest of the file
<?=
  // query expression
  with n in array((:-12, 0xABCD, 3.14159e14), (:NaN, -infinity, .57721))
  let swapped = pair(#n->\\second, #n->first)
  group #swapped by #n->first into t
  let key = #t->key
  order by #key
  select pair(#key, #1)
  do {^
    #n->upperCase
  ^}
?>`;

preview.type_latex = `\\documentclass{article}
\\usepackage[koi8-r]{inputenc}
\\hoffset=0pt
\\voffset=.3em
\\tolerance=400
\\newcommand{\\eTiX}{\\TeX}
\\begin{document}
\\section*{Highlight.js}
\\begin{table}[c|c]
$\\frac 12\\, + \\, \\frac 1{x^3}\\text{Hello \\! world}$ & \\textbf{Goodbye\\~ world} \\\\\\eTiX $ \\pi=400 $
\\end{table}
Ch\\'erie, \\c{c}a ne me pla\\^\\i t pas! % comment \\b
G\\"otterd\\"ammerung~45\\%=34.
$$
    \\int\\limits_{0}^{\\pi}\\frac{4}{x-7}=3
$$
\\end{document}`;

preview.type_ldif = `# Example LDAP user
dn: uid=user.0,ou=People,dc=example,dc=com
objectClass: top
objectClass: person
objectClass: organizationalPerson
objectClass: inetOrgPerson
givenName: Morris
sn: Day
cn: Morris Day
initials: MD
employeeNumber: 0
uid: user.0
mail: user.0@example.com
userPassword: password
telephoneNumber: +1 042 100 3866
homePhone: +1 039 680 4135
pager: +1 284 199 0966
mobile: +1 793 707 0251
street: 90280 Spruce Street
l: Minneapolis
st: MN
postalCode: 50401
postalAddress: Morris Day$90280 Spruce Street$Minneapolis, MN  50401
description: This is the description for Morris Day.

dn: CN=John Smith,OU=Legal,DC=example,DC=com
changetype: modify
replace: employeeID
employeeID: 1234
-
replace: employeeNumber
employeeNumber: 98722
-
replace: extensionAttribute6
extensionAttribute6: JSmith98
-

dn: CN=Jane Smith,OU=Accounting,DC=example,DC=com
changetype: modify
replace: employeeID
employeeID: 5678
-
replace: employeeNumber
employeeNumber: 76543
-
replace: extensionAttribute6
extensionAttribute6: JSmith14
-`;

preview.type_leaf = `#empty(friends) {
    Try adding some friends!
} ##loop(friends, "friend") {
    <li> #(friend.name) </li>
}

#someTag(parameter.list, goes, "here") {
    This is an optional body here
}

#index(friends, "0") {
    Hello, #(self)!
} ##else() {
    Nobody's there!
}

#()

#raw() {
    <li> Hello </li>
}`;

preview.type_less = `@import "fruits";

@rhythm: 1.5em;

@media screen and (min-resolution: 2dppx) {
    body {font-size: 125%}
}

section > .foo + #bar:hover [href*="less"] {
    margin:     @rhythm 0 0 @rhythm;
    padding:    calc(5% + 20px);
    background: #f00ba7 url(http://placehold.alpha-centauri/42.png) no-repeat;
    background-image: linear-gradient(-135deg, wheat, fuchsia) !important ;
    background-blend-mode: multiply;
}

@font-face {
    font-family: /* ? */ 'Omega';
    src: url('../fonts/omega-webfont.woff?v=2.0.2');
}

.icon-baz::before {
    display:     inline-block;
    font-family: "Omega", Alpha, sans-serif;
    content:     "\\f085";
    color:       rgba(98, 76 /* or 54 */, 231, .75);
}`;

preview.type_lisp = `#!/usr/bin/env csi

(defun prompt-for-cd ()
   "Prompts
    for CD"
   (prompt-read "Title" 1.53 1 2/4 1.7 1.7e0 2.9E-4 +42 -7 #b001 #b001/100 #o777 #O777 #xabc55 #c(0 -5.6))
   (prompt-read "Artist" &rest)
   (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
  (if x (format t "yes") (format t "no" nil) ;and here comment
  )
  ;; second line comment
  '(+ 1 2)
  (defvar *lines*)                ; list of all lines
  (position-if-not #'sys::whitespacep line :start beg))
  (quote (privet 1 2 3))
  '(hello world)
  (* 5 7)
  (1 2 34 5)
  (:use "aaaa")
  (let ((x 10) (y 20))
    (print (+ x y))
  )`;
preview.type_livecodeserver = `<?rev

global gControllerHandlers, gData
local sTest
put "blog,index" into gControllerHandlers


command blog
  -- simple comment
  put "Hello World!" into sTest
  # ANOTHER COMMENT
  put "form,url,asset" into tHelpers
  rigLoadHelper tHelpers
end blog

/*Hello
block comment!*/

function myFunction
  if the secs > 2000000000 then
    put "Welcome to the future!"
  else
    return "something"
  end if
end myFunction


--| END OF blog.lc
--| Location: ./system/application/controllers/blog.lc
----------------------------------------------------------------------`;

preview.type_livescript = `# take the first n objects from a list
take = (n, [x, ...xs]:list) -->
  | n <= 0     => []
  | empty list => []
  | otherwise  => [x] ++ take n - 1, xs

take 2, [1, 2, 3, 4, 5]

# Curried functions
take-three = take 3
take-three [6, 7, 8, 9, 10]

# Function composition
last-three = reverse >> take-three >> reverse
last-three [1 to 8]

# List comprehensions and piping
const t1 =
  * id: 1
    name: 'george'
  * id: 2
    name: 'mike'
  * id: 3
    name: 'donald'

const t2 =
  * id: 2
    age: 21
  * id: 1
    age: 20
  * id: 3
    age: 26
[{id:id1, name, age}
  for {id:id1, name} in t1
  for {id:id2, age} in t2
  where id1 is id2]
  |> sort-by \\id
  |> JSON.stringify

~function add x, y
  @result = x + y

class A
  (num) ->
    @x = num
  property: 1
  method: (y) ->
    @x + @property + y

a = new A 3
a.x        #=> 3
a.property #=> 1
a.method 6 #=> 10

f = !-> 2
g = (x) !-> x + 2

result = switch 'test'
case 'blatant'
  'effort'
  fallthrough
case 'at'
  'increasing'
  fallthrough
case 'relevance'
  void`;

preview.type_llvm = `; ModuleID = 'test.c'
target datalayout = "e-m:e-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

%struct._IO_FILE = type { i32, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, %struct._IO_marker*, %struct._IO_FILE*, i32, i32, i64, i16, i8, [1 x i8], i8*, i64, i8*, i8*, i8*, i8*, i64, i32, [20 x i8] }
%struct._IO_marker = type { %struct._IO_marker*, %struct._IO_FILE*, i32 }
%struct.what = type { i8, i16 }

@.str = private unnamed_addr constant [6 x i8] c"foo()\\00", align 1
@e_long = common global i64 0, align 8
@g_double = common global double 0.000000e+00, align 8
@.str.1 = private unnamed_addr constant [7 x i8] c"oooooh\\00", align 1
@func_ptr = common global i32 (...)* null, align 8
@stderr = external global %struct._IO_FILE*, align 8

; Function Attrs: nounwind uwtable
define i32 @foo() #0 {
  %1 = call i32 @puts(i8* getelementptr inbounds ([6 x i8], [6 x i8]* @.str, i32 0, i32 0))
  ret i32 0
}

declare i32 @puts(i8*) #1

; Function Attrs: nounwind uwtable
define i32 @main(i32 %argc, i8** %argv) #0 {
  %1 = alloca i32, align 4
  %2 = alloca i32, align 4
  %3 = alloca i8**, align 8

; <label>:7                                       ; preds = %0
  %8 = getelementptr inbounds %struct.what, %struct.what* %X, i32 0, i32 0
  store i8 1, i8* %8, align 2
  store i8 49, i8* %b_char, align 1
  %9 = getelementptr inbounds %struct.what, %struct.what* %X, i32 0, i32 1
  store double 1.000000e+01, double* @g_double, align 8
  store i8* getelementptr inbounds ([7 x i8], [7 x i8]* @.str.1, i32 0, i32 0), i8** %cp_char_ptr, align 8
  store i32 (...)* bitcast (i32 ()* @foo to i32 (...)*), i32 (...)** @func_ptr, align 8
  %10 = call i32 @puts(i8* getelementptr inbounds ([8 x i8], [8 x i8]* @.str.2, i32 0, i32 0))
  store i32 10, i32* %1, align 4
  br label %66

; <label>:63                                      ; preds = %11
  %64 = load %struct._IO_FILE*, %struct._IO_FILE** @stderr, align 8
  %65 = call i32 @fputs(i8* getelementptr inbounds ([11 x i8], [11 x i8]* @.str.9, i32 0, i32 0), %struct._IO_FILE* %64)
  store i32 -1, i32* %1, align 4
  br label %66

; <label>:66                                      ; preds = %63, %46, %7
  %67 = load i32, i32* %1, align 4
  ret i32 %67
}

declare i32 @printf(i8*, ...) #1

declare i32 @fputs(i8*, %struct._IO_FILE*) #1

attributes #0 = { nounwind uwtable "disable-tail-calls"="false" "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+fxsr,+mmx,+sse,+sse2" "unsafe-fp-math"="false" "use-soft-float"="false" }

!llvm.ident = !{!0}

!0 = !{!"clang version 3.8.0 (tags/RELEASE_380/final)"}`;

preview.type_lsl = `default
{
    state_entry()
    {
        llSay(PUBLIC_CHANNEL, "Hello, Avatar!");
    }

    touch_start(integer num_detected)
    {
        llSay(PUBLIC_CHANNEL, "Touched.");
    }
}`;

preview.type_lua = `--[[
Simple signal/slot implementation
]]
local signal_mt = {
    __index = {
        register = table.insert
    }
}
function signal_mt.__index:emit(... --[[ Comment in params ]])
    for _, slot in ipairs(self) do
        slot(self, ...)
    end
end
local function create_signal()
    return setmetatable({}, signal_mt)
end

-- Signal test
local signal = create_signal()
signal:register(function(signal, ...)
    print(...)
end)
signal:emit('Answer to Life, the Universe, and Everything:', 42)

--[==[ [=[ [[
Nested ]]
multi-line ]=]
comment ]==]
[==[ Nested
[=[ multi-line
[[ string
]] ]=] ]==]`;

preview.type_makefile = `# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
    @echo "Building main facility..."
    build_main $(BUILDDIR)

clean:
    rm -rf $(BUILDDIR)/*`;

preview.type_markdown = `# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`;

preview.type_mathematica = `(* ::Package:: *)

(* Mathematica Package *)

BeginPackage["SomePkg\`"]

Begin["\`Private\`"]

SomeFn[ns_List] := Fold[Function[{x, y}, x + y], 0, Map[# * 2 &, ns]];
Print[$ActivationKey];

End[] (* End Private Context *)

EndPackage[]`;

preview.type_matlab = `n = 20; % number of points
points = [random('unid', 100, n, 1), random('unid', 100, n, 1)];
len = zeros(1, n - 1);
points = sortrows(points);
%% Initial set of points
plot(points(:,1),points(:,2));
for i = 1: n-1
    len(i) = points(i + 1, 1) - points(i, 1);
end
while(max(len) > 2 * min(len))
    [d, i] = max(len);
    k = on_margin(points, i, d, -1);
    m = on_margin(points, i + 1, d, 1);
    xm = 0; ym = 0;
%% New point
    if(i == 1 || i + 1 == n)
        xm = mean(points([i,i+1],1))
        ym = mean(points([i,i+1],2))
    else
        [xm, ym] = dlg1(points([k, i, i + 1, m], 1), ...
            points([k, i, i + 1, m], 2))
    end

    points = [ points(1:i, :); [xm, ym]; points(i + 1:end, :)];
end

%{
    This is a block comment. Please ignore me.
%}

function [net] = get_fit_network(inputs, targets)
    % Create Network
    numHiddenNeurons = 20;  % Adjust as desired
    net = newfit(inputs,targets,numHiddenNeurons);
    net.trainParam.goal = 0.01;
    net.trainParam.epochs = 1000;
    % Train and Apply Network
    [net,tr] = train(net,inputs,targets);
end

foo_matrix = [1, 2, 3; 4, 5, 6]''';
foo_cell = {1, 2, 3; 4, 5, 6}''.'.';

cell2flatten = {1,2,3,4,5};
flattenedcell = cat(1, cell2flatten{:});`;

preview.type_maxima = `/* Maxima computer algebra system */

/* symbolic constants */

[true, false, unknown, inf, minf, ind,
 und, %e, %i, %pi, %phi, %gamma];

/* programming keywords */

if a then b elseif c then d else f;
for x:1 thru 10 step 2 do print(x);
for z:-2 while z < 0 do print(z);
for m:0 unless m > 10 do print(m);
for x in [1, 2, 3] do print(x);
foo and bar or not baz;

/* built-in variables */

[_, __, %, %%, linel, simp, dispflag,
 stringdisp, lispdisp, %edispflag];

/* built-in functions */

[sin, cosh, exp, atan2, sqrt, log, struve_h,
 sublist_indices, read_array];

/* user-defined symbols */

[foo, ?bar, baz%, quux_mumble_blurf];

/* symbols using Unicode characters */

[Љ, Щ, щ, Ӄ, ЩЩЩ, ӃӃЉЉщ];

/* numbers */

ibase : 18 $
[0, 1234, 1234., 0abcdefgh];
reset (ibase) $
[.54321, 3.21e+0, 12.34B56];

/* strings */

s1 : "\\"now\\" is";
s2 : "the 'time' for all good men";
print (s1, s2, "to come to the aid",
  "of their country");

/* expressions */

foo (x, y, z) :=
  if x > 1 + y
    then z - x*y
  elseif y <= 100!
    then x/(y + z)^2
  else z - y . x . y;
`;

preview.type_mel = `proc string[] getSelectedLights()

{
  string $selectedLights[];

  string $select[] = \`ls -sl -dag -leaf\`;

  for ( $shape in $select )
  {
    // Determine if this is a light.
    //
    string $class[] = getClassification( \`nodeType $shape\` );


    if ( ( \`size $class\` ) > 0 && ( "light" == $class[0] ) )
    {
      $selectedLights[ \`size $selectedLights\` ] = $shape;
    }
  }

  // Result is an array of all lights included in

  // current selection list.
  return $selectedLights;
}`;

preview.type_mercury = `% "Hello World" in Mercury.
:- module hello.


:- interface.
:- import_module io.

:- pred main(io::di, io::uo) is det.


:- implementation.

main(!IO) :-
    io.write_string("Hello, world\\n", !IO).

:- pred filter(pred(T), list(T), list(T), list(T) ).
:- mode filter(in(pred(in) is semidet), in, out, out ) is det.

filter(_, [], [], []).
filter(P, [X | Xs], Ys, Zs) :-
    filter(P, Xs, Ys0, Zs0),
    ( if P(X)   then    Ys = [X | Ys0],   Zs = Zs0
                else    Ys = Ys0      ,   Zs = [X | Zs0]
    ).`;

preview.type_mipsasm = `.text
.global AckermannFunc

# Preconditions:
#   1st parameter ($a0) m
#   2nd parameter ($a1) n
# Postconditions:
#   result in ($v0) = value of A(m,n)

AckermannFunc:
            addi    $sp,   $sp, -8
            sw      $s0, 4($sp)
            sw      $ra, 0($sp)

            # move the parameter registers to temporary  - no, only when nec.

LABEL_IF:   bne     $a0, $zero, LABEL_ELSE_IF

            addi    $v0, $a1, 1

            # jump to LABEL_DONE
            j LABEL_DONE`;

preview.type_mizar = `::: ## Lambda calculus

environ

  vocabularies LAMBDA,
      NUMBERS,
      NAT_1, XBOOLE_0, SUBSET_1, FINSEQ_1, XXREAL_0, CARD_1,
      ARYTM_1, ARYTM_3, TARSKI, RELAT_1, ORDINAL4, FUNCOP_1;

  :: etc...

begin

reserve D for DecoratedTree,
        p,q,r for FinSequence of NAT,
        x for set;

definition
  let D;

  attr D is LambdaTerm-like means
    (dom D qua Tree) is finite &
::>                          *143,306
    for r st r in dom D holds
      r is FinSequence of {0,1} &
      r^<*0*> in dom D implies D.r = 0;
end;

registration
  cluster LambdaTerm-like for DecoratedTree of NAT;
  existence;
::>       *4
end;

definition
  mode LambdaTerm is LambdaTerm-like DecoratedTree of NAT;
end;

::: Then we extend this ordinary one-step beta reduction, that is,
:::  any subterm is also allowed to reduce.
definition
  let M,N;

  pred M beta N means
    ex p st
      M|p beta_shallow N|p &
      for q st not p is_a_prefix_of q holds
        [r,x] in M iff [r,x] in N;
end;

theorem Th4:
  ProperPrefixes (v^<*x*>) = ProperPrefixes v \\/ {v}
proof
  thus ProperPrefixes (v^<*x*>) c= ProperPrefixes v \\/ {v}
  proof
    let y;
    assume y in ProperPrefixes (v^<*x*>);
    then consider v1 such that
A1: y = v1 and
A2: v1 is_a_proper_prefix_of v^<*x*> by TREES_1:def 2;
 v1 is_a_prefix_of v & v1 <> v or v1 = v by A2,TREES_1:9;
then
 v1 is_a_proper_prefix_of v or v1 in {v} by TARSKI:def 1,XBOOLE_0:def 8;
then  y in ProperPrefixes v or y in {v} by A1,TREES_1:def 2;
    hence thesis by XBOOLE_0:def 3;
  end;
  let y;
  assume y in ProperPrefixes v \\/ {v};
then A3: y in ProperPrefixes v or y in {v} by XBOOLE_0:def 3;
A4: now
    assume y in ProperPrefixes v;
    then consider v1 such that
A5: y = v1 and
A6: v1 is_a_proper_prefix_of v by TREES_1:def 2;
 v is_a_prefix_of v^<*x*> by TREES_1:1;
then  v1 is_a_proper_prefix_of v^<*x*> by A6,XBOOLE_1:58;
    hence thesis by A5,TREES_1:def 2;
  end;
 v^{} = v by FINSEQ_1:34;
  then
 v is_a_prefix_of v^<*x*> & v <> v^<*x*> by FINSEQ_1:33,TREES_1:1;
then  v is_a_proper_prefix_of v^<*x*> by XBOOLE_0:def 8;
then  y in ProperPrefixes v or y = v & v in ProperPrefixes (v^<*x*>)
  by A3,TARSKI:def 1,TREES_1:def 2;
  hence thesis by A4;
end;`;

preview.type_perl = `# loads object
sub load
{
  my $flds = $c->db_load($id,@_) || do {
    Carp::carp "Can\`t load (class: $c, id: $id): '$!'"; return undef
  };
  my $o = $c->_perl_new();
  $id12 = $id / 24 / 3600;
  $o->{'ID'} = $id12 + 123;
  #$o->{'SHCUT'} = $flds->{'SHCUT'};
  my $p = $o->props;
  my $vt;
  $string =~ m/^sought_text$/;
  $items = split //, 'abc';
  $string //= "bar";
  for my $key (keys %$p)
  {
    if(\${$vt.'::property'}) {
      $o->{$key . '_real'} = $flds->{$key};
      tie $o->{$key}, 'CMSBuilder::Property', $o, $key;
    }
  }
  $o->save if delete $o->{'_save_after_load'};

  # GH-117
  my $g = glob("/usr/bin/*");

  return $o;
}

__DATA__
@@ layouts/default.html.ep
<!DOCTYPE html>
<html>
  <head><title><%= title %></title></head>
  <body><%= content %></body>
</html>
__END__

=head1 NAME
POD till the end of file`;

preview.type_mojolicious = `%layout 'bootstrap';
% title "Import your subs";
%= form_for '/settings/import' => (method => 'post', enctype => 'multipart/form-data') => begin
     %= file_field 'opmlfile' => multiple => 'true'
     %= submit_button 'Import', 'class' => 'btn'
% end
<div>
% if ($subs) {
<dl>
% for my $item (@$subs) {
% my ($dir, $align) = ($item->{rtl}) ? ('rtl', 'right') : ('ltr', 'left');
<dt align="<%= $align %>"><a href="<%= $item->{'xmlUrl'} %>"><i class="icon-rss"></i> rss</a>
<a dir="<%= $dir %>" href="<%= $item->{htmlUrl} %>"><%== $item->{title} %></a>
</dt>
<dd><b>Categories</b>
%= join q{, }, sort @{ $item->{categories} || [] };
</dd>
</dl>
% }
</div>`;

preview.type_monkey = `#IMAGE_FILES="*.png|*.jpg"
#SOUND_FILES="*.wav|*.ogg"
#MUSIC_FILES="*.wav|*.ogg"
#BINARY_FILES="*.bin|*.dat"

Import mojo

' The main class which expends Mojo's 'App' class:
Class GameApp Extends App
    Field player:Player

    Method OnCreate:Int()
        Local img:Image = LoadImage("player.png")
        Self.player = New Player()
        SetUpdateRate(60)

        Return 0
    End

    Method OnUpdate:Int()
        player.x += HALFPI

        If (player.x > 100) Then
            player.x = 0
        Endif

        Return 0
    End

    Method OnRender:Int()
        Cls(32, 64, 128)
        player.Draw()

        player = Null
        Return 0
    End
End`;

preview.type_moonscript = `print "I am #{math.random! * 100}% sure."

my_function = (name="something", height=100) ->
  print "Hello I am", name
  print "My height is", height

my_function dance: "Tango", partner: "none"

my_func 5,4,3,      -- multi-line arguments
  8,9,10

table = {
  name: "Bill",
  age: 200,
  ["favorite food"]: "rice",
  :keyvalue,
  [1+7]: 'eight'
}

class Inventory
  new: =>
    @items = {}

  add_item: (name) =>
    if @items[name]
      @items[name] += 1
    else
      @items[name] = 1

inv = Inventory!
inv\\add_item "t-shirt"
inv\\add_item "pants"

import
  assert_csrf
  require_login
  from require "helpers"`;

preview.type_n1ql = `SELECT *
FROM \`beer-sample\`
WHERE brewery_id IS NOT MISSING AND type="beer"
LIMIT 1;

UPSERT INTO product (KEY, VALUE) VALUES (
    "odwalla-juice1", {
        "productId": "odwalla-juice1",
        "unitPrice": 5.40,
        "type": "product",
        "color":"red"
    }
) RETURNING *;

INFER \`beer-sample\` WITH {
    "sample_size": 10000,
    "num_sample_values": 1,
    "similarity_metric": 0.0
};`;

preview.type_nginx = `user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    gzip on;
    gzip_min_length 1100;

    #lingering_time 30;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        rewrite (.*) /index.php?page=$1 break;

        location / {
            proxy_pass         http://127.0.0.1/;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            charset            koi8-r;
        }

        location /api/ {
            fastcgi_pass 127.0.0.1:9000;
        }

        location ~* \\.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}`;

preview.type_nim = `import module1, module2, module3
from module4 import nil

type
  TFoo = object ## Doc comment
    a: int32
  PFoo = ref TFoo

proc do_stuff314(param_1: TFoo, par2am: var PFoo): PFoo {.exportc: "dostuff" .} =
  # Regular comment
  discard """
  dfag
sdfg""
"""
  result = nil

method abc(a: TFoo) = discard 1u32 + 0xabcdefABCDEFi32 + 0o01234567i8 + 0b010

discard rawstring"asdf""adfa"
var normalstring = "asdf"
let a: uint32 = 0xFFaF'u32`;

preview.type_nix = `{ stdenv, foo, bar ? false, ... }:

/*
 * foo
 */

let
  a = 1; # just a comment
  b = null;
  c = toString 10;
in stdenv.mkDerivation rec {
  name = "foo-\${version}";
  version = "1.3";

  configureFlags = [ "--with-foo2" ] ++ stdenv.lib.optional bar "--with-foo=\${ with stdenv.lib; foo }"

  postInstall = ''
   \${ if true then "--\${test}" else false }
  '';

  meta = with stdenv.lib; {
    homepage = https://nixos.org;
  };
}`;

preview.type_nsis = `/*
  NSIS Scheme
  for highlight.js
*/

; Includes
!include MUI2.nsh

; Defines
!define x64 "true"

; Settings
Name "installer_name"
OutFile "installer_name.exe"
RequestExecutionLevel user
CRCCheck on

!ifdef \${x64}
  InstallDir "$PROGRAMFILES6\\installer_name"
!else
  InstallDir "$PROGRAMFILES\\installer_name"
!endif

; Pages
!insertmacro MUI_PAGE_INSTFILES

; Sections
Section "section_name" section_index
  nsExec::ExecToLog "calc.exe"
SectionEnd

; Functions
Function .onInit
  DetailPrint "The install button reads $(^InstallBtn)"
  DetailPrint 'Here comes a$\\n$\\rline-break!'
  DetailPrint \`Escape the dollar-sign: $$\`
FunctionEnd`;

preview.type_objectivec = `#import <UIKit/UIKit.h>
#import "Dependency.h"

@protocol WorldDataSource
@optional
- (NSString*)worldName;
@required
- (BOOL)allowsToLive;
@end

@property (nonatomic, readonly) NSString *title;
- (IBAction) show;
@end`;

preview.type_ocaml = `(* This is a
multiline, (* nested *) comment *)
type point = { x: float; y: float };;
let some_string = "this is a string";;
let rec length lst =
    match lst with
      [] -> 0
    | head :: tail -> 1 + length tail
  ;;
exception Test;;
type expression =
      Const of float
    | Var of string
    | Sum of expression * expression    (* e1 + e2 *)
    | Diff of expression * expression   (* e1 - e2 *)
    | Prod of expression * expression   (* e1 * e2 *)
    | Quot of expression * expression   (* e1 / e2 *)
class point =
    object
      val mutable x = 0
      method get_x = x
      method private move d = x <- x + d
    end;;`;

preview.type_openscad = `use <write.scad>
include <../common/base.scad>

//draw a foobar
module foobar(){
    translate([0,-10,0])
    difference(){
        cube([5,10.04,15]);
        sphere(r=10,$fn=100);
    }
}

foobar();
#cube ([5,5,5]);
echo("done");`;

preview.type_oxygene = `namespace LinkedList;

interface

uses
  System.Text;

type
  List<T> = public class
    where T is Object;
  private
    method AppendToString(aBuilder: StringBuilder);
  public
    constructor(aData: T);
    constructor(aData: T; aNext: List<T>);
    property Next: List<T>;
    property Data: T;

    method ToString: string; override;
  end;

implementation

constructor List<T>(aData: T);
begin
  Data := aData;
end;

constructor List<T>(aData: T; aNext: List<T>);
begin
  constructor(aData);
  Next := aNext;
end;

method List<T>.ToString: string;
    begin
    with lBuilder := new StringBuilder do begin
    AppendToString(lBuilder);
    result := lBuilder.ToString();
    end;
    end;

    method List<T>.AppendToString(aBuilder: StringBuilder);
        begin
        if assigned(Data) then
        aBuilder.Append(Data.ToString)
        else
        aBuilder.Append('nil');

        if assigned(Next) then begin
        aBuilder.Append(', ');
        Next.AppendToString(aBuilder);
        end;
        end;

        end.`;

        preview.type_parser3 = `@CLASS
        base

        @USE
        module.p

        @BASE
        class

        # Comment for code
        @create[aParam1;aParam2][local1;local2]
        ^connect[mysql://host/database?ClientCharset=windows-1251]
        ^for[i](1;10){
            <p class="paragraph">^eval($i+10)</p>
                ^connect[mysql://host/database]{
                    $tab[^table::sql{select * from \`table\` where a='1'}]
      $var_Name[some\${value}]
    }
  }

  ^rem{
    Multiline comment with code: $var
    ^while(true){
      ^for[i](1;10){
        ^sleep[]
      }
    }
  }
  ^taint[^#0A]

@GET_base[]
## Comment for code
  # Isn't comment
  $result[$.hash_item1[one] $.hash_item2[two]]`;

                        preview.type_pf = `# from the PF FAQ: http://www.openbsd.org/faq/pf/example1.html

# macros

int_if="xl0"

tcp_services="{ 22, 113 }"
icmp_types="echoreq"

comp3="192.168.0.3"

# options

set block-policy return
set loginterface egress
set skip on lo

# FTP Proxy rules

anchor "ftp-proxy/*"

pass in quick on $int_if inet proto tcp to any port ftp \\
    divert-to 127.0.0.1 port 8021

# match rules

match out on egress inet from !(egress:network) to any nat-to (egress:0)

# filter rules

block in log
pass out quick

antispoof quick for { lo $int_if }

pass in on egress inet proto tcp from any to (egress) \\
    port $tcp_services

pass in on egress inet proto tcp to (egress) port 80 rdr-to $comp3

pass in inet proto icmp all icmp-type $icmp_types

pass in on $int_if`;

                        preview.type_pgsql = `BEGIN;
SELECT sum(salary) OVER w, avg(salary) OVER w
  FROM empsalary
  WINDOW w AS (PARTITION BY depname ORDER BY salary DESC);
END;

CREATE FUNCTION days_of_week() RETURNS SETOF text AS $$
BEGIN
  FOR i IN 7 .. 13 LOOP
    RETURN NEXT to_char(to_date(i::text,'J'),'TMDy');
  END LOOP;
END;
$$ STABLE LANGUAGE plpgsql;`;

                        preview.type_php = `require_once 'Zend/Uri/Http.php';

namespace Location\\Web;

interface Factory
{
    static function _factory();
}

abstract class URI extends BaseURI implements Factory
{
    abstract function test();

    public static $st1 = 1;
    const ME = "Yo";
    var $list = NULL;
    private $var;

    /**
     * Returns a URI
     *
     * @return URI
     */
    static public function _factory($stats = array(), $uri = 'http')
    {
        echo __METHOD__;
        $uri = explode(':', $uri, 0b10);
        $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
        $desc = 'Multi
line description';

        // Security check
        if (!ctype_alnum($scheme)) {
            throw new Zend_Uri_Exception('Illegal scheme');
        }

        $this->var = 0 - self::$st;
        $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \\Location\\Web\\URI::class));

        return [
            'uri'   => $uri,
            'value' => null,
        ];
    }
}

echo URI::ME . URI::$st1;

__halt_compiler () ; datahere
datahere
datahere */
datahere`;

                        preview.type_php_template = `<html>
</html>
<body>
<?php
# Here echo command is used to print
echo "Hello, world!";
    ?>
</body>`;

                        preview.type_plaintext = ` id | description
----+-------------
  1 | one
  2 | two
  3 | three
(3 rows)`;

                        preview.type_pony = `use "collections"

class StopWatch
  """
  A simple stopwatch class for performance micro-benchmarking
  """
  var _s: U64 = 0

  fun delta(): U64 =>
    Time.nanos() - _s

actor LonelyPony
  """
  A simple manifestation of the lonely pony problem
  """
  var env: Env
  let sw: StopWatch = StopWatch

  new create(env': Env) =>
    env = env`;

                        preview.type_powershell = `$initialDate = [datetime]'2013/1/8'

$rollingDate = $initialDate

do {
    $client = New-Object System.Net.WebClient
    $results = $client.DownloadString("http://not.a.real.url")
    Write-Host "$rollingDate.ToShortDateString() - $results"
    $rollingDate = $rollingDate.AddDays(21)
    $username = [System.Environment]::UserName
} until ($rollingDate -ge [datetime]'2013/12/31')`;

                        preview.type_processing = `import java.util.LinkedList;
import java.awt.Point;

PGraphics pg;
String load;

void setup() {
  size(displayWidth, displayHeight, P3D);
  pg = createGraphics(displayWidth*2,displayHeight,P2D);
  pg.beginDraw();
  pg.background(255,255,255);
  //pg.smooth(8);
  pg.endDraw();
}
void draw(){
  background(255);
}`;

                        preview.type_profile = `       261917242 function calls in 686.251 CPU seconds

       ncalls  tottime  filename:lineno(function)
       152824  513.894  {method 'sort' of 'list' objects}
    129590630   83.894  rrule.py:842(__cmp__)
    129590630   82.439  {cmp}
       153900    1.296  rrule.py:399(_iter)
304393/151570    0.963  rrule.py:102(_iter_cached)`;

                        preview.type_prolog = `mergesort([],[]). % special case
mergesort([A],[A]).
mergesort([A,B|R],S) :-
   split([A,B|R],L1,L2),
   mergesort(L1,S1),
   mergesort(L2,S2),
   merge(S1,S2,S).

split([],[],[]).
split([A],[A],[]).
split([A,B|R],[A|Ra],[B|Rb]) :-  split(R,Ra,Rb).`;

                        preview.type_properties = `# .properties
! Exclamation mark = comments, too

key1 = value1
key2 : value2
key3   value3
key\\ spaces multiline\\
            value4
empty_key
! Key can contain escaped chars
\\:\\= = value5`;

                        preview.type_protobuf = `package languages.protobuf;

option java_package = "org.highlightjs.languages.protobuf";

message Customer {
  required int64 customer_id = 1;
  optional string name = 2;
  optional string real_name = 3 [default = "Anonymous"];
  optional Gender gender = 4;
  repeated string email_addresses = 5;

  optional bool is_admin = 6 [default = false]; // or should this be a repeated field in Account?

  enum Gender {
    MALE = 1,
    FEMALE = 2
  }
}

service CustomerSearch {
  rpc FirstMatch(CustomerRequest) returns (CustomerResponse);
  rpc AllMatches(CustomerRequest) returns (CustomerResponse);
}`;

                        preview.type_puppet = `# EC2 sample

class ec2utils {

    # This must include the path to the Amazon EC2 tools
    $ec2path = ["/usr/bin", "/bin", "/usr/sbin", "/sbin",
                "/opt/ec2/ec2-api-tools/bin",
                "/opt/ec2/aws-elb-tools/bin"]

    define elasticip ($instanceid, $ip)
    {
        exec { "ec2-associate-address-$name":
            logoutput   => on_failure,
            environment => $ec2utils::ec2env,
            path        => $ec2utils::ec2path,
            command     => "ec2assocaddr $ip \
                                         -i $instanceid",
            # Only do this when necessary
            unless => "test \`ec2daddr $ip | awk '{print \\$3}'\` == $instanceid",
        }
    }

    mount { "$mountpoint":
        device  => $devicetomount,
        ensure  => mounted,
        fstype  => $fstype,
        options => $mountoptions,
        require => [ Exec["ec2-attach-volume-$name"],
                     File["$mountpoint"]
        ],
    }

}`;

                        preview.type_purebasic = `; PureBASIC 5 - Syntax Highlighting Example

Enumeration Test 3 Step 10
  #Constant_One ; Will be 3
  #Constant_Two ; Will be 13
EndEnumeration

A.i = #Constant_One
B = A + 3

STRING.s = SomeProcedure("Hello World", 2, #Empty$, #Null$)
ESCAPED_STRING$ = ~"An escaped (\\\\) string!\\nNewline..."

FixedString.s{5} = "12345"

Macro XCase(Type, Text)
  Type#Case(Text)
EndMacro

StrangeProcedureCall ("This command is split " +
                      "over two lines") ; Line continuation example

If B > 3 : X$ = "Concatenation of commands" : Else : X$ = "Using colons" : EndIf

Declare.s Attach(String1$, String2$)

Procedure.s Attach(String1$, String2$)
  ProcedureReturn String1$+" "+String2$
EndProcedure `;

                        preview.type_python = `@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''`;

                        preview.type_python_repl = `>>> v = "foo = 42"
>>> v
"foo = 42"
>>> print(v)
foo = 42
>>> print(repr(v).rstrip('"'))
"foo = 42
>>> print(repr(v).lstrip('"'))
foo = 42"

>>> """
... abc
... """
>>> def test():
...     pass`;

                        preview.type_q = `select time, price by date,stock from quote where price=(max;price)fby stock
data:raze value flip trade
select vwap:size wavg price by 5 xbar time.minute from aapl where date within (.z.d-10;.z.d)
f1:{[x;y;z] show (x;y+z);sum 1 2 3}
.z.pc:{[handle] show -3!(\`long$.z.p;"Closed";handle)}
// random normal distribution, e.g. nor 10
nor:{$[x=2*n:x div 2;raze sqrt[-2*log n?1f]*/:(sin;cos)@\\:(2*pi)*n?1f;-1_.z.s 1+x]}

mode:{where g=max g:count each group x}		// mode function`;

                        preview.type_qml = `/****************************************************************************
** QML with Highlight.js                                                  **/
import QtQuick 2.5 // good version

Window {
    id: root
    width: 1024; height: 600
    color: "black"
    property int highestZ: 0 // 0 is lowest, +infinity is highest
    property real defaultSize = 200.1
    signal activated(real xPosition, real yPosition)
    // show the file picker
    FileDialog {
        id:fileDialog // an id in a comment should not be detected
        title: "Choose a folder with some images"
        onAccepted: folderModel.folder = fileUrl + "/" // if this is on property
    }
    Flickable {
        id: flickableproperty
        contentHeight: height * surfaceViewportRatio
        property real zRestore: 0
        Behavior on scale { NumberAnimation { duration: 200 } }
        Repeater {
            model: FolderListModel {
                id: folderModel
                nameFilters: ["*.png", "*.jpg", "*.gif"]
            }
            Component.onCompleted: {
                var x;
                x = Math.random() * root.width - width / 2
                rotation = Math.random() * 13 - 6
                if (pinch.scale > 0) {
                    photoFrame.rotation = 0;
                    photoFrame.scale = Math.min(root.width, root.height) / Math.max(image.sourceSize.width, image.sourceSize.height) * 0.85
                } else {
                    photoFrame.rotation = pinch.previousAngle
                    photoFrame.scale = pinch.previousScale
                }
            }
            function setFrameColor() {
                if (currentFrame)
                    currentFrame.border.color = "black";
                currentFrame = photoFrame;
            }
        }
    }
    Timer { id: fadeTimer; interval: 1000; onTriggered: { hfade.start(); vfade.start() } }
    Component.onCompleted: fileDialog.open()
}`;

                        preview.type_r = `library(ggplot2)

centre <- function(x, type, ...) {
  switch(type,
         mean = mean(x),
         median = median(x),
         trimmed = mean(x, trim = .1))
}

myVar1
myVar.2
data$x
foo "bar" baz
# test "test"
"test # test"

(123) (1) (10) (0.1) (.2) (1e-7)
(1.2e+7) (2e) (3e+10) (0x0) (0xa)
(0xabcdef1234567890) (123L) (1L)
(0x10L) (10000000L) (1e6L) (1.1L)
(1e-3L) (4123.381E-10i)
(3.) (3.E10) # BUG: .E10 should be part of number

# Numbers in some different contexts
1L
0x40
.234
3.
1L + 30
plot(cars, xlim=20)
plot(cars, xlim=0x20)
foo<-30
my.data.3 <- read() # not a number
c(1,2,3)
1%%2

"this is a quote that spans
multiple lines
\\"

is this still a quote? it should be.
# even still!

" # now we're done.

'same for
single quotes #'

# keywords
NULL, NA, TRUE, FALSE, Inf, NaN, NA_integer_,
NA_real_, NA_character_, NA_complex_, function,
while, repeat, for, if, in, else, next, break,
..., ..1, ..2

# not keywords
the quick brown fox jumped over the lazy dogs
null na true false inf nan na_integer_ na_real_
na_character_ na_complex_ Function While Repeat
For If In Else Next Break .. .... "NULL" \`NULL\` 'NULL'

# operators
+, -, *, /, %%, ^, >, >=, <, <=, ==, !=, !, &, |, ~,
->, <-, <<-, $, :, ::

# infix operator
foo %union% bar
%"test"%
\`"test"\`
`;

                        preview.type_reasonml = `/* This is a
   multiline
   comment */

type point = {
  x: float,
  y: float,
};

let some_string = "this is a string";

let rec length = lst =>
  switch (lst) {
  | [] => 0
  | [head, ...tail] => 1 + length(tail)
  };

type result('a, 'b) =
  | Ok('a)
  | Error('b);

let promisify = (res: result('a, 'b)) : Js.Promise.t('a) =>
  switch (res) {
  | Ok(a) => Js.Promise.resolve(a)
  | Error(b) => Js.Promise.reject(b)
  };

exception Test;

module MakeFFI = (T: {type t;}) => {
  [@bs.module] external ffi : string => T.t = "";
};

type expression =
  | Const(float)
  | Var(string)
  | Sum(expression, expression) /* e1 + e2 */
  | Diff(expression, expression) /* e1 - e2 */
  | Prod(expression, expression) /* e1 * e2 */
  | Quot(expression, expression); /* e1 / e2 */

class point = {
  as _;
  val mutable x = 0;
  pub get_x = x;
  pri move = d => x = x + d;
};`;

                        preview.type_rib = `FrameBegin 0
Display "Scene" "framebuffer" "rgb"
Option "searchpath" "shader" "+&:/home/kew"
Option "trace" "int maxdepth" [4]
Attribute "visibility" "trace" [1]
Attribute "irradiance" "maxerror" [0.1]
Attribute "visibility" "transmission" "opaque"
Format 640 480 1.0
ShadingRate 2
PixelFilter "catmull-rom" 1 1
PixelSamples 4 4
Projection "perspective" "fov" 49.5502811377
Scale 1 1 -1

WorldBegin

ReadArchive "Lamp.002_Light/instance.rib"
Surface "plastic"
ReadArchive "Cube.004_Mesh/instance.rib"
# ReadArchive "Sphere.010_Mesh/instance.rib"
# ReadArchive "Sphere.009_Mesh/instance.rib"
ReadArchive "Sphere.006_Mesh/instance.rib"

WorldEnd
FrameEnd`;

                        preview.type_roboconf = `# This is a comment
import toto.graph;

##
# Facet
##
facet VM {
    installer: iaas;
}

# Components
VM_ec2 {
    facets: VM;
    children: cluster-node, mysql;
}

VM_openstack {
    facets: VM;
    children: cluster-node, mysql;
}

cluster-node {
    alias: a cluster node;
    installer: puppet;
    exports: ip, port, optional-property1, optional_property2;
    imports: cluster-node.ip (optional), cluster-node.port (optional), mysql.ip, mysql.port;
}

mysql {
    alias: a MySQL database;
    installer: puppet;
    exports: ip, port;
}

##
# Normally, instances are defined in another file...
##
instance of VM_ec2 {
    name: VM_;
    count: 3;
    my-instance-property: whatever;

    instance of cluster-node {
        name: cluster node;		# An in-line comment
    }
}

instance of VM_openstack {
    name: VM_database;

    instance of mysql {
        name: mysql;
    }
}`;

                        preview.type_routeros = `# Берем список DNS серверов из /ip dns
 # Проверяем их доступность, 
# и только рабочие прописываем в настройки DHCP сервера
:global ActiveDNSServers []
:local PingResult 0
:foreach serv in=[/ip dns get servers] do={
:do {:set PingResult [ping $serv count=3]} on-error={:set PingResult 0}
:if ($PingResult=3) do={ :set ActiveDNSServers ($ActiveDNSServers,$serv) }
# отладочный вывод в журнал 
:log info "Server: $serv, Ping-result: $PingResult";
}

/ip dhcp-server network set [find address=192.168.254.0/24] dns-server=$ActiveDNSServers

#---   FIX TTL  ----
/ip firewall mangle chain=postrouting action=change-ttl new-ttl=set:128 comment="NAT hide" 

`;

                        preview.type_rsl = `#define TEST_DEFINE 3.14
/*  plastic surface shader
 *
 *  Pixie is:
 *  (c) Copyright 1999-2003 Okan Arikan. All rights reserved.
 */

surface plastic (float Ka = 1, Kd = 0.5, Ks = 0.5, roughness = 0.1;
                 color specularcolor = 1;) {
  normal Nf = faceforward (normalize(N),I);
  Ci = Cs * (Ka*ambient() + Kd*diffuse(Nf)) + specularcolor * Ks *
       specular(Nf,-normalize(I),roughness);
  Oi = Os;
  Ci *= Oi;
}`;

                        preview.type_ruleslanguage = `//This is a comment
ABORT "You experienced an abort.";
WARN "THIS IS A WARNING";
CALL "RIDER_X";
DONE;
FOR EACH X IN CSV_FILE "d:\\lodestar\\user\\d377.lse"
 LEAVE FOR;
END FOR;
IF ((BILL_KW = 0) AND (KW > 0)) THEN
END IF;
INCLUDE "R1";
LEAVE RIDER;
SELECT BILL_PERIOD
   WHEN "WINTER"
      BLOCK KWH
      FROM 0 TO 400 CHARGE $0.03709
      FROM 400 CHARGE $0.03000
      TOTAL $ENERGY_CHARGE_WIN;
   WHEN "SUMMER"
      $VOLTAGE_DISCOUNT_SUM = $0.00
   OTHERWISE
      $VOLTAGE_DISCOUNT_SUM = $1.00
END SELECT;
/* Report top five peaks */
LABEL PK.NM "Peak Number";
SAVE_UPDATE MV TO TABLE "METERVALUE";

FOR EACH INX IN ARRAYUPPERBOUND(#MYARRAY[])
  #MYARRAY[INX].VALUE = 2;
  CLEAR #MYARRAY[];
END FOR

//Interval Data
HNDL_1_ADD_EDI = INTDADDATTRIBUTE(HNDL_1, "EDI_TRANSACTION", EDI_ID);
HNDL_1_ADD_VAL_MSG = INTDADDVMSG(HNDL_1,"Missing (Status Code 9) values found");
EMPTY_HNDL = INTDCREATEHANDLE('05/03/2006 00:00:00', '05/03/2006 23:59:59', 3600, "Y", "0", " ");`;

                        preview.type_ruby = `# The Greeter class
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute`;

                        preview.type_rust = `#[derive(Debug)]
pub enum State {
    Start,
    Transient,
    Closed,
}

impl From<&'a str> for State {
    fn from(s: &'a str) -> Self {
        match s {
            "start" => State::Start,
            "closed" => State::Closed,
            _ => unreachable!(),
        }
    }
}`;

                        preview.type_sas = `/**********************************************************************
 * Program: example.sas
 * Purpose: SAS Example for HighlightJS Plug-in
 **********************************************************************/

%put Started at %sysfunc(putn(%sysfunc(datetime()), datetime.));
options
    errors = 20  /* Maximum number of prints of repeat errors */
    fullstimer   /* Detailed timer after each step execution  */
;

%let maindir = /path/to/maindir;
%let outdir  = &maindir/out.;

systask command "mkdir -p &outdir." wait;
libname main "&maindir" access = readonly;

data testing;
    input name $ number delimiter = ",";
    datalines;
    John,1
    Mary,2
    Jane,3
    ;
    if number > 1 then final = 0;
    else do;
        final = 1;
    end;
run;

%macro testMacro(positional, named = value);
    %put positional = &positional.;
    %put named      = &named.;
%mend testMacro;
%testMacro(positional, named = value);

dm 'clear log output odsresults';

proc datasets lib = work kill noprint; quit;
libname _all_ clear;

data _null_;
    set sashelp.macro(
        keep  = name
        where = (scope = "global");
    );
    call symdel(name);
run;`;

                        preview.type_scala = `/**
 * A person has a name and an age.
 */
case class Person(name: String, age: Int)

abstract class Vertical extends CaseJeu
case class Haut(a: Int) extends Vertical
case class Bas(name: String, b: Double) extends Vertical

sealed trait Ior[+A, +B]
case class Left[A](a: A) extends Ior[A, Nothing]
case class Right[B](b: B) extends Ior[Nothing, B]
case class Both[A, B](a: A, b: B) extends Ior[A, B]

trait Functor[F[_]] {
  def map[A, B](fa: F[A], f: A => B): F[B]
}

// beware Int.MinValue
def absoluteValue(n: Int): Int =
  if (n < 0) -n else n

def interp(n: Int): String =
  s"there are $n \${color} balloons.\\n"

type ξ[A] = (A, A)

trait Hist { lhs =>
  def ⊕(rhs: Hist): Hist
}

def gsum[A: Ring](as: Seq[A]): A =
  as.foldLeft(Ring[A].zero)(_ + _)

val actions: List[Symbol] =
  'init :: 'read :: 'write :: 'close :: Nil

trait Cake {
  type T;
  type Q
  val things: Seq[T]

  abstract class Spindler

  def spindle(s: Spindler, ts: Seq[T], reversed: Boolean = false): Seq[Q]
}

val colors = Map(
  "red"       -> 0xFF0000,
  "turquoise" -> 0x00FFFF,
  "black"     -> 0x000000,
  "orange"    -> 0xFF8040,
  "brown"     -> 0x804000)

lazy val ns = for {
  x <- 0 until 100
  y <- 0 until 100`;

                        preview.type_scheme = `;; Calculation of Hofstadter's male and female sequences as a list of pairs

(define (hofstadter-male-female n)
(letrec ((female (lambda (n)
           (if (= n 0)
           1
           (- n (male (female (- n 1)))))))
     (male (lambda (n)
         (if (= n 0)
             0
             (- n (female (male (- n 1))))))))
  (let loop ((i 0))
    (if (> i n)
    '()
    (cons (cons (female i)
            (male i))
      (loop (+ i 1)))))))

(hofstadter-male-female 8)

(define (find-first func lst)
(call-with-current-continuation
 (lambda (return-immediately)
   (for-each (lambda (x)
       (if (func x)
           (return-immediately x)))
         lst)
   #f)))`;

                        preview.type_scilab = `// A comment
function I = foo(dims, varargin)
  d=[1; matrix(dims(1:$-1),-1,1)]
  for i=1:size(varargin)
    if varargin(i)==[] then
       I=[],
       return;
    end
  end
endfunction

b = cos(a) + cosh(a);
bar_matrix = [ "Hello", "world" ];
foo_matrix = [1, 2, 3; 4, 5, 6];`;

                        preview.type_scss = `@import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
    max-width: 980px;
}

// mixins with parameters
@mixin button($color:green) {
    @if ($color == green) {
        background-color: #008000;
    }
    @else if ($color == red) {
        background-color: #B22222;
    }
}

button {
    @include button(red);
}

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
}

.row-12 > [class*="spans"] {
    border-left: 1px solid #B5C583;
}

// nested definitions
ul {
    width: 100%;
    padding: {
        left: 5px; right: 5px;
    }
  li {
      float: left; margin-right: 10px;
      .home {
          background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
    @extend .container;
}

a {
  color: $colorGreen;
  &:hover { color: $colorGreenDark; }
  &:visited { color: #c458cb; }
}

@for $i from 1 through 5 {
    .span#{$i} {
        width: 20px*$i;
    }
}

@mixin mobile {
  @media screen and (max-width : 600px) {
    @content;
  }
}`;

                        preview.type_shell = `$ echo $EDITOR
vim
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
$ git push
Everything up-to-date
$ echo 'All
> done!'
All
done!`;

                        preview.type_smali = `.class public Lcom/test/Preferences;
.super Landroid/preference/PreferenceActivity;
.source "Preferences.java"


# instance fields
.field private PACKAGE_NAME:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .registers 1
    .annotation build Landroid/annotation/SuppressLint;
        value = {
            "InlinedApi"
        }
    .end annotation

    .prologue
    .line 25
    invoke-direct {p0}, Landroid/preference/PreferenceActivity;-><init>()V

    const-string v4, "ASDF!"

    .line 156
    .end local v0           #customOther:Landroid/preference/Preference;
    .end local v1           #customRate:Landroid/preference/Preference;
    .end local v2           #hideApp:Landroid/preference/Preference;
    :cond_56

        .line 135
    invoke-static {p1}, Lcom/google/ads/AdActivity;->b(Lcom/google/ads/internal/d;)Lcom/google/ads/internal/d;

    .line 140
    :cond_e
    monitor-exit v1
    :try_end_f
    .catchall {:try_start_5 .. :try_end_f} :catchall_30

    .line 143
    invoke-virtual {p1}, Lcom/google/ads/internal/d;->g()Lcom/google/ads/m;

    move-result-object v0

    iget-object v0, v0, Lcom/google/ads/m;->c:Lcom/google/ads/util/i$d;

    invoke-virtual {v0}, Lcom/google/ads/util/i$d;->a()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/app/Activity;

    .line 144
    if-nez v0, :cond_33

    .line 145
    const-string v0, "activity was null while launching an AdActivity."

    invoke-static {v0}, Lcom/google/ads/util/b;->e(Ljava/lang/String;)V

    .line 160
    :goto_22
    return-void

    .line 136
    :cond_23
    :try_start_23
    invoke-static {}, Lcom/google/ads/AdActivity;->c()Lcom/google/ads/internal/d;

    move-result-object v0

    if-eq v0, p1, :cond_e

    return-void
.end method`;

                        preview.type_smalltalk = `Object>>method: num
    "comment 123"
    | var1 var2 |
    (1 to: num) do: [:i | |var| ^i].
    Klass with: var1.
    Klass new.
    arr := #('123' 123.345 #hello Transcript var $@).
    arr := #().
    var2 = arr at: 3.
    ^ self abc

heapExample
    "HeapTest new heapExample"
    "Multiline
    decription"
    | n rnd array time sorted |
    n := 5000.
    "# of elements to sort"
    rnd := Random new.
    array := (1 to: n)
                collect: [:i | rnd next].
    "First, the heap version"
    time := Time
                millisecondsToRun: [sorted := Heap withAll: array.
    1
        to: n
        do: [:i |
            sorted removeFirst.
            sorted add: rnd next]].
    Transcript cr; show: 'Time for Heap: ' , time printString , ' msecs'.
    "The quicksort version"
    time := Time
                millisecondsToRun: [sorted := SortedCollection withAll: array.
    1
        to: n
        do: [:i |
            sorted removeFirst.
            sorted add: rnd next]].
    Transcript cr; show: 'Time for SortedCollection: ' , time printString , ' msecs'`;

                        preview.type_sml = `structure List : LIST =
  struct

    val op +  = InlineT.DfltInt.+

    datatype list = datatype list

    exception Empty = Empty

    fun last [] = raise Empty
      | last [x] = x
      | last (_::r) = last r

  fun loop ([], []) = EQUAL
    | loop ([], _) = LESS
    | loop (_, []) = GREATER
    | loop (x :: xs, y :: ys) =
      (case compare (x, y) of
     EQUAL => loop (xs, ys)
         | unequal => unequal)
    in
  loop
    end

  end (* structure List *)
`;

                        preview.type_sqf = `/***
    Arma Scripting File
    Edition: 1.66
***/

// Enable eating to improve health.
_unit addAction ["Eat Energy Bar", {
    if (_this getVariable ["EB_NumActivation", 0] > 0) then {
        _this setDamage (0 max (damage _this - 0.25));
    } else {
        hint "You have eaten it all";
    };
    // 4 - means something...
    Z_obj_vip = nil;
    [_boat, ["Black", 1], true] call BIS_fnc_initVehicle;
}];`;

                        preview.type_sql = `CREATE TABLE "topic" (
    "id" serial NOT NULL PRIMARY KEY,
    "forum_id" integer NOT NULL,
    "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');`;

                        preview.type_stan = `// Multivariate Regression Example
// Taken from stan-reference-2.8.0.pdf p.66

data {
  int<lower=0> N;             // num individuals
  int<lower=1> K;             // num ind predictors
  int<lower=1> J;             // num groups
  int<lower=1> L;             // num group predictors
  int<lower=1,upper=J> jj[N]; // group for individual
  matrix[N,K] x;              // individual predictors
  row_vector[L] u[J];         // group predictors
  vector[N] y;                // outcomes
}
parameters {
  corr_matrix[K] Omega;       // prior correlation
  vector<lower=0>[K] tau;     // prior scale
  matrix[L,K] gamma;          // group coeffs
  vector[K] beta[J];          // indiv coeffs by group
  real<lower=0> sigma;        // prediction error scale
}
model {
  tau ~ cauchy(0,2.5);
  Omega ~ lkj_corr(2);
  to_vector(gamma) ~ normal(0, 5);
  {
    row_vector[K] u_gamma[J];
    for (j in 1:J)
      u_gamma[j] <- u[j] * gamma;
    beta ~ multi_normal(u_gamma, quad_form_diag(Omega, tau));
  }
  {
    vector[N] x_beta_jj;
    for (n in 1:N)
      x_beta_jj[n] <- x[n] * beta[jj[n]];
    y ~ normal(x_beta_jj, sigma);
  }
}

# Note: Octothorpes indicate comments, too!`;

                        preview.type_stata = `program define gr_log
version 6.0

local or = \`2'
local xunits = \`3'
local b1 = ln(\`or')

* make summary of logistic data from equation
set obs \`xunits'
generate pgty = 1 - 1/(1 + exp(score))
/**
 * Comment 1
*/
reg y x
* Comment 2
reg y2 x //comment 3
This is a \`loc' $glob \${glob2}
This is a \`"string " "' "string\`1'two\${hi}" bad \`"string " "' good \`"string " "'

//Limit to just the project ados
cap adopath - SITE
cap adopath - PLUS
/*cap adopath - PERSONAL
cap adopath - OLDPLACE*/
adopath ++ "\${dir_base}/code/ado/"
A string \`"Wow"'. \`""one" "two""'
A \`local' em\`b'ed
a global \${dir_base} $dir_base em\${b}ed

forval i=1/4{
  if \`i'==2{
    cap reg y x1, robust
    local x = ln(4)
    local x =ln(4)
    local ln = ln
  }
}

* add mlibs in the new adopath to the index
mata: mata mlib index`;

                        preview.type_step21 = `ISO-10303-21;
HEADER;
FILE_DESCRIPTION((''),'2;1');
FILE_NAME('CUBE_4SQUARE','2013-11-29T',('acook'),(''),
'SOMETHINGCAD BY SOME CORPORATION, 2012130',
'SOMETHINGCAD BY SOME CORPORATION, 2012130','');
FILE_SCHEMA(('CONFIG_CONTROL_DESIGN'));
ENDSEC;
/* file written by SomethingCAD */
DATA;
#1=DIRECTION('',(1.E0,0.E0,0.E0));
#2=VECTOR('',#1,4.E0);
#3=CARTESIAN_POINT('',(-2.E0,-2.E0,-2.E0));
#4=LINE('',#3,#2);
#5=DIRECTION('',(0.E0,1.E0,0.E0));
#6=VECTOR('',#5,4.E0);
#7=CARTESIAN_POINT('',(2.E0,-2.E0,-2.E0));
#8=LINE('',#7,#6);
#9=DIRECTION('',(-1.E0,0.E0,0.E0));
#10=VECTOR('',#9,4.E0);
#11=CARTESIAN_POINT('',(2.E0,2.E0,-2.E0));
#12=LINE('',#11,#10);
#13=DIRECTION('',(0.E0,-1.E0,0.E0));
#14=VECTOR('',#13,4.E0);
#15=CARTESIAN_POINT('',(-2.E0,2.E0,-2.E0));
#16=LINE('',#15,#14);
#17=DIRECTION('',(0.E0,0.E0,1.E0));
#18=VECTOR('',#17,4.E0);
#19=CARTESIAN_POINT('',(-2.E0,-2.E0,-2.E0));
#20=LINE('',#19,#18);
#21=DIRECTION('',(0.E0,0.E0,1.E0));
ENDSEC;
END-ISO-10303-21;`;

                        preview.type_stylus = `@import "nib"

// variables
$green = #008000
$green_dark = darken($green, 10)

// mixin/function
container()
  max-width 980px

// mixin/function with parameters
buttonBG($color = green)
  if $color == green
    background-color #008000
  else if $color == red
    background-color #B22222

button
  buttonBG(red)

.blue-button
  buttonBG(blue)

#content, .content
  font Tahoma, Chunkfive, sans-serif
  background url('hatch.png')
  color #F0F0F0 !important
  width 100%`;

                        preview.type_subunit = `progress: 28704
time: 2016-07-05 12:17:02.290433Z
test: bzrlib.doc.api.DocFileTest(/usr/lib64/python2.7/site-packages/bzrlib/doc/api/branch.txt)
time: 2016-07-05 12:17:02.314892Z
successful: bzrlib.doc.api.DocFileTest(/usr/lib64/python2.7/site-packages/bzrlib/doc/api/branch.txt)
time: 2016-07-05 12:17:02.314939Z
time: 2016-07-05 12:17:02.314991Z
test: bzrlib.doc.api.DocFileTest(/usr/lib64/python2.7/site-packages/bzrlib/doc/api/transport.txt)
time: 2016-07-05 12:17:02.315665Z
successful: bzrlib.doc.api.DocFileTest(/usr/lib64/python2.7/site-packages/bzrlib/doc/api/transport.txt)
time: 2016-07-05 12:17:02.315691Z
time: 2016-07-05 12:17:02.315770Z
test: bzrlib.tests.blackbox.test_add.TestAdd.test_add_control_dir(pre-views)
time: 2016-07-05 12:17:02.368936Z
successful: bzrlib.tests.blackbox.test_add.TestAdd.test_add_control_dir(pre-views) [ multipart
]
time: 2016-07-05 12:17:02.368993Z
time: 2016-07-05 12:17:02.369079Z`;

                        preview.type_swift = `import Foundation

@objc class Person: Entity {
  var name: String!
  var age:  Int!

  init(name: String, age: Int) {
    /* /* ... */ */
  }

  // Return a descriptive string for this person
  func description(offset: Int = 0) -> String {
    return "\\(name) is \\(age + offset) years old"
  }
}`;

                        preview.type_taggerscript = `$if($is_video(),video,$if($is_lossless(),lossless,lossy))/
$if($is_video(),
$noop(Video track)
$if($ne(%album%,[non-album tracks]),
$if2(%albumartist%,%artist%) - %album%$if(%discsubtitle%, - %discsubtitle%)/%_discandtracknumber%%title%,
Music Videos/%artist%/%artist% - %title%),
$if($eq(%compilation%,1),
$noop(Various Artist albums)
$firstalphachar($if2(%albumartistsort%,%artistsort%))/$if2(%albumartist%,%artist%)/%album%$if(%_releasecomment%, \\(%_releasecomment%\\),)/%_discandtracknumber%%artist% - %title%,
$noop(Single Artist Albums)
$firstalphachar($if2(%albumartistsort%,%artistsort%))/$if2(%albumartist%,%artist%)/%album%$if(%_releasecomment%, \\(%_releasecomment%\\),)/%_discandtracknumber%%title%
))`;

                        preview.type_yaml = `---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`;

                        preview.type_tap = `# Hardware architecture: x86_64
# Timestamp: 2016-06-16 06:23 (GMT+1)
# 
TAP version 13
1..19
ok 1 - zdtm/static/conntracks # SKIP manual run only
ok 2 - zdtm/static/maps03 # SKIP manual run only
ok 3 - zdtm/static/mlock_setuid
ok 4 - zdtm/static/groups
ok 5 - zdtm/static/maps05
ok 6 - zdtm/static/pdeath_sig
ok 7 - zdtm/static/xids00
ok 8 - zdtm/static/proc-self
ok 9 - zdtm/static/file_fown
ok 10 - zdtm/static/eventfs00
ok 11 - zdtm/static/uptime_grow # SKIP manual run only
ok 12 - zdtm/static/signalfd00
ok 13 - zdtm/static/inotify_irmap
ok 14 - zdtm/static/fanotify00
ok 15 - zdtm/static/session00
ok 16 - zdtm/static/rlimits00
ok 17 - zdtm/static/maps04
ok 18 - zdtm/static/pty03
ok 19 - zdtm/static/pty02`;

                        preview.type_tcl = `package json

source helper.tcl
# randomness verified by a die throw
set ::rand 4

proc give::recursive::count {base p} { ; # 2 mandatory params
    while {$p > 0} {
        set result [expr $result * $base]; incr p -1
    }
    return $result
}

set a {a}; set b "bcdef"; set lst [list "item"]
puts [llength $a$b]

set ::my::tid($id) $::my::tid(def)
lappend lst $arr($idx) $::my::arr($idx) $ar(key)
lreplace ::my::tid($id) 4 4
puts $::rand \${::rand} \${::AWESOME::component::variable}

puts "$x + $y is\\t [expr $x + $y]"

proc isprime x {
    expr {$x>1 && ![regexp {^(oo+?)\\1+$} [string repeat o $x]]}
}`;

                        preview.type_thrift = `namespace * thrift.test

/**
 * Docstring!
 */
enum Numberz
{
  ONE = 1,
  TWO,
  THREE,
  FIVE = 5,
  SIX,
  EIGHT = 8
}

const Numberz myNumberz = Numberz.ONE;
// the following is expected to fail:
// const Numberz urNumberz = ONE;

typedef i64 UserId

struct Msg
{
  1: string message,
  2: i32 type
}
struct NestedListsI32x2
{
  1: list<list<i32>> integerlist
}
struct NestedListsI32x3
{
  1: list<list<list<i32>>> integerlist
}
service ThriftTest
{
  void        testVoid(),
  string      testString(1: string thing),
  oneway void testInit()
}`;

                        preview.type_tp = `/PROG  ALL
/ATTR
OWNER		= MNEDITOR;
COMMENT		= "";
PROG_SIZE	= 3689;
CREATE		= DATE 14-05-13  TIME 17:03:06;
MODIFIED	= DATE 14-05-13  TIME 17:21:44;
FILE_NAME	= ;
VERSION		= 0;
LINE_COUNT	= 118;
MEMORY_SIZE	= 4365;
PROTECT		= READ_WRITE;
TCD:  STACK_SIZE	= 0,
      TASK_PRIORITY	= 50,
      TIME_SLICE	= 0,
      BUSY_LAMP_OFF	= 0,
      ABORT_REQUEST	= 0,
      PAUSE_REQUEST	= 0;
DEFAULT_GROUP	= 1,*,*,*,*;
CONTROL_CODE	= 00000000 00000000;
/MN
  ! motion ;
J P[1:test point] 100% FINE    ;
J P[1] 100.0sec CNT100    ;
J P[1] 100msec CNT R[1]    ;
L P[1] 100/sec FINE    ;
L P[1] 100cm/min CNT100    ;
L P[1] 100.0inch/min CNT100    ;
L P[1] 100deg/sec CNT100    ;
  ! indirect speed ;
L P[1] R[1]sec CNT100    ;
  ! indirect indirect ;
L PR[1] R[R[1]]msec CNT100    ;
  ! indirect destination ;
L PR[R[1]] max_speed CNT100    ;
   ;
  ! assignment ;
  R[1]=R[2]    ;
  ! indirect assignment ;
  R[R[1]]=R[2] ;
  ! system variables ;
  $foo=$bar[100].$baz ;
  R[1]=$FOO.$BAR ;
    ;
  ! various keyword assignments ;
  PR[1]=LPOS    ;
  PR[1]=JPOS    ;
  PR[1]=UFRAME[1] ;
  PR[1]=UTOOL[1] ;
  PR[1]=P[1]    ;
  PR[1,1:component]=5    ;
  SR[1:string reg]=SR[2]+AR[1]    ;
  R[1]=SO[1:Cycle start] DIV SI[2:Remote]    ;
  R[1]=UO[1:Cmd enabled] MOD UI[1:*IMSTP]    ;
  ! mixed logic ;
  DO[1]=(DI[1] AND AR[1] AND F[1] OR TIMER[1]>TIMER_OVERFLOW[1]) ;
  F[1]=(ON) ;
  JOINT_MAX_SPEED[1]=5 ;
  LINEAR_MAX_SPEED=5 ;
  SKIP CONDITION DI[1]=OFF-   ;
  PAYLOAD[R[1]] ;
  OFFSET CONDITION PR[1]    ;
  UFRAME_NUM=1 ;
  UTOOL_NUM=1 ;
  UFRAME[1]=PR[1] ;
  UTOOL[1]=PR[1] ;
  RSR[1]=ENABLE ;
  RSR[AR[1]]=DISABLE ;
  UALM[1] ;
  TIMER[1]=START ;
  TIMER[1]=STOP ;
  TIMER[1]=RESET ;
  OVERRIDE=50% ;
  TOOL_OFFSET CONDITION PR[1]    ;
  LOCK PREG ;
  UNLOCK PREG ;
  COL DETECT ON ;
  COL DETECT OFF ;
  COL GUARD ADJUST R[1] ;
  COL GUARD ADJUST 50 ;
  MONITOR TEST ;
  MONITOR END TEST ;
  R[1]=STRLEN SR[1] ;
  SR[1]=SUBSTR SR[2],R[3],R[4] ;
  R[1]=FINDSTR SR[1],SR[2] ;
  DIAG_REC[1,5,2] ;
   ;
  ! program calls ;
  CALL TEST ;
  CALL TEST(1,'string',SR[1],AR[1]) ;
  RUN TEST ;
  RUN TEST(1,'string',SR[1],AR[1]) ;
   ;
  ! conditionals ;
  IF R[1]=1,JMP LBL[5] ;
  IF R[1]=AR[1],CALL TEST ;
  IF (DI[1]),R[1]=(5) ;
  SELECT R[1]=1,JMP LBL[5] ;
         =2,CALL TEST ;
         ELSE,JMP LBL[100] ;
  FOR R[1]=1 TO R[2] ;
  ENDFOR ;
   ;
  ! wait statement ;
  WAIT   1.00(sec) ;
  WAIT R[5] ;
  WAIT DI[1]=ON    ;
  WAIT DI[1]=ON+    ;
  WAIT ERR_NUM=1    ;
  WAIT (DI[1]=ON) ;
   ;
  ! jumps and labels ;
  JMP LBL[1] ;
  JMP LBL[R[1]] ;
  LBL[100] ;
  LBL[100:TEST] ;
   ;
  ! statements ;
  PAUSE ;
  ABORT ;
  ERROR_PROG=ALL ;
  RESUME_PROG[1]=TEST ;
  END ;
  MESSAGE[ASDF] ;
   ;
  ! comments ;
  --eg:ASDFASDFASDF ;
  // L P[9] 100mm/sec CNT100 ACC100    ;
   ;
  ! motion modifiers ;
L P[1] 100mm/sec CNT100 ACC100    ;
L P[1] 100mm/sec CNT100 ACC R[1]    ;
L P[1] 100mm/sec CNT100 Skip,LBL[1]    ;
L P[1] 100mm/sec CNT100 BREAK    ;
L P[1] 100mm/sec CNT100 Offset    ;
L P[1] 100mm/sec CNT100 PSPD50    ;
L P[1] 100mm/sec CNT100 Offset,PR[1]    ;
L P[1] 100mm/sec CNT100 INC    ;
L P[1] 100mm/sec CNT100 RT_LDR[1]    ;
L P[1] 100mm/sec CNT100 AP_LD50    ;
L P[1] 100mm/sec CNT100 Tool_Offset    ;
L P[1] 100mm/sec CNT100 Tool_Offset,PR[1]    ;
L P[1] 100mm/sec CNT100 Skip,LBL[1],PR[1]=LPOS    ;
L P[1] 100mm/sec CNT100 TB R[5]sec,CALL ALL    ;
L P[1] 100mm/sec CNT100 TA   0.00sec,AO[1]=R[5]    ;
L P[1] 100mm/sec CNT100 DB    0.0mm,CALL ALL    ;
L P[1] 100mm/sec CNT100 PTH    ;
L P[1] 100mm/sec CNT100 VOFFSET,VR[1] ;
/POS
P[1:"test"]{
   GP1:
    UF : 0, UT : 1,		CONFIG : '',
    X =   550.000  mm,	Y =     0.000  mm,	Z =  -685.000  mm,
    W =   180.000 deg,	P =     0.000 deg,	R =     0.000 deg
};
/END`;

                        preview.type_twig = `{% if posts|length %}
  {% for article in articles %}
  &lt;div&gt;
  {{ article.title|upper() }}

  {# outputs 'WELCOME' #}
  &lt;/div&gt;
  {% endfor %}
{% endif %}

{% set user = json_encode(user) %}

{{ random(['apple', 'orange', 'citrus']) }}

{{ include(template_from_string("Hello {{ name }}")) }}


{#
Comments may be long and multiline.
Markup is &lt;em&gt;not&lt;/em&gt; highlighted within comments.
#}`;

                        preview.type_typescript = `class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`;

                        preview.type_vala = `using DBus;

namespace Test {
  class Foo : Object {
    public signal void some_event ();   // definition of the signal
    public void method () {
      some_event ();                    // emitting the signal (callbacks get invoked)
    }
  }
}

/* defining a class */
class Track : GLib.Object, Test.Foo {              /* subclassing 'GLib.Object' */
  public double mass;                  /* a public field */
  public double name { get; set; }     /* a public property */
  private bool terminated = false;     /* a private field */
  public void terminate() {            /* a public method */
    terminated = true;
  }
}

const ALL_UPPER_CASE = "you should follow this convention";

var t = new Track();      // same as: Track t = new Track();
var s = "hello";          // same as: string s = "hello";
var l = new List<int>();       // same as: List<int> l = new List<int>();
var i = 10;               // same as: int i = 10;


#if (ololo)
Regex regex = /foo/;
#endif

/*
 * Entry point can be outside class
 */
void main () {
  var long_string = """
    Example of "verbatim string".
    Same as in @"string" in C#
  """
  var foo = new Foo ();
  foo.some_event.connect (callback_a);      // connecting the callback functions
  foo.some_event.connect (callback_b);
  foo.method ();
}`;

                        preview.type_vbnet = `Import System
Import System.IO
#Const DEBUG = True

Namespace Highlighter.Test
  ''' <summary>This is an example class.</summary>
  Public Class Program
    Protected Shared hello As Integer = 3
    Private Const ABC As Boolean = False

#Region "Code"
    ' Cheers!
    <STAThread()> _
    Public Shared Sub Main(ByVal args() As String, ParamArray arr As Object) Handles Form1.Click
      On Error Resume Next
      If ABC Then
        While ABC : Console.WriteLine() : End While
        For i As Long = 0 To 1000 Step 123
          Try
            System.Windows.Forms.MessageBox.Show(CInt("1").ToString())
          Catch ex As Exception       ' What are you doing? Well...
            Dim exp = CType(ex, IOException)
            REM ORZ
            Return
          End Try
        Next
      Else
        Dim l As New System.Collections.List<String>()
        SyncLock l
          If TypeOf l Is Decimal And l IsNot Nothing Then
            RemoveHandler button1.Paint, delegate
          End If
          Dim d = New System.Threading.Thread(AddressOf ThreadProc)
          Dim a = New Action(Sub(x, y) x + y)
          Static u = From x As String In l Select x.Substring(2, 4) Where x.Length > 0
        End SyncLock
        Do : Laugh() : Loop Until hello = 4
      End If
    End Sub
#End Region
  End Class
End Namespace`;

                        preview.type_vbscript = `' creating configuration storage and initializing with default values
Set cfg = CreateObject("Scripting.Dictionary")

' reading ini file
for i = 0 to ubound(ini_strings)
    s = trim(ini_strings(i))

    ' skipping empty strings and comments
    if mid(s, 1, 1) <> "#" and len(s) > 0 then
      ' obtaining key and value
      parts = split(s, "=", -1, 1)

      if ubound(parts)+1 = 2 then
        parts(0) = trim(parts(0))
        parts(1) = trim(parts(1))

        ' reading configuration and filenames
        select case lcase(parts(0))
          case "uncompressed""_postfix" cfg.item("uncompressed""_postfix") = parts(1)
          case "f"
                    options = split(parts(1), "|", -1, 1)
                    if ubound(options)+1 = 2 then
                      ' 0: filename,  1: options
                      ff.add trim(options(0)), trim(options(1))
                    end if
        end select
      end if
    end if
next`;

                        preview.type_vbscript_html = `<body>
<%
If i <  10 Then
  response.write("Good morning!")
End If
%>
</body>`;

                        preview.type_verilog = `\`timescale 1ns / 1ps

/**
 * counter: a generic clearable up-counter
 */

module counter
    #(parameter WIDTH=64, NAME="world")
    (
        input clk,
        input ce,
        input arst_n,
        output reg [WIDTH-1:0] q
    );

    string name = "counter";
    localparam val0 = 12'ha1f;
    localparam val1 = 12'h1fa;
    localparam val2 = 12'hfa1;

    // some child
    clock_buffer #(WIDTH) buffer_inst (
      .clk(clk),
      .ce(ce),
      .reset(arst_n)
    );

    // Simple gated up-counter with async clear

    always @(posedge clk or negedge arst_n) begin
        if (arst_n == 1'b0) begin
            q <= {WIDTH {1'b0}};
            end
        else begin
            q <= q;
            if (ce == 1'b1) begin
                q <= q + 1;
            end
        end
    end

    function int add_one(int x);
      return x + 1;
    endfunction : add_one

\`ifdef SIMULATION
initial $display("Hello %s", NAME);
\`endif
endmodule : counter

class my_data extends uvm_data;
  int x, y;

  function add_one();
    x++;
    y++;
  endfunction : add_one
endclass : my_data`;

                        preview.type_vhdl = `/*
 * RS-trigger with assynch. reset
 */

library ieee;
use ieee.std_logic_1164.all;

entity RS_trigger is
    generic (T: Time := 0ns);
    port ( R, S  : in  std_logic;
           Q, nQ : out std_logic;
           reset, clock : in  std_logic );
end RS_trigger;

architecture behaviour of RS_trigger is
    signal QT: std_logic; -- Q(t)
begin
    process(clock, reset) is
        subtype RS is std_logic_vector (1 downto 0);
    begin
        if reset = '0' then
            QT <= '0';
        else
            if rising_edge(C) then
                if not (R'stable(T) and S'stable(T)) then
                    QT <= 'X';
                else
                    case RS'(R&S) is
                        when "01" => QT <= '1';
                        when "10" => QT <= '0';
                        when "11" => QT <= 'X';
                        when others => null;
                    end case;
                end if;
            end if;
        end if;
    end process;

    Q  <= QT;
    nQ <= not QT;
end architecture behaviour;`;

                        preview.type_vim = `if foo > 2 || has("gui_running")
  syntax on
  set hlsearch
endif

set autoindent

" switch on highlighting
function UnComment(fl, ll)
  while idx >= a:ll
    let srclines=getline(idx)
    let dstlines=substitute(srclines, b:comment, "", "")
    call setline(idx, dstlines)
  endwhile
endfunction

let conf = {'command': 'git'}`;

                        preview.type_x86asm = `section .text
extern  _MessageBoxA@16
%if     __NASM_VERSION_ID__ >= 0x02030000
safeseh handler         ; register handler as "safe handler"
%endif

handler:
        push    dword 1 ; MB_OKCANCEL
        push    dword caption
        push    dword text
        push    dword 0
        call    _MessageBoxA@16
        sub     eax,1   ; incidentally suits as return value
                        ; for exception handler
        ret

global  _main
_main:  push    dword handler
        push    dword [fs:0]
        mov     dword [fs:0], esp
        xor     eax,eax
        mov     eax, dword[eax]   ; cause exception
        pop     dword [fs:0]      ; disengage exception handler
        add     esp, 4
        ret

avx2:   vzeroupper
        push      rbx
        mov       rbx,   rsp
        sub       rsp,   0h20
        vmovdqa   ymm0,  [rcx]
        vpaddb    ymm0,  [rdx]
        leave
        ret

text:   db      'OK to rethrow, CANCEL to generate core dump',0
caption:db      'SEGV',0

section .drectve info
        db      '/defaultlib:user32.lib /defaultlib:msvcrt.lib '`;

                        preview.type_xl = `import Animate
import SeasonsGreetingsTheme
import "myhelper.xl"
theme "SeasonsGreetings"
function X:real -> sin(X*0.5) + 16#0.002
page "A nice car",
// --------------------------------------
//    Display car model on a pedestal
// --------------------------------------
    clear_color 0, 0, 0, 1
    hand_scale -> 0.3

    // Display the background image
    background -4000,
        locally
            disable_depth_test
            corridor N:integer ->
                locally
                    rotatez 60 * N
                    translatex 1000
                    rotatey 90
                    color "white"
                    texture "stars.png"
                    texture_wrap true, true
                    texture_transform
                        translate (time + N) * 0.02 mod 1, 0, 0
                        scale 0.2, 0.3, 0.3
                    rectangle 0, 0, 100000, 1154`;

                        preview.type_xml = `<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`;

                        preview.type_xquery = `xquery version "3.1";
(:~
: @author Duncan Paterson
: @version 1.0:)

declare variable $local:num := math:log10(12345);

(
let $map := map { 'R': 'red', 'G': 'green', 'B': 'blue' }
return (
  $map?*          (: 1. returns all values; same as: map:keys($map) ! $map(.) :),
  $map?R          (: 2. returns the value associated with the key 'R'; same as: $map('R') :),
  $map?('G','B')  (: 3. returns the values associated with the key 'G' and 'B' :)
),

declare function local:city($country as node()*) as element (country) {
for $country in doc('factbook')//country
where $country/@population > 100000000
let $name := $country/name[1]
for $city in $country//city[population gt 1000000]
group by $name
return
   element country { attribute type { $name },
    $city/name }
};

return
('A', 'B', 'C') => count(),

<root>{local:city(.) + $local:num}</root>`;

preview.type_zephir = `function testBefore(<Test> a, var b = 5, int c = 10)
{
    a->method1();

    return b + c;
}

namespace Test;

use RuntimeException as RE;

/**
 * Example comment
 */
class Test extends CustomClass implements TestInterface
{
    const C1 = null;

    // Magic constant: http://php.net/manual/ru/language.constants.predefined.php
    const className = __CLASS__;

    public function method1()
    {
        int a = 1, b = 2;
        if likely a > b {
            a++;
        } else if unlikely b < a {
            a--;
        }
        return a + b;
    }

    // See fn is allowed like shortcut
    public fn method2() -> <Test>
    {
        call_user_func(function() { echo "hello"; });


        [1, 2, 3, 4, 5]->walk(
            function(int! x) {
                return x * x;
            }
        );

        [1, 2, 3, 4, 5]->walk(
            function(_, int key) { echo key; }
        );

        array input = [1, 2, 3, 4, 5];

        input->walk(
            function(_, int key) { echo key; }
        );


        input->map(x => x * x);

        return this;
    }
}`;
