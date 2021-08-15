import {
  CardItem, EmptyEvent, Filter,

} from '@components/molecules';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { GetScreenSize } from '@assets';
import listCardStyle from './style';

const ListCard = ({
  dataFilter, cardData, hasFilter, className, canEdit, loading, onChange, filterState, ...rest
}) => {
  const mobileSize = GetScreenSize({ isMax: true, size: 1000 });
  const classes = listCardStyle({ mobileSize });
  const listCardClassname = classNames(className, classes.content);

  return (
    <div className={listCardClassname}>
      {
        hasFilter && (
        <div className={classes.filter}>
          <span className={classes.totalItem}>
            Result :
            {' '}
            {cardData.length}
          </span>
          <Filter filterState={filterState} data={dataFilter} onChange={(e) => onChange(e)} />
        </div>
        )
      }
      <div className={classes.content}>
        <Grid container spacing={4}>
          {
           cardData.length ? cardData?.map(({
             _id: id,
             themeName:
             title,
             imagePoster,
             location,
             date,
             eventStart,
             isEventDone,
           }) => (
             <Grid key={id} item {...rest}>
               <Fade bottom>
                 <CardItem
                   id={id}
                   title={title}
                   img={imagePoster}
                   canEdit={canEdit}
                   location={location}
                   date={date}
                   time={eventStart}
                   refetch={rest.refetch}
                   status={isEventDone}
                   {...canEdit}
                 />
               </Fade>
             </Grid>

           ))
             : <EmptyEvent message="Oops, it looks like there is no event for now" />
          }
        </Grid>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  dataFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  className: PropTypes.string,
  hasFilter: PropTypes.bool,
  cardData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
  canEdit: PropTypes.bool,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  filterState: PropTypes.number,
};

ListCard.defaultProps = {
  dataFilter: [],
  className: '',
  hasFilter: false,
  cardData: [],
  canEdit: false,
  loading: false,
  onChange: () => {},
  filterState: 0,
};

export default ListCard;
