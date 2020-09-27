import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "../infobox.css";

function InfoBox({ title, cases, active, isRed, ...props }) {
    console.log(title, active, cases);
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} ${
                isRed && "infoBox--red"
            }`}
        >
            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    {title}
                </Typography>
                <h2
                    className={`infoBox__cases ${
                        !isRed && "infoBox__cases--green"
                    }`}
                >
                    {cases ? cases : <Skeleton width='50%' />}
                </h2>
            </CardContent>
        </Card>
    );
}

export default InfoBox;
