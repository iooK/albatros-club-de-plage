import React, {Component} from 'react';

import { Col, Container, Row } from 'reactstrap';

import backgroundImage from '../../img/background/stand-up-paddle.jpg';
import FontAwesome from 'react-fontawesome';
import standUpPaddleOpening, {standUpPaddlePrices} from './standUpPaddleData';
import Table from '../Table/Table';

class StandUpPaddle extends Component {
    render() {
        const styles = {
            'backgroundImage': 'url('+backgroundImage+')',
        };

        return (
            <section className="StandUpPaddle">
                <header style={styles} className="parallax">
                    <span>Et si on marchait sur l'eau...</span>
                </header>

                <h1 id="StandUpPaddle">Stand Up Paddle</h1>

                <Container>
                    <Row>
                        <Col tag="article"
                             xs="12" sm="6" md="6" lg="6">
                            <div className="columns columns-small">
                                <p>
                                    En famille, entre ami(e)s, seul... découvrez le stand up paddle. Facile d'accès et ludique, ce sport de glisse nautique se pratique debout sur une planche
                                    sur laquelle on se propulse à l'aide d'une pagaie.<br />
                                    Il n'y a pas d'âge pour pratiquer le stand up paddle. Ce sport est accessible à tous dès le plus jeune âge et convient parfaitement aux séniors.
                                    Même les plus jeunes peuvent se mettre devant sur la planche accompagnés d'un adulte.
                                </p>

                                <p>
                                    Le stand up paddle améliore la coordination, l'équilibre et développe la psychomotricité. Sport complet qui sollicite tous les muscles du corps de façon symétrique.
                                    Les muscles des jambes, les cuisses, les fessiers, les abdominaux, les bras... Tout le corps travaille pour répondre aux besoins d'équilibre.
                                </p>

                                <p>
                                    Pratiqué dans le cadre idylique de la grande plage de Quiberon, le stand up paddle est un excellent moyen de se relaxer et de partager des expériences inédites
                                    et inoubliables en famille.
                                </p>
                            </div>
                        </Col>

                        <Col xs="12" sm="6" md="6" lg="6">
                            <Row>
                                <Col tag="article"
                                     xs="12" sm="6" md="6" lg="6">
                                    <div className="page-header">
                                        <h2>Tarifs location</h2>
                                        <p className="small text-muted">Gilet de sauvetage inclus <FontAwesome name="heart" /></p>
                                    </div>

                                    <Table data={standUpPaddlePrices} withColHeader={true} />
                                </Col>

                                <Col tag="article"
                                     xs="12" sm="6" md="6" lg="6">
                                    <div className="page-header page-header-pb-1">
                                        <h2>Horaires<span className="invisible">&nbsp;</span><FontAwesome name="clock-o" /></h2>
                                    </div>

                                    <Table data={standUpPaddleOpening} withColHeader={true} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <footer>
                    <a href="#Team" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">l'Equipe</span></a>
                </footer>
            </section>
        );
    }
}

export default StandUpPaddle;
