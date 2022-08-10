export interface productApi {
    readonly id:Number,
    title:string,
    price:number,
    description:string,
    category :{
        id:number,
        name:string,
        image:string
    },
    image:string[]

}
