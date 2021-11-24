import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { AvonComponent } from './pages/avon/avon.component';
import { EudoraComponent } from './pages/eudora/eudora.component';
import { NaturaComponent } from './pages/natura/natura.component';
import { BoticarioComponent } from './pages/boticario/boticario.component';
import { PacoRabanneComponent } from './pages/paco-rabanne/paco-rabanne.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AvonComponent,
    EudoraComponent,
    NaturaComponent,
    BoticarioComponent,
    PacoRabanneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
