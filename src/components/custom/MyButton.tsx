'use client';

import React from 'react';
import { MyButton as ButtonWebComponent } from 'web-components-demo/dist/atoms/my-button';
import { createComponent } from '@lit/react';

export const MyButton = createComponent({
  tagName: 'my-button',
  elementClass: ButtonWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
