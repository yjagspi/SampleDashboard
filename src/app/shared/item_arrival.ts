export interface ItemArrival {
    item_id: string;
    arrival_time: number;
}

export const ITEMARRIVAL: ItemArrival[] = [
    {item_id : "Item 1", arrival_time : 0.75},
    {item_id : "Item 2", arrival_time : 0.2},
    {item_id : "Item 3", arrival_time : 1.5},
    {item_id : "Item 4", arrival_time : -1.5},    
    {item_id : "Item 5", arrival_time : 0},
    {item_id : "Item 6", arrival_time : 0}, 
    {item_id : "Item 7", arrival_time : 1.75}, 
    {item_id : "Item 8", arrival_time : 0.5}, 
    {item_id : "Item 9", arrival_time : 0.25}, 
    {item_id : "Item 10", arrival_time : -0.25}     
];