import React ,{Component}from 'react'
import ReactDom from 'react-dom'
import escapeRegExp from 'escape-string-regexp'
class CreateMap extends Component{
    state = {
        getDate:[],
        query:'',
        markerList:[],
        map:''
    }
    componentDidMount(){
        // this.displayMap()
        this.getApidate()
    }

    getApidate = (serList) =>{
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR&client_secret=CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0&v=20182507&limit=5&ll=40.7413549,-73.9980244&query=food')
            .then(function(response) {
                // Code for handling API response
                return response.json()
            }).then((date) => (
            this.setState({
                getDate:date.response.groups[0].items
            },this.displayMap())
        ))
    };
    displayMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM&v=3&callback=initMap")
        window.initMap = this.initMap
    };

    initMap = () => {
        // let markerList=[];
         let getDatelist = this.state.getDate;

        const map = new  window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7413549, lng: -73.9980244},
            zoom: 13
        });
        let inforwindow = new window.google.maps.InfoWindow();
        console.log(this.state.getDate.length);
        for(let i =0;i<getDatelist.length;i++){
            // let markerContent = `${getDatelist[i].venue.name}`;
            let marker = new window.google.maps.Marker({
                title:getDatelist[i].venue.name,
                map:map,
                position:{lat:getDatelist[i].venue.location.lat,lng:getDatelist[i].venue.location.lng}
            });
            this.state.markerList.push(marker);
            marker.addListener('click',function () {
                if(inforwindow.marker !== marker) {
                    inforwindow.marker = marker;
                    inforwindow.setContent("<div>" + marker.title + "</div>");
                    inforwindow.open(map,marker)
                }
            })

        }

        this.setState({
            map
        })
    };

    searchFor = (query) =>{
        this.setState(({
            query
        }))
    };

    // displayMarker = ()=>{
    //     this.setState((state)=>({
    //         markerList:this.state.markerList.map((some) => some.setMap(this.state.map))
    //     }))
    //
    // }



    render(){
        let filterInput;
        let serList;
        if(this.state.query){
            // let getMarkerList =[]
            const match = RegExp(escapeRegExp(this.state.query),'i')
            filterInput = this.state.getDate.filter((content) =>  match.test(content.venue.name))
            let newList = this.state.markerList.filter((some)=>  match.test(some.title))

            // this.displayMarker()
        }else {
            filterInput = this.state.getDate
        }
        return(
            <div>
                <input type="text"
                       value={this.state.query}
                       onChange={(event)=> this.searchFor(event.target.value)}
                />
                <ul id='name_list'>
                    {filterInput.map((name)=>(
                        <li key={name.venue.id}>{name.venue.name}</li>
                    ))}
                </ul>
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