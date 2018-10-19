import React ,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapCreate extends Component{
    render(){
        return(
            <div>
                <Map google={this.props.google}
                     style={{bottom:'0px',height: '100%',left: '362px',position: 'absolute',right: '0px',}}
                     initialCenter={{lat:24.479833,lng:118.089425}}
                     zoom={14}>
                    <Marker
                        title={'russell'}
                        position={{lat:24.489111,lng:118.108976}}
                    />
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM')
})(MapCreate)