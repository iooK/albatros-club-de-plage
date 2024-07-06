import React from "react";

import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faEnvelopeSquare, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    const mapPosition: google.maps.LatLngLiteral = {
        lat: 47.47954,
        lng: -3.12005,
    };

    const links = [
        {
            label: "À pied",
            travelmode: "walking",
        },
        {
            label: "À vélo",
            travelmode: "bicycling",
        },
        {
            label: "En voiture",
            travelmode: "driving",
        },
        {
            label: "En transport",
            travelmode: "transit",
        },
    ];

    return (
        <section className="Contact">
            <span id="Contact" />
            <h1>Contact</h1>
            <Container>
                <Row tag="article">
                    <Col
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
                                <strong
                                    className={"underline text-center"}
                                    itemProp="name"
                                >
                                    Albatros Club de Plage
                                </strong>
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
                                &nbsp;Juillet :{" "}
                                <a
                                    href="tel:+33661341864"
                                    itemProp="telephone"
                                >
                                    (+33)6&nbsp;61&nbsp;34&nbsp;18&nbsp;64
                                </a>
                            </span>
                            <br />
                            <span className="h3">
                                <FontAwesomeIcon icon={faPhoneSquare} />
                                &nbsp;Août :{" "}
                                <a
                                    href="tel:+33631233913"
                                    itemProp="telephone"
                                >
                                    (+33)6&nbsp;31&nbsp;23&nbsp;39&nbsp;13
                                </a>
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
                    </Col>
                    <Col
                        lg="6"
                        md="6"
                        sm="12"
                        xl="6"
                        xs="12"
                    >
                        <iframe
                            allowFullScreen={false}
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.5339029936126!2d-3.1227349229887906!3d47.47951159674392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x481074020ed0d4a9%3A0xafb3c110c2b26e8f!2sClub%20de%20Plage%20l&#39;Albatros!5e0!3m2!1sfr!2sfr!4v1716839521234!5m2!1sfr!2sfr"
                            height={400}
                            width="100%"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 0, overflow: "hidden" }}
                        ></iframe>
                        <div className="text-center mt-2">
                            <h2>Nous rejoindre</h2>
                            <p>
                                {links.map((link, index) => {
                                    return (
                                        <a
                                            className={"btn btn-primary mx-1"}
                                            href={`https://www.google.com/maps/dir/?api=1&destination=${mapPosition.lat},${mapPosition.lng}&travelmode=${link.travelmode}`}
                                            key={index}
                                            target={"_blank"}
                                        >
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
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
