import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CanComponentDeactivate} from '../../can-deactivate.interface';

@Component({
  selector: 'app-selling-options',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './selling-options.component.html',
  styleUrl: './selling-options.component.css'
})
export class SellingOptionsComponent implements OnInit, CanComponentDeactivate {
  settingsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.fb.group({
      vendors: [false],
      commissions: ['percentage'],
      adminCom: ['10%'],
      status: [false],
      disableProduct: [false],
      disableWizard: [false],
      category: ['single'],
      tags: [false]
    });
  }

  canDeactivate(): boolean {
    return !this.settingsForm.dirty || confirm('You have unsaved changes. Leave anyway?');
  }
}
