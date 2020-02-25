import React from "react";
import { connect } from "react-redux";
import { itemsListAdult, itemsListChild } from "../itemsList.js";
import "./styles/PackingList.scss";

class PackingList extends React.Component {
  renderListItems = familyMember => {
    let listCategories = [];
    let listObject = null;
    if (familyMember.type === "adult") {
      listObject = JSON.parse(JSON.stringify(itemsListAdult));
    } else {
      listObject = JSON.parse(JSON.stringify(itemsListChild));
    }
    Object.keys(listObject).forEach(categoryName => {
      let listOfItems = [];
      Object.keys(listObject[categoryName]).forEach(childItemName => {
        let multiplier = 1;
        switch (categoryName) {
          case "Clothing Daily":
          case "clothing_daily":
          case "Bathroom Daily":
          case "bathroom_daily":
            //1 for every 1 day
            multiplier = this.props.numDays;
            break;
          case "Clothing Supplemental":
            //1 for every 3 days
            multiplier = Math.ceil(this.props.numDays / 3);
            break;
          default:
            break;
        }
        //diapers
        if (familyMember.type === "child") {
          if (familyMember.diapers === "diapers") {
            listObject["bathroom_daily"]["pullups"] = 0;
            listObject["clothing_daily"]["underwear"] = 0;
          }
          if (familyMember.diapers === "pullups") {
            listObject["bathroom_daily"]["diapers"] = 0;
            listObject["clothing_daily"]["underwear"] = 0;
          }
          if (familyMember.diapers === "combo") {
            listObject["bathroom_daily"]["diapers"] = 0;
          }
          if (familyMember.diapers === "underwear") {
            listObject["bathroom_daily"]["diapers"] = 0;
            listObject["bathroom_daily"]["pullups"] = 0;
          }
        }
        let numItems = listObject[categoryName][childItemName] * multiplier;
        if (numItems > 0) {
          listOfItems.push(
            <label>
              <input type="checkbox" value={childItemName} />
              &nbsp;{numItems} {childItemName}
            </label>
          );
        }
      });
      listCategories.push(
        <div>
          <h5 className="item-category">{categoryName}</h5>
          <div className="item-list">{listOfItems}</div>
        </div>
      );
    });
    console.log(listCategories);
    return listCategories;
  };

  renderFamilyList = () => {
    return this.props.familyMembers.map(familyMember => {
      if (familyMember.type === "adult") {
        return (
          <div className="family-member-list">
            <h3>Adult:</h3>
            {this.renderListItems(familyMember)}
          </div>
        );
      } else {
        return (
          <div className="family-member-list">
            <h3>Child:</h3>
            {this.renderListItems(familyMember)}
          </div>
        );
      }
    });
  };

  render() {
    return (
      <div className="ui container packing-list">{this.renderFamilyList()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    familyMembers: state.familyMembers,
    numDays: state.numDays
  };
};

export default connect(mapStateToProps)(PackingList);
