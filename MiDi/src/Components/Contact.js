import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import MapView,{ PROVIDER_GOOGLE } from 'react-native-maps';

import phoneIcon from '../media/phone.png';
import mailIcon from '../media/mail.png';
import locationIcon from '../media/location.png';

class Contact extends Component {

    render() {
      mapStyle =  [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#263c3f"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6b9a76"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#38414e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#212a37"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9ca5b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#1f2835"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3d19c"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2f3948"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#515c6d"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      }
      ]
        const {
            mapContainer, infoContainer,
            rowInfoContainer, imageStyle, infoText,map
        } = styles;
        return (
                <View style={mapContainer}>
                    <MapView
                        style={map}
                        customMapStyle={mapStyle}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: 10.809658,
                            longitude: 106.714829,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: 10.809658, longitude: 106.714829 }}
                            title="TVT Shop"
                            description="TVT Shop Giày Dép"
                        />
                    </MapView>
                    <View style={infoContainer}>
                        <View style={{alignItems:'center'}}>
                            <Text style={infoText}>TVT Shop</Text>
                            <Text style={infoText}>31/36 Ung Văn Khiêm, P.25, Bình Thạnh, TP.HCM</Text>
                        </View>
                        <View style={rowInfoContainer}>
                            <Image source={phoneIcon} style={imageStyle} />
                            <Text style={infoText}>(+84) 911380885</Text>
                        </View>
                        <View style={rowInfoContainer}>
                            <Image source={mailIcon} style={imageStyle} />
                            <Text style={infoText}>gavayban108@gmail.com</Text>
                        </View>
                    </View>
                </View>
        );
    }
}

const { width,height } = Dimensions.get('window');
const styles = StyleSheet.create({
    mapContainer: {
        alignSelf: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        justifyContent:'flex-end'
    },
    map: {
      top:0,
      left:0,
      bottom:0,
      right:0,
      position:'absolute'
    },
    infoContainer: {
        padding: 10,
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        height: height/5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width:width,
    },
    rowInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        fontFamily: 'Avenir',
        color: 'whitesmoke',
        fontWeight: '500'
    }
});

export default Contact;
