import React from "react";
import { Col as BootstrapCol, Container as BootstrapContainer, Row as BootstrapRow } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";

import backgroundImage from "@/components/StandUpPaddle/stand-up-paddle-background.jpg";
import Table from "@/components/Table/Table";
import Parallax from "@/components/Parallax/Parallax";
import { standUpPaddleOpening, standUpPaddlePrices } from "@/components/StandUpPaddle/standUpPaddleData";

export default function StandUpPaddle() {
    return (
        <section className="StandUpPaddle">
            <Parallax backgroundImage={backgroundImage}>Et si on marchait sur l&apos;eau...</Parallax>
            <h1 id="StandUpPaddle">Stand Up Paddle</h1>
            <BootstrapContainer>
                <BootstrapRow>
                    <BootstrapCol
                        lg="6"
                        md="12"
                        sm="12"
                        tag="article"
                        xl="6"
                        xs="12"
                    >
                        <div className="columns">
                            <p>
                                En famille, entre ami(e)s, seul... découvrez le stand up paddle. Facile d&apos;accès et
                                ludique, ce sport de glisse nautique se pratique debout sur une planche sur laquelle on
                                se propulse à l&apos;aide d&apos;une pagaie.
                                <br />
                                Il n&apos;y a pas d&apos;âge pour pratiquer le stand up paddle. Ce sport est accessible
                                à tous dès le plus jeune âge et convient parfaitement aux séniors. Même les plus jeunes
                                peuvent se mettre devant sur la planche accompagnés d&apos;un adulte.
                            </p>
                            <p>
                                Le stand up paddle améliore la coordination, l&apos;équilibre et développe la
                                psychomotricité. Sport complet qui sollicite tous les muscles du corps de façon
                                symétrique. Les muscles des jambes, les cuisses, les fessiers, les abdominaux, les
                                bras... Tout le corps travaille pour répondre aux besoins d&apos;équilibre.
                            </p>
                            <p>
                                Pratiqué dans le cadre idylique de la grande plage de Quiberon, le stand up paddle est
                                un excellent moyen de se relaxer et de partager des expériences inédites et inoubliables
                                en famille.
                            </p>
                        </div>
                    </BootstrapCol>
                    <BootstrapCol
                        xs="12"
                        sm="12"
                        md="12"
                        lg="6"
                        xl="6"
                    >
                        <BootstrapRow>
                            <BootstrapCol
                                tag="article"
                                xs="12"
                                sm="6"
                                md="6"
                                lg="6"
                                xl="6"
                            >
                                <div className="page-header">
                                    <h2>Tarifs location</h2>
                                    <p className="small text-muted">
                                        Gilet de sauvetage inclus&nbsp;
                                        <FontAwesomeIcon icon={faHeart} />
                                    </p>
                                </div>
                                <Table data={standUpPaddlePrices} />
                            </BootstrapCol>
                            <BootstrapCol
                                lg="6"
                                md="6"
                                sm="6"
                                tag="article"
                                xl="6"
                                xs="12"
                            >
                                <div className="page-header pb">
                                    <h2>
                                        Horaires&nbsp;
                                        <FontAwesomeIcon
                                            icon={faClockRegular}
                                            size={"xs"}
                                        />
                                    </h2>
                                </div>
                                <Table data={standUpPaddleOpening} />
                            </BootstrapCol>
                        </BootstrapRow>
                    </BootstrapCol>
                </BootstrapRow>
            </BootstrapContainer>
            <footer>
                <a
                    href="#Team"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">l&apos;Équipe</span>
                </a>
            </footer>
        </section>
    );
}
