import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Equipment } from "../Models/Equipment";

@Injectable({
    providedIn: 'root',
})
export class EquipmentService {
    public currentRoomNumber: number = 0;
    private constantHost: string = "http://localhost:5253/api/";
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public async AddEquipment(equipment: Equipment) {
        firstValueFrom(await this._http.post<Equipment>
            (this.constantHost + 'Equipment/' + this.currentRoomNumber + '/add', equipment));
    }

    public async UpdateEquipment(equipment: Equipment) {
        firstValueFrom(await this._http.put<Equipment>
            (this.constantHost + 'Equipment/' + this.currentRoomNumber + '/update', equipment));
    }

    public async DeleteEquipment(equipmentInventoryNumber: number) {
        firstValueFrom(await this._http.delete<Equipment>
            (this.constantHost + 'Equipment/' + this.currentRoomNumber + '/delete' + equipmentInventoryNumber));
    }
}