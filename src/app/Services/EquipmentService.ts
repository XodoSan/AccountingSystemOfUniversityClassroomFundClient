import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Equipment } from "../Models/Equipment";
import { EquipmentFinanciallyResponsiblePersonChangeHistoryItem } from "../Models/EquipmentFinanciallyResponsiblePersonChangeHistoryItem";
import { EquipmentMovementHistoryItem } from "../Models/EquipmentMovementHistoryItem";

@Injectable({
    providedIn: 'root',
})
export class EquipmentService {
    public currentRoomNumber: number = 0;
    private constantHost: string = "http://localhost:8000/api/";
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
            (this.constantHost + 'Equipment/' + this.currentRoomNumber + '/delete/' + equipmentInventoryNumber));
    }

    public async GetMovementHistory() {
        return firstValueFrom(await this._http.get<EquipmentMovementHistoryItem[]>
            (this.constantHost + 'Equipment/get/movement_history'));
    }

    public async GetChangeWorkerHistory() {
        return firstValueFrom(await this._http.get<EquipmentFinanciallyResponsiblePersonChangeHistoryItem[]>
            (this.constantHost + 'Equipment/get/worker_change_history'));
    }
}