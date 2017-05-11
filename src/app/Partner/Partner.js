import PropTypes from 'prop-types';
import React, {Component} from 'react';

import { Card, CardFooter, CardHeader, CardImg, CardTitle, CardLink, Col, Container, Row } from 'reactstrap';

import partnerData from './partnerData';

class PartnerCol extends Component {
    static propTypes = {
        'partner': PropTypes.object,
    };

    render() {
        return (
            <Col className="mb-3"
                 xs="12" sm="6" md="4" lg="3" xl="3">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle itemProp="name"
                                   tag="h2">{this.props.partner.name}</CardTitle>
                    </CardHeader>

                    <CardImg alt={this.props.partner.name}
                             className="img-fluid p-3"
                             src={this.props.partner.image}
                             width="100%" />

                    <CardFooter className="text-center">
                        <CardLink href={this.props.partner.link}
                                  itemProp="description"
                                  target="_blank"
                                  title={this.props.partner.name}>
                            Voir le site
                        </CardLink>
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

class Partner extends Component {
    render() {
        return (
            <section className="Partner bg-faded">
                <h1 id="Partner">Partenariat</h1>

                <Container tag="article">
                    <Row className="list-unstyled"
                         tag="ul">
                        {
                            partnerData.map((partner, index) => {
                                return <PartnerCol key={index} partner={partner} />;
                            })
                        }
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Partner;
