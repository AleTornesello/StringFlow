import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from "./layout/layout.module";
import { AppRoutingModule } from "./app-routing.module";
import { EditorModule } from "./dashboard/editor.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { TranslocoRootModule } from "./core/i18n/transloco-root.module";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    TranslocoRootModule,
    EditorModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
  ],
  providers: [
    provideHttpClient(),
    MessageService,
    {
      provide: 'environment',
      useValue: environment,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
