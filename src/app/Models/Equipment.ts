import { EquipmentCategory } from "./EquipmentCategory";
import { Usage } from "./Usage";
import { Worker } from "./Worker";

export class Equipment {
    public inventoryNumber: number;
    public serialNumber: number;
    public name: string;
    public financiallyResponsiblePerson: Worker;
    public purchaseDate: Date;
    public commissioningDate: Date;
    public price: number;
    public category: EquipmentCategory;
    public whereUsed: Usage;

    constructor(
        inventoryNumber: number,
        serialNumber: number,
        name: string,
        financiallyResponsiblePerson: Worker,
        purchaseDate: Date,
        commissioningDate: Date,
        price: number,
        category: EquipmentCategory,
        whereUsed: Usage
    ) {
        this.inventoryNumber = inventoryNumber;
        this.serialNumber = serialNumber;
        this.name = name;
        this.financiallyResponsiblePerson = financiallyResponsiblePerson;
        this.purchaseDate = purchaseDate;
        this.commissioningDate = commissioningDate;
        this.price = price;
        this.category = category;
        this.whereUsed = whereUsed;
    }
}