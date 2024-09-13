// -- HELPER FUNCTIONS FOR EVENT DATES -- //

export function dateToReadable(date: string) {
  const months: { [key: string]: string } = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
  }

  const regex = /[-/]/g
  const split = date.split(regex)
  split.pop()
  const string = split.toString()
  const hash = string.split(',').pop() || ''
  const currMonth = months[hash]

  return `${split[0]} ${currMonth}`
}

export function TimeFormat(time: string) {
  const split = time.split('-')
  const format = split[0].toUpperCase()
  return format
}

export default dateToReadable
