import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin';

const Map = () => {
    const defaultProps = {
        address:"GOMYCODE Nabel",
        center: {
        lat: 36.466746960207935,
        lng: 10.71346430359294
        },
        zoom: 11
    };
    return(
            <div style={{ height: '70vh', width: '70%', margin: 'auto', padding: '39px 0'}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBWxZs3srgQia6_FXS8A3nzHJEGA9WrYlM' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                <LocationPin
                    // lat={defaultProps.lat}
                    // lng={defaultProps.lng}
                    text={defaultProps.address}
                /> 
                </GoogleMapReact>
            </div>
    
    )
}
export default Map
