let eventsList = [`click`,`dblclick`,`mousemove`,`mousedown`,`keydown`],
    body = document.body,
    idealTimer,
    timeoutDurationInMs = 5000, // Setting 5 mins here(1 min = 60000 ms)
    idealTimeIntervals = [
        // {
        //     intervalStoppedAt : ``,
        //     intervalStartedFrom: ``
        // }
    ],
    startTime,endTime,idealTime,effectiveTime,
    listenerFunction = (eventName,event) => {
        if (idealTimer) clearTimeout(idealTimer);
        idealTimer = null;
        if(idealTimeIntervals.length && !idealTimeIntervals[idealTimeIntervals.length-1].intervalStartedFrom) {
            idealTimeIntervals[idealTimeIntervals.length-1].intervalStartedFrom = Date.now();
        }
        startTimer();
        console.log(`${eventName} triggered`);
    },
    resultObject;
    let status = document.getElementById(`status`);

let addOrRemoveEventListeners = (eventsArray,element,addEvents,eventFunction) => {
    let currentListener = addEvents ? `addEventListener` : `removeEventListener`;
    if(element) {
        eventsArray.forEach(event => {
            element[currentListener](event,function(e){
                if(!!eventFunction){
                    eventFunction(event,e);
                }
            });
        });
    }
};

let dateDiff = (endTimeStamp,startTimeStamp) => {
    let startDate = new Date(startTimeStamp),
        endDate = new Date(endTimeStamp);
};

let startTimer = () => {
    idealTimer = setTimeout(function(){
        status.innerText = `timer ended`;
        idealTimeIntervals.push({ intervalStoppedAt : Date.now() });
        console.log(`timeout expired`,idealTimeIntervals);
    },timeoutDurationInMs);
}

// Business logic to calculating ideal time this may vary depending upon our needs 
let calculateEffectiveTime = () => {
    endTime = Date.now();
    console.log(`calculateEffectiveTime ${startTime}, ${endTime}`, idealTimeIntervals);
    resultObject = {
        sessionStartTime : new Date(startTime),
        endTime : new Date(endTime),
    }
    if(idealTimeIntervals.length) {
        idealTimeIntervals.forEach((element,index) => {

        });
    }
}

let onPageClose = () => {
    clearTimeout(idealTimer);
    addOrRemoveEventListeners(eventsList,body,false,listenerFunction);
    calculateEffectiveTime();
}

let init = () => {
    console.log(`init called`);
    addOrRemoveEventListeners(eventsList,body,true,listenerFunction);
    startTimer();
    startTime = Date.now();
    status.innerText = `timer started and running`;    
};

init();
