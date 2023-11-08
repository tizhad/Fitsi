export interface Reservation {
    id:number;
    user: string;
    restaurant_id: number;
    table_number: number;
    date: string;
    time: string;
    people: number;
}