/**
 * Card Component to display the individual images on the carousel
 *
 * Requirements
 * - Displays the drama poster
 * - if the card is active, the card has a blue border
 *
 * Parameters
 *   @param {number} programId program id
 *   @param {string} imageUrl string for image url
 *   @param {string} altText string for image alt text
 *   @param {boolean} isActive indicates if the current card is chosen
 *
 */

import React from "react";
import "./Card.css";

export interface CardProps {
  programId: number;
  imageUrl: string;
  altText: string;
  isActive?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const { programId, imageUrl, altText, isActive } = props;

  return (
    <div
      id={`carousel-card-${programId}`}
      data-testid={`carousel-card-${programId}`}
      className={isActive ? "carousel-card-blue" : "carousel-card"}
    >
      <img src={imageUrl} alt={altText} className="image" />
    </div>
  );
};

export default Card;
