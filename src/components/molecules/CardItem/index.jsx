/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Divider,
  Modal,
} from "@material-ui/core";

import classNames from "classnames";
import PropTypes from "prop-types";
import { useScreenSize, cardStyle } from "@assets";

import { Button, ModalApp, NetworkImage } from "@components";

import { ImageNotFound } from "@assets/image";

import EventRoundedIcon from "@material-ui/icons/EventRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import RoomIcon from "@material-ui/icons/Room";

import CONFIG from "@config";

import moment from "moment";

import { useMutation, useQueryClient } from "react-query";
import { deleteDetailEventById } from "@services";
import { useHistory } from "react-router";
import CardStyle from "./style";

const CardItem = ({
  className,
  status,
  title,
  date,
  location,
  time,
  cardButton,
  canEdit,
  img,
  id,
}) => {
  const isMobileCard = useScreenSize({ isMax: true, size: 600 });
  const buttonSize = useScreenSize({ isMax: true, size: 1200 });

  const classes = CardStyle({ buttonSize });

  const cardClassnames = classNames(classes.card, className);
  const contentWrapperClassnames = classNames(
    classes.contentWrapper,
    isMobileCard && classes.flexColumn
  );

  const dateConverted = moment(date).format("ll");
  const timeConverted = moment(time).format("HH:mm");

  const history = useHistory();

  const queryClient = useQueryClient();

  const [modalDeleteActive, isModalDeleteActive] = useState(false);
  const mutation = useMutation((props) => deleteDetailEventById(props), {
    onSuccess: () => queryClient.invalidateQueries("event"),
  });

  const ListWithIcon = ({ children, content }) => (
    <div className={classes.item}>
      <div className={classes.itemIconWrapper}>{children}</div>
      <Typography className={classes.itemContent}>{content}</Typography>
    </div>
  );

  ListWithIcon.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.string.isRequired,
  };

  const handleDelete = () => {
    mutation.mutate(id);
    isModalDeleteActive(false);
  };

  const AlertDelete = () => (
    <ModalApp
      isActive={modalDeleteActive}
      handleClose={() => isModalDeleteActive(false)}
      title="Delete Event"
      hasActionButton
      actionButtonName="Delete"
      actionButtonClick={handleDelete}
    >
      are you sure you want to delete <b>{title}</b> event
    </ModalApp>
  );

  const EditableMenu = () => (
    <>
      <Divider />
      <CardActions className={classes.editable}>
        <Button
          className={classes.buttonEditable}
          onClick={() => history.push(`/edit/${id}`)}
        >
          <CreateRoundedIcon />
          <span className={classes.buttonEditableText}>Edit</span>
        </Button>
        <Button
          className={classes.buttonEditable}
          onClick={() => isModalDeleteActive(true)}
        >
          <DeleteRoundedIcon />
          <span className={classes.buttonEditableText}>Delete</span>
        </Button>
      </CardActions>
    </>
  );

  const CardWithContent = () => (
    <Card className={cardClassnames} elevation={3}>
      <img src={cardStyle} className={classes.CardStyle} alt="card style" />
      <div className={contentWrapperClassnames}>
        <NetworkImage
          src={`${CONFIG.API_URL}/${img}`}
          className={classes.imageNormal}
          onErrorImage={ImageNotFound}
          alt={title}
        />
        <CardContent className={classes.content}>
          <div>
            <Typography variant="h6" className={classes.status}>
              {status ? "Done" : "Coming Up"}
            </Typography>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>

            <div className={classes.itemSection}>
              <div className={classes.itemWrapper}>
                <ListWithIcon content={location}>
                  <RoomIcon className={classes.itemIcon} />
                </ListWithIcon>
                <ListWithIcon
                  content={`${dateConverted}, at ${timeConverted} WIB`}
                >
                  <EventRoundedIcon className={classes.itemIcon} />
                </ListWithIcon>
              </div>
              <div>
                {!cardButton && !canEdit && (
                  <Button
                    className={classes.buttonView}
                    fullWidth={buttonSize}
                    typebutton="link-dom"
                    link={`/p/${id}`}
                    color="primary"
                  >
                    View
                  </Button>
                )}
              </div>
            </div>
            {canEdit && <EditableMenu />}
          </div>
        </CardContent>
      </div>
    </Card>
  );

  return (
    <>
      <AlertDelete />
      {cardButton ? (
        <CardActionArea>
          <CardWithContent />
        </CardActionArea>
      ) : (
        <CardWithContent />
      )}
    </>
  );
};

CardItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.bool,
  title: PropTypes.string,
  location: PropTypes.string,
  time: PropTypes.string,
  cardButton: PropTypes.bool,
  canEdit: PropTypes.bool,
  img: PropTypes.string,
  date: PropTypes.string,
};

CardItem.defaultProps = {
  id: "",
  className: "",
  status: false,
  title: "",
  location: "",
  time: "",
  cardButton: false,
  canEdit: false,
  img: "",
  date: "",
};

export default CardItem;
