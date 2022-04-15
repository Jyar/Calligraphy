import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilepageComponent } from '../profilepage/profilepage.component';

const routes: Routes = [
    {
        path: 'profilepage',
        component: ProfilepageComponent
    }
];

@NgModule({
    declarations: [ToolbarComponent],
    imports: [
        RouterModule.forRoot(routes),
        MatButtonModule,
        MatCardModule,
        CommonModule
    ]
})
export class ToolBarModule { }