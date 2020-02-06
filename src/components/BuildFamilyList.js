
import React from 'react';
import './styles/BuildFamilyList.scss';

class BuildFamilyList extends React.Component{
    
    render(){
        const familyMembers = this.props.familyList.map(member => (
            <div key={member.id}>Family Member: {member.type}</div>
        ));
        const adultCount = this.props.familyList.filter(member => {
            return member.type==='adult';
        });
        const childCount = this.props.familyList.filter(member => {
            return member.type==='child';
        });
        return(
            <div className="build-family-list">
                <h1>How many family members are travelling?</h1>
                <div className="ui container" style={{marginTop:'30px'}}>
                    <div className="add-buttons">
                        <div className="selector adult-selector">
                            <h3>Adults:</h3>
                            <button className="ui button" onClick={() => this.props.removeMember('adult')}><i className="icon minus"></i></button>
                            <h3 style={{display:'inline-block', margin:'0 1em'}}>{adultCount.length}</h3>
                            <button className="ui button" onClick={() => this.props.addMember('adult')}><i className="icon plus"></i></button>
                        </div>
                        <div className="selector child-selector">
                            <h3>Children:</h3>
                            <button className="ui button" onClick={() => this.props.removeMember('child')}><i className="icon minus"></i></button>
                            <h3 style={{display:'inline-block', margin:'0 1em'}}>{childCount.length}</h3>
                            <button className="ui button" onClick={() => this.props.addMember('child')}><i className="icon plus"></i></button>
                        </div>
                    </div>
                    <div className="family-members" style={{display:'inline-block', verticalAlign:'top'}}>
                        {familyMembers}
                    </div>
                </div>
            </div>
        );
    }
}

export default BuildFamilyList;