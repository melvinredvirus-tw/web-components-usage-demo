'use client';

import React from 'react';
import { MyProductCard as CardWebComponent } from 'web-components-demo/dist/molecules/my-product-card.js';
import { createComponent } from '@lit/react';

export const MyProductCard = createComponent({
  tagName: 'my-product-card',
  elementClass: CardWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
