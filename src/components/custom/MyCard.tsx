'use client';

import React from 'react';
import { MyProductCard as ProductCardWebComponent } from 'web-components-demo/dist/molecules/my-product-card';
import { createComponent } from '@lit/react';

export const MyProductCard = createComponent({
  tagName: 'my-product-card',
  elementClass: ProductCardWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});