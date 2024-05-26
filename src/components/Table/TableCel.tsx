import React from "react";

export function TableCel({ isHeader, value }: { isHeader: boolean; value: React.JSX.Element }) {
    return isHeader ? <th>{value}</th> : <td>{value}</td>;
}
