import { Component } from '@angular/core';
import { UnviversityBuilding } from 'src/app/Models/UniversityBuilding';
import { ClassroomFundService } from 'src/app/Services/ClassroomFundService';

@Component({
  selector: 'app-dialog-university-building',
  templateUrl: './dialog-university-building.component.html',
  styleUrls: ['./dialog-university-building.component.css']
})
export class DialogUniversityBuildingComponent {
  public universityBuilding: UnviversityBuilding = new UnviversityBuilding("", "", 0, 0);

  constructor(private _classroomFundService: ClassroomFundService) { }

  public AddUniversityBuilding(university: UnviversityBuilding) {
    this._classroomFundService.AddUniversityBuilding(university);
  }

  public UpdateUniversityBuilding(university: UnviversityBuilding) {
    this._classroomFundService.UpdateUniversityBuilding(university);
  }

  public DeleteUniversityBuilding(universityName: string) {
    this._classroomFundService.DeleteUniversityBuilding(universityName);
  }
}