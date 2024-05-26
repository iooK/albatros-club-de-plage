import React from "react";
import {
    Card as BootstrapCard,
    CardImg as BootstrapCardImg,
    CardTitle as BootstrapCardTitle,
    CardText as BootstrapCardText,
    Col as BootstrapCol,
    Container as BootstrapContainer,
    Row as BootstrapRow,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import { TeamDataInterface } from "@/libs/definitions";
import { teamData } from "@/components/Team/teamData";

function TeamCol({ teammate }: { teammate: TeamDataInterface }) {
    return (
        <BootstrapCol
            className="mb-3"
            itemProp="member"
            itemScope
            itemType="http://schema.org/Person"
            lg="3"
            md="4"
            sm="6"
            xl="3"
            xs="12"
        >
            <BootstrapCard>
                <BootstrapCardImg
                    alt={teammate.name}
                    src={teammate.image}
                    top
                    width="100%"
                />
                <div className="card-block">
                    <BootstrapCardTitle
                        itemProp="name"
                        tag="h2"
                    >
                        {teammate.name}
                    </BootstrapCardTitle>
                    <BootstrapCardText itemProp="description">{teammate.description}</BootstrapCardText>
                </div>
            </BootstrapCard>
        </BootstrapCol>
    );
}

export function Team() {
    return (
        <section className="Team bg-faded">
            <h1 id="Team">Équipe</h1>
            <BootstrapContainer>
                <BootstrapRow
                    itemScope
                    itemType="http://schema.org/Organization"
                    tag="article"
                >
                    {teamData.map((teammate, index) => {
                        return (
                            <TeamCol
                                key={index}
                                teammate={teammate}
                            />
                        );
                    })}
                </BootstrapRow>
            </BootstrapContainer>
            <footer>
                <a
                    href="#Contact"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">Contact</span>
                </a>
            </footer>
        </section>
    );
}
