import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import { setFilter } from '../actions/filterActions';
import '../styles/FiltersList.css';

class FiltersList extends React.Component {

  handleCheck = (e) => {
    this.props.setFilter(e.target.name, e.target.value);
  };

  render() {
    return (
      <div className="filtersList">
        <List>
          <Subheader className="subheader">Search by:</Subheader>
          <ListItem 
            className="listItem"
            primaryText="Price"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="< $100" name="priceRange" value="<100" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$100 - $150" name="priceRange" value="100-150" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$150 - $200" name="priceRange" value="150-200" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="$200 >" name="priceRange" value="250>" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Brand"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="CompuArt" name="brand" value="compuart" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="sam" name="brand" value="sam" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="anam" name="brand" value="anam" onCheck={this.handleCheck} />,
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Color"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Unfinished" name="color" value="Unfinished" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="White" name="color" value="white" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Grey" name="color" value="grey" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Thickness"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="16mm" name="thickness" value="16" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="8mm" name="thickness" value="8" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="10mm" name="thickness" value="10" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="25mm" name="thickness" value="25" onCheck={this.handleCheck} />
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Face Dimension"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="1220x813" name="faceDimensions" value="1220x813" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="1220x1220" name="faceDimensions" value="1220x1220" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="610x610" name="faceDimensions" value="610x610" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="2439x1220" name="faceDimensions" value="2439x1220" onCheck={this.handleCheck} />,
            ]}
          />
          <ListItem 
            className="listItem"
            primaryText="Design Continuity"
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox className="checkbox" label="Length side" name="designContinuity" value="length_side" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="All sided" name="designContinuity" value="All-sided" onCheck={this.handleCheck} />,
              <Checkbox className="checkbox" label="Width side" name="designContinuity" value="width_side" onCheck={this.handleCheck} />
            ]}
          />
        </List>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filterType, filter) => dispatch(setFilter(filterType, filter))
});

export default connect(null, mapDispatchToProps)(FiltersList);