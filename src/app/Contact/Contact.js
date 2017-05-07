import React, {Component} from 'react';

import { Button, Col, Container, Row } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { DirectionsRenderer, GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import withScript from 'react-google-maps/lib/async/withScriptjs';

const Map = withScript(withGoogleMap(props => (
    <GoogleMap defaultZoom={props.zoom}
               defaultCenter={props.center}>
        {props.directions && <DirectionsRenderer directions={props.directions} />}
        <Marker {...props.marker} />
    </GoogleMap>
)));

export default class Contact extends Component {
    static mapProperties = {
        'center': { 'lat': 47.4766945, 'lng': -3.1206535 },
        'zoom': 15,
    };

    static markerPosition = {
        'lat': 47.47954, 'lng': -3.12005,
    };

    constructor(props) {
        super(props);

        this.state = {
            'directions': null,
        };

        this.calcRoute = this.calcRoute.bind(this);
    }

    calcRoute(selectedMode) {
        const directionsService = new google.maps.DirectionsService();

        navigator.geolocation.getCurrentPosition(
            (position) => {
                let request = {
                    'origin': new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    'destination': new google.maps.LatLng(Contact.markerPosition.lat, Contact.markerPosition.lng),
                    'travelMode': google.maps.TravelMode[selectedMode],
                };

                directionsService.route(request, (result, status) => {
                    if (status === 'OK') {
                        this.setState({ 'directions': result });
                    }
                });
            },
            (error) => {
                throw new Error('Can\'t find your location. With this message: ' + error);
            }, {
                'enableHighAccuracy': true,
            });
    }

    render() {
        return (
            <section className="Contact">
                <h1 id="Contact">Contact</h1>

                <Container>
                    <Row tag="article">
                        <Col xs="12" sm="12" md="6" lg="6">
                            <address itemScope
                                     itemType="http://schema.org/Organization">
                                <h2>
                                    <FontAwesome name="envelope-square" /><span className="invisible">&nbsp;</span><strong itemProp="name">Albatros Club de Plage</strong>
                                </h2>

                                <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                    <span itemProp="streetAddress">Grande Plage de Quiberon<br />Boulevard Chanard</span><br />
                                    <span itemProp="postalCode">56170</span><br />
                                    <span itemProp="addressLocality">Quiberon, France</span>
                                </span>

                                <hr />

                                <span className="h3">
                                    <FontAwesome name="phone-square" /> Juillet: <span itemProp="telephone">(+33) 6 61 34 18 64 </span>
                                </span>

                                <br />

                                <span className="h3">
                                    <FontAwesome name="phone-square" /> Août: <span itemProp="telephone">(+33) 6 31 23 39 13 </span>
                                </span>
                            </address>

                            <hr />
                            <iframe allowTransparency="true"
                                    frameBorder="0"
                                    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlbatrosClubDePlage&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=249244798584819"
                                    scrolling="no"
                                    style={{'height': '80px', 'overflow': 'hidden', 'width': '100%', 'border': 'none'}}/>
                        </Col>

                        <Col xs="12" sm="12" md="6" lg="6">
                            <Map center={Contact.mapProperties.center}
                                 containerElement={
                                    <div style={{ 'height': '400px' }} />
                                 }
                                 directions={this.state.directions}
                                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOo7qLSnef87VtxFV-Hm6kPVn5fLM1qaM"
                                 loadingElement={
                                     <div style={{ 'height': '100%' }} />
                                 }
                                 mapElement={
                                     <div style={{ 'height': '100%' }} />
                                 }
                                 marker={{
                                     'draggable': false,
                                     'icon': 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                                     'position': Contact.markerPosition,
                                     'title': 'Club de Plage Albatros',
                                     'visible': true,
                                 }}
                                 zoom={Contact.mapProperties.zoom}
                            />

                            <div className="text-center mt-2">
                                <h2>Nous rejoindre</h2>

                                <p>
                                    <Button className="mx-1" color="primary" onClick={() => this.calcRoute('WALKING')}>À pied</Button>
                                    <Button className="mx-1" color="primary" onClick={() => this.calcRoute('BICYCLING')}>À vélo</Button>
                                    <Button className="mx-1" color="primary" onClick={() => this.calcRoute('DRIVING')}>En voiture</Button>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <footer>
                    <a href="#Partner" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">Partenariat</span></a>
                </footer>
            </section>
        );
    }
}
