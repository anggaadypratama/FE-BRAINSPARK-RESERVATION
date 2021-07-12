/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import {
  Card, CardContent, Typography, CardActionArea, CardActions, Divider,
} from '@material-ui/core';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  GetScreenSize, cardStyle, ContentImage,
} from '@assets';

import { Button } from '@components';

import EventRoundedIcon from '@material-ui/icons/EventRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import RoomIcon from '@material-ui/icons/Room';

import CardStyle from './style';

const CardItem = ({
  className, src, status, title, desc, time, cardButton, editable,
}) => {
  const isMobileCard = GetScreenSize({ isMax: true, size: 600 });

  const classes = CardStyle();

  const cardClassnames = classNames(classes.card, className);
  // const brainsparkClassnames = classNames(classes.brainspark, classes.brainsparkText);
  const contentWrapperClassnames = classNames(
    classes.contentWrapper, isMobileCard && classes.flexColumn,
  );

  const ListWithIcon = ({ children, content }) => (
    <div className={classes.item}>
      <div className={classes.itemIconWrapper}>
        {children}
      </div>
      <Typography className={classes.itemContent}>
        {content}
      </Typography>
    </div>
  );

  ListWithIcon.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
  };

  const EditableMenu = () => (
    <>
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
    </>
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

            <div className={classes.itemSection}>
              <div className={classes.itemWrapper}>
                <ListWithIcon content="Google Meets">
                  <RoomIcon className={classes.itemIcon} />
                </ListWithIcon>
                <ListWithIcon content="23 Jan 20, at 10:00 WIB">
                  <EventRoundedIcon className={classes.itemIcon} />
                </ListWithIcon>
              </div>
              <div>
                {!cardButton && <Button type="primary">View</Button>}
              </div>
            </div>

            {
              editable && (
                <EditableMenu />
              )
            }

          </div>

        </CardContent>
      </div>

    </Card>
  );

  return (
    <>
      {
      cardButton ? (
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
  cardButton: PropTypes.bool,
  editable: PropTypes.bool,
};

CardItem.defaultProps = {
  className: '',
  src: '',
  status: false,
  title: '',
  desc: '',
  time: '',
  cardButton: false,
  editable: false,
};

export default CardItem;
