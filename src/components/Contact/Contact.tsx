import React from "react";

import {
    Button as BootstrapButton,
    Col as BootstrapCol,
    Container as BootstrapContainer,
    Row as BootstrapRow,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faEnvelopeSquare, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Contact() {
    const mapProperties: { center: google.maps.LatLngLiteral; zoom: number } = {
        center: { lat: 47.4766945, lng: -3.12065358 },
        zoom: 15,
    };
    const markerPosition: google.maps.LatLngLiteral = {
        lat: 47.47954,
        lng: -3.12005,
    };

    // function calcRoute(selectedMode: google.maps.TravelMode) {
    //     navigator.geolocation.getCurrentPosition(
    //         async (position) => {
    //             let request = {
    //                 destination: new google.maps.LatLng(markerPosition.lat, markerPosition.lng),
    //                 origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    //                 travelMode: selectedMode,
    //             };
    //
    //             let result = await directionsService.route(request);
    //             setMap({ ...map, directions: result });
    //         },
    //         (error) => {
    //             throw new Error(
    //                 `Can't find your location.\nError code: ${error.code}\nError message: ${error.message}`,
    //             );
    //         },
    //         {
    //             enableHighAccuracy: true,
    //         },
    //     );
    // }

    return (
        <section className="Contact">
            <h1 id="Contact">Contact</h1>
            <BootstrapContainer>
                <BootstrapRow tag="article">
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="12"
                        xl="6"
                        xs="12"
                    >
                        <address
                            itemScope
                            itemType="http://schema.org/Organization"
                        >
                            <h2>
                                <FontAwesomeIcon icon={faEnvelopeSquare} />
                                &nbsp;
                                <strong itemProp="name">Albatros Club de Plage</strong>
                            </h2>
                            <span
                                itemProp="address"
                                itemScope
                                itemType="http://schema.org/PostalAddress"
                            >
                                <span itemProp="streetAddress">
                                    Grande Plage de Quiberon
                                    <br />
                                    Boulevard Chanard
                                </span>
                                <br />
                                <span itemProp="postalCode">56170</span>
                                <br />
                                <span itemProp="addressLocality">Quiberon, France</span>
                            </span>
                            <hr />
                            <span className="h3">
                                <FontAwesomeIcon icon={faPhoneSquare} />
                                &nbsp;Juillet : <span itemProp="telephone">(+33)6&nbsp;61&nbsp;34&nbsp;18&nbsp;64</span>
                            </span>
                            <br />
                            <span className="h3">
                                <FontAwesomeIcon icon={faPhoneSquare} />
                                &nbsp;Août : <span itemProp="telephone">(+33)6&nbsp;31&nbsp;23&nbsp;39&nbsp;13</span>
                            </span>
                        </address>
                        <hr />
                        {/*<iframe*/}
                        {/*    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"*/}
                        {/*    allowTransparency={true}*/}
                        {/*    src="https://www.facebook.com/plugins/like.php?href=*/}
                        {/*    https%3A%2F%2Fwww.facebook.com%2FAlbatrosClubDePlage&*/}
                        {/*    width=450&*/}
                        {/*    layout=standard&*/}
                        {/*    action=like&*/}
                        {/*    size=large&*/}
                        {/*    show_faces=true&*/}
                        {/*    share=true&*/}
                        {/*    height=80&*/}
                        {/*    appId=249244798584819"*/}
                        {/*    style={{*/}
                        {/*        border: "0 none",*/}
                        {/*        height: "80px",*/}
                        {/*        overflow: "hidden",*/}
                        {/*        width: "100%",*/}
                        {/*    }}*/}
                        {/*    width="80"*/}
                        {/*    height="80"*/}
                        {/*/>*/}
                        {/*<iframe*/}
                        {/*    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAlbatrosClubDePlage&width=450&layout&action&size&share=true&height=35&appId=249244798584819"*/}
                        {/*    width="450"*/}
                        {/*    height="35"*/}
                        {/*    style={{ border: "none", overflow: "hidden" }}*/}
                        {/*    allowFullScreen={true}*/}
                        {/*    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"*/}
                        {/*></iframe>*/}
                    </BootstrapCol>
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="12"
                        xl="6"
                        xs="12"
                    >
                        <GoogleMapsEmbed
                            apiKey="AIzaSyAOo7qLSnef87VtxFV-Hm6kPVn5fLM1qaM"
                            height={400}
                            width="100%"
                            mode="place"
                            q="Brooklyn+Bridge,New+York,NY"
                        />
                        {/*<ApiProvider apiKey={"AIzaSyAOo7qLSnef87VtxFV-Hm6kPVn5fLM1qaM"}>*/}
                        {/*    <Map*/}
                        {/*        defaultCenter={mapProperties.center}*/}
                        {/*        defaultZoom={mapProperties.zoom}*/}
                        {/*        style={{ height: "400px" }}*/}
                        {/*    >*/}
                        {/*        <Marker position={markerPosition} />*/}
                        {/*    </Map>*/}
                        {/*</ApiProvider>*/}
                        {/*<div className="text-center mt-2">*/}
                        {/*    <h2>Nous rejoindre</h2>*/}
                        {/*    <p>*/}
                        {/*        <BootstrapButton*/}
                        {/*            className="mx-1"*/}
                        {/*            color="primary"*/}
                        {/*            onClick={(e) => calcRoute(google.maps.TravelMode.WALKING)}*/}
                        {/*        >*/}
                        {/*            À pied*/}
                        {/*        </BootstrapButton>*/}
                        {/*        <BootstrapButton*/}
                        {/*            className="mx-1"*/}
                        {/*            color="primary"*/}
                        {/*            onClick={(e) => calcRoute(google.maps.TravelMode.BICYCLING)}*/}
                        {/*        >*/}
                        {/*            À vélo*/}
                        {/*        </BootstrapButton>*/}
                        {/*        <BootstrapButton*/}
                        {/*            className="mx-1"*/}
                        {/*            color="primary"*/}
                        {/*            onClick={(e) => calcRoute(google.maps.TravelMode.DRIVING)}*/}
                        {/*        >*/}
                        {/*            En voiture*/}
                        {/*        </BootstrapButton>*/}
                        {/*        <BootstrapButton*/}
                        {/*            className="mx-1"*/}
                        {/*            color="primary"*/}
                        {/*            onClick={(e) => calcRoute(google.maps.TravelMode.TRANSIT)}*/}
                        {/*        >*/}
                        {/*            En transport*/}
                        {/*        </BootstrapButton>*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </BootstrapCol>
                </BootstrapRow>
            </BootstrapContainer>
            <footer>
                <a
                    href="#Partner"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">Partenariat</span>
                </a>
            </footer>
        </section>
    );
}
