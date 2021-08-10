import React from 'react';
import {
  Typography, Card, Divider,
} from '@material-ui/core';
import classNames from 'classnames';
import { Button } from '@components';
import GetScreenSize from '@assets/breakpoints';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectedContentIndex } from '@services/redux/slices/contentPage';
import moment from 'moment';
import infoStyle from './style';

const Info = ({ position, dataContent }) => {
  const isMedium = GetScreenSize({ isMax: true, size: 900 });
  const classes = infoStyle({
    isMedium,
    position: position === 'sticky',
  });
  const infoClassnames = classNames(isMedium ? classes.infoMobile : classes.info);

  const dispatch = useDispatch();
  const page = useSelector(({ contentPage }) => contentPage.contentPageIndex);

  const handleButton = () => {
    dispatch(selectedContentIndex());
  };

  const locationStatus = (dataContent?.linkLocation?.length < 1 || [undefined, null].includes(dataContent?.linkLocation)) ? 'Outsite' : 'Online';
  const isTelkom = dataContent?.isOnlyTelkom
    ? 'Telkom Student'
    : 'Public';

  const time = (value) => moment(value).format('HH:mm');

  return (
    <aside className={infoClassnames}>
      <Card className={classes.cardInfo}>
        <div className={classes.commonInfo}>
          <div>
            <Typography className={classes.titleInfo}>
              Time and Date
            </Typography>
            <Typography className={classes.textInfo}>
              {moment(dataContent?.date).format('dddd, D MMMM YYYY')}
            </Typography>
            <Typography className={classes.textInfo}>
              {`${time(dataContent?.eventStart)} - ${time(dataContent?.eventEnd)} WIB`}
            </Typography>
          </div>
          <div>
            <Typography className={classes.titleInfo}>
              Location (
              {locationStatus}
              )
            </Typography>
            <Typography className={classes.textInfo}>
              {dataContent?.location}
            </Typography>
          </div>
          <div>
            <Typography className={classes.titleInfo}>
              For
              {' '}
              <span className={classes.textInfo}>
                {
                isTelkom
              }
              </span>
            </Typography>

          </div>
        </div>
        <Divider />

        <div className={classes.registerInfo}>
          {
            !page && (
            <>
              <div>
                <Typography className={classes.registerTitle}>
                  Ticket
                  {' '}
                  <span className={classes.registerTextInfo}>
                    0/
                    {dataContent?.ticketLimit}

                  </span>
                </Typography>

              </div>
              <div className={classes.registerUntil}>
                <Typography className={classes.registerTitle}>
                  Registration Until
                </Typography>
                <Typography className={classes.registerTextInfo}>
                  {moment(dataContent?.endRegistration).format('D MMMM YYYY')}
                </Typography>
              </div>
            </>
            )
          }

        </div>

        <Button color="primary" onClick={handleButton} isFullWidth>{!page ? 'Register' : 'Kembali'}</Button>
      </Card>

    </aside>
  );
};

Info.propTypes = {
  position: PropTypes.string,
  dataContent: PropTypes.objectOf(PropTypes.object).isRequired,
};

Info.defaultProps = {
  position: '',

};

export default Info;
