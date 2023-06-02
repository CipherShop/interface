import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ItemComponent } from './components/item/item.component';

import { MarkdownService } from './services/markdown/markdown.service';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatProgressBarModule } from '@angular/material/progress-bar'; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressBarModule
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
