import React ,{Component}from 'react'
import ReactDom from 'react-dom'
import escapeRegExp from 'escape-string-regexp'
class CreateMap extends Component{
    state = {
        original:[],
        getDate:[],
        markersList:[],
        query:'',
        usechose:[]
    }
    componentDidMount(){
        this.getApidate()
    }

    getApidate = (serList) =>{
        fetch('https://api.foursquare.com/v2/venues/explore?client_id=PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR&client_secret=CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0&v=20182507&limit=5&ll=40.7413549,-73.9980244&query=food')
            .then(function(response) {
                // Code for handling API response
                return response.json()
            }).then((date) => (
            this.setState({
                original:date.response.groups[0].items,
                getDate:date.response.groups[0].items
            },this.displayMap())
        ))
            .catch(function (error) {
                alert('Cant not to get map plase content us')
            console.log('Cant not to get map plase content us')
        })
    };
    displayMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM&v=3&callback=initMap")
        window.initMap = this.initMap
    };

    initMap = () => {
         let getDatelist = this.state.getDate;
        const map = new  window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7413549, lng: -73.9980244},
            zoom: 13
        });

        let inforwindow = new window.google.maps.InfoWindow()
        //1 设置marker,在地图上显示5个marker
        // console.log(this.state.getDate[0].venue.name)
        this.state.getDate.map((date) =>{
            let marker = new window.google.maps.Marker({
                map:map,
                position:{lat:date.venue.location.lat,lng:date.venue.location.lng},
                title:date.venue.name,
            })
            //2 添加点击显示地址
            let constent = '<div>'+"crossStreet  "+date.venue.location.crossStreet+'</div>'
            marker.addListener('click',function () {
                inforwindow.setContent(constent)
                inforwindow.open(map,marker)
                this.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(function(){ marker.setAnimation(null) }, 300)
            })
            this.state.markersList.push(marker)
        })

    };
    //4 设置 list and 搜索 设置每个地图显示
    changeUi = (query) =>{
        this.setState({
            query
        })
        this.state.markersList.map((marker)=> marker.setVisible(true))
        let useChose;
        let paperMaker;
        if(query){
            const match = new RegExp(escapeRegExp(query),'i')
            useChose = this.state.original.filter((chose)=> match.test(chose.venue.name))
            this.setState({
                original:useChose
            })
            paperMaker = this.state.markersList.filter((marker) =>
                useChose.every((chose)=> chose.venue.name !== marker.title)
            )
            paperMaker.forEach(marker => marker.setVisible(false))
            this.setState({
                usechose:paperMaker
            })
        }else{
            this.setState({
                original:this.state.getDate
            })
            this.state.markersList.forEach( marker => marker.setVisible(true))
        }

    }
    render(){
        console.log(this.state.query)
        return(
            <div className='container box'>
                <div aria-label ='google map' id='map' className='box'></div>
                <input aria-label ='search bar' className= 'box' type="text"
                       value={this.state.query}
                       onChange={(event)=> this.changeUi(event.target.value)}
                />
                <ul aria-label="Preset list" className='list-name box' >
                    {this.state.original.map((some)=>
                        <li aria-label='Search name' className='name-list' key={some.venue.id}>{some.venue.name}</li>)}
                </ul>
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