import {Component, Input, OnInit} from '@angular/core';
import {IHouse} from '../../Interfaces/ihouse';
import {Comment} from '../../models/comment';
import {APIService} from '../../Services/api.service';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-avis-home',
  templateUrl: './avis-home.component.html',
  styleUrls: ['./avis-home.component.css']
})
export class AvisHomeComponent implements OnInit {

  @Input() house: IHouse;

  public newComment = new Comment();
  showNewComment = true

  constructor(private api: APIService, private auth: AuthService) { }

  ngOnInit() { }

  starsChanded($event: number) {
    console.log($event);
    this.newComment.Note = $event;
  }

  createAvis() {
    this.newComment.House_id = this.house.Id;
    this.newComment.Membre_id = this.auth.localUser.Id;
    this.api.createComment(this.newComment).subscribe(data=>{
      this.showNewComment = false
    })
  }
}
