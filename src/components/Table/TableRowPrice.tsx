import React from "react";
import { TableCel } from "@/components/Table/TableCel";
import { PriceInterface } from "@/libs/definitions";

function TableCelHead({ label }: { label?: string }) {
    if (label) {
        return (
            <TableCel
                isHeader={true}
                value={<>{label}</>}
            />
        );
    }

    return <></>;
}

function TableCelData({ prices }: { prices: Array<string> }) {
    return prices.map((price, index) => {
        return (
            <TableCel
                isHeader={false}
                key={index}
                value={<>{price}</>}
            />
        );
    });
}

export default function TableRowPrice({ row }: { row: PriceInterface }) {
    return (
        <tr>
            <TableCelHead label={row.label} />
            <TableCelData prices={row.prices} />
        </tr>
    );
}
