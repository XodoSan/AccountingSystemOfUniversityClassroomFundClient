import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogUniversityBuildingComponent } from '../dialog-university-building/dialog-university-building.component';

@Component({
  selector: 'app-dialog-options',
  templateUrl: './dialog-options.component.html',
  styleUrls: ['./dialog-options.component.css']
})
export class DialogOptionsComponent {

  constructor(private dialog: MatDialog) { }

  public openUniversityDialog() {
    this.dialog.open(DialogUniversityBuildingComponent);
  }
}