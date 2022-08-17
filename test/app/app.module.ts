// SPDX-License-Identifier: MIT

import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { AppOverviewComponent } from './components/app-overview/app-overview.component';
import { ButtonsGroupComponent } from './components/buttons/buttons-group/buttons-group.component';
import { TopAppBarComponent } from './components/app-bars/top-app-bar/top-app-bar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { AppBarComponent } from './components/app-bars/app-bar/app-bar.component';
import { ShortAppBarComponent } from './components/app-bars/short-app-bar/short-app-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { LinearProgressBarComponent } from './components/progress-indicator/linear-progress-bar/linear-progress-bar.component';
import { SlideToggleComponent } from './components/switches-and-checkboxes/slide-toggle/slide-toggle.component';
import { CheckboxComponent } from './components/switches-and-checkboxes/checkbox/checkbox.component';
import { RadioButtonComponent } from './components/switches-and-checkboxes/radio-button/radio-button.component';
import { CircularProgressComponent } from './components/progress-indicator/circular-progress/circular-progress.component';
import { IconButtonComponent } from './components/switches-and-checkboxes/icon-button/icon-button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { SelectMenuComponent } from './components/select-menu/select-menu.component';
import { ListComponent } from './components/list/list.component';
import { BasicDataTableComponent } from './components/data-table/basic-data-table/basic-data-table.component';
import { FabButtonsComponent } from './components/buttons/fab-buttons/fab-buttons.component';
import { CardComponent } from './components/card/card.component';
import { TextFieldComponent } from './components/textfield/text-field.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { BasicDialogComponent } from './components/dialog/basic-dialog/basic-dialog.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { DialogContentComponent } from './components/dialog/dialog-content/dialog-content.component';
import { DialogWithRadioButtonsComponent } from './components/dialog/dialog-with-radio-buttons/dialog-with-radio-buttons.component';
import { DialogsComponent } from './components/dialog/dialogs/dialogs.component';
import { DataTableSortComponent } from './components/data-table/data-table-sort/data-table-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsGroupComponent,
    TopAppBarComponent,
    DrawerComponent,
    AppBarComponent,
    ShortAppBarComponent,
    MenuComponent,
    LinearProgressBarComponent,
    SlideToggleComponent,
    CheckboxComponent,
    RadioButtonComponent,
    CircularProgressComponent,
    IconButtonComponent,
    ChipsComponent,
    SelectMenuComponent,
    ListComponent,
    BasicDataTableComponent,
    AppOverviewComponent,
    FabButtonsComponent,
    CardComponent,
    TextFieldComponent,
    TabsComponent,
    SliderComponent,
    SnackbarComponent,
    BasicDialogComponent,
    ImageListComponent,
    DialogContentComponent,
    DialogWithRadioButtonsComponent,
    DialogsComponent,
    DataTableSortComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatRippleModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSliderModule,
    OverlayModule,
    MatDialogModule,
    MatGridListModule,
    MatSortModule
  ],
  providers: [
    Title,
    RouterModule,
    MatSnackBar,
    MatDialog,
    MatDialogConfig,
    MatSelectionList,
    { provide: MatDialogRef, useValue: {} }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
