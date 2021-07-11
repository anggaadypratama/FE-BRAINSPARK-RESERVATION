/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Card, CardActionArea, CardContent, Typography, Divider, CardActions,
} from '@material-ui/core';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  GetScreenSize, CalendarIcon, cardStyle, ContentImage,
} from '@assets';

import { Button } from '@components';
import { CreateRoundedIcon } from '@material-ui/icons/CreateRounded';
import { DeleteRoundedIcon } from '@material-ui/icons/DeleteRounded';
import CardStyle from './style';

const CardItem = ({
  className, src, status, title, desc, time, editable,
}) => {
  const isMobileCard = GetScreenSize({ isMax: true, size: 600 });

  const classes = CardStyle(isMobileCard);

  const cardClassnames = classNames(classes.card, className);
  const brainsparkClassnames = classNames(classes.brainspark, classes.brainsparkText);
  const contentWrapperClassnames = classNames(
    classes.contentWrapper, isMobileCard && classes.flexColumn,
  );

  const CardWithContent = () => (
    <Card className={cardClassnames}>
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

      {
              editable && (
                <div className={classes.editableWrapper}>
                  <Divider />
                  <CardActions className={classes.editable}>
                    <Button className={classes.buttonEditable}>
                      <CreateRoundedIcon />
                      <span className={classes.buttonEditableText}>Edit</span>
                    </Button>
                    <Button className={classes.buttonEditable}>
                      <DeleteRoundedIcon />
                      <span className={classes.buttonEditableText}>Delete</span>
                    </Button>
                  </CardActions>
                </div>
              )
            }

    </Card>
  );

  return (
    <>
      {
      editable ? (
        <CardActionArea>
          <CardWithContent />
        </CardActionArea>
      ) : <CardWithContent />
    }
    </>
  );
};

CardItem.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.bool,
  title: PropTypes.string,
  desc: PropTypes.string,
  time: PropTypes.string,
  editable: PropTypes.bool,
};

CardItem.defaultProps = {
  className: '',
  src: '',
  status: false,
  title: '',
  desc: '',
  time: '',
  editable: false,
};

export default CardItem;
