import React, {Component} from 'react';

import { Col, Container, Row } from 'reactstrap';

import backgroundImage from '../../img/background/swimming-school.jpg';
import FontAwesome from 'react-fontawesome';
import Table from '../Table/Table';
import swimmingPool from '../../img/swimming-pool.jpg';
import swimmingSchoolOpening, {swimmingSchoolPrices} from './swimmingSchoolData';

export default class SwimmingSchool extends Component {
    render() {
        const styles = {
            'backgroundImage': 'url('+backgroundImage+')',
        };

        return (
            <section className="SwimmingSchool">
                <header style={styles} className="parallax">
                    <span>Profitez de l'été pour apprendre à nager avec l'Ecole de Natation</span>
                </header>

                <h1 id="SwimmingSchool">Ecole de Natation</h1>

                <Container>
                    <Row>
                        <Col tag="article"
                             xs="12" sm="12" md="7" lg="7" xl="7">
                            <div className="columns">
                                <p>
                                    Dans une piscine chauffée et couverte, l'Albatros propose des leçons <strong>individusalisées</strong> de natation. Les enfants sont deux maximum par cours. Une méthode qui priviligie la familiarisation avec l'eau et l'apprentissage des techniques de nage.<br />
                                    Les leçons de natations sont dispensés par un maître-nageur diplômé d'état offrant à vos enfants des progrès visibles et des résultats garantis.<br />
                                    Une séance dure 20 minutes, la durée idéale pour une concentration de qualité et un engagement moteur optimal.<br />
                                    L'Ecole de Natation s'appuie sur 3 niveaux d'enseignement: l'initiation, l'apprentissage et le perfectionnement.
                                </p>

                                <h2>Initiation</h2>

                                <p>
                                    Cette première étape de l'apprentissage consiste en une familiarisation de l'enfant avec l'eau. Nous abordons les premières bases en fonction du vécu aquatique: la respiration, le déplacement ventral et dorsal avec matériel ainsi que les immersions. La priorité est de donner confiance à l'enfant afin qu'il développe son aisance aquatique.
                                </p>

                                <h2>Apprentissage</h2>

                                <p>
                                    Quand l'enfant a acquis la confiance nécessaire, nous transmettons les premiers élèments techniques de nage. Dos crawlé, brasse et crawl sont privilégiés. Avec du support matériel, l'enfant apprend et assimile les mouvements propices. Nous cherchons à lui donner la technique adaptée à son âge.
                                </p>

                                <h2>Perfectionnement</h2>

                                <p>
                                    À ce stade là, l'enfant est autonome dans l'eau et nous approfondissons ses connaissances techniques dans les 4 nages: dos crawlé, brasse, crawl et papillon. Il peut s'agir d'une amélioration technique de la nage (mouvements et respiration) mais aussi de la découverte d'une nouvelle nage (papillon par exemple).
                                </p>
                            </div>
                        </Col>

                        <Col tag="article"
                             xs="12" sm="12" md="5" lg="5" xl="5">
                            <p>
                                <img src={swimmingPool} className="img-fluid img-thumbnail" alt="swimming pool" />
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col tag="article"
                             xs="12" sm="12" md="7" lg="7" xl="7">
                            <div className="page-header pb">
                                <h2>Tarifs séance</h2>
                            </div>

                            <Table data={swimmingSchoolPrices} withColHeader={true} withRowHeader={true} />
                        </Col>

                        <Col tag="article"
                             xs="12" sm="12" md="5" lg="5" xl="5">
                            <div className="page-header">
                                <h2>Horaires<span className="invisible">&nbsp;</span><FontAwesome name="clock-o" /></h2>
                                <p className="small text-muted"><FontAwesome name="exclamation" /> Réservation préalable recommandée</p>
                            </div>

                            <Table data={swimmingSchoolOpening} withColHeader={true} />
                        </Col>
                    </Row>
                </Container>

                <footer>
                    <a href="#Fitness" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">Remise en Forme</span></a>
                </footer>
            </section>
        );
    }
}
