import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Button as BootstrapButton,
    Col as BootstrapCol,
    Container as BoostrapContainer,
    Modal as BootstrapModal,
    ModalBody as BootstrapModalBody,
    ModalHeader as BootstrapModalHeader,
    ModalFooter as BootstrapModalFooter,
    Row as BootstrapRow,
} from "reactstrap";
import { faArrowCircleDown, faLongArrowLeft, faLongArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";

import Parallax from "@/components/Parallax/Parallax";
import Table from "@/components/Table/Table";
import backgroundImage from "@/components/BeachClub/beach-club-background.jpg";
import {
    beachClubFullDayPrices,
    beachClubHalfDayPrices,
    beachClubOpenDays,
} from "@/components/BeachClub/beachClubData";
import { PricesInterface } from "@/libs/definitions";

export default function BeachClub() {
    const [state, setState] = React.useState<{
        isOpenFullDayPrices: boolean;
        isOpenHalfDayPrices: boolean;
    }>({
        isOpenFullDayPrices: false,
        isOpenHalfDayPrices: false,
    });

    function getShortPrices(prices: PricesInterface): PricesInterface {
        return {
            colLabels: prices.colLabels?.slice(0, 3),
            rows: prices.rows.slice(0, 2).map((value) => {
                return {
                    label: value.label,
                    prices: value.prices.slice(0, 2),
                };
            }),
        };
    }

    function toggleStateOpenFullDayPrices(e?: React.MouseEvent) {
        setState({ ...state, isOpenFullDayPrices: !state.isOpenFullDayPrices });
    }

    function toggleStateOpenHalfDayPrices(e?: React.MouseEvent) {
        setState({ ...state, isOpenHalfDayPrices: !state.isOpenHalfDayPrices });
    }

    return (
        <section className="BeachClub">
            <Parallax
                backgroundImage={backgroundImage}
                backgroundPosition={"75% 50%"}
            >
                l&apos;Albatros accueille vos enfants pour leur faire passer des vacances inoubliables
            </Parallax>
            <span id="BeachClub" />
            <h1>Club de Plage</h1>
            <BoostrapContainer>
                <BootstrapRow>
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="12"
                        tag="article"
                        xl="6"
                        xs="12"
                    >
                        <div className="columns">
                            <p>
                                Le Mini Club Albatros et l&apos;Albatros Sportif accueillent les enfants de 3 à 14 ans
                                pour des animations ludiques et encadrées.
                            </p>
                            <h2 className={"underline"}>Mini Club Albatros</h2>
                            <p>
                                Pour les plus petits de 3 à 6 ans, le Mini Club Albatros ouvre l&apos;esprit des petits
                                et les éveille grâce à des activités ludiques. Encadrée par une équipe qualifiée et
                                compétente.
                            </p>
                            <h2 className={"underline"}>Albatros Sportif</h2>
                            <p>
                                Pour les plus grands de 7 à 14 ans, le caractère sportif est ici plus poussé. Pour un
                                épanouissement total et la découverte de sports pendant les vacances.
                            </p>
                        </div>
                    </BootstrapCol>
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="12"
                        tag="article"
                        xl="6"
                        xs="12"
                    >
                        <div className="page-header">
                            <h2>
                                <span className={"underline"}>Horaires</span>&nbsp;
                                <FontAwesomeIcon
                                    icon={faClockRegular}
                                    size={"xs"}
                                />
                            </h2>
                        </div>
                        <Table data={beachClubOpenDays} />
                    </BootstrapCol>
                </BootstrapRow>
                <hr />

                <BootstrapRow>
                    {/*Half day prices*/}
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="6"
                        tag="article"
                        xl="6"
                        xs="12"
                    >
                        <div className="page-header">
                            <h2 className={"underline"}>Tarifs demi-journée</h2>
                            <p className="small text-muted">Mode de paiement: Chèque - Espèce</p>
                        </div>
                        <Table data={getShortPrices(beachClubHalfDayPrices)} />
                        <div className="text-center">
                            <BootstrapButton
                                color="secondary"
                                onClick={toggleStateOpenHalfDayPrices}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                &nbsp;Afficher les tarifs préférentiels
                            </BootstrapButton>
                        </div>
                        <BootstrapModal
                            isOpen={state.isOpenHalfDayPrices}
                            toggle={toggleStateOpenHalfDayPrices}
                        >
                            <BootstrapModalHeader toggle={toggleStateOpenHalfDayPrices}>
                                Tarifs demi-journée
                            </BootstrapModalHeader>
                            <BootstrapModalBody>
                                <FontAwesomeIcon
                                    className="float-left d-block d-sm-none"
                                    icon={faLongArrowLeft}
                                />
                                <FontAwesomeIcon
                                    className="float-right d-block d-sm-none"
                                    icon={faLongArrowRight}
                                />
                                <div className={"table-responsive"}>
                                    <Table data={beachClubHalfDayPrices} />
                                </div>
                            </BootstrapModalBody>
                            <BootstrapModalFooter>
                                <BootstrapButton
                                    color="secondary"
                                    onClick={toggleStateOpenHalfDayPrices}
                                >
                                    Fermer
                                </BootstrapButton>
                            </BootstrapModalFooter>
                        </BootstrapModal>
                    </BootstrapCol>

                    {/*Full day prices*/}
                    <BootstrapCol
                        lg="6"
                        md="6"
                        sm="6"
                        tag="article"
                        xl="6"
                        xs="12"
                    >
                        <div className="page-header">
                            <h2 className={"underline"}>Tarifs journée complète</h2>
                            <p className="small text-muted">Mode de paiement: Chèque - Espèce</p>
                        </div>
                        <Table data={getShortPrices(beachClubFullDayPrices)} />
                        <div className="text-center">
                            <BootstrapButton
                                color="secondary"
                                onClick={toggleStateOpenFullDayPrices}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                Afficher les tarifs préférentiels
                            </BootstrapButton>
                        </div>
                        <BootstrapModal
                            isOpen={state.isOpenFullDayPrices}
                            toggle={toggleStateOpenFullDayPrices}
                        >
                            <BootstrapModalHeader toggle={toggleStateOpenFullDayPrices}>
                                Tarifs journée complète
                            </BootstrapModalHeader>
                            <BootstrapModalBody>
                                <FontAwesomeIcon
                                    className="float-left d-block d-sm-none"
                                    icon={faLongArrowLeft}
                                />
                                <FontAwesomeIcon
                                    className="float-right d-block d-sm-none"
                                    icon={faLongArrowRight}
                                />
                                <div className={"table-responsive"}>
                                    <Table data={beachClubFullDayPrices} />
                                </div>
                            </BootstrapModalBody>
                            <BootstrapModalFooter>
                                <BootstrapButton
                                    color="secondary"
                                    onClick={toggleStateOpenFullDayPrices}
                                >
                                    Fermer
                                </BootstrapButton>
                            </BootstrapModalFooter>
                        </BootstrapModal>
                    </BootstrapCol>
                </BootstrapRow>
            </BoostrapContainer>
            <footer>
                <a
                    href="#SwimmingSchool"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">École de Natation</span>
                </a>
            </footer>
        </section>
    );
}
