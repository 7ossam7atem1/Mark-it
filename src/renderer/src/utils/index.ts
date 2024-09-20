import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Africa/Cairo',
  dateStyle: 'medium',
  timeStyle: 'short'
})
export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
