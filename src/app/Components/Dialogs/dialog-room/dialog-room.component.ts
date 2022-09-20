import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/Room';
import { Subdivision } from 'src/app/Models/Subdivision';
import { ClassroomFundService } from 'src/app/Services/ClassroomFundService';

@Component({
  selector: 'app-dialog-room',
  templateUrl: './dialog-room.component.html',
  styleUrls: ['./dialog-room.component.css']
})
export class DialogRoomComponent implements OnInit {
  public purposes: string[] = [];
  public roomTypes: string[] = [];
  public room: Room  = new Room("", "", 0, "", 0, "", new Subdivision("") , 0, 0);
  public currentUniversityName: string = "";

  constructor(private _classroomFundService: ClassroomFundService) { }

  ngOnInit(): void {
     this.purposes.push("Educational");
     this.purposes.push("No_educational");

     this.roomTypes.push("Lecture");
     this.roomTypes.push("For_partical_training");
     this.roomTypes.push("Gym");
     this.roomTypes.push("Canteen");
  }

  public AddRoomInUniversity(universityName: string, room: Room) {
    console.log(room.roomType);
    this._classroomFundService.currentUniversityName = universityName;
    this._classroomFundService.AddRoom(room);
  }

  public UpdateRoomInUniversity(universityName: string, room: Room) {
    this._classroomFundService.currentUniversityName = universityName;
    this._classroomFundService.UpdateRoom(room);
  }

  public DeleteRoom(roomNumber: number) {
    this._classroomFundService.DeleteRoom(roomNumber);
  }
}