import { Component, OnInit } from '@angular/core';
import { Purpose } from 'src/app/Enums/Purpose';
import { RoomType } from 'src/app/Enums/RoomType';
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
     this.purposes.push(Purpose.Educational);
     this.purposes.push(Purpose.No_educational);

     this.roomTypes.push(RoomType.Lecture);
     this.roomTypes.push(RoomType.For_partical_training);
     this.roomTypes.push(RoomType.Gym);
     this.roomTypes.push(RoomType.Canteen);
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