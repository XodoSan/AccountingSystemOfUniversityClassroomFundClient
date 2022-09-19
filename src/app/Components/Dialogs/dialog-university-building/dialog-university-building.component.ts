import { Component, Injectable } from '@angular/core';
import { UnviversityBuilding } from 'src/app/Models/UniversityBuilding';
import { ClassroomFundService } from 'src/app/Services/ClassroomFundService';

@Component({
  selector: 'app-dialog-university-building',
  templateUrl: './dialog-university-building.component.html',
  styleUrls: ['./dialog-university-building.component.css']
})
@Injectable({providedIn: "root"})
export class DialogUniversityBuildingComponent {
  public name: string = "";
  public adress: string = "";
  public storeysNumber: number = 0;
  public foundationYear: number = 0;

  constructor(private classroomFundService: ClassroomFundService) { }

  public FormModel() : UnviversityBuilding {
    return new UnviversityBuilding(
      this.name, this.adress, this.storeysNumber, this.foundationYear)
  }

  public AddUniversityBuilding(university: UnviversityBuilding) {
    this.classroomFundService.AddUniversityBuilding(university);
  }

  public UpdateUniversityBuilding(university: UnviversityBuilding) {
    this.classroomFundService.UpdateUniversityBuilding(university);
  }

  public DeleteUniversityBuilding(universityName: string) {
    this.classroomFundService.DeleteUniversityBuilding(universityName);
  }
}