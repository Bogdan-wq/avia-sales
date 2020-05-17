import React,{Component} from 'react';
import TicketItem from "./tickets-item";
import './tickets.scss';

export default class Tickets extends Component {


    createArrays = (base,condition,stopsLength) => {
        return condition ? base.filter((itemTicket) => {
            const [ there , back ] = itemTicket.segments
            return there.stops.length === stopsLength && back.stops.length === stopsLength;
        }) : []
    }

    onSwitchPriorityItems = (base,param) => {
        switch (param) {
            case 'price':
                return base.filter((itemTicket) => itemTicket.price < 35000)
                break;
            case 'speed':
                return base.filter((itemTicket) => itemTicket.segments[0].duration + itemTicket.segments[1].duration < 2000)
                break;
            default :
                return base;
        }
    }



    onToggleItemsByFilter = () => {
        const { base } = this.props;
        const { all, noTransfer, oneTransfer, twoTransfer, threeTransfer } = this.props.filters;

        if(all) {
            return base;
        } else {
            return [
                ...this.createArrays(base,noTransfer,0),
                ...this.createArrays(base,oneTransfer,1),
                ...this.createArrays(base,twoTransfer,2),
                ...this.createArrays(base,threeTransfer,3),
            ]
        }
    }



    render() {
        const { base } = this.props;
        const ticketItems = base
            ? this.onSwitchPriorityItems(this.onToggleItemsByFilter(),this.props.priority)
                    .map((itemTicket) => <TicketItem itemTicket={itemTicket} key={Math.random()}/>)
            : null

        return (
            <div className="right-widget__tickets tickets">
                {ticketItems}
            </div>
        )
    }
}
