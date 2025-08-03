// Privacy scripts
var s1 = document.createElement("script");
s1.src = "https://cmp.gatekeeperconsent.com/min.js";
s1.setAttribute("data-cfasync", "false");
document.head.appendChild(s1);

var s2 = document.createElement("script");
s2.src = "https://the.gatekeeperconsent.com/cmp.min.js";
s2.setAttribute("data-cfasync", "false");
document.head.appendChild(s2);

// Ezoic config
window.ezstandalone = window.ezstandalone || {};
ezstandalone.cmd = ezstandalone.cmd || [];

// Header script
var s3 = document.createElement("script");
s3.src = "//www.ezojs.com/ezoic/sa.min.js";
s3.async = true;
document.head.appendChild(s3);
