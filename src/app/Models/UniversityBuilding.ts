export class UnviversityBuilding {
    public name: string;
    public adress: string;
    public storeysNumber: number;
    public foundationYear: number;
    
    constructor(
        name: string, 
        adress: string, 
        storeysNumber: number, 
        foundationYear: number) 
    {
        this.name = name;
        this.adress = adress;
        this.storeysNumber = storeysNumber;
        this.foundationYear = foundationYear;
    }
}