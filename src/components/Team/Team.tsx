import React from "react";
import { Card, CardImg, CardTitle, CardText, Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

import { TeamDataInterface } from "@/libs/definitions";
import { teamData } from "@/components/Team/teamData";

function TeamCol({ teammate }: { teammate: TeamDataInterface }) {
    return (
        <Col
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
            <Card>
                <CardImg
                    alt={teammate.name}
                    src={process.env.BASE_PATH_IMG + teammate.image}
                    top
                    width="100%"
                />
                <div style={{ padding: "1.25rem" }}>
                    <CardTitle
                        itemProp="name"
                        tag="h2"
                    >
                        <span className={"underline"}>{teammate.name}</span>
                    </CardTitle>
                    <CardText itemProp="description">{teammate.description}</CardText>
                </div>
            </Card>
        </Col>
    );
}

export function Team() {
    return (
        <section className="Team bg-light">
            <h1 id="Team">Équipe</h1>
            <Container>
                <Row
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
                </Row>
            </Container>
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
