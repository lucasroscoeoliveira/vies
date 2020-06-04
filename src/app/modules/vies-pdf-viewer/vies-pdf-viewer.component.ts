import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from 'src/app/components-controllers/Header';
import { ScrollTo } from 'src/app/components-controllers/ScrollTo';

@Component({
  selector: 'app-vies-pdf-viewer',
  templateUrl: './vies-pdf-viewer.component.html',
  styleUrls: ['./vies-pdf-viewer.component.scss']
})
export class ViesPdfViewerComponent implements OnInit {

  id: number;
  pdf: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public header: Header,
    public scroll: ScrollTo
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.selectPdfContent();
    });
  }

  goBack() {
    if (this.header.type === 'house') {
      this.router.navigate(['casa/inicio', 'servicos']);
      this.scroll.navigateToRoute(this.scroll.states.services, 300, 'house');
    } else {
      this.router.navigate(['negocio/inicio', 'servicos']);
      this.scroll.navigateToRoute(this.scroll.states.services, 300, 'fashion');
    }
  }

  selectPdfContent() {
    switch (this.id) {
      case 1:
        this.pdf = "https://vies-images.s3.amazonaws.com/Images/Pdf/Consulta+ao+Jur%C3%ADdico.pdf";
        break;
      case 2:
        this.pdf = "https://vies-images.s3.amazonaws.com/Images/Pdf/Chamado+Suporte.pdf";
        break;        
    }
  }
}
