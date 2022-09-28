import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UnviversityBuilding } from "../Models/UniversityBuilding";
import { firstValueFrom } from "rxjs";
import { Room } from "../Models/Room";

@Injectable({
    providedIn: 'root',
})
export class ClassroomFundService {
    public currentUniversityName: string = "";
    private constantHost: string = "http://localhost:8000/api/";
    private _http: HttpClient;

    constructor(http: HttpClient) {
        this._http = http;
    }

    public async AddUniversityBuilding(university: UnviversityBuilding) {
        firstValueFrom(await this._http.post<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/add/university_building', university));
    }

    public async UpdateUniversityBuilding(university: UnviversityBuilding) {
        firstValueFrom(await this._http.put<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/update/university_building', university));
    }

    public async DeleteUniversityBuilding(universityName: string) {
        firstValueFrom(await this._http.delete<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/delete/university_building/' + universityName));
    }

    public async AddRoomByForm(roomForm: FormData) {
        firstValueFrom(await this._http.post
            (this.constantHost + 'ClassroomFund/add/room/' + this.currentUniversityName, roomForm))
    }

    public async UpdateRoomByForm(roomForm: FormData) {
        firstValueFrom(await this._http.put<Room>
            (this.constantHost + 'ClassroomFund/update/room/' + this.currentUniversityName, roomForm));
    }

    public async DeleteRoom(roomNumber: number) {
        firstValueFrom(await this._http.delete<Room>
            (this.constantHost + 'ClassroomFund/delete/room/' + roomNumber));
    }
}