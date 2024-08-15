import { Time } from "@angular/common"

export interface Todos{
     id:string,
     description:string,
     isCompleted:boolean,
     createdDate:Date,
     completedDate?:Date,
     timeTaken?:Time,
     isEdit?:boolean
};