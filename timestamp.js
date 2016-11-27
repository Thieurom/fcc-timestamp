/**
 * Check a given input is valid date string
 */
exports.isValidDateString = function(input) {
    return (typeof input === 'string' && (new Date(input) !== 'Invalid Date'));
};


/**
 * Returns a string representing a date in format: "MMMM DD, YYYY",
 * using UTC time zone from a number of seconds since January 1, 1970, 00:00:00 UTC
 */
exports.secondsToUTCFullDate = function(seconds) {
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let dateObj = new Date(seconds*1000);

    let date = dateObj.getUTCDate(),
        month = monthNames[dateObj.getUTCMonth()],
        year = dateObj.getUTCFullYear();

    return month + ' ' + date + ', ' + year;
};


/**
 * Returns the numeric value of the given date string as the number of seconds
 * since January 1, 1970, 00:00:00 UTC.
 * The given date string will always be set to UTC time zone before conversion,
 * no matter what is system time.
 * Note: this assumes given input is valid date string.
 */
exports.dateStringToUTCSeconds = function(dStr) {
    // Create a date object with given date string using local timezone
    let localDate = new Date(dStr);

    // Create a date object for start of unix time but using local timezone
    let utcDate = new Date('Jan 1 1970');

    // The difference (in milliseconds) between UTC timezone and local timezone
    let diff = utcDate.getTime();

    return utcSeconds = (localDate.getTime() - diff)/1000;
};