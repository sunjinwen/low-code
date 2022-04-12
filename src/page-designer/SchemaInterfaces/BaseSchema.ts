export interface BaseSchema {
  type: string,
  body?: any[],
  formItem?: boolean
  [propName: string]: any
}
