/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// function createEmployeeRecord(employee) {
//     const firstName=employee[0]
//     const familyName= employee[1]
//     const title = employee[2]
//     const payPerHour= employee[3]
//     return {firstName, familyName, title, payPerHour, timeInEvents:[], timeOutEvents:[]}
// }
function createEmployeeRecord(employee) {
    var firstName = employee[0];
    var familyName = employee[1];
    var title = employee[2];
    var payPerHour = employee[3];
    return { firstName: firstName, familyName: familyName, title: title, payPerHour: payPerHour, timeInEvents: [], timeOutEvents: [] };
} 

function createEmployeeRecords(rows) {
    const employees=rows.map(employee=>{
        // const firstName=employee[0]
        // const familyName= employee[1]
        // const title = employee[2]
        // const payPerHour= employee[3]
        // return {firstName, familyName, title, payPerHour, timeInEvents:[], timeOutEvents:[]}
        return createEmployeeRecord(employee)
    })
    return employees
}

function createTimeInEvent( str) {
    const time = str.split(' ')
    const timeIn = {
        type: 'TimeIn', date: time[0], hour: parseInt(time[1])
    }
    this.timeInEvents.unshift(timeIn)
    return this
}

function createTimeOutEvent(str) {
    const time = str.split(' ')
    const timeOut = {
        type: 'TimeOut', date: time[0], hour: parseInt(time[1])
    }
    this.timeOutEvents.unshift(timeOut)
    return this
}
function hoursWorkedOnDate(str) {
    const recordDate = this.timeInEvents.findIndex(el=> el.date === str)
    
    return (this.timeOutEvents[recordDate].hour - this.timeInEvents[recordDate].hour)/100
    
 }

 function wagesEarnedOnDate( str) {
    const context = hoursWorkedOnDate.bind(this)
    const hours = context( str)
    return hours * this.payPerHour
 }
//  function allWagesFor() {
//     const dates= this.timeInEvents.map((el)=>{
//         const str = el.date
//         return this.wagesEarnedOnDate(str)
//     })
//     return dates.reduce((prev,curr)=>{
//         return prev + curr
//     })
    
// }
function findEmployeeByFirstName(arr, str){
    // let found = false
    const found= arr.findIndex(record=>
        record.firstName === str
    )
   return !found?  arr[found] : undefined
}
function calculatePayroll(arr) {
    const allWages= arr.map((el)=>
        allWagesFor.call(el)
    )
    return allWages.reduce((prev,curr)=>prev+curr)
}