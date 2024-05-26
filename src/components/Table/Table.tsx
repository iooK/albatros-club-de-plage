import React from "react";
import { Table as BootstrapTable } from "reactstrap";

import TableRowPrice from "@/components/Table/TableRowPrice";
import { OpenDayInterface, OpenDaysInterface, PricesInterface } from "@/libs/definitions";
import TableRowOpenDay from "@/components/Table/TableRowOpenDay";
import { TableCel } from "@/components/Table/TableCel";

export default function Table({ data }: { data: OpenDaysInterface | PricesInterface }) {
    const isOpenDayInterface = (object: any): object is OpenDayInterface => object.openHours !== undefined;

    return (
        <BootstrapTable
            className="table-calendar text-center"
            hover
            striped
        >
            {data.colLabels?.length ?
                <thead className="table-with-header">
                    <tr>
                        {data.colLabels.map((colLabel, index) => {
                            return (
                                <TableCel
                                    isHeader={true}
                                    key={index}
                                    value={<>{colLabel}</>}
                                />
                            );
                        })}
                    </tr>
                </thead>
            :   <></>}
            {data.rows.length ?
                <tbody>
                    {data.rows.map((row, index) => {
                        return isOpenDayInterface(row) ?
                                <TableRowOpenDay
                                    key={index}
                                    row={row}
                                />
                            :   <TableRowPrice
                                    key={index}
                                    row={row}
                                />;
                    })}
                </tbody>
            :   <></>}
        </BootstrapTable>
    );
}
