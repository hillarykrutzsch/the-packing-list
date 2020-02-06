import React from 'react';
import {itemsListAdult, itemsListChild} from '../itemsList.js';
import './styles/PackingList.scss';

class PackingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            adultCategories:[],
            childCategories:[]
        }
    }

    componentDidMount(){
        let adultCategories = this.renderListItems(itemsListAdult);
        let childCategories = this.renderListItems(itemsListChild);
        this.setState({ adultCategories, childCategories });
    }

    renderListItems = (listObject) => {
        let listCategories = [];
        Object.keys(listObject).forEach(categoryName=>{
            let listOfItems = [];
            Object.keys(listObject[categoryName]).forEach(childItemName=>{
                let multiplier = 1;
                switch(categoryName){
                    case "Clothing Daily":
                    case "Bathroom Daily":
                        //1 for every 1 day
                        multiplier = this.props.numDays;
                    break;
                    case "Clothing Supplemental":
                        //1 for every 3 days
                        multiplier = Math.ceil(this.props.numDays / 3);
                    break;   
                }
                listOfItems.push((
                    <label>
                        <input type="checkbox" value={childItemName} />
                        &nbsp;{listObject[categoryName][childItemName]*multiplier} {childItemName}
                    </label>
                ));
            });
            listCategories.push((
                <div>
                    <h5 className="item-category">{categoryName}</h5>
                    <div className="item-list">{listOfItems}</div>
                </div>
            ));
        });
        return listCategories;
    }

    renderFamilyList = () => {
        return this.props.familyList.map((familyMember) => {
            if(familyMember.type == 'adult'){
                return (
                    <div className="family-member-list">
                        <h3>Adult:</h3> 
                        {this.state.adultCategories}
                    </div>
                );
            }
            else{
                return (
                    <div className="family-member-list">
                        <h3>Child:</h3>
                        {this.state.childCategories}
                    </div>
                );
            }
        });
    }

    render(){
        return (
            <div className="ui container packing-list">
                {this.renderFamilyList()}
            </div>
        );
    }
}

export default PackingList;