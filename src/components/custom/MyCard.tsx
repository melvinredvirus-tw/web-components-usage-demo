'use client';

import React from 'react';
import { MyCard as CardWebComponent } from 'web-components-demo/dist/my-card';
import { createComponent } from '@lit/react';

export const MyCard = createComponent({
  tagName: 'my-card',
  elementClass: CardWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
