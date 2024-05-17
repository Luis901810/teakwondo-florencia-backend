const phoneNumberRegex = /^\d{6,}$/;

const isPhoneNumber = (phoneNumber) => phoneNumberRegex.test(phoneNumber)

function isDate (value){
    const date = new Date(value)
    return isNaN(date.getTime())
}
function isBefore( dateToCheck, dateReference){
    const dateA = new Date(dateToCheck)
    const dateB = new Date(dateReference)
    return dateA < dateB
}

function isBeforeCurrentDate( dateToCheck){
    const currentDate = new Date().toISOString().split("T")[0]
    return isBefore(dateToCheck, currentDate)
}


module.exports = {
    phoneNumberRegex,
    isDate,
    isPhoneNumber,
    
    isBefore,
    isBeforeCurrentDate
}