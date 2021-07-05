/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card, CardActionArea, CardContent, Typography,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CardStyle from './style';
import { CalendarIcon, cardStyle, ContentImage } from '../../../assets/image';
import GetScreenSize from '../../../assets/breakpoints/index';

const CardItem = ({
  className, src, status, title, desc, time,
}) => {
  const isDescHide = GetScreenSize({ isMax: true, size: 800 });
  const isMobileCard = GetScreenSize({ isMax: true, size: 600 });

  const classes = CardStyle(isMobileCard);

  const cardClassnames = classNames(classes.card, className);
  const brainsparkClassnames = classNames(classes.brainspark, classes.brainsparkText);
  const contentWrapperClassnames = classNames(
    classes.contentWrapper, isMobileCard && classes.flexColumn,
  );

  return (
    <CardActionArea className={classes.cardAction}>
      <Card className={cardClassnames}>
        {
                !isMobileCard && (
                <Typography className={brainsparkClassnames}>
                  brainspark
                </Typography>
                )
        }
        <img
          src={cardStyle}
          className={classes.CardStyle}
          alt="card style"
        />
        <div className={contentWrapperClassnames}>
          <img
            src={ContentImage}
            className={classes.imageNormal}
            alt="ea"
          />
          <CardContent className={classes.content}>
            <div>
              <Typography variant="h6" className={classes.status}>
                Coming Up
              </Typography>
              <Typography variant="h6" className={classes.title}>
                SOLID Rest API for Web Development
              </Typography>
              {
                        !isDescHide
                          ? (
                            <Typography className={classes.textContent}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit
                              ut aliquam, purus sit amet luctus venenatis, lectus magna
                              fringilla urna, porttitor rhoncus dolor purus non enim
                              praesent elementum facilisis leo, vel fringilla est
                              ullamcorper eget nulla facilisi etiam dignissim diam quis
                            </Typography>
                          ) : ''
                    }
            </div>
            <div className={classes.time}>
              <div className={classes.timeIconWrapper}>
                <img src={CalendarIcon} className={classes.timeIcon} alt="waktu diselenggara" />
              </div>
              <Typography className={classes.timeContent}>
                17/05/20 at 15.30 WIB
              </Typography>
            </div>
          </CardContent>
        </div>

      </Card>
    </CardActionArea>
  );
};

CardItem.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.bool,
  title: PropTypes.string,
  desc: PropTypes.string,
  time: PropTypes.string,
};

CardItem.defaultProps = {
  className: '',
  src: '',
  status: false,
  title: '',
  desc: '',
  time: '',
};

export default CardItem;
