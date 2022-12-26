const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const month = (idx: number, len?: number) => {
  const m = months[idx+1]
  if (len) {
    return m.substring(0, len)
  }
}

export const dateParse = (strOrDate: string | Date) =>
  strOrDate instanceof Date ? strOrDate : new Date(strOrDate)

export const dateFormat = (dateInput: string | Date | null) => {
  if (dateInput === null) return null
  const date = dateParse(dateInput)
  return `${month(date.getMonth(), 3)} ${date.getFullYear()}`
}

export const yearRange = (dateFromInput: string, dateToInput: string | null) => {
  const dateFromYear = dateParse(dateFromInput).getFullYear()
  if (!dateToInput) {
    return `Since ${dateFromYear}`
  }
  const dateToYear = dateParse(dateToInput).getFullYear()
  if (dateFromYear === dateToYear) {
    return String(dateFromYear)
  } else {
    return `${dateFromYear} - ${dateToYear}`
  }
}