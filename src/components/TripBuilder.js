import React from 'react';
import BuildFamilyList from './BuildFamilyList';
import DiaperSituation from './DiaperSituation';
import DateSelector from './DateSelector';
import LocationSelector from './LocationSelector';
import { connect } from 'react-redux';
import './styles/TripBuilder.scss';

class TripBuilder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            pageCount: 4
        }
    }

    returnChildList = () => {
        return this.props.familyList.filter(member => {
            return member.type === 'child';
        });
    }

    render(){
        return(
            <div className="ui container">
                {(() => {
                    switch(this.state.currentPage) {
                    case 1:
                        return (
                            <BuildFamilyList />
                        );
                    case 2:
                        return (
                            <DiaperSituation
                                childList={this.returnChildList()}
                            />
                        );
                    case 3:
                        return (
                            <DateSelector
                                tripStartDate={this.props.tripStartDate}
                                tripEndDate={this.props.tripEndDate}
                                onDatesChange={this.props.onDatesChange}
                            />
                        );
                    case 4:
                        return (
                            <LocationSelector /> 
                            
                        );
                    default:
                        return null;
                    }
                })()}
                <div className="nav-wrapper">
                    <div className="ui buttons">
                        <button 
                            disabled={(this.state.currentPage < 2)} 
                            className="ui labeled icon button btn-back" 
                            onClick={() => {
                                //skip diaper page if no children are traveling
                                ((this.state.currentPage===3 && this.returnChildList().length) || this.state.currentPage!==3) ? this.setState({currentPage: this.state.currentPage-1}) : this.setState({currentPage: this.state.currentPage-2})
                            }}
                        >
                            <i className="left chevron icon"></i>
                            Back
                        </button>
                        <button 
                            disabled={(this.state.currentPage === this.state.pageCount)} 
                            className="ui right labeled icon button btn-next" 
                            onClick={() => {
                                //skip diaper page if no children are traveling
                                ((this.state.currentPage===1 && this.returnChildList().length) || this.state.currentPage!==1) ? this.setState({currentPage: this.state.currentPage+1}) : this.setState({currentPage: this.state.currentPage+2})
                            }}
                        >
                            Next
                            <i className="right chevron icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        familyList: state.familyMembers
    }
}

export default connect(mapStateToProps)(TripBuilder);