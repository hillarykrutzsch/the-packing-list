import React from 'react';
import { connect } from 'react-redux';
import { updateDiaperSituation } from '../actions';

class DiaperSituation extends React.Component{
    render(){
        const childList = this.props.childList.map((member, index) => (
            <div key={member.id} style={{display:'inline-block'}}>
                <h2>Child {index+1}</h2>
                <h4>Current diaper status:</h4>
                <div className="ui form">
                    <div className="grouped fields">
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name={'diaper_child_'+(index+1)} 
                                    value='diapers' 
                                    checked={member.diapers === 'diapers'} 
                                    onChange={(e) => this.props.updateDiaperSituation(e.target.value, member.id)}
                                />
                                <label>Fulltime diapers</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name={'diaper_child_'+(index+1)} 
                                    value='pullups' 
                                    checked={member.diapers === 'pullups'} 
                                    onChange={(e) => this.props.updateDiaperSituation(e.target.value, member.id)}
                                />
                                <label>Fulltime pull-ups</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name={'diaper_child_'+(index+1)} 
                                    value='combo' 
                                    checked={member.diapers === 'combo'} 
                                    onChange={(e) => this.props.updateDiaperSituation(e.target.value, member.id)}
                                />
                                <label>Nighttime pull-ups + daytime underwear</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name={'diaper_child_'+(index+1)} 
                                    value='underwear' 
                                    checked={member.diapers === 'underwear'} 
                                    onChange={(e) => this.props.updateDiaperSituation(e.target.value, member.id)}
                                />
                                <label>Totally potty-trained!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));
        return (
            <div style={{margin: '1em 0', padding: '1em'}}>
                <h1 style={{textAlign:'center'}}>What is your current diaper situation: </h1>
                {childList}
            </div>
        );
    }
}

export default connect(null, { updateDiaperSituation })(DiaperSituation);