const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futuredays = new Date(2022, 8, 13, 12, 35);
const futuredays = new Date(tempYear, tempMonth, tempDay + 10, 12, 30, 0);

const year = futuredays.getFullYear();
let month = futuredays.getMonth();
month = months[month];
// console.log(month);
const date = futuredays.getDate();
const hours = futuredays.getHours();
const minutes = futuredays.getMinutes();
const day = weekdays[futuredays.getDay()];

giveaway.textContent = `Giveway Ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}pm `;

const futureTime = futuredays.getTime();
// console.log(futureTime);

const getRemainingTime = () => {
  const remainingTime = new Date().getTime();
  // console.log(remainingTime);
  const calculation = futureTime - remainingTime;
  // console.log(calculation);

  const oneDay = 24 * 60 * 60 * 1000; // Value in Milliseconds for one day.
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(calculation / oneDay);

  // console.log(days);

  let hours = Math.floor((calculation % oneDay) / oneHour);
  let minutes = Math.floor((calculation % oneHour) / oneMinute);
  let seconds = Math.floor((calculation % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const formatData = (item) => {
    // if (item < 10) {
    //   item = `0${item}`;
    // }
    item < 10 ? (item = `0${item}`) : item;
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = formatData(values[index]);
  });

  if (calculation < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class ='expired'>Sorry, this giveaway has expired</h4>`;
  }
};

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
