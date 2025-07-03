'use client';

import React from 'react';
import { MyForm as FormWebComponent } from 'web-components-demo/dist/my-form.js';
import { createComponent } from '@lit/react';

export const MyForm = createComponent({
  tagName: 'my-form',
  elementClass: FormWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
