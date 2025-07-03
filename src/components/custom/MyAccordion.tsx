'use client';

import React from 'react';
import { MyAccordion as AccordionWebComponent } from 'web-components-demo/dist/molecules/my-accordion.js';
import { createComponent } from '@lit/react';

export const MyAccordion = createComponent({
  tagName: 'my-accordion',
  elementClass: AccordionWebComponent,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
});
