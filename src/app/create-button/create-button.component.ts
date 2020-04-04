import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {
  @Input() link: string;
  @Input() message: string;
  @Input() icon: string;
  constructor() { }

  get iconName() : string {
    return `fal fa-4x fa-${this.icon}`
  }

  ngOnInit(): void {
  }

}
