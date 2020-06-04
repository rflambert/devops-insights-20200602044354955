import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMapsContainer extends Component {
    constructor(props){
        super(props);

        this.state = {  
            cities: [{name: 'Auckland', lat: -36.849, lng: 174.763},
                    {name: 'Wellington', lat: -41.287, lng: 174.776},
                    {name: 'Christchurch', lat: -43.532, lng: 172.636}]
        }
    }

    markers = () => {
        return this.state.cities.map((city, index) => {
            return <Marker 
            key={index} 
            id={index} 
            position={{
                lat: city.lat,
                lng: city.lng
            }}
            onClick={() => {this.props.onMarkerSelect(city.name)}}/>
        })
    }

    render(){
        return (
            <Map
            google={this.props.google}
            disableDefaultUI={true}
            gestureHandling={'none'}
            zoomControl={false}
            zoom={5}
            containerStyle={{
                width: '100%',
                height: '400px',
                position: 'relative'
            }}
            initialCenter={{ lat: -40.9006, lng: 174.886}}>
                {this.markers()}
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8i9b2LQac2ZJmDonD0Pk9Dj_WwMuLoog'
})(GoogleMapsContainer);