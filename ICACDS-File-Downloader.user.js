// ==UserScript==
// @name         ICAC DataSysystems
// @version      0.11
// @description  File Downloader!
// @author       You
// @match        https://www.icacdatasystem.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/srfrmac87/ICACDS/raw/main/ICACDS-File-Downloader.user.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = window.jQuery;
    window.addEventListener ("load", Greasemonkey_main, false);
    function Greasemonkey_main () {
        GM_addStyle ( " .difClass {    margin: 15px auto;    width: 75%; }; ");
        GM_addStyle ( " .danger-link {    color: red;    font-weight:bolder}; ");
        createBox();
    }
    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }
    function createBox(){
        document.evaluate('/html/body/section[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.insertAdjacentHTML('afterend','<div id="setTable"></div>');
        var settingsBox = document.getElementById('setTable');
        settingsBox.style.width='500px';
        settingsBox.style.margin='18px auto 0';
        settingsBox.style.padding='5px';
        settingsBox.style.backgroundColor='#FFddaa';
        settingsBox.style.border='1px solid #040404';
        settingsBox.style.borderRadius='4px';
        settingsBox.style.MozBorderRadius='4px';
        settingsBox.style.clear='both';
        settingsBox.style.color='#000';

        document.getElementById('setTable').insertAdjacentHTML('afterbegin','<div id="topDiv"></div>');
        var topDiv = document.getElementById('topDiv');
        topDiv.style.height='35px';
        document.getElementById('topDiv').insertAdjacentHTML('afterbegin','<div id="titleDivWrapper"></div>');
        var titleDivWrapper = document.getElementById('titleDivWrapper');
        titleDivWrapper.style.float='left';
        titleDivWrapper.style.width="468px";
        document.getElementById('titleDivWrapper').insertAdjacentHTML('beforeend','<div id="titleDiv2"></div>');
        var titleDiv2 = document.getElementById('titleDiv2');
        titleDiv2.innerHTML="ICAC DataSystem Shortcuts:";
        titleDiv2.style.left="16px";
        titleDiv2.style.position="relative";
        titleDiv2.style.textalign='center';

        document.getElementById('titleDivWrapper').insertAdjacentHTML('afterend','<div id="closeDiv"></div>');
        var closeDiv = document.getElementById('closeDiv');
        closeDiv.innerHTML="&times";
        closeDiv.style.fontFamily="fantasy";
        closeDiv.style.fontWeight="bolder";
        closeDiv.style.fontSize="23px";
        closeDiv.style.width="28px";
        closeDiv.style.float='right';
        closeDiv.style.backgroundColor="#ff574f"
        closeDiv.style.border='2px solid #040404';
        closeDiv.style.borderRadius='4px';
        closeDiv.style.cursor="pointer";
        closeDiv.onclick=function() {closeBox()};

        var attButton=document.createElement("input");
        attButton.type="button";
        attButton.value="Expand Files Section";
        attButton.style.margin="5px";
        attButton.onclick=function() {
            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-collapse.collapse").style.height = "auto";
            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-collapse.collapse").className = "panel-collapse collapse in";
                $("input[name='numPerPage'][value='100']").prop('checked', true);
                $("input[name='numPerPage'][value='100']").click();
        };
        settingsBox.appendChild(attButton);

        var comcastButton=document.createElement("input");
        comcastButton.type="button";
        comcastButton.value="Click Links";
        comcastButton.style.margin="5px";
        comcastButton.onclick=function() {
            (function myLoop(i) {
                setTimeout(function() {
                        document.evaluate('/html/body/div[4]/section/div[2]/div[2]/div/div[2]/div[6]/accordion/div/div[5]/div[2]/div/div/div/div[2]/div[2]/div/div[1]/div/table/tbody/tr['+i+']/td[1]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
                }, 200)
                setTimeout(function() {
                        document.querySelector("body > div.modal.fade.ng-isolate-scope.modal-search.in > div > div > div.modal-body.text-center.ng-scope > div.row > div > div:nth-child(1) > button").click();
                    if (--i) myLoop(i); //  decrement i and call myLoop again if i > 0
                }, 450)
            })($('#caseFiles > tbody > tr:visible').length); //  pass the number of iterations as an argument

        };
        settingsBox.appendChild(comcastButton);
    }
    function closeBox(){
        var settingsBox = document.getElementById('setTable');
        settingsBox.style.display="none";
    }
})();
