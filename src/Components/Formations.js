import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Ingénierie Informatique et Réseaux Option : Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)",
            etablissement: "Ecole Marocaine des Sciences de l'Ingénieur (EMSI - MARRAKECH)",
            annees: "2021 - en cours",
        },
        {
            diplome: " Diplôme de technicien spécialisé - Réseaux Informatique",
            etablissement: "Institut Supérieur de Gestion et d'Informatique Marrakech - ISGI",
            annees: "2019 - 2021",
        },
        {
            diplome: "BAC Sciences Physiques et Chimie",
            etablissement: " Lycée ZOOLA 2",
            annees: "2015",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;
