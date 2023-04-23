import React from "react";
import { Card } from "react-bootstrap";

function Certification() {
    const certifications = [
        {
            certification: "DevOps, Cloud, and Agile Foundations Specialization",
            organisation: "IBM Skills Network",
        },
        {
            certification: "Server-side Development with NodeJS, Express and MongoDB",
            organisation: "Coursera",
        },
        {
            certification: "Data Collection and Processing with Python",
            organisation: "Coursera",
        },
    ];

    return (
        <section className="section">
            {certifications.map((certification) => (
                <Card key={certification.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{certification.certification}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {certification.organisation}
                        </Card.Subtitle>
                        <Card.Text>{certification.id}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Certification;
