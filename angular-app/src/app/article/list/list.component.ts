import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleService } from 'src/app/service/article.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  articles: any = [];
  comments: any = [];
  articleTitle: any = {
    title: ""
  }

  inputComment: any = {
    content: ""
  }
  articleId: any

  constructor(config: NgbModalConfig, private modalService: NgbModal, private articleService: ArticleService,
    private userService: UserService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
    this.inputComment.content = ""
  }



  ngOnInit(): void {
    this.getAllArticle();
  }

  getAllArticle() {
    this.articleService.getArticles().subscribe(
      (article) => {
        console.warn(article);
        this.articles = article;
      },
      (err) => {
        console.warn(err),
          this.userService.loggedOut()
      });
  }

  getArticleComment(idArticles: any) {
    this.articleService.getComments(idArticles).subscribe(
      (comment) => {
        console.warn(comment);
        this.comments = comment;
        this.articleTitle = comment;
        this.articleId = comment;
      },
      (err) => {
        console.warn(err)
      });
  }

  commentToArticle(id: any) {
    console.warn(id)
    console.warn(this.inputComment)
    this.articleService.postComments(id, this.inputComment).subscribe(
      (comment) => {
        console.warn(comment);
        this.getArticleComment(id);
        this.inputComment.content = ""
      },
      (err) => {
        console.warn(err)
      });

  }
}
