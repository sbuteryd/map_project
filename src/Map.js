import React ,{Component}from 'react'
import ReactDom from 'react-dom'

class CreateMap extends Component{
    state = {
        getDate:[]
    }
    componentDidMount(){
        // this.displayMap()
        this.getApidate()
    }

    getApidate = () =>{
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR&client_secret=CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0&v=20182507&limit=10&ll=40.7413549,-73.9980244&query=food')
            .then(function(response) {
                // Code for handling API response
                return response.json()
            }).then((date) => (
            this.setState({
                getDate:date.response.groups[0].items
            },this.displayMap())
        ));
    }
    displayMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM&v=3&callback=initMap")
        window.initMap = this.initMap
    }

    initMap = () => {
        const map = new  window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7413549, lng: -73.9980244},
            zoom: 13
        })
        // console.log(content.venue.location.lat)
        const inforwindow = new window.google.maps.InfoWindow()
        this.state.getDate.map((content) =>{
            let markerContent = `${content.venue.name}`
            let marker = new window.google.maps.Marker({
                map:map,
                position:{lat:content.venue.location.lat,lng:content.venue.location.lng}
            })
            marker.addListener('click',function () {
                inforwindow.setContent(markerContent);
                inforwindow.open(map,marker)
            })
        })
    }
    render(){
        return(
            <div>
                <div id='map'></div>
            </div>

        )
    }
}


function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
}

export default CreateMap