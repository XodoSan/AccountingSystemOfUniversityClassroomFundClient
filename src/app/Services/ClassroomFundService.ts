import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UnviversityBuilding } from "../Models/UniversityBuilding";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ClassroomFundService {
    private constantHost: string = "http://localhost:8000/api/";
    private _http: HttpClient;

    constructor(http: HttpClient)
    {
        this._http = http;
    }

    public async AddUniversityBuilding(university: UnviversityBuilding)
    {
        firstValueFrom(await this._http.post<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/add/university_building', university));
    }

    public async UpdateUniversityBuilding(university: UnviversityBuilding)
    {
        firstValueFrom(await this._http.put<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/update/university_building', university));
    }

    public async DeleteUniversityBuilding(universityName: string) {
        firstValueFrom(await this._http.delete<UnviversityBuilding>
            (this.constantHost + 'ClassroomFund/delete/university_building/' + universityName));
    }
}