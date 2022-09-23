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
  public room: Room = new Room("", "", 0, "", 0, new FormData, new Subdivision(""), 0, 0);
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
    this._classroomFundService.currentUniversityName = universityName;

    room.floorPlan.append('Number', room.number.toString());
    room.floorPlan.append('Name', room.name);
    room.floorPlan.append('Purpose', room.purpose);
    room.floorPlan.append('RoomType', room.roomType);
    room.floorPlan.append('Area', room.area.toString());
    room.floorPlan.append('Owner.Name', room.owner.name);
    room.floorPlan.append('Capacity', room.capacity.toString());
    room.floorPlan.append('Floor', room.floor.toString());
    this._classroomFundService.AddRoom(room);
  }

  public UpdateRoomInUniversity(universityName: string, room: Room) {
    this._classroomFundService.currentUniversityName = universityName;
    this._classroomFundService.UpdateRoom(room);
  }

  public DeleteRoom(roomNumber: number) {
    this._classroomFundService.DeleteRoom(roomNumber);
  }

  public fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('FloorPlan', file, file.name);

      this.room.floorPlan = formData;
    }
  }
}