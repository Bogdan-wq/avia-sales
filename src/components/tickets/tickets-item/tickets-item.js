import React from 'react'

const TicketItem = ({itemTicket}) => {
    const { price, carrier, segments} = itemTicket;

    const roundUp = segments.map((itemCity) => {
        const { origin, destination, duration, stops } = itemCity;

        let transferLabels;

        switch (stops.length) {
            case 0:
                transferLabels = 'пересадок';
                break;
            case 1:
                transferLabels = 'пересадка';
                break;
            case 2:
            case 3:
                transferLabels = 'пересадки';
                break;
            default:
                transferLabels = 'пересадки';
                break;
        }

        const hoursNeeded = Math.floor(duration / 60);

        const minutesNeeded = Math.round(duration % 60);


        return (
            <div className="tickets-item__round-up" key={Math.random()}>
                <div className="tickets-item__info">
                    <span className="tickets-item__label">{origin} - {destination}</span>
                    <span className="tickets-item__value">10:45 - 08:00</span>
                </div>
                <div className="tickets-item__info">
                    <span className="tickets-item__label">В пути</span>
                    <span className="tickets-item__value">{hoursNeeded}ч {minutesNeeded}м</span>
                </div>
                <div className="tickets-item__info">
                    <span className="tickets-item__label">{`${stops.length} ${transferLabels}`}</span>
                    <span className="tickets-item__value">{stops.join(',')}</span>
                </div>
            </div>
        )
    })

    return (
        <div className="tickets__item tickets-item">
            <div className="tickets-item__header">
                <span className="tickets-item__price">{price} Р</span>
                <img className="tickets-item__image" src={`http://pics.avs.io/99/36/${carrier}.png`}/>
            </div>
            <div className="tickets-item__body">
                {roundUp}
            </div>
        </div>
    )
}

export default TicketItem;