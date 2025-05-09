import {Component, inject} from '@angular/core';
import {SettingsService} from '../settings.service';
import {CommonModule} from '@angular/common';
import {Animal} from '../animal.interface';
import {FormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {EditAnimalDialogComponent} from './edit-animal-dialog/edit-animal-dialog.component';

@Component({
  selector: 'app-general',
  imports: [CommonModule, FormsModule],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

  private settingsService = inject(SettingsService);
  $animals = this.settingsService.getAnimals();

  constructor(private dialog: MatDialog) {}

  addAnimal(animal: Animal){
    this.settingsService.addAnimal(animal).subscribe(() => {
      this.$animals = this.settingsService.getAnimals();
    });
  }

  deleteAnimal(id: number){
    this.settingsService.deleteAnimal(id).subscribe(() => {
      this.$animals = this.settingsService.getAnimals();
    });
  }

  openEditDialog(id: number) {
    this.settingsService.getAnimal(id).subscribe(animal => {
      const dialogRef = this.dialog.open(EditAnimalDialogComponent, {
        width: '400px',
        data: { ...animal }
      });

      dialogRef.afterClosed().subscribe(edits => {
        if (edits) {
          edits.birthday = new Date(edits.birthday);
          this.settingsService.updateAnimal(id, edits).subscribe(() => {
            this.$animals = this.settingsService.getAnimals();
          });
        }
      });
    });
  }

  addNewAnimal(type: string, birthday: string){
    if(!type || !birthday) return;
    this.addAnimal({type, birthday: new Date(birthday)});
  }
}
