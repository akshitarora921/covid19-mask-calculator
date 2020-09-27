import React from "react";
import { Skeleton } from "@material-ui/lab";
import "../css/Table.css";

function Table({ states, mask, title }) {
    return states ? (
        <div
            style={{
                margin: "10px",
            }}
        >
            <h2>{title}</h2>
            {states ? (
                <div
                    className='table'
                    style={{
                        height: mask && "350px",
                    }}
                >
                    <tr>
                        <th>State</th>
                        <th>{mask ? "Mask Number" : "Active Cases"}</th>
                    </tr>
                    {states.map((state) => (
                        <tr>
                            <td>{state.state}</td>
                            <td>
                                <strong>{state.active}</strong>
                            </td>
                        </tr>
                    ))}
                </div>
            ) : (
                <Skeleton height='100px' />
            )}
        </div>
    ) : (
        ""
    );
}

export default Table;
