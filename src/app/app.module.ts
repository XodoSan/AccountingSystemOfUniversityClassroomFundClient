import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { DialogUniversityBuildingComponent } from './Components/Dialogs/dialog-university-building/dialog-university-building.component';
import { DialogOptionsComponent } from './Components/Dialogs/dialog-options/dialog-options.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogRoomComponent } from './Components/Dialogs/dialog-room/dialog-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogEquipmentComponent } from './Components/Dialogs/dialog-equipment/dialog-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DialogUniversityBuildingComponent,
    DialogOptionsComponent,
    DialogRoomComponent,
    DialogEquipmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }