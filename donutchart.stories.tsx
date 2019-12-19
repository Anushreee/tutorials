import "@scuf/common/honeywell-dark/theme.css";
import "@scuf/charts/honeywell-dark/theme.css";
import { config } from "./config/donutchart.stories.config";
import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from "@scuf/common";
import KPIDonut from "../src/components/KPIDonutChart/KPIDonut";

const stories = storiesOf("KPIDonutChart", module);

stories.add("Default View", () => {
  return (
    <React.Fragment>
      <Grid>
        <Grid.Row>
          {config.map((each, index) => {
            return (
              <Grid.Column
                key={index + 123}
                mWidth={6}
                width={each.styles.columnWidth === 2 ? 2 : 3}
                sWidth={12}
              >
                <KPIDonut
                  data={each.donutValues}
                  size={each.styles.width}
                  innerSize={each.styles.innerSize}
                  colors={each.styles.colors}
                  borderWidth={each.styles.borderWidth}
                  legendEnabled={each.styles.legendEnabled}
                  centerBlockData={each.centerBlockData}
                />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
});