/*Problem:  Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.*/

function timeConversion(s) {
    let hour = parseInt(s.substring(0, 2));
    let minutes = parseInt(s.substring(3, 5));
    let seconds = s.substring(6, 8);
    let period = s.substring(8, 10);
    let new24HourTime;

    if (period === 'PM' && hour <= 11 && minutes <= 59) {
        hour = hour + 12;
    } else if (period === 'AM' && hour === 12 && minutes <= 59) {
        hour = hour - 12;
    } else {
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        new24HourTime = hour + ':' + minutes + ':' + seconds;
        return new24HourTime;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
        }
    new24HourTime = hour + ':' + minutes + ':' + seconds;
    return new24HourTime;
}