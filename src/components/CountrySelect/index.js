import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    "&:before": {
      borderColor: "transparent",
      backgroundColor: "transparent"
    },
    "&:after": {
      borderColor: "transparent",
      backgroundColor: "transparent"
    }
  }
}));

const Empty = () => {
  return <></>;
};

const JumpingDots = () => {
  return (
    <span className="jumping-dots">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </span>
  );
};

const CountrySelect = ({ onChange }) => {
  const classes = useStyles();

  return (
    <div className="flex-container">
      <p style={{ fontSize: "1.5rem" }}>What country is </p>
      <FormControl className={classes.formControl}>
        <Select
          id="select"
          className={classes.selectEmpty}
          onChange={onChange}
          displayEmpty
          defaultValue=""
          IconComponent={Empty}
          disableUnderline={true}
        >
          <MenuItem value="" disabled>
            <JumpingDots />
          </MenuItem>
          <MenuItem value="Gdp">the richest?</MenuItem>
          <MenuItem value="GdpPerCapita">the richest per capita?</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default CountrySelect;
