
import { Container, Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';
import Item, { ItemData } from './Item';

interface Props {
  name: string
}

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '20px',
  },
}));

const App = (props: Props) => {
  const items: ItemData[] = [
    { id: 1, title: 'First', description: 'bla bla bla bla bla bla bla' },
    { id: 2, title: 'Second', description: 'bla bla bla bla bla bla bla' },
    { id: 3, title: 'Third', description: 'bla bla bla bla bla bla bla' },
    { id: 4, title: 'Forth', description: 'bla bla bla bla bla bla bla' },
    { id: 5, title: 'Fifth', description: 'bla bla bla bla bla bla bla' },
  ];

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={3}>
        {
          items.map(item => (
            <Grid item key={item.id} xs={12} md={6} lg={4} xl={3}>
              <Item
                item={item}
                onClick={() => { }} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App;
