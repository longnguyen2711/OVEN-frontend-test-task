I wrote 4 functions to convert data from internal types to external types instead of 1 function so that it can be reused for other cases when needed.

The data of internal types and external types will be mapped together, but especially in that: the date of the internal type and the external type is different, so you must use new Date to convert.
  internal: string
  external: { seconds: number; nanos: number }
