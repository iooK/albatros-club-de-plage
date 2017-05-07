import React, {Component} from 'react';

import { Col, Container, Row } from 'reactstrap';

import backgroundImage from '../../img/background/fitness.jpg';
import fitnessOpening, {fitnessPrices} from './fitnessData';
import FontAwesome from 'react-fontawesome';
import Table from '../Table/Table';

export default class Fitness extends Component {
    render() {
        const styles = {
            'backgroundImage': 'url('+backgroundImage+')',
        };

        return (
            <section className="Fitness">
                <header style={styles} className="parallax">
                    <span>Des vacances au top de la forme</span>
                </header>

                <h1 id="Fitness">Remise en forme</h1>

                <Container>
                    <Row>
                        <Col xs="12" sm="6" md="7" lg="7">
                            <Row>
                                <Col tag="article"
                                     xs="12" sm="6" md="6" lg="6">
                                    <div className="columns columns-small">
                                        <p>
                                            Dans le cadre magnifique de la Grande Plage de Quiberon, venez tous les matins pratiquer une séance de remise en forme (réveil musculaire, travail cardio-vasculaire).
                                            Dans un climat de convivialité, vous pratiquerez toute une palette d'activités pour améliorer votre condition physique, dans un souci de bien-être.
                                            La marche, le footing, le stretching, les renforcements musculaires, des activités sportives aquatiques (aquagym et aquaforme en mer), ... Notre éducateur s'adapte au niveau de chacun pour que tout le monde éprouve du plaisir.
                                        </p>
                                    </div>
                                </Col>

                                <Col tag="article"
                                     xs="12" sm="6" md="6" lg="6">
                                    <div className="page-header">
                                        <h2>Tarifs séance</h2>
                                    </div>

                                    <Table data={fitnessPrices} withRowHeader={true} />
                                </Col>
                            </Row>
                        </Col>

                        <Col tag="article"
                             xs="12" sm="6" md="5" lg="5">
                            <div className="page-header">
                                <h2>Horaires<span className="invisible">&nbsp;</span><FontAwesome name="clock-o" /></h2>
                            </div>

                            <Table data={fitnessOpening} withColHeader={true} withRowHeader={true} />
                        </Col>
                    </Row>
                </Container>

                <footer>
                    <a href="#StandUpPaddle" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">Stand Up Paddle</span></a>
                </footer>
            </section>
        );
    }
}
