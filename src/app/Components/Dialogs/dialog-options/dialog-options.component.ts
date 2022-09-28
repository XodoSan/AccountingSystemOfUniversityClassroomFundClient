import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentFinanciallyResponsiblePersonChangeHistoryItem } from 'src/app/Models/EquipmentFinanciallyResponsiblePersonChangeHistoryItem';
import { EquipmentMovementHistoryItem } from 'src/app/Models/EquipmentMovementHistoryItem';
import { EquipmentService } from 'src/app/Services/EquipmentService';
import { DialogEquipmentComponent } from '../dialog-equipment/dialog-equipment.component';
import { DialogRoomComponent } from '../dialog-room/dialog-room.component';
import { DialogUniversityBuildingComponent } from '../dialog-university-building/dialog-university-building.component';

@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent {
  workerChangeHistory: EquipmentFinanciallyResponsiblePersonChangeHistoryItem[] = [];
  movementHistory: EquipmentMovementHistoryItem[] = [];
  
  constructor(private dialog: MatDialog, private _equipmentService: EquipmentService) { }

  public OpenUniversityDialog() {
    this.dialog.open(DialogUniversityBuildingComponent);
  }

  public OpenRoomDialog() {
    this.dialog.open(DialogRoomComponent);
  }

  public OpenEquipmentDialog() {
    this.dialog.open(DialogEquipmentComponent);
  }

  public async GetMovementHistory() {
    this.movementHistory = await this._equipmentService.GetMovementHistory();
  }

  public async GetChangeWorkerHistory() {
    this.workerChangeHistory = await this._equipmentService.GetChangeWorkerHistory();
  }
}