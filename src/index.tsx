import * as React from 'react';
import { render } from "react-dom";

import App from './App';
import "./styles.css";

var mountNode = document.getElementById("app");
render(<App name="Jane" />, mountNode);
