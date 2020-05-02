import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class Testimonial {
  image: string;
  name?: string | '';
  description: string | '';
  projectName?: string | '';
}