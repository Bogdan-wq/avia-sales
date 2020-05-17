import React,{Component} from 'react';
import './left-togglers.scss'

export default class LeftTogglers extends Component {


    state = {
        all:true,
        noTransfer: false,
        oneTransfer: false,
        twoTransfer:false,
        threeTransfer: false
    }


    onChangeFilter = (key,event) => {
        event.persist();
        this.setState({
            ...this.state,
            [key]:event.target.checked
        })

        const isChecked = event.target.checked

        this.props.onToggleFilters(key,isChecked)
    }


    checkboxes = [
        {id:'checkbox-all',label:'Все',keyState:'all'},
        {id:'checkbox-no-transfer',label: 'Без пересадок',keyState:'noTransfer'},
        {id:'checkbox-one-transfer',label:'1 пересадка',keyState:'oneTransfer'},
        {id:'checkbox-two-transfers',label:'2 пересадки',keyState:'twoTransfer'},
        {id:'checkbox-three-transfers',label:'3 пересадки',keyState:'threeTransfer'}
    ]


    render() {

        const checkboxesToJSX = this.checkboxes.map((checkbox) => {
            const { id, label, keyState } = checkbox;
            return (
                <div className="checkboxes__item checkbox-item" key={id}>
                    <input type="checkbox" id={id} className="checkbox-item__input"
                           onChange={(event) => this.onChangeFilter(keyState,event)}
                           checked={this.state[keyState]}/>
                    <label htmlFor={id} className="checkbox-item__label">{label}</label>
                </div>
            )
        })

        return (
            <div className="left-widget__togglers left-togglers">
                <h1 className="left-togglers__title">Количество пересадок</h1>
                <div className="left-togglers__checkboxes checkboxes">
                    {checkboxesToJSX}
                </div>
            </div>
        )
    }
}
