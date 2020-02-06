import React from 'react';
import {itemsListAdult, itemsListChild} from '../itemsList.js';

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
                    case "clothing_daily":
                    case "bathroom_daily":
                        //1 for every 1 day
                        multiplier = this.props.numDays;
                    break;
                    case "clothing_supplemental":
                        //1 for every 3 days
                        multiplier = Math.ceil(this.props.numDays / 3);
                    break;   
                }
                listOfItems.push((<li>{listObject[categoryName][childItemName]*multiplier} {childItemName}</li>));
            });
            listCategories.push((
                <div>
                    <h5>{categoryName}</h5>
                    <ul>{listOfItems}</ul>
                </div>
            ));
        });
        return listCategories;
    }

    renderFamilyList = () => {
        return this.props.familyList.map((familyMember) => {
            if(familyMember.type == 'adult'){
                return (
                    <div>
                        <h3>Adult:</h3> 
                        {this.state.adultCategories}
                    </div>
                );
            }
            else{
                return (
                    <div>
                        <h3>Child:</h3>
                        {this.state.childCategories}
                    </div>
                );
            }
        });
    }

    render(){
        return (
            <div className="ui container">
                {this.renderFamilyList()}
            </div>
        );
    }
}

export default PackingList;