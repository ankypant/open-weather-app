import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 *  SharedModule should not be providing any services,
 *  as these could be instantiated more than once when importing
 *  the SharedModule multiple times.
 *  Instead, move your singleton services into a new module called CoreModule
 */

// Shared components
import * as fromComponents from './components';
import * as fromPipes from './pipes';

// Angular Material modules
const ngMaterialModules: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    ...ngMaterialModules,
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...ngMaterialModules,
  ],
})
export class SharedModule {}
