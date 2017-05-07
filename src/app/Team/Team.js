import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { Card, CardBlock, CardImg, CardTitle, CardText, Col, Container, Row } from 'reactstrap';

import FontAwesome from 'react-fontawesome';
import teamData from './teamData';

class TeamCol extends Component {
    render() {
        return (
            <Col className="mb-3"
                 itemProp="member"
                 itemScope
                 itemType="http://schema.org/Person"
                 xs="12" sm="6" md="4" lg="3" xl="3">
                <Card>
                    <CardImg alt={this.props.teammate.name}
                             src={this.props.teammate.image}
                             top
                             width="100%" />
                    <CardBlock>
                        <CardTitle itemProp="name"
                                   tag="h2">
                            {this.props.teammate.name}
                        </CardTitle>

                        <CardText itemProp="description">{this.props.teammate.description}</CardText>
                    </CardBlock>
                </Card>
            </Col>
        );
    }
}

TeamCol.propTypes = {
    'teammate': PropTypes.object,
};

export default class Team extends Component {
    render() {
        return (
            <section className="Team bg-faded">
                <h1 id="Team">Equipe</h1>

                <Container>
                    <Row tag="article"
                         itemScope
                         itemType="http://schema.org/Organization">
                        {
                            teamData.map((teammate, index) => {
                                return <TeamCol key={index} teammate={teammate} />;
                            })
                        }
                    </Row>
                </Container>

                <footer>
                    <a href="#Contact" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">Contact</span></a>
                </footer>
            </section>
        );
    }
}
