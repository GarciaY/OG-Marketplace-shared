import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

import { ShopButtonComponent } from './shop-button/shop-button.component';


@NgModule({
  declarations: [InputComponent, ButtonComponent, IconButtonComponent, ShopButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent, IconButtonComponent, ShopButtonComponent],
})
export class SharedModule {}
