import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploader, FileLikeObject} from 'ng2-file-upload';
import {IMembre} from '../../Interfaces/imembre';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {

  @Output() fileChanged = new EventEmitter<FileLikeObject>();
  @Input() imageSrc: string;

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver = false;

  constructor() {
  }

  ngOnInit() {
  }

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
    const fileData = fileInput.target.files[0] as File;
    const mimeType = fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(fileData);
    reader.onload = (_event) => {
      //this.imageSrc = reader.result;
    };
  }

  resetWidget() {
    this.imageSrc = undefined;
    this.uploader.queue.pop();
  }
}
