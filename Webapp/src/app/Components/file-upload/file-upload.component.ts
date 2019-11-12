import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import {IMembre} from '../../Interfaces/imembre';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @Output() fileChanged = new EventEmitter<FileLikeObject>();

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver = false;
  private url: any = ''

  constructor() {}

  ngOnInit(){}

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }

  onFileSelect(event: FileList) {
    let file = this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
    this.fileChanged.emit(file[0]);
  }

  createPreview(fileInput: any) {
    let fileData = fileInput.target.files[0] as File;
    var mimeType = fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }
}
