import Dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import utc from 'dayjs/plugin/utc'

Dayjs.extend(isBetween)
Dayjs.extend(utc)

export const dayjs = Dayjs

if (typeof window !== 'undefined') {
  Object.assign(window, {
    dayjs,
  })
}
