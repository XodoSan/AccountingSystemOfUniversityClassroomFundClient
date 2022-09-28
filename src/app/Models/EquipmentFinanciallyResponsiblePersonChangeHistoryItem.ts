export class EquipmentFinanciallyResponsiblePersonChangeHistoryItem {
    public id: number;
    public changeTime: Date;
    public previousFinanciallyResponsiblePersonId: number;
    public currentFinanciallyResponsiblePersonId: number;
    public equipmentInventoryNumber: number;

    constructor(
        id: number, 
        changeTime: Date, 
        previousFinanciallyResponsiblePersonId: number, 
        currentFinanciallyResponsiblePersonId: number, 
        equipmentInventoryNumber: number
    ) {
        this.id = id;
        this.changeTime = changeTime;
        this.previousFinanciallyResponsiblePersonId = previousFinanciallyResponsiblePersonId;
        this.currentFinanciallyResponsiblePersonId = currentFinanciallyResponsiblePersonId;
        this.equipmentInventoryNumber = equipmentInventoryNumber;
    }
}