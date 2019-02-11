import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import AccommodationCard from "../AccommodationCard/AccommodationCard";
import { accommodations } from "../../common/accommodations";

const styles = {
  cardGrid: {
    padding: 8,
  },
};

class Accommodations extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <main>
          <Grid container spacing={24} className={this.props.classes.cardGrid}>
            {accommodations.map((accommodation, index) => (
              <AccommodationCard accommodation={accommodation} key={index} />
            ))}
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Accommodations);
