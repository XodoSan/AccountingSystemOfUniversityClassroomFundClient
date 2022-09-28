export class EquipmentMovementHistoryItem {
    public id: number;
    public movementTime: Date;
    public previousRoomNumber: number;
    public currentRoomNumber: number;
    public equipmentInventoryNumber: number;

    constructor(
        id: number, 
        movementTime: Date, 
        previousRoomNumber: number, 
        currentRoomNumber: number, 
        equipmentInventoryNumber: number
    ) {
        this.id = id;
        this.movementTime = movementTime;
        this.previousRoomNumber = previousRoomNumber;
        this.currentRoomNumber = currentRoomNumber;
        this.equipmentInventoryNumber = equipmentInventoryNumber;
    }
}