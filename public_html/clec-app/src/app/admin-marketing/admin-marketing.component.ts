import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-marketing',
  templateUrl: './admin-marketing.component.html',
  styleUrls: ['./admin-marketing.component.css']
})
export class AdminMarketingComponent implements OnInit {

    requiredFileType:string = ".png";
    fileName = '';
    uploadProgress:number = 0;
    uploadSub:Subscription = new Subscription();
    file:File = {} as unknown as File;
    url:any;

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
  }

  onFileSelected(event:any) {

    this.file = event.target.files[0];
    console.log(this.file);
      
        if (this.file !== undefined) {
            this.fileName = this.file.name;
            console.log(this.file.name);
            const formData = new FormData();
            formData.append('test',this.file, this.fileName);
            console.log(formData);

            const upload$ = this.http.post(environment.baseUrl+"/photoUpload", formData, {
                reportProgress: true,
                observe: 'events'
            })

            .pipe(
                finalize(() => this.reset())
            );
          
            this.uploadSub = upload$.subscribe( (event:any) => {
              console.log(typeof event);
              if (event.type == HttpEventType.UploadProgress) {
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
            })
        }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
    var reader = new FileReader();
		reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
			this.url = reader.result; 
		}
  }

}
