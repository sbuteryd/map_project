import React ,{Component}from 'react'
import ReactDom from 'react-dom'

class CreateMap extends Component{
    componentDidMount(){
        this.displayMap()
    }
    displayMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM&v=3&callback=initMap")
        window.initMap = this.initMap
    }
    initMap = () => {
        var map = new  window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7413549, lng: -73.9980244},
            zoom: 13
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