import React from 'react';

export const BarreDeRecherche = () => {
    return (
        <form className="form-header" action="" method="POST">
            <input className="au-input au-input--xl" type="text" name="search" placeholder="Recherche"/>
            <button className="au-btn--submit" type="submit">
                <i className="zmdi zmdi-search"></i>
            </button>
        </form>
    );
}


