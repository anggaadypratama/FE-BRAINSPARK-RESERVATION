import React, { useState } from "react";
import { ListCard } from "@components";
import { useQuery } from "react-query";
import { getAllEventWithAuth } from "@services/index";

import ListDataEventStyle from "./style";

const ListEvent = () => {
  const classes = ListDataEventStyle();

  const [isFinished, setFinished] = useState(0);

  const params = {
    isFinished,
  };

  const { data: dataEvent, isLoading } = useQuery(["event", params], () =>
    getAllEventWithAuth(params)
  );

  const dataFilter = dataEvent?.data;

  const data = ["All Events", "Done"];

  const handleChangeFilter = (e) => {
    setFinished(e);
  };

  return (
    <ListCard
      dataFilter={data}
      cardData={dataFilter}
      className={classes.listcard}
      hasFilter
      canEdit
      onChange={handleChangeFilter}
      filterState={isFinished}
      lg={4}
      md={6}
      sm={12}
      isLoading={isLoading}
    />
  );
};

export default ListEvent;
