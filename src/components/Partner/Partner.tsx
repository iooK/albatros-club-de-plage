import React from "react";
import { Card, CardFooter, CardHeader, CardImg, CardTitle, CardLink, Col, Container, Row } from "reactstrap";

import { partnerData } from "./partnerData";
import { PartnerDataInterface } from "@/libs/definitions";
import Parallax from "@/components/Parallax/Parallax";
import backgroundImage from "@/components/Partner/partner-background.jpg";

function PartnerCol({ partner }: { partner: PartnerDataInterface }) {
    return (
        <Col
            className="mb-3"
            lg="3"
            md="4"
            sm="6"
            xl="3"
            xs="12"
        >
            <Card>
                <CardHeader className="text-center">
                    <CardTitle
                        itemProp="name"
                        tag="h2"
                    >
                        {partner.name}
                    </CardTitle>
                </CardHeader>
                <CardImg
                    alt={partner.name}
                    className="img-fluid p-3"
                    src={process.env.BASE_PATH_IMG + partner.image}
                    width="100%"
                />
                <CardFooter className="text-center">
                    <CardLink
                        href={partner.link}
                        itemProp="description"
                        target="_blank"
                        title={partner.name}
                    >
                        Voir le site
                    </CardLink>
                </CardFooter>
            </Card>
        </Col>
    );
}

export function Partner() {
    return (
        <section className="Partner">
            <Parallax backgroundImage={backgroundImage}>&nbsp;</Parallax>
            <h1 id="Partner">Partenariat</h1>
            <Container tag="article">
                <Row
                    className="list-unstyled"
                    tag="ul"
                >
                    {partnerData.map((partner, index) => {
                        return (
                            <PartnerCol
                                key={index}
                                partner={partner}
                            />
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
