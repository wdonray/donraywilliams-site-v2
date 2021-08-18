export declare interface TimeRange {
  Start: number
  End: number
  Value: string
}

export declare interface TimeOfDayObject {
  ReallyLate: TimeRange
  Morning: TimeRange
  Afternoon: TimeRange
  GoodNight: TimeRange
}

export enum DaysOfWeek {
  Sun = 0,
  Mon = 1,
  Tue = 2,
  Wed = 3,
  Thu = 4,
  Fri = 5,
  Sat = 6,
}

export declare interface DayType {
  name: string,
  value: number
}

export declare interface DaysType {
  value: string
}

export declare interface MonthType {
  name: string
  value: number
  daysInMonth: number
}

export declare interface YearType {
  value: number
}
