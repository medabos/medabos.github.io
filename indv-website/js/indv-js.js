function loadData() {
    "use strict";
    var myObj, myJSON;
    //Store data:
    myObj = {
        "doveri2i3": {
            "step1": {
                "name": "<h3>Read First / Pre-Settings</h3>",
                "instructions": "<ul><li>Oil Temperature needs to be at least 100 degrees F before setting adjustments</li><li>Both New and Rebuilt valves should have the adjustments pre-set. You can skip the steps under Pre-Setting, if this is the case. If you are unsure or think that some of the adjustments are way off then you can follow these steps to Pre-Set the Valve.</li></ul><p>Low Pressure Adjustment (Bypass) <br> Adjuster should be barely touching the top of the Bypass Piston. <br><br> Up Leveling <br> OUT until it stops <br> IN 4 turns <br><br> Up Start <br> IN until it Stops <br> OUT 9 Turns <br><br> Up Stop <br> IN until it Stops <br> OUT 3 turns <br><br> Up Slowdown <br> IN until it Stops <br> Leave Closed <br><br> Down - lowering and leveling <br> Turn IN until ¾” of threads are showing <br> Leave at 45 degree angle <br><br> Down Start <br> IN until it Stops <br> OUT 9 Turns <br><br> Down Stop <br> IN until it Stops <br> OUT 3 Turns <br><br> Down Slowdown <br> IN until it Stops <br> Leave Closed </p>",
                "direction": "NONE",
                "controller": "OFF",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "",
                "turnout": "",
                "info1": "",
                "info2": ""
            },
            "step2": {
                "name": "<h3>BP - Low Pressure Adjustment (Bypass)</h3>",
                "instructions": "<ol><li>Adjuster Direction – Turn IN until car starts to move up</li><li>Adjuster Direction – Turn OUT until car stops</li><li>Turn CCW an additional ½ Turn</li><li>Tighten Adjuster Locknut</li><li>Pump Motor - Off</li></ol>",
                "direction": "UP",
                "controller": "UP SLOW Solenoid - Disconnected, UP FAST Solenoid - Disconnected, PUMP - On",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Car Moves UP",
                "turnout": "Car Stops",
                "info1": "",
                "info2": ""
            },
            "step3": {
                "name": "<h3>RV - Relief Valve</h3>",
                "instructions": "<ol><li>Close line shut-off valve and install pressure gauge<br>Note: Stop pump IMMEDIATELY if pressure exceeds 625 psi</li><li>Turn IN until pressure is as stated on the Power Unit Data Plate</li><li>PUMP - Off</li><li>Open Manual Lowering to relieve pressure and close again</li><li>Repeat steps 2 thru 4</li></ol>",
                "direction": "NONE",
                "controller": "Inspection Operation - UP",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Higher Pressure relief",
                "turnout": "Lower Pressure relief",
                "info1": "",
                "info2": ""
            },
            "step4": {
                "name": "UP Slowdown",
                "instructions": "Adjust until car moves 10 to 12 fpm",
                "direction": "UP",
                "controller": "Inspection Operation - UP",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Softer, Increases UP Leveling Speed",
                "turnout": "Firmer, Decreases UP Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step5": {
                "name": "UL - UP Leveling",
                "instructions": "Adjust until car moves 13 to 15 FPM",
                "direction": "UP",
                "controller": "Inspection Operation - UP",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Increases UP Leveling Speed",
                "turnout": "Decreased UP Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step6": {
                "name": "DOWN Stop",
                "instructions": "Adjust until car moves 15-20 FPM",
                "direction": "DOWN",
                "controller": "Inspection Operation - DOWN",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Softer Down Stop, Firmer Down Start, Smoother Down Slowdown, Faster Down Leveling Speed",
                "turnout": "Firmer Down Stop, Softer Down Start, Faster Down Slowdown, Smoother Down Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step7": {
                "name": "DOWN Leveling",
                "instructions": "<ol><li>Adjust until car moves 10-12 FPM</li><li>NOTE: Down Leveling speed is very sensitive and the adjustment zone is within ¼ turn</li></ol>",
                "direction": "DOWN",
                "controller": "Inspection Operation - DOWN",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Decrease Leveling Speed",
                "turnout": "Increase Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step8": {
                "name": "DOWN Stop - Recheck",
                "instructions": "Adjust for about a 1 sec transition to stop",
                "direction": "DOWN",
                "controller": "Inspection Operation - DOWN",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Softer Down Stop, Firmer Down Start, Smoother Down Slowdown, Faster Down Leveling Speed",
                "turnout": "Firmer Down Stop, Softer Down Start, Faster Down Slowdown, Smoother Down Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step9": {
                "name": "DOWN Leveling - Recheck",
                "instructions": "<ol><li>Adjust until car moves 10-12 FPM</li><li>NOTE: Down Leveling speed is very sensitive and the adjustment zone is within ¼ turn</li></ol>",
                "direction": "DOWN",
                "controller": "Inspection Operation - DOWN",
                "imgpath": "",
                "troubleshooting": "",
                "turnin": "Decrease Leveling Speed",
                "turnout": "Increase Leveling Speed",
                "info1": "",
                "info2": ""
            },
            "step10": {
                "name": "UP Slowdown",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step11": {
                "name": "UP Stop",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step12": {
                "name": "UP Start",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step13": {
                "name": "UP Slowdown - Fine Tuning",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step14": {
                "name": "DOWN Main Speed",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step15": {
                "name": "DOWN Leveling",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step16": {
                "name": "DOWN Stop",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step17": {
                "name": "DOWN Start",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step18": {
                "name": "DOWN Slowdown",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step19": {
                "name": "",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step20": {
                "name": "",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            },
            "step21": {
                "name": "",
                "instructions": "",
                "direction": "xxxxx",
                "controller": "xxxxx",
                "imgpath": "xxxxx",
                "troubleshooting": "xxxxx",
                "turnin": "xxxxx",
                "turnout": "xxxxx",
                "info1": "xxxxx",
                "info2": "xxxxx"
            }
        }
    };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("adjustingGuideData", myJSON);
}

function getAdjustingStep(adjustingset, step) {
    "use strict";
    var text, JSONobj, subobj;

    //Retrieve data:
    text = localStorage.getItem("adjustingGuideData");
    JSONobj = JSON.parse(text);
    subobj = JSONobj[adjustingset];

    document.getElementById("step").value = step;
    document.getElementById("a-name").innerHTML = subobj["step" + step].name;
    document.getElementById("a-instructions").innerHTML = subobj["step" + step].instructions;
    document.getElementById("a-direction").innerHTML = subobj["step" + step].direction;
    document.getElementById("a-controller").innerHTML = subobj["step" + step].controller;
    document.getElementById("a-img").innerHTML = subobj["step" + step].imgpath;
    document.getElementById("a-troubleshooting").innerHTML = subobj["step" + step].troubleshooting;
    document.getElementById("a-turnin").innerHTML = subobj["step" + step].turnin;
    document.getElementById("a-turnout").innerHTML = subobj["step" + step].turnout;
    document.getElementById("a-info1").innerHTML = subobj["step" + step].info1;
    document.getElementById("a-info2").innerHTML = subobj["step" + step].info2;
}

function nextStep() {
    "use strict";
    var currentStepNumber = 1, laststep = 99;

    currentStepNumber = parseInt(document.getElementById("step").value, 10);
    currentStepNumber += 1;
    laststep = parseInt(document.getElementById("laststep").value, 10);
    if (currentStepNumber <= laststep) {
        getAdjustingStep(document.getElementById("adjustingset").value, currentStepNumber);
    }
}

function prevStep() {
    "use strict";
    var currentStepNumber = 1;
    currentStepNumber = parseInt(document.getElementById("step").value, 10);
    currentStepNumber -= 1;
    if (currentStepNumber > 0) {
        getAdjustingStep(document.getElementById("adjustingset").value, currentStepNumber);
    }
}

function buttonHover(obj) {
    "use strict";
    obj.style.backgroundColor="green";
}

function buttonOut(obj) {
    "use strict";
    obj.style.backgroundColor="blue";
}

loadData();
