// ==UserScript==
// @id             iitc-plugin-tap-display-mods-detail@ryokei
// @name           IITC plugin: tap dispaly mods detail
// @category       Tweaks
// @version        0.0.2.20180227.1829
// @namespace      https://github.com/jonatkins/ingress-intel-total-conversion
// @updateURL      https://github.com/ryokei-ingress/iitc/plugins/tap-dispaly-mods-detail.meta.js
// @downloadURL    https://github.com/ryokei-ingress/iitc/plugins/tap-dispaly-mods-detail.user.js
// @description    Enables tap to display the detail of mods installed on portals
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @include        https://*.ingress.com/mission/*
// @include        http://*.ingress.com/mission/*
// @match          https://*.ingress.com/mission/*
// @match          http://*.ingress.com/mission/*
// @grant          none
// ==/UserScript==


function wrapper(plugin_info) {
    // ensure plugin framework is there, even if iitc is not yet loaded
    if(typeof window.plugin !== 'function') window.plugin = function() {};
    
    //PLUGIN AUTHORS: writing a plugin outside of the IITC build environment? if so, delete these lines!!
    //(leaving them in place might break the 'About IITC' page or break update checks)
    //plugin_info.buildName = 'iitc';
    //plugin_info.dateTimeVersion = '20170108.21732';
    //plugin_info.pluginId = 'cross_link';
    //END PLUGIN AUTHORS NOTE
    
    
    
    // PLUGIN START ////////////////////////////////////////////////////////
    
    
    window.plugin.tapDisplayModsDetail = function() {};
    
    
    var setup = function() {
        $('#scrollwrapper').on('click', 'div.mods span', function() {
            return true;
        });
    };
    
    // PLUGIN END //////////////////////////////////////////////////////////
    
    
    setup.info = plugin_info; //add the script info data to the function as a property
    if(!window.bootPlugins) window.bootPlugins = [];
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if(window.iitcLoaded && typeof setup === 'function') setup();
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) info.script = { version: GM_info.script.version, name: GM_info.script.name, description: GM_info.script.description };
script.appendChild(document.createTextNode('('+ wrapper +')('+JSON.stringify(info)+');'));
(document.body || document.head || document.documentElement).appendChild(script);

