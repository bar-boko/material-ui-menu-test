
import * as React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
  name: string
}

const App = (props: Props) => {
  const { name } = props;

  return (
    <h1>Hello {name}</h1>
  );
}

export default App;
