import React,{Component} from 'react';
import './top-togglers.scss';

export default class TopTogglers extends Component {

    state = {
        buttonChosen:'price'
    }

    buttons = [
        {label:'Самый дешёвый',priorityForState:'price'},
        {label:'Самый быстрый',priorityForState:'speed'},
        {label:'Все',priorityForState:'all'}
    ]

    onTogglePriority = (priority) => {
        this.setState({
            buttonChosen:priority
        })
        this.props.onSwitchPriority(priority)
    }



    render() {



        const buttonsToJSX = this.buttons.map((button) => {

            const { label , priorityForState } = button

            const { buttonChosen } = this.state

            const classActive = buttonChosen === priorityForState ? 'button_active' : 'button_nonactive';

            return <button className={`top-togglers__button button ${classActive}`} key={priorityForState}
                           onClick={() => this.onTogglePriority(priorityForState)}>{label}</button>
        })

        return (
            <div className="right-widget__togglers top-togglers">
                {buttonsToJSX}
            </div>
        )
    }
}