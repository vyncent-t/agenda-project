// current date and time moment js
let mtime = moment();

// month day year, time
console.log(mtime.toString())
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

// timer functionality
setInterval(() => {
    let userTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').text(userTime)
}, 1000);