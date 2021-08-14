import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import { ChildrenProps } from '../util/ChildrenProps';

const ThemeWrapper = ({ children }: ChildrenProps) => (
  <>
    <CssBaseline />
    {children}
  </>
);

export default ThemeWrapper;
