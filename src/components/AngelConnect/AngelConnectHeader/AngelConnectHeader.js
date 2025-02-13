import AngelConnectNavbar from '../AngelConnectNavbar/AngelConnectNavbar';
import './AngelConnectHeader.css';
import title from '../../../assets/angelconnect_black.png';
import { Component } from "react";
import { NavHashLink as Link } from 'react-router-hash-link';



export default class AngelConnectHeader extends Component {

    render() {
        return (
            <div className="angel-connect-header">

                <AngelConnectNavbar />
                <div className="angelconnect-header-container" >
                    <div className="angelconnect-header-angelconnecttitle">
                    <img src={title} alt="Angel Connect" width='412' height='232'></img>
                    </div>
                    <div className="angelconnect-header-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis velit augue. Sed ornare massa lobortis luctus vehicula. Donec est odio, venenatis sit amet neque eu, pulvinar commodo sapien.</div>
                    <div className="angelconnect-header-register">
                        <Link className="angelconnect-header-register" to="#" smooth={true} >
                            REGISTER
                        </Link>
                    </div>
                </div>
            </div>

        );
    }
}

