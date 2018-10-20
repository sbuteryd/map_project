import React ,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapCreate extends Component{
    state= {
        place:[
            {title:'厦门图书馆',location:{lat:24.489111,lng:118.108976}},
            {title:'厦门博物馆',location:{lat:24.490944,lng:118.109159}},
            {title:'厦门科技馆',location:{lat:24.490618,lng:118.108244}},
            {title:'厦门市体育中心',location:{lat:24.486374,lng:118.108563}},
            {title:'厦门工人体育馆',location:{lat:24.489698,lng:118.111495}},
        ]
    }
    render(){
        return(
            <div>
                <input className='search-contacts' type="text"
                />
                <div id='map'>
                    <Map google={this.props.google}
                      initialCenter={{lat:24.479833,lng:118.089425}}
                      zoom={14}>
                     <Marker
                         title={'russell'}
                         position={{lat:24.489111,lng:118.108976}}
                      />
                     </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM')
})(MapCreate)