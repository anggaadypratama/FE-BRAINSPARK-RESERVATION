import React
, { useState }
  from 'react';
import { Button } from '@components/';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FilterStyle from './style';

const Filter = ({ data, onChange }) => {
  const classes = FilterStyle();

  const [active, isActive] = useState(0);

  const dataMap = data.map((name) => ({
    name,
    status: false,
  }));

  const handleOnclick = (index) => {
    isActive(index);
    onChange(index);
  };

  return (
    <div className={classes.filter}>
      {
        dataMap.map((val, index) => (
          <Button
            variant={active === index ? 'contained' : 'outlined'}
            onClick={() => handleOnclick(index)}
            className={
              classNames(
                classes.buttonAction,
                active === index && classes.buttonActionActive,
              )
            }
          >
            {active === index && <DoneOutlinedIcon />}
            <span className={classes.buttonName}>{val.name}</span>
          </Button>
        ))
      }
    </div>
  );
};

Filter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
