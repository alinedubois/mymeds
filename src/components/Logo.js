import React from 'react';

export const Logo = () => {
    return (
        <div>
            <a className="navbar-brand App-titre" href="#">{this.props.titre}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    );
}


