// -- HELPER FUNCTIONS FOR EVENT DATES -- //

export function dateToReadable(date: string) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
  const split = time.split('-')
  const format = split[0].toUpperCase()
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
