import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';

export const Login = () => {

    const [validated, setValidated] = useState(false);

    const seConnecter = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="page-wrapper">
            <div className="page-content--bge5">
                <div className="container">
                    <div className="login-wrap">
                        <div className="login-content">
                            <div className="login-logo">
                                <Link to="/">
                                    <img src="logo.png" alt="My Meds"/>
                                </Link>
                            </div>
                            <div className="login-form">
                                <Form noValidate validated={validated} onSubmit={seConnecter}>
                                    <Form.Group controlId="validationEmail">
                                        <Form.Label>Adresse Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <Form.Control.Feedback>Valide</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Email invalide
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="validationMotDePasse">
                                        <Form.Label>Mot de passe</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                            placeholder="Mot de passe"
                                        />
                                        <Form.Control.Feedback>Valide</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check
                                            label="Se souvenir de moi"
                                        />
                                    </Form.Group>
                                    <div className="login-checkbox">
                                        <label>
                                            <a href="#">Mot de passe oubli&eacute; ?</a>
                                        </label>
                                    </div>
                                    <button
                                        className="au-btn au-btn--block au-btn--green m-b-20"
                                        type="submit">Se connecter
                                    </button>

                                </Form>
                                <div className="register-link">
                                    <p>
                                        Vous n'avez pas encore de compte ?&#160;
                                        <a href="#">Enregistrez-vous</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}