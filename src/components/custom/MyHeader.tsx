'use client';

import React from 'react';
import { MyHeader as HeaderWebComponent } from 'web-components-demo/dist/my-header';
import { createComponent } from '@lit/react';

export const MyHeader = createComponent({
  tagName: 'my-header',
  elementClass: HeaderWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
