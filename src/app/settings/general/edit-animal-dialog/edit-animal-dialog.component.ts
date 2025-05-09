import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { Animal} from '../../animal.interface';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-edit-animal-dialog',
  templateUrl: './edit-animal-dialog.component.html',
  imports: [
    MatDialogContent,
    MatFormField,
    MatLabel,
    MatDialogTitle,
    MatInput,
    FormsModule,
    MatDialogActions,
    MatButton,
  ],
  styleUrls: ['./edit-animal-dialog.component.css']
})
export class EditAnimalDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditAnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public animal: Animal
  ) {}

  ngOnInit(): void {
    if (this.animal.birthday) {
      const date = new Date(this.animal.birthday);
      this.animal.birthday = date.toISOString().substring(0, 10);
    }
  }

  saveEdits() {
    this.dialogRef.close(this.animal);
  }

  cancelEdit() {
    this.dialogRef.close();
  }
}
