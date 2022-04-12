import { BaseSchema } from './BaseSchema'

export interface FormSchema extends BaseSchema {
  initApi?: string | object
  api?: string | object
}
