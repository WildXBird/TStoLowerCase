import { Jsonable } from "ts-extend"
import * as nodeFs from "node:fs"
import * as nodePath from "node:path"

// "".toLocaleLowerCase
// "".toLocaleUpperCase
// "".toLowerCase
// "".toUpperCase



export const toLowerCase = <T extends string = string>(input: T): Lowercase<T> => {
    return input.toLowerCase() as Lowercase<T>
}
export const toUpperCase = <T extends string = string>(input: T): Uppercase<T> => {
    return input.toUpperCase() as Uppercase<T>
}



type ext = "C"
const aa: ext = "C"





const bb = toLowerCase(aa)



type ext2 = "h"
const aa2: ext2 = "h"



const bb2 = toUpperCase(aa2)



