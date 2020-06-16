import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class Testimonial {
  id?: number;
  image: string;
  name?: string | '';
  description: string | '';
  projectName?: string | '';
  active?: boolean;
}