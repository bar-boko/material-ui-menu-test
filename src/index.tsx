import * as React from 'react';
import { render } from "react-dom";

import App from './App';
import "./styles.css";
import ThemeWrapper from './Themes/ThemeWrapper';

const app = (
  <ThemeWrapper>
    <App name="Bar" />
  </ThemeWrapper>
);

var mountNode = document.getElementById("app");
render(app, mountNode);
