'use client';

import React from 'react';
import { MyInput as InputWebComponent } from 'web-components-demo/dist/atoms/my-input';
import { createComponent } from '@lit/react';

export const MyInput = createComponent({
  tagName: 'my-Input',
  elementClass: InputWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
