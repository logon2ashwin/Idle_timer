let eventsList = [`click`,`dblclick`,`mousemove`,`mousedown`,`keydown`],
    body = document.body,
    idealTimeIntervals = [],
    startTime,endTime,idealTime,effectiveTime;

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

let init = () => {
    console.log(`init called`);
    addOrRemoveEventListeners(eventsList,body,true,(eventName,event)=>{
        console.log(`${eventName} triggered`);
    })
};

init();
