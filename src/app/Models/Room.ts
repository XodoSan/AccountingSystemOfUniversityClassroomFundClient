import { Subdivision } from "./Subdivision";

export class Room {
    public purpose: string;
    public roomType: string;
    public number: number;
    public name: string;
    public area: number;
    public floorPlan: string;
    public owner: Subdivision;
    public capacity: number;
    public floor: number;

    constructor(
        purpose: string,
        roomType: string,
        number: number,
        name: string,
        area: number,
        floorPlan: string,
        owner: Subdivision,
        capacity: number,
        floor: number
    ) {
        this.purpose = purpose;
        this.roomType = roomType;
        this.number = number;
        this.name = name;
        this.area = area;
        this.floorPlan = floorPlan;
        this.owner = owner;
        this.capacity = capacity;
        this.floor = floor;
    }
}