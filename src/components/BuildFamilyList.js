
import React from 'react';

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
            <div style={{border: '1px solid black', margin: '1em 0', padding: '1em'}}>
                <h1>How many family members are travelling?</h1>
                <div className="ui container" style={{marginTop:'30px'}}>
                    <div className="add-buttons" style={{marginBottom:'30px'}} style={{display:'inline-block', verticalAlign:'top'}}>
                        <h3>Adults:</h3>
                        <div className="adult-selector">
                            <button className="ui button" onClick={() => this.props.removeMember('adult')}><i className="icon minus"></i></button>
                            <h3 style={{display:'inline-block', margin:'0 1em'}}>{adultCount.length}</h3>
                            <button className="ui button" onClick={() => this.props.addMember('adult')}><i className="icon plus"></i></button>
                        </div>
                        <h3>Children:</h3>
                        <div className="child-selector">
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