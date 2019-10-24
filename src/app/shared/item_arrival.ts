export interface ItemArrival {
    item_id: Object;
    arrival_time: number;
}

export const TIMELINES: ItemArrival[] = [
    {item_id : {"node_number" : "Node 1", "item_number" : 0.1}, arrival_time : 0},
    {item_id : {"node_number" : "Node 1", "item_number" : 0.2}, arrival_time : 0},
    {item_id : {"node_number" : "Node 1", "item_number" : 0.9}, arrival_time : 1},
    // {item_id : {"node_id" : "Node 1", "file_id": 2}, arrival_time : 10},
    // {item_id : {"node_id" : "Node 1", "file_id": 3}, arrival_time : -10},
    // {item_id : {"node_id" : "Node 2", "file_id": 1}, arrival_time : 0},
    // {item_id : {"node_id" : "Node 2", "file_id": 2}, arrival_time : 10},
    // {item_id : {"node_id" : "Node 2", "file_id": 3}, arrival_time : -10},
    // {item_id : {"node_id" : "Node 3", "file_id": 1}, arrival_time : 0},
    // {item_id : {"node_id" : "Node 3", "file_id": 2}, arrival_time : 10},
    // {item_id : {"node_id" : "Node 3", "file_id": 3}, arrival_time : -10},
    // {item_id : "Item 2", arrival_time : 0.2},
    // {item_id : "Item 3", arrival_time : 1.5},
    // {item_id : "Item 4", arrival_time : -1.5},    
    // {item_id : "Item 5", arrival_time : 0},
    // {item_id : "Item 6", arrival_time : 0}, 
    // {item_id : "Item 7", arrival_time : 1.75}, 
    // {item_id : "Item 8", arrival_time : 0.5}, 
    // {item_id : "Item 9", arrival_time : 0.25}, 
    // {item_id : "Item 10", arrival_time : -0.25}     
];