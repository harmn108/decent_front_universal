export class Transfer {
    constructor(public sendTo: string = '',
                public amount: number = 0,
                public memo?: string) {
    }
}