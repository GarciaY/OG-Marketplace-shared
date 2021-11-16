import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { CartItemModule } from 'src/app/components/cart-item/cart-item.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ShopButtonModule } from 'src/app/components/shop-button/shop-button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    CartItemModule,
    ButtonModule,
    ShopButtonModule
  ],
  declarations: [CartPage],
})
export class CartPageModule {}