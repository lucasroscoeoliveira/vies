import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Menu } from 'src/app/components-controllers/Menu';
import { Header } from 'src/app/components-controllers/Header';
import { Social } from 'src/app/components-controllers/Social';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {
  title = "negócio";

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    public scrollTo: ScrollTo,
    public menu: Menu,
    public header: Header,
    public social: Social
  ) { }

  ngOnInit(): void {
    this.menu.setMenu('fashion');
    this.header.setHeader('fashion');

    this.titleService.setTitle("Viés – Projetos comerciais");
    this.metaTagService.updateTag({name: 'Negócios', content: "Projeto personalizados de ambientes comerciais"});
  }

  onScroll(event) {
    this.scrollTo.changeActiveOnScroll('fashion');
  }
}
