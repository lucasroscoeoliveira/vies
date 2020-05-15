import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Projetos de decoração e vitrinismo, design para casa e moda");
    this.metaTagService.updateTag({name: 'Vitrinismo', content: "Projeto de vitrines e interiores de loja"});
    this.metaTagService.updateTag({name: 'Casa', content: "Projeto personalizados de ambientes de casa"});
  }

  goHome() {
    this.router.navigate(['casa']);
  }

  goFashion() {
    this.router.navigate(['moda']);
  }

}
