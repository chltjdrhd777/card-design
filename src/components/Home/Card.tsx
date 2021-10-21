import React, { useState } from "react";
import { Card } from "components/styled/Home.styled";

interface CardProps {
  title: string;
  subTitle: string;
  description: string;
  className: string;
}

function CardContainer({ title, subTitle, description, className }: CardProps) {
  const [clicked, setClicked] = useState(false);

  const alterDescription = (defaultDescription: string) => {
    if (defaultDescription.length >= 100) {
      return defaultDescription.slice(0, 100) + "...";
    }

    return defaultDescription;
  };

  return (
    <Card className={className} onClick={() => setClicked((prev) => !prev)}>
      <h2 className="card-title-large">{title}</h2>
      <h3 className="card-title-small">{subTitle}</h3>
      <p className="card-description">{clicked ? description : alterDescription(description)}</p>

      <a href="#" className="card-cta">
        <i className="fas fa-arrow-down"></i>
      </a>
    </Card>
  );
}

export default CardContainer;
