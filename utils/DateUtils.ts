import { each, map } from 'lodash'
import {
  TimeRange,
  TimeOfDayObject,
  YearType,
  MonthType,
  DaysType,
  DayType,
  DaysOfWeek
} from './UtilInterfaces'
var dayjs = require('dayjs')
var localeData = require('dayjs/plugin/localeData')
var dayOfYear = require('dayjs/plugin/dayOfYear')
dayjs.extend(localeData)
dayjs.extend(dayOfYear)

const TimeOfDay: TimeOfDayObject = {
  ReallyLate: { Start: 0, End: 4, Value: 'GO TO BED' },
  Morning: { Start: 5, End: 11, Value: 'Good morning' },
  Afternoon: { Start: 12, End: 19, Value: 'Good afternoon' },
  GoodNight: { Start: 20, End: 24, Value: 'Goodnight' },
}

export function GetTimeOfDay(): TimeRange {
  const hour: Number = new Date().getHours()
  let timeRange: TimeRange = TimeOfDay.Morning

  each(TimeOfDay, (x: TimeRange) => {
    if (hour >= x.Start && hour <= x.End) timeRange = x
  })

  return timeRange
}


export function GetFormatedDate(): String {
  return dayjs().format('M/D/YYYY')
}

export function GetCalendarData(): {
  year: YearType
  months: MonthType[]
  days: DaysType[],
  firstDayOfYear: DayType
} {
  const year: YearType = { value: dayjs().year() }
  const months: MonthType[] = map(dayjs.months(), (x: string, index: number) =>
    ({ name: x, value: index, daysInMonth: dayjs(`${year.value}-${index + 1}`).daysInMonth() }) as MonthType)
  const days: DaysType[] = map(dayjs.weekdaysShort(), (x: string) => ({ value: x }) as DaysType)
  const firstDayofYearValue = dayjs(`${year.value}-01-01`).day();
  const firstDayOfYear = { name: DaysOfWeek[firstDayofYearValue], value: firstDayofYearValue }
  return { year, months, days, firstDayOfYear }
}

export function GetCurrentMonth(): number {
  return dayjs().month();
}