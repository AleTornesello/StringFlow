import { Component } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nodes-sidebar',
  templateUrl: './nodes-sidebar.component.html',
  styleUrls: ['./nodes-sidebar.component.scss']
})
export class NodesSidebarComponent {

  public faChevronRight: IconDefinition;
  public faChevronLeft: IconDefinition;
  public open: boolean;

  constructor() {
    this.faChevronRight = faChevronRight;
    this.faChevronLeft = faChevronLeft;
    this.open = true;
  }

  public get actionIcon() {
    return this.open ? this.faChevronLeft : this.faChevronRight;
  }

  public onSidebarActionClick() {
    this.open = !this.open;
  }
}
