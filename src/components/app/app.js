import React,{Component} from 'react';
import LeftTogglers from "../left-togglers";
import TopTogglers from "../top-togglers";
import Tickets from "../tickets";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import '../../common-styles/common.scss'
import './app.scss';

import FetchClient from "../../fetch-client";


import logo from '../../images/logo.png';


export default class App extends Component {

    fetchClient = new FetchClient();


    state = {
        base:null,
        error:false,
        priority:'price',
        filters:{
            all:true,
            noTransfer:false,
            oneTransfer:false,
            twoTransfer:false,
            threeTransfer:false,
        }
    }

    componentDidMount() {
        this.fetchClient.getTickets()
            .then((res) => {
                const { tickets } = res;
                this.setState({
                    base:tickets
                })
            })
            .catch(() => this.setState({
                error:true,
                base:null,
            }))
    }




    onSwitchPriority = (priority) => {
        this.setState({ priority })
    }


    onToggleFilters = (key,isChecked) => {

        this.setState( {
            filters:{
                ...this.state.filters,
                [key]:isChecked
            }
        })
    }


    render() {

        const { error , base, priority, filters } = this.state;

        const errorIndicator = !error && !base ? <Spinner/> : null;

        const loadingIndicator = error && !base ? <ErrorIndicator/> : null;


        const content = !error && base
            ? <Tickets base={base} filters={filters} priority={priority}/>
            : null;




        return (
            <div className="app">
                <div className="app__logo">
                    <img src={logo} alt="Logo"/>
                </div>
                <div className="app__content">
                    <div className="app__left left-widget">
                        <LeftTogglers onToggleFilters={this.onToggleFilters}/>
                    </div>
                    <div className="app__right right-widget">
                        <TopTogglers onSwitchPriority={this.onSwitchPriority}/>
                        {errorIndicator}
                        {loadingIndicator}
                        {content}
                    </div>
                 </div>
            </div>
        )
    }
}