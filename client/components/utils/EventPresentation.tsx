// -- HELPER FUNCTIONS FOR EVENT DATES -- //

export function dateToReadable(date: string) {
  const split = date.split('-')
  split.pop()
  const string = split.toString()
  const hash = string.split(',').join('/')
  return hash
}

export default dateToReadable
