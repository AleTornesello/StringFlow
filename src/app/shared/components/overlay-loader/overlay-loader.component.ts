import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil, Subject } from 'rxjs';
import { LoaderStatusService } from "../../services/loader-status.service";

@Component({
  selector: 'app-overlay-loader',
  templateUrl: './overlay-loader.component.html',
  styleUrls: ['./overlay-loader.component.scss'],
  animations: [
    trigger('loadingAnimation', [
      state('open', style({ opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate('0.5s'),
      ]),
    ]),
  ],
})
export class OverlayLoaderComponent implements OnInit, OnDestroy {
  public loading: boolean;

  private readonly _unsubscribeAll: Subject<void>;

  constructor(private _loaderService: LoaderStatusService) {
    this.loading = false;
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._loaderService.notify
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((status) => {
        this.loading = status;
      });
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
