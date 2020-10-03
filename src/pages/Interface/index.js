import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './styles.css';


export class MapContainer extends Component {

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyCKCZGl_Oats6IWL51Lx2pDxAMyN22lSMs',
  }
))(MapContainer)