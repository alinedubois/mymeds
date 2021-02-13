import Typography from "@material-ui/core/Typography";
import React from "react";
import './BarreDeNavigation.css';

export const Titre = () => {
    return (
        <div className="AppBarTitre">
            <Typography variant="h6" noWrap className="AppTitre">
                My Meds
            </Typography>
        </div>
    );

};

