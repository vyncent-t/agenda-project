// current date and time moment js
let now = moment();



// month day year, time
console.log(now.toString())
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// timer functionality
setInterval(() => {
    let userTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(userTime)}, 1000);


//current hour 
let currentHour = moment().format('H')
console.log(currentHour)


//Calculate the number of hours from now and a given hour (in 24 hours format) of the day
// If result is <0 means the given time is in the future
// If result is >0 means the given time is in the past
function hoursFromNow(time) {
  //Create an instance of moment for the current time
  var now=moment();
  //Create an instance of moment for the given time
  var todayTime = moment(now.format("MM/DD/YYYY")+" "+ time +":00");
  //Return the difference in hours between the two moments
  return now.diff(todayTime,"hours");
}

let workblocks = document.querySelectorAll('.timepiece')

    for (let card of workblocks) { 
        if (card.dataset.basetime < currentHour){
            console.log(`${card.dataset.basetime} is in the past, set to gray`)
            if (card.dataset.basetime === currentHour) {
                console.log(`The work hour rn is ${card.dataset.basetime}`)
            }
        } if (card.dataset.basetime > currentHour) {console.log(`${card.dataset.basetime} in the future set to blue`)}
    }


