import React ,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapCreate extends Component{
    state= {
        place:[
            {title:'Library',location:{lat:24.489111,lng:118.108976}},
            {title:'Museum',location:{lat:24.490944,lng:118.109159}},
            {title:'Science and Technology Museum',location:{lat:24.490618,lng:118.108244}},
            {title:'Sports Center',location:{lat:24.486374,lng:118.108563}},
            {title:'Workers Stadium',location:{lat:24.489698,lng:118.111495}},
        ]
    }
    render(){
        return(
            <div>
                <div>
                    <input className='search-contacts' type="text"
                    />
                    <ul>
                        {this.state.place.map((content)=>(
                            <li key={content.title}>{content.title}</li>
                        ))}
                    </ul>
                </div>
                <div id='map'>
                    <Map google={this.props.google}
                      initialCenter={{lat:24.479833,lng:118.089425}}
                      zoom={14}>
                     <Marker
                        title={'厦门图书馆'}
                        position={{lat:24.489111,lng:118.108976}}
                    />
                        <Marker
                            title={'厦门博物馆'}
                            position={{lat:24.490944,lng:118.109159}}
                        />
                        <Marker
                            title={'厦门科技馆'}
                            position={{lat:24.490618,lng:118.108244}}
                        />
                        <Marker
                            title={'厦门市体育中心'}
                            position={{lat:24.486374,lng:118.1085636}}
                        />
                        <Marker
                            title={'厦门工人体育馆'}
                            position={{lat:24.489698,lng:118.111495}}
                        />
                     </Map>
                    marker ={}
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM')
})(MapCreate)