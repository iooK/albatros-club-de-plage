import React from "react";
import { Col as BootstrapCol, Container as BootstrapContainer, Row as BootstrapRow } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import backgroundImage from "@/components/Fitness/fitness-background.jpg";
import Parallax from "@/components/Parallax/Parallax";
import Table from "@/components/Table/Table";
import { fitnessOpenDays, fitnessPrices, paddleFitnessPrices } from "@/components/Fitness/fitnessData";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";

export default function Fitness() {
    return (
        <section className="Fitness">
            <Parallax backgroundImage={backgroundImage}>Des vacances au top de la forme</Parallax>
            <h1 id="Fitness">Remise en forme</h1>
            <BootstrapContainer>
                <BootstrapRow>
                    <BootstrapCol
                        lg="7"
                        md="7"
                        sm="12"
                        xl="7"
                        xs="12"
                    >
                        <BootstrapRow>
                            <p>
                                Dans le cadre magnifique de la Grande Plage de Quiberon, venez tous les matins pratiquer
                                une séance de remise en forme (réveil musculaire, travail cardio-vasculaire). Dans un
                                climat de convivialité, vous pratiquerez toute une palette d&apos;activités pour
                                améliorer votre condition physique, dans un souci de bien-être. La marche, le footing,
                                le stretching, les renforcements musculaires, des activités sportives aquatiques
                                (aquagym et aquaforme en mer), ... Notre éducateur s&apos;adapte au niveau de chacun
                                pour que tout le monde éprouve du plaisir.
                            </p>
                            <BootstrapCol
                                lg="6"
                                md="6"
                                sm="6"
                                tag="article"
                                xl="6"
                                xs="12"
                            >
                                <div className="page-header">
                                    <h2 className={"underline"}>Tarifs séance</h2>
                                </div>
                                <Table data={fitnessPrices} />
                            </BootstrapCol>
                            <BootstrapCol
                                lg="6"
                                md="6"
                                sm="6"
                                tag="article"
                                xl="6"
                                xs="12"
                            >
                                <div className="page-header">
                                    <h2 className={"underline"}>Tarifs séance Fitness Paddle</h2>
                                </div>
                                <Table data={paddleFitnessPrices} />
                            </BootstrapCol>
                        </BootstrapRow>
                    </BootstrapCol>
                    <BootstrapCol
                        lg="5"
                        md="5"
                        sm="12"
                        tag="article"
                        xl="5"
                        xs="12"
                    >
                        <div className="page-header">
                            <h2>
                                <span className={"underline"}>Horaires</span>
                                &nbsp;
                                <FontAwesomeIcon
                                    icon={faClockRegular}
                                    size={"xs"}
                                />
                            </h2>
                        </div>
                        <Table data={fitnessOpenDays} />
                    </BootstrapCol>
                </BootstrapRow>
            </BootstrapContainer>
            <footer>
                <a
                    href="#StandUpPaddle"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">Stand Up Paddle</span>
                </a>
            </footer>
        </section>
    );
}
