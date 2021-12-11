export class todo {
    nextId = 1

    constructor(
        public task:string,
        public category:string,
        public isCompleted:boolean = false,
        public id:number = 0
    ) {
        this.id = id ? id : this.nextId++
    }
}