import React, {Component} from 'react';

import FontAwesome from 'react-fontawesome';
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import backgroundImage from '../../img/background/beach-club.jpg';
import opening, { beachClubFullDayPrices as fullDayPrices, beachClubHalfDayPrices as halfDayPrices } from './beachClubData';
import Parallax from '../../components/Parallax/Parallax';
import Table from '../../components/Table/Table';

export default class BeachClub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isOpenFullDayPrices': false,
            'isOpenHalfDayPrices': false,
        };

        this.toggleFullDayPrices = this.toggleFullDayPrices.bind(this);
        this.toggleHalfDayPrices = this.toggleHalfDayPrices.bind(this);
    }

    toggleFullDayPrices() {
        this.setState({
            'isOpenFullDayPrices': !this.state.isOpenFullDayPrices,
        });
    }

    toggleHalfDayPrices() {
        this.setState({
            'isOpenHalfDayPrices': !this.state.isOpenHalfDayPrices,
        });
    }

    static getShortHalfDayPrices() {
        return BeachClub.getShortArray(halfDayPrices)
    }

    static getShortFullDayPrices() {
        return BeachClub.getShortArray(fullDayPrices)
    }

    static getShortArray(array) {
        return array
            .slice(0, 3)
            .map((row) => {
                return row.slice(0, 3);
            });
    }

    render() {
        return (
            <section className="BeachClub">
                <Parallax backgroundImage={backgroundImage}>
                    l'Albatros accueille vos enfants pour leur faire passer des vacances inoubliables
                </Parallax>

                <h1 id="BeachClub">Club de Plage</h1>

                <Container>
                    <Row>
                        <Col tag="article"
                             xs="12" sm="12" md="6" lg="6" xl="6">
                            <div className="columns">
                                <p>
                                    Le Mini Club Albatros et l'Albatros Sportif accueillent les enfants de 3 à 14 ans pour des animations ludiques et encadrées.
                                </p>

                                <h2>Mini Club Albatros</h2>

                                <p>
                                    Pour les plus petits de 3 à 6 ans, le Mini Club Albatros ouvre l'esprit des petits et les éveille grâce à des activités ludiques. Encadrée par une équipe qualifiée et compétente.
                                </p>

                                <h2>Albatros Sportif</h2>

                                <p>
                                    Pour les plus grands de 7 à 14 ans, le caractère sportif est ici plus poussé. Pour un épanouissement total et la découverte de sports pendant les vacances.
                                </p>
                            </div>
                        </Col>

                        <Col tag="article"
                             xs="12" sm="12" md="6" lg="6" xl="6">
                            <div className="page-header">
                                <h2>Horaires<span className="invisible">&nbsp;</span><FontAwesome name="clock-o" /></h2>
                            </div>

                            <Table data={opening} withColHeader={true} />
                        </Col>
                    </Row>

                    <hr />

                    <Row>
                        <Col tag="article"
                             xs="12" sm="6" md="6" lg="6" xl="6">
                            <div className="page-header">
                                <h2>Tarifs demi-journée</h2>
                                <p className="small text-muted">Mode de paiement: Chèque - Espèce</p>
                            </div>

                            <Table data={BeachClub.getShortHalfDayPrices()} withColHeader={true} withRowHeader={true} />

                            <div className="text-center">
                                <Button color="secondary" onClick={this.toggleHalfDayPrices}><FontAwesome name="plus"/> Afficher les tarifs préférentiels</Button>
                            </div>

                            <Modal isOpen={this.state.isOpenHalfDayPrices} toggle={this.toggleHalfDayPrices}>
                                <ModalHeader toggle={this.toggleHalfDayPrices}>
                                    Tarifs demi-journée
                                </ModalHeader>

                                <ModalBody>
                                    <FontAwesome className="float-left hidden-sm-up" name="long-arrow-left"/>
                                    <FontAwesome className="float-right hidden-sm-up" name="long-arrow-right"/>
                                    <Table data={halfDayPrices} withColHeader={true} withRowHeader={true} />
                                </ModalBody>

                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleHalfDayPrices}>Fermer</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>

                        <Col tag="article"
                             xs="12" sm="6" md="6" lg="6" xl="6">
                            <div className="page-header">
                                <h2>Tarifs journée complète</h2>
                                <p className="small text-muted">Mode de paiement: Chèque - Espèce</p>
                            </div>

                            <Table data={BeachClub.getShortFullDayPrices()} withColHeader={true} withRowHeader={true} />

                            <div className="text-center">
                                <Button color="secondary" onClick={this.toggleFullDayPrices}><FontAwesome name="plus"/> Afficher les tarifs préférentiels</Button>
                            </div>

                            <Modal isOpen={this.state.isOpenFullDayPrices} toggle={this.toggleFullDayPrices}>
                                <ModalHeader toggle={this.toggleFullDayPrices}>
                                    Tarifs journée complète
                                </ModalHeader>

                                <ModalBody>
                                    <FontAwesome className="float-left hidden-sm-up" name="long-arrow-left"/>
                                    <FontAwesome className="float-right hidden-sm-up" name="long-arrow-right"/>
                                    <Table data={fullDayPrices} withColHeader={true} withRowHeader={true} />
                                </ModalBody>

                                <ModalFooter>
                                    <Button color="secondary" onClick={this.toggleFullDayPrices}>Fermer</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </Container>

                <footer>
                    <a href="#SwimmingSchool" target="_self"><FontAwesome name="arrow-circle-down" /><span className="sr-only">Ecole de Natation</span></a>
                </footer>
            </section>
        );
    }
}
