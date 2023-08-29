import { Component, DestroyRef, OnInit, ViewChild } from '@angular/core';
import { RootRoutes } from '../../../app-routing.module';
import { TranslocoService } from '@ngneat/transloco';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { faBars, faHome, faIcons, faSearch, faSignOutAlt, } from '@fortawesome/free-solid-svg-icons';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-top-bar',
  styleUrls: ['./app-top-bar.component.scss'],
  templateUrl: './app-top-bar.component.html',
})
export class AppTopBarComponent implements OnInit {
  public sidebarVisible: boolean;
  public menuItems: TreeNode[];
  public selectedMenuItem: TreeNode;
  public faBars: IconDefinition;
  public faSearch: IconDefinition;
  public faSignOutAlt: IconDefinition;
  public faIconTest: IconDefinition;

  constructor(
    private _translateService: TranslocoService,
    private _destroyRef: DestroyRef,
    private _router: Router
  ) {
    this.faIconTest = faIcons;
    this.sidebarVisible = false;
    this.menuItems = [
      {
        label: 'Home',
        data: {
          url: "/",
          icon: faHome,
        },
        type: 'url',
      },
    ];

    this.selectedMenuItem = this.menuItems[0];
    this.faSignOutAlt = faSignOutAlt;
    this.faBars = faBars;
    this.faSearch = faSearch;
  }

  ngOnInit() {
  }

  public toggleSideBar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  public redirectTo(path: string) {
    this._router.navigateByUrl(path);
  }
}
