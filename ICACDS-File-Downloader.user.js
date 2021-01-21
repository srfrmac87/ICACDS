// ==UserScript==
// @name         ICAC DataSysystems
// @version      0.08
// @description  File Downloader!
// @author       You
// @match        https://www.icacdatasystem.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var $ = window.jQuery;
    window.addEventListener ("load", Greasemonkey_main, false);
    function Greasemonkey_main () {
        //$('.selectField').attr({id:'selectDropDown'});
        //$('.ispresults').attr({class:'difClass', id:'ispBox'});
        //$('.ispresults').attr(id, 'ispBox2');
        //$('.ispresults').removeAttr('height');
        //$('.ispresults').css('height', '5000px');
        //const ispelement = document.getElementsByClassName("ispresults");
        //ispelement.style.removeProperty('height')
        GM_addStyle ( " .difClass {    margin: 15px auto;    width: 75%; }; ");
        GM_addStyle ( " .danger-link {    color: red;    font-weight:bolder}; ");
        //if(document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-heading > h4 > a")){
        //    document.querySelector("body > div:nth-child(1) > nav.subnavbar.text-center.ng-scope > div > div > div.navbar-collapse.collapse > ul > li:nth-child(1) > a").click();
        //document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-heading > h4 > a").click();
       // }
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
        //document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div.col-md-12.text-left > div.col-md-2 > button").insertAdjacentHTML('afterend','<div id="setTable"></div>');
        //document.evaluate('/html/body/div[1]/div[1]/div/a/img', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.insertAdjacentHTML('afterend','<div id="setTable"></div>');
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
            //document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-heading > h4 > a > span").click();
            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-collapse.collapse").style.height = "auto";
            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-collapse.collapse").className = "panel-collapse collapse in";
            //document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-heading > h4 > a > span").css("background-color", "green");
            //setTimeout(function() {
              //  alert("not clicked");
                $("input[name='numPerPage'][value='100']").prop('checked', true);
                $("input[name='numPerPage'][value='100']").click();

               // }, 2000); //Two seconds will elapse and Code will execute.
        };
        settingsBox.appendChild(attButton);

        var comcastButton=document.createElement("input");
        comcastButton.type="button";
        comcastButton.value="Click Links";
        comcastButton.style.margin="5px";
        comcastButton.onclick=function() {
//            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-heading > h4 > a > span").style.backgroundColor= "green";
//            document.querySelector("body > div.ids-ui-view.ng-scope > section > div.ng-scope > div:nth-child(3) > div > div.widget-content > div:nth-child(6) > accordion > div > div:nth-child(5) > div.panel-collapse.collapse").style.height = "auto";
//             /html/body/div[4]/section/div[2]/div[2]/div/div[2]/div[6]/accordion/div/div[5]/div[2]/div/div/div/div[2]/div[2]/div/div[1]/div/table/tbody/tr[1]/td[1]/a
//             /html/body/div[4]/section/div[2]/div[2]/div/div[2]/div[6]/accordion/div/div[5]/div[2]/div/div/div/div[2]/div[2]/div/div[1]/div/table/tbody/tr[2]/td[1]/a
//             /html/body/div[4]/section/div[2]/div[2]/div/div[2]/div[6]/accordion/div/div[5]/div[2]/div/div/div/div[2]/div[2]/div/div[1]/div/table/tbody/tr[3]/td[1]/a
//             document.querySelector("#caseFiles > tbody > tr:nth-child(1) > td:nth-child(1) > a")
//             document.querySelector("#caseFiles > tbody > tr:nth-child(2) > td.ng-scope > a")
//             document.querySelector("#caseFiles > tbody > tr:nth-child(3) > td.ng-scope > a")
            // full xpath used to find the appropriate link:
            // for/while loop needed to cycle through each tf[#];

//                 for (let i = 1; i<=$('#caseFiles > tbody > tr:visible').length; i++){
//                     setTimeout(function() {
                        //the alert shows the content of the first column, and on 1/20/21 successfully hits every item listed.
                        //alert(document.evaluate('/html/body/div[4]/section/div[2]/div[2]/div/div[2]/div[6]/accordion/div/div[5]/div[2]/div/div/div/div[2]/div[2]/div/div[1]/div/table/tbody/tr['+i+']/td[1]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML);
                        //alert(i);


//                    }, 1500); //Two seconds will elapse and Code will execute.
                        //timeout needed for delay in box appearance after click.
//                    setTimeout(function() {
                        // second line is just testing: this is the one to be used:
                        ////document.querySelector("body > div.modal.fade.ng-isolate-scope.modal-search.in > div > div > div.modal-body.text-center.ng-scope > div.row > div > div:nth-child(2) > button").click();
                        //alert(i + "second");

//                    }, 3000); //Two seconds will elapse and Code will execute.

//                }
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

//         var sprintButton=document.createElement("input");
//         sprintButton.type="button";
//         sprintButton.value="Sprint";
//         sprintButton.style.margin="5px";
//         sprintButton.onclick=function() {selectCompany(152)};
//         settingsBox.appendChild(sprintButton);

//         var tmobileButton=document.createElement("input");
//         tmobileButton.type="button";
//         tmobileButton.value="T-Mobile";
//         tmobileButton.style.margin="5px";
//         tmobileButton.onclick=function() {selectCompany(152)};
//         settingsBox.appendChild(tmobileButton);

//         var verizonButton=document.createElement("input");
//         verizonButton.type="button";
//         verizonButton.value="Verizon";
//         verizonButton.style.margin="5px";
//         verizonButton.onclick=function() {selectCompany(1279)};
//         settingsBox.appendChild(verizonButton);

//         var myButton=document.createElement("input");
//         myButton.type="button";
//         myButton.value="Save Settings";
//         myButton.onclick=saveSettings;

//         var showRadio=document.createElement("input");
//         showRadio.type="radio";
//         showRadio.name="showHideRadio";
//         showRadio.id="showRadio";
//         showRadio.value="Show All";

//         var hideRadio=document.createElement("input");
//         hideRadio.type="radio";
//         hideRadio.name="showHideRadio";
//         hideRadio.id="hideRadio";
//         hideRadio.value="Hide All";

//         var boxHTML = '<table border="0" style="border:0px solid #000;width:500" cellpadding="0" cellspacing="0">';
//         boxHTML += '	<tr>';
//         boxHTML += '		<td colspan="3" style="text-align:center; font-weight:900; line-height:30px;">Shortcuts</td>';
//         boxHTML += '	</tr>';
//         boxHTML += '	<tr>';
//         boxHTML += '		<td style="line-height:25px">Cities in your County:</td>';
//         boxHTML += '		<td colspan="2"><span id="inputCities"></span></td>';
//         boxHTML += '	</tr>';
//         boxHTML += '	<tr>';
//         boxHTML += '		<td style="line-height:25px">Show or hide cities not on above list:</td>';
//         boxHTML += '		<td><span id="showBUTTON"></span> Show</td>';
//         boxHTML += '		<td><span id="hideBUTTON"></span> Hide</td>';
//         boxHTML += '	</tr>';
//         //	boxHTML += '	<tr>';
//         //	boxHTML += '		<td colspan="3" style="text-align:center; font-weight:900; line-height:30px;">Settings for ICAC Website</td>';
//         //	boxHTML += '	</tr>';
//         //	boxHTML += '	<tr>';
//         //	boxHTML += '		<td>Table Cell</td>';
//         //	boxHTML += '		<td>Table Cell</td>';
//         //	boxHTML += '		<td>Table Cell</td>';
//         //	boxHTML += '	</tr>';
//         boxHTML += '</table>';

//         settingsBox.innerHTML += boxHTML;

//         var townsText=document.createElement("input");
//         townsText.type="text";
//         townsText.id="townsText";
//         townsText.name="Towns Text";

//         var townButton=document.createElement("input");
//         townButton.type="button";
//         townButton.value="Cancel";
//         //townButton.onclick = checkSettings;

//         var closeButton=document.createElement('div');
//         closeButton.id="bacclose";
//         closeButton.className="bacclose";
//         //closeButton.onclick = closeBox;

//         var closeHelper=document.createElement('div');
//         closeHelper.id="boxclose";
//         closeHelper.className="boxclose";
//         //closeHelper.onclick = closeBox;

//         var xButton=document.createElement('div');
//         xButton.id="xclose";
//         xButton.className="xclose";
//         //xButton.onclick = closeBox;

//         document.getElementById('inputCities').appendChild(townsText);
//         document.getElementById('showBUTTON').appendChild(showRadio);
//         document.getElementById('hideBUTTON').appendChild(hideRadio);
//         settingsBox.innerHTML += '<br />';

//         settingsBox.appendChild(myButton);

//         settingsBox.appendChild(townButton);
//         settingsBox.appendChild(closeButton);
//         settingsBox.appendChild(closeButton);
//         closeButton.appendChild(closeHelper);
//         closeHelper.appendChild(xButton);
//     }
//     function selectCompany(companyNumber){
//         var element = document.getElementById('selectDropDown');
//         element.value = companyNumber;
//         quickForm.submit(); //This is the function as defined on the page, undefined error should be okay
    }
    function closeBox(){
        var settingsBox = document.getElementById('setTable');
        settingsBox.style.display="none";
    }
})();
