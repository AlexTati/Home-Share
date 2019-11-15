import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileLikeObject, FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-picture-loader',
  templateUrl: './picture-loader.component.html',
  styleUrls: ['./picture-loader.component.css']
})
export class PictureLoaderComponent implements OnInit {

  @Output() fileChanged = new EventEmitter<FileLikeObject>();

  public uploader: FileUploader = new FileUploader({});
  private url: string = ''

  constructor() { }

  fileData: File = null;
  previewUrl: any = null;
  uploadedFilePath: string = null;

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
  }

}
