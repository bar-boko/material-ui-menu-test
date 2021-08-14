import * as React from 'react';
import { DispatchWithoutAction } from 'react';
import { Card, CardActions, CardContent, CardHeader, IconButton, Tooltip, Typography } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

export interface ItemData {
  id: number;
  title: string;
  description: string;
}

interface ItemProps {
  item: Item;
  onClick: DispatchWithoutAction;
}

const Item = ({ item, onClick }: ItemProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="More" placement="right">
            <IconButton size="small" color="primary">
              <MoreVert />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
}

export default Item;