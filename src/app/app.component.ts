import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var shpwrite: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shapefile-gen';
  formGroup!: FormGroup;

  get geoJsonCtrl() {
    return this.formGroup.get('geoJson');
  }
  constructor(
    protected fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formGroup = this.fb.group({
      geoJson: [null]
    });
  }

  download() {
    const option: {[key: string]: string | object} = {
      file: 'shapefiles',
      folder: 'shapefiles',
      types: {
        point: 'points',
      }
    };
    if (this.geoJsonCtrl !== null) {
      shpwrite.download(JSON.parse(this.geoJsonCtrl.value), option);
    }
  }
}
