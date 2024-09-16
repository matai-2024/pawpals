// -- HELPER FUNCTIONS FOR EVENT DATES -- //

export function dateToReadable(date: string) {
  const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const theDate = new Date(date)

  const currDay = theDate.getDay()
  const currDayDate = theDate.getDate()
  const currMonth = theDate.getMonth()
  const dayName = days[currDay]
  const monthName = months[currMonth]

  return `${dayName} ${currDayDate} ${monthName}`
}

export function TimeFormat(time: string) {
  const [hour, min] = time.split(':')
  const hourNum = Number(hour)
  const format =
    // eslint-disable-next-line no-constant-condition
    (hourNum === 12 ? 12 : hourNum % 12) +
    `:${min}${hourNum >= 12 ? ' PM' : ' AM'}`
  return format
}

export function getAge(dateString: string) {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

export default dateToReadable
