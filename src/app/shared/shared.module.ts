import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CamelToKebabPipe } from './pipes/camel-to-kebab.pipe';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { SimpleDialogComponent } from './components/dialog/simple-dialog/simple-dialog.component';
import { AlertDialogComponent } from './components/dialog/alert-dialog/alert-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterLink } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { UnsavedChangesPopupComponent } from './components/dialog/unsaved-changes-popup/unsaved-changes-popup.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvoidEmptyValuePipe } from './pipes/avoid-empty-value.pipe';
import { OverlayLoaderComponent } from './components/overlay-loader/overlay-loader.component';
import { RingSpinnerComponent } from './components/spinner/ring-spinner/ring-spinner.component';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    CapitalizePipe,
    CamelToKebabPipe,
    SimpleDialogComponent,
    AlertDialogComponent,
    UnsavedChangesPopupComponent,
    AvoidEmptyValuePipe,
    OverlayLoaderComponent,
    RingSpinnerComponent,
  ],
  exports: [
    SimpleDialogComponent,
    AlertDialogComponent,
    CapitalizePipe,
    UnsavedChangesPopupComponent,
    AvoidEmptyValuePipe,
    OverlayLoaderComponent,
  ],
  imports: [
    TranslocoModule,
    CommonModule,
    TableModule,
    PaginatorModule,
    FontAwesomeModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputSwitchModule,
    CalendarModule,
    DialogModule,
    ChipModule,
    TooltipModule,
    InputTextareaModule,
    CheckboxModule,
    RouterLink,
    MenuModule,
    OverlayPanelModule,
  ],
})
export class SharedModule {}
