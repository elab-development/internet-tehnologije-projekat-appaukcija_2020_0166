import { Component } from '@angular/core';
import { Follow } from '../models/follow';
import { FollowService } from '../services/follow.service';
import { MatDialog } from '@angular/material/dialog';
import { FollowItem } from '../models/follow-item';

@Component({
  selector: 'app-follow-page',
  templateUrl: './follow-page.component.html',
  styleUrl: './follow-page.component.css'
})
export class FollowPageComponent {
follow!:Follow;
constructor(private followService: FollowService,private matDialog:MatDialog) {
  this.setFollow();
}
emptyFollow(){
  this.followService.getFollow().items = [];
}
  setFollow() {
    this.follow = this.followService.getFollow();
  }
  removeFromFollow(followItem: FollowItem) {
    this.followService.removeFromFollow(followItem.item.id);
    this.setFollow();
  }

}
