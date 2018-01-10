import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


//Material Component
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';


//App Component
import { AppComponent } from './app.component';
import { FirstNavComponent } from './components/first-nav/first-nav.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { SecondnavComponent } from './components/secondnav/secondnav.component';
import { ThirdnavComponent } from './components/thirdnav/thirdnav.component';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/item/item.component';
import {FilterByCountryPipe, FilterByGenrePipe, FiltersPipe, SortPipe} from './pipes/filters/filters.pipe';




@NgModule({
  declarations: [
    AppComponent,
    FirstNavComponent,
    LeftComponent,
    RightComponent,
    SecondnavComponent,
    ThirdnavComponent,
    MainComponent,
    ItemComponent,
    FiltersPipe,
    SortPipe,
    FilterByCountryPipe,
    FilterByGenrePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
