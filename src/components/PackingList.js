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
                //need logic for multiplying category item by numberOfDays or fraction of numDays

                listOfItems.push((<li>{childItemName}:{listObject[categoryName][childItemName]*this.props.numDays}</li>));
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