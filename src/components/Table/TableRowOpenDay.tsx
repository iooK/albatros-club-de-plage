import React from "react";
import { TableCel } from "@/components/Table/TableCel";
import { OpenDayInterface, OpenHourInterface } from "@/libs/definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function TableCelHead({ label }: { label: OpenDayInterface["label"] }) {
    return (
        <TableCel
            isHeader={true}
            value={<>{label}</>}
        />
    );
}

function TableCelData({ openHours }: { openHours: Array<OpenHourInterface | false | null> }) {
    return openHours.map((openHour, index) => {
        if (openHour === false) {
            return (
                <TableCel
                    isHeader={false}
                    key={index}
                    value={<>Fermé</>}
                />
            );
        }

        if (openHour === null) {
            return (
                <TableCel
                    isHeader={false}
                    key={index}
                    value={<></>}
                />
            );
        }

        return (
            <TableCel
                isHeader={false}
                key={index}
                value={
                    <>
                        {openHour.from}
                        <FontAwesomeIcon icon={faArrowRight} />
                        {openHour.to}
                    </>
                }
            />
        );
    });
}

export default function TableRowOpenDay({ row }: { row: OpenDayInterface }) {
    return (
        <tr>
            <TableCelHead label={row.label} />
            <TableCelData openHours={row.openHours} />
        </tr>
    );
}
