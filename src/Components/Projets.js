import React from 'react';
import { Card } from 'primereact/card';

const ProjetsCard = ({ title, location, date, projets }) => {
    return (
        <div>
            <Card title={title} subTitle={location} footer={date}>
                <div>
                    <h5>Projets:</h5>
                    <ul>
                        {projets.map((projet, index) => (
                            <li key={index}>
                                <div>{projet.titre}</div>
                                <b>Technologies :</b> {projet.technologie}

                                <br></br>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
            <br />
        </div>
    );
};

const Projets = () => {
    const experienceData = [
        {
            title: "Projet d'école",
            date: '2023',
            location: 'EMSI - MARRAKECH',
            projets: [
                {
                    titre: 'Création d\'un site web pour la location de voitures en ligne',
                    technologie: 'Django, MySQL, GitHub',
                },
                {
                    titre: 'Création d\'un site web pour rechercher des restaurants',
                    technologie: 'Spring Boot, React JS, MySQL, GOOGLE MAP API',
                },
            ],
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ProjetsCard
                    key={index}
                    title={experience.title}
                    location={experience.location}
                    date={experience.date}
                    projets={experience.projets}
                />
            ))}
        </section>
    );
};

export default Projets;
