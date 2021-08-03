import {
  CardItem, Filter,

} from '@/components/molecules';
import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import listCardStyle from './style';

const ListCard = ({ dataFilter, className }) => {
  const classes = listCardStyle();
  const listCardClassname = classNames(className, classes.content);

  return (
    <div className={listCardClassname}>
      <div className={classes.filter}>
        <span className={classes.totalItem}>Result : 4</span>
        <Filter data={dataFilter} onChange={(e) => e} />
      </div>
      <div className={classes.content}>
        <Grid container spacing={4}>
          <Grid item lg={4} sm={12}>
            <CardItem canEdit />
          </Grid>
          <Grid item lg={4} sm={12}>
            <CardItem canEdit />
          </Grid>
          <Grid item lg={4} sm={12}>
            <CardItem canEdit />
          </Grid>
          <Grid item lg={4} sm={12}>
            <CardItem canEdit />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  dataFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  className: PropTypes.string,
};

ListCard.defaultProps = {
  dataFilter: [],
  className: '',
};

export default ListCard;
