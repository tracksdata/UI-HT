
let indianClock = document.getElementById('indianClock');
let dubaiClock = document.getElementById('dubaiClock');
let americanClock = document.getElementById('americanClock');


// model
function jsClock(props) {
    let time = new Date().toLocaleTimeString('en-US', { 'timeZone': `${props}` });
    let template = `
    <div class='card'>
       <div class='card-header'>${props}</div>
         <div class='card-body'>
         <div class='card-text'>
         <span class='badge bg-primary'> ${time}</span>
         </div>
         </div>
    </div>
    `
    return template;

    // clockDiv.innerHTML=time;

}


// view
setInterval(() => {
    indianClock.innerHTML = jsClock('asia/kolkata');
    dubaiClock.innerHTML = jsClock('asia/dubai');
    americanClock.innerHTML = jsClock('america/new_york')
}, 5000);



