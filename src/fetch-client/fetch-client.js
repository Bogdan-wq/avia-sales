export default class FetchClient {

    searchRequest = 'https://front-test.beta.aviasales.ru/search'

    ticketsRequest = `https://front-test.beta.aviasales.ru/tickets?searchId=`

    getTickets = () => {
        return fetch(this.searchRequest)
            .then((res) => res.json())
            .then(({searchId}) => searchId)
            .then((searchId) => {
                return fetch(`${this.ticketsRequest}${searchId}`)
                    .then((res) => res.json())
            })
    }
}
