//type Category = {key: string; name: string; icon: string;}

export interface transactionStorageDTO {
    id: string,
    type: string,
    title: string,
    amount: number,
    category: string,
    date: Date,
}