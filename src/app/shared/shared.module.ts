import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

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
];

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...ngMaterialModules,
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromComponents.components,
    ...fromPipes.pipes,
    ...ngMaterialModules,
  ],
})
export class SharedModule {}
