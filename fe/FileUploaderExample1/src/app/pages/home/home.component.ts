import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  url: string = environment.baseUrl + '/api/files';

  constructor() {}

  onUploadStarted(event: any) {
    console.log(event);
  }

  onUploadProgress(event: any) {
    console.log(event);
  }

  onUploaded(event: any) {
    console.log(event);
  }

  onFilesUploaded(event: any) {
    console.log(event);
  }
}
