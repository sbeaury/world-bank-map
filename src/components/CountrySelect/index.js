import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";

const useStyles = makeStyles(theme => ({
  formControl: {
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

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;

const StyledSelect = styled(Select)`
  margin-right: 0;
`;

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
    <Container>
      <Title>What country is </Title>
      <FormControl className={classes.formControl}>
        <StyledSelect
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
        </StyledSelect>
      </FormControl>
    </Container>
  );
};

export default CountrySelect;
