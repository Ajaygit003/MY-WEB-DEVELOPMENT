function updateClock() {
  let clockhr = document.getElementById("clockhr");
  let clockmin = document.getElementById("clockmin");
  let clocksec = document.getElementById("clocksec");
  let days = document.getElementById("days");
  let dateFormat = document.getElementById("date");
  let AMPM = document.getElementById("am");
  let date = new Date();

  // Get time components
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Determine AM or PM
  let amPm = 'AM';
  if (hours >= 12) {
    amPm = 'PM';
  }
  AMPM.innerHTML = amPm;

  // Convert to 12-hour format
  if (hours === 0) {
    hours = 12; // Midnight is 12 AM
  } else if (hours > 12) {
    hours = hours - 12; // Convert hours greater than 12 to 12-hour format
  }

  //Add leading zero
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Time Format
  clockhr.innerHTML = hours;
  clockmin.innerHTML = minutes;
  clocksec.innerHTML = seconds;

  // Day of the Week
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayName = daysOfWeek[date.getDay()];
  days.innerHTML = dayName;

  // Date
  let dates = date.getDate();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let monthName = months[date.getMonth()];

  // Year
  let year = date.getFullYear();

  // Format the full date
  dateFormat.innerHTML = monthName + " " + dates + ", " + year;

}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock
updateClock();
