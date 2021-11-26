const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
let futureDate = new Date(2021, 11, 25, 0, 0, 0)

// future time in ms

const futureTime = futureDate.getTime()

function getRemainingTime() {
  const today = new Date().getTime()
  const timeInterval = futureTime - today
  // 1s = 1000ms;
  // 1m = 60s;
  // 1hr = 60min
  // 1d = 24hr;
  // values in ms
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMin = 60 * 1000
  const oneSecond = 1000

  // Calculate all values
  const days = Math.floor(timeInterval / oneDay)
  const hours = Math.floor((timeInterval % oneDay) / oneHour)
  const minutes = Math.floor((timeInterval % oneHour) / oneMin)
  const second = Math.floor((timeInterval % oneMin) / oneSecond)

  // Set values array:
  const values = [days, hours, minutes, second]

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`)
    } else {
      return item
    }
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  if (timeInterval < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, date of birthday expired</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
