import React from "react";

import {
    Card as BootstrapCard,
    CardFooter as BootstrapCardFooter,
    CardHeader as BootstrapCardHeader,
    CardImg as BootstrapCardImg,
    CardTitle as BootstrapCardTitle,
    CardLink as BootstrapCardLink,
    Col as BootstrapCol,
    Container as BootstrapContainer,
    Row as BootstrapRow,
} from "reactstrap";

import { partnerData } from "./partnerData";
import { PartnerDataInterface } from "@/libs/definitions";

function PartnerCol({ partner }: { partner: PartnerDataInterface }) {
    return (
        <BootstrapCol
            className="mb-3"
            lg="3"
            md="4"
            sm="6"
            xl="3"
            xs="12"
        >
            <BootstrapCard>
                <BootstrapCardHeader className="text-center">
                    <BootstrapCardTitle
                        itemProp="name"
                        tag="h2"
                    >
                        {partner.name}
                    </BootstrapCardTitle>
                </BootstrapCardHeader>
                <BootstrapCardImg
                    alt={partner.name}
                    className="img-fluid p-3"
                    src={partner.image}
                    width="100%"
                />
                <BootstrapCardFooter className="text-center">
                    <BootstrapCardLink
                        href={partner.link}
                        itemProp="description"
                        target="_blank"
                        title={partner.name}
                    >
                        Voir le site
                    </BootstrapCardLink>
                </BootstrapCardFooter>
            </BootstrapCard>
        </BootstrapCol>
    );
}

export function Partner() {
    return (
        <section className="Partner bg-faded">
            <h1 id="Partner">Partenariat</h1>
            <BootstrapContainer tag="article">
                <BootstrapRow
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
                </BootstrapRow>
            </BootstrapContainer>
        </section>
    );
}
