import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position, location, duration, sujet, technologie }) => {
    return (
        <Card title={title} subTitle={position} footer={location} className="md:w-25rem">
            <div>
                <div><b>Sujet : </b> {sujet}</div>
                <div><b>Technologie : </b>{technologie}</div>
                <div><b>Date : </b>{duration}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage de fin d\'année 2022',
            position: 'Stagiaire',
            duration: 'Août 2022 - septembre 2022',
            location: 'STOREINO - AGADIR',
            technologie: 'HTML, Css, vue js, node js.',
            sujet: 'création de template pour site web e-commerce.',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    position={experience.position}
                    duration={experience.duration}
                    location={experience.location}
                    sujet={experience.sujet}
                    technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
