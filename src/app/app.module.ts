import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from "./navigation/navigation.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list'
import { MatGridListModule} from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        DashboardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,   
        MatSidenavModule,
        MatToolbarModule,    
        MatListModule,
        MatIconModule,
        MatGridListModule,
        MatMenuModule,
        BrowserAnimationsModule
    ]
})
export class AppModule { }
