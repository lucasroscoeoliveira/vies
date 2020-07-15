import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/components-controllers/Menu';
import { Header } from 'src/app/components-controllers/Header';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';
import { Social } from 'src/app/components-controllers/Social';
import { FacebookService } from 'src/app/facebook.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {
  title = "casa";

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    public scrollTo: ScrollTo,
    public menu: Menu,
    public header: Header,
    public social: Social,
    public facebookService: FacebookService
  ) { }

  ngOnInit(): void {
    this.menu.setMenu('house');
    this.header.setHeader('house');

    this.titleService.setTitle("Viés – Projetos residenciais");
    this.metaTagService.updateTag({name: 'Casa', content: "Projeto personalizados de ambientes de casa"});
    this.facebookService.registerEvent({
      name: 'House',
    }, 'PageView');
  }

  onScroll(event) {
    this.scrollTo.changeActiveOnScroll('house');
  }
}
