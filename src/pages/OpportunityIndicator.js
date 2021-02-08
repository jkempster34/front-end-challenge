import React, { useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import Slider from "../components/Slider/Slider";
import styles from "./OpportunityIndicator.module.scss";
import efficiency from "../assets/icons/efficiency.svg";
import innovation from "../assets/icons/innovetion.svg";
import brand from "../assets/icons/brand.svg";
import custom from "../assets/icons/custom.svg";
import Summary from "../components/Summary/Summary";

const OpportunityIndicator = () => {
  const [officeArea, setOfficeArea] = useState(0);

  const onSetOfficeArea = (event) => {
    setOfficeArea(event.target.value);
  };

  return (
    <div>
      <h1 className={styles.heading}>Opportunity Indicator</h1>
      <p className={styles.intro}>
        Welcome to the Opportunity Indicator – our handy tool to help you
        estimate the amount of space you need, typical project costs and the
        benefits your project could deliver. To use the Opportunity Indicator,
        simply input the information for your project below. You can then select
        the scenario which best fits your project by clicking on the appropriate
        box below, or create your own custom scenario using the slider bars.
      </p>
      <div className={styles.inputContainer}>
        <Input
          unit="sqm"
          title="Current Office Area"
          onChange={onSetOfficeArea}
        />
        <Input title="Current Headcount" />
        <Input title="Anticipated Headcount" />
        <Input title="TODO dropdown" />
      </div>
      <h2>Select a scenario</h2>
      <div className={styles.scenarioContainer}>
        <div className={styles.selectionContainer}>
          <div className={styles.buttonContainer}>
            <Button
              title="Aim for eficiency and productivity"
              icon={efficiency}
              iconDescription="alarm clock"
            />
            <Button
              selected={true}
              title="Aim for innovation and collaboration"
              icon={innovation}
              iconDescription="collaborative logo"
            />
            <Button
              title="Aim for talent and brand"
              icon={brand}
              iconDescription="fingerprint"
            />
            <Button
              title="Custom scenario"
              icon={custom}
              iconDescription="settings cog"
            />
          </div>
          <Summary officeArea={officeArea} />
        </div>
        <div>
          <Slider
            title="In our future workplace work will be conducted"
            from="Anywhere at anytime"
            to="Mainly from the ofice"
          />
          <Slider
            title="Our future workplace will"
            from="Provide a diferentiating experience"
            to="Provide the necessities"
          />
          <Slider
            title="In our future workplace work will be conducted"
            from="Depends on activity or need"
            to="Depends on title and position"
          />
        </div>
      </div>
    </div>
  );
};

export default OpportunityIndicator;
