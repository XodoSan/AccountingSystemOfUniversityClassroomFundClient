import { Component, OnInit } from '@angular/core';
import { Purpose } from 'src/app/Enums/Purpose';
import { Equipment } from 'src/app/Models/Equipment';
import { EquipmentCategory } from 'src/app/Models/EquipmentCategory';
import { Room } from 'src/app/Models/Room';
import { Usage } from 'src/app/Models/Usage';
import { Worker } from 'src/app/Models/Worker';
import { EquipmentService } from 'src/app/Services/EquipmentService';

@Component({
  selector: 'app-dialog-equipment',
  templateUrl: './dialog-equipment.component.html',
  styleUrls: ['./dialog-equipment.component.css']
})
export class DialogEquipmentComponent implements OnInit {
  private worker: Worker = new Worker(0);
  private equipmentCategory: EquipmentCategory = new EquipmentCategory(""); 
  private usage: Usage = new Usage("", "");
  private defaultDate: Date = new Date(0);

  public purposes: string[] = [];
  public roomNumber: number = 0;
  public equipment: Equipment = new Equipment (
    0, 0, "", this.worker, this.defaultDate, this.defaultDate, 0, this.equipmentCategory, this.usage
  );

  constructor(private _equipmentService: EquipmentService) { }

  ngOnInit(): void {
    this.purposes.push(Purpose.Educational);
    this.purposes.push(Purpose.No_educational);
  }

  public AddEquipmentInRoom(roomNumber: number, equipment: Equipment) {
    this._equipmentService.currentRoomNumber = roomNumber;
    this._equipmentService.AddEquipment(equipment);
  }

  public UpdateEquipmentInRoom(roomNumber: number, equipment: Equipment) {
    this._equipmentService.currentRoomNumber = roomNumber;
    this._equipmentService.UpdateEquipment(equipment);
  }

  public DeleteEquipment(roomNumber: number, equipmentInventoryNumber: number) {
    this._equipmentService.currentRoomNumber = roomNumber;
    this._equipmentService.DeleteEquipment(equipmentInventoryNumber);
  }
}