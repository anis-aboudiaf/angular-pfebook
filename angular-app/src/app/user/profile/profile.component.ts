import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any = {
    name: String,
    email: String
  }

  articles: any = []


  inputComment: any = {
    content: ""
  }
  articleId: any

  addArticleForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService, private router: Router, private articleService: ArticleService,
    public modalService: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
    this.inputComment.content = ""
  }

  ngOnInit(): void {
    this.getUserSettings();
  }

  getUserSettings() {
    this.userService.getUserProfil(this.userService.getUserId()).subscribe(
      (res: any) => {
        console.log(res);
        this.user = res
        this.articles = res.articles
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  commentToArticle(id: any, value: any) {
    console.warn(id)
    console.warn(this.inputComment)
    this.articleService.postComments(id, value).subscribe(
      (comment) => {
        console.warn(comment);
        this.inputComment.content = ""
        this.getUserSettings();
      },
      (err) => {
        console.warn(err)
        value = ""
      });

  }

  addArticle() {
    this.articleService.postArticle(this.addArticleForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.getUserSettings();
      },
      (err: any) => {
        console.log(err);
      }
    );

  }
}
