    let task9AMYO = $('#9AM').val()
    let task10AMYO = $('#10AM').val()
    let task11AMYO = $('#11AM').val()
    let task12PMYO = $('#12PM').val()
    let task1PMYO = $('#1PM').val()
    let task2PMYO = $('#2PM').val()
    let task3PMYO = $('#3PM').val()
    let task5PMYO = $('#5PM').val()
    let task4PMYO = $('#4PM').val()
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
let currentHour = moment().format('kk')
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

let workblocks = document.querySelectorAll('.taskplace')

    for (let card of workblocks) { 
        if (card.dataset.basetime < currentHour){
            console.log(`${card.dataset.basetime} is in the past, set to gray`)
            card.classList.add('past')
            }
        if (card.dataset.basetime === currentHour) {
            console.log(`The work hour rn is ${card.dataset.basetime}`)
            card.classList.add('present')
            }
        if (card.dataset.basetime > currentHour) {console.log(`${card.dataset.basetime} in the future set to blue`)
            card.classList.add('future')
            }
    }


$('.savebutton').click(function prevent(e) {
    e.preventDefault();
})

$('.savebutton').click(savetasks)


let user9AM = {
    "numtime": 9,
    "task": ""
};

const user10AM = {
    "numtime": 10
    
}

const user11AM = {
    "numtime": 11
    
}

const user12PM = {
    "numtime": 12
    
}

const user1PM = {
    "numtime": 13
    
}

const user2PM = {
    "numtime": 14
    
}

const user3PM = {
    "numtime": 15
    
}

const user4PM = {
    "numtime": 16
    
}

const user5PM = {
    "numtime": 17
    
}

const taskArray = [{user9AM},{user10AM},{user11AM},{user12PM},{user1PM},{user2PM},{user3PM},{user4PM},{user5PM},]


taskBox = document.querySelectorAll('.taskbox')


function savetasks () {
    task9AMYO = $('#9AM').val()
    task10AMYO = $('#10AM').val()
    task11AMYO = $('#11AM').val()
    task12PMYO = $('#12PM').val()
    task1PMYO = $('#1PM').val()
    task2PMYO = $('#2PM').val()
    task3PMYO = $('#3PM').val()
    task5PMYO = $('#5PM').val()
    task4PMYO = $('#4PM').val()
    // for(let i = 0; i < taskBox.length; i++) {
    //     console.log([i].value)
    //     // taskArray[i].push(tasks[i].value)
    // }
}