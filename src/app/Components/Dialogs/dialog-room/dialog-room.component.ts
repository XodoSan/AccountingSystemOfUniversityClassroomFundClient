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
  private choosingFile: File = new File([], "");

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
    let sendingFormData: FormData = this.FillingFormData(room);
    
    this._classroomFundService.AddRoomByForm(sendingFormData);
  }

  public UpdateRoomInUniversity(universityName: string, room: Room) {
    this._classroomFundService.currentUniversityName = universityName;
    let sendingFormData: FormData = this.FillingFormData(room);

    this._classroomFundService.UpdateRoomByForm(sendingFormData);
  }

  public DeleteRoom(roomNumber: number) {
    this._classroomFundService.DeleteRoom(roomNumber);
  }

  public FileChange(event: any) {
    this.choosingFile = event.target.files[0];
  }

  private FillingFormData(room: Room) : FormData
  {
    let formData: FormData = new FormData;

    formData.append('Number', room.number.toString());
    formData.append('Name', room.name);
    formData.append('Purpose', room.purpose);
    formData.append('RoomType', room.roomType);
    formData.append('Area', room.area.toString());
    formData.append('FloorPlan', this.choosingFile);
    formData.append('Owner.Name', room.owner.name);
    formData.append('Capacity', room.capacity.toString());
    formData.append('Floor', room.floor.toString());

    return formData;
  }
}