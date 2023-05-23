console.log("My_styling/js/ExternalPermanentScript initialising");
// sollution
// create a script instance with: var script= document.createElement('script');
// Enter: script.type="text/JavaScript"
// Then: enter url of the js to load with: script.src = url
// Once everything is done, document.block_to_append_to.appendChild(script);
function CreateAScript(link,isFileOrFunction=1){
    var script=document.createElement("script");
        script.type="text/JavaScript";
    if (isFileOrFunction===1){
        script.src=link
        return script
    } else {
        script.text=link;
        return script
    }
}
// function createAMeta()
function AddScripts(IDTo=""){//,block_to_append_to=head){
    console.log(`In AddScripts(${IDTo})`)
    var TheScripts="",
    homeSite="https://hanralatalliardwork.github.io/wolf_escape_home/",
    homeScripts="https://hanralatalliardwork.github.io/My_styling/",
    SiteOrScripts={"hsc":homeScripts,"hsi":homeSite};
    // console.log(`Vars initialised:\n TheScripts='${TheScripts}'\nhomeSite='${homeSite}'\nhomeScripts='${homeScripts}'`)
    var TheLinks={
        'files/js/cookie_dealing.js':"hsc",
        'files/customisation/js/show_hide_id.js':"hsc",
        'files/js/dark_light.js':"hsc",
        'files/customisation/js/head.js':"hsi",
        'files/customisation/js/BodyHeader.js':"hsi",
        'files/js/apply_d_l_from_theme.js"></script>':"hsc"
    };
    for (i in TheLinks){
        TheScripts=CreateAScript(SiteOrScripts[TheLinks[i]]+i,1);
        document.head.appendChild(TheScripts);
    }
    console.log("going into bootThemeHead")
    bootThemeHead(IDTo);
    console.log("Out of bootThemeHead")
    console.log(`The function bootThemeHead(${IDTo}) was called successfully.`)
}

function bootThemeHead(IDTo){
    var TheHead="",
    e=document.getElementsByTagName(IDTo).innerHTML;
    // var meta=document.createElement("meta")
    // meta.charset="utf-8"
    var meta2=document.createElement("meta");
    meta2.lang="eng";
    var meta3=document.createElement("meta");
    meta3.id="theme";
    var meta4=document.createElement("meta");
    meta4.id="theHead";
    // document.head.appendChild(meta);
    document.head.appendChild(meta2);
    document.head.appendChild(meta3);
    document.head.appendChild(meta4);
    TheHead+='    <meta charset="utf-8">\n';
    // TheHead+='    <meta lang="eng">\n';
    // TheHead+='    <meta id="theme">\n';
    // TheHead+='    <meta id="theHead">\n';
    TheHead+='    <script type="text/JavaScript">initialiseHeader("theHead",2);</script>\n';
    TheHead+='    <link rel="stylesheet" href="css/stylesheet.css">\n';
    TheHead+='    <link rel="stylesheet" href="https://hanralatalliardwork.github.io/My_styling/files/css/toggle.css"></link>\n';
    console.log("TheHead has been loaded")
    e+=TheHead;
    document.getElementsByTagName(IDTo).innerHTML=e;
    console.log("TheHead has been added to e and e has been written in the body of the page.")
    // var script=CreateAScript(initialiseHeader("theHead",2),2);
    // document.head.appendChild(script);
    
}

function bootScripts(IDTo="bootJS"){//},block_to_append_to=bootJS){
    console.log(`bootScripts(${IDTo}) has successfully been called.`)
    var BootScripts="",
    e=document.getElementsByTagName(IDTo).innerHTML,
    script = document.createElement("script");
    console.log("Vars initialised.")
    // BootScripts+='\n    <script type="text/JavaScript">writeBodyHeader("header");</script>\n';
    // BootScripts+='    <script type="text/JavaScript">initialiseTheme("theme","darkOrLight",\'https://hanralatalliardwork.github.io/wolf_escape_home/\',\'files/customisation/css/boostrap_dark.css\',\'files/customisation/css/bootstrap.css\');</script>\n';
    // BootScripts+='    <script type="text/JavaScript">UpdateTheme();</script>\n';
    BootScripts+='    <!-- Place this tag in your head or just before your close body tag. -->\n';
    // BootScripts+='    <script async defer src="https://buttons.github.io/buttons.js"></script>\n';
    script.async
    script.defer
    script.src="https://buttons.github.io/buttons.js"
    document.bootJS.appendChild(script);
    BootScripts+='    <script type="text/JavaScript">writeBodyHeader("header");initialiseTheme("theme","darkOrLight","https://hanralatalliardwork.github.io/wolf_escape_home/","files/customisation/css/boostrap_dark.css","files/customisation/css/bootstrap.css");writeBodyHeader("header");initialiseTheme("theme","darkOrLight","https://hanralatalliardwork.github.io/wolf_escape_home/","files/customisation/css/boostrap_dark.css","files/customisation/css/bootstrap.css");writeBodyHeader("header");</script>'
    e+=BootScripts;
    console.log("BootScripts written into e")
    document.getElementsByTagName(IDTo).innerHTML=e;
    console.log("e written into page")
    // writeBodyHeader("header");
    // initialiseTheme("theme","darkOrLight",'https://hanralatalliardwork.github.io/wolf_escape_home/','files/customisation/css/boostrap_dark.css','files/customisation/css/bootstrap.css');
    // writeBodyHeader("header");
}
console.log("My_styling/js/ExternalPermanentScripts initialised.");
