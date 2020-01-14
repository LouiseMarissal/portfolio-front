import React from "react";

// import { NavLink } from "react-router-dom";
// corriger les images des projets et ajouter un hover au survol avec le texte

export default function About() {
  return (
    <div className="about">
      <div className="fr">
        <h3 className="title">Mon Parcours</h3>
        <div className="text">
          Après 4 années en tant que Responsable de bar à Lille, j'ai décidé de
          changer d'environnement de travail et d'entreprendre une formation
          intensive en Web développement Full Stack chez Ironhack. J'y ai appris
          les langages Javascript, React.JS, Express.JS, Node.JS, MongoDB, API,
          HTML5 & CSS3. <br />
          Maintenant diplômée d'équivalence Bac + 3 reconnu au RNCP je suis à la
          recherche d'un poste/stage de Développeur Web Full Stack Junior.
        </div>
      </div>
      <div className="projects">
        <h3 className="title">Mes projets</h3>
        <div className="text">
          Voici les 3 projets effectués lors du bootcamp chez Ironhack. Chaque
          projet correspond à l'aboutissement de chaque modules.
        </div>
        <div className="projet-container">
          <div className="image-container potter">
            <a
              href="https://louisemarissal.github.io/Module-1-Project-Louise/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>
                PotterHead <br />
                or
                <br /> Stupid Muggle ?
              </h5>
            </a>

            <p>A full javascript quiz with DOM manipulations.</p>
          </div>
          <div className="image-container ironcocktail">
            <a
              href="https://iron-cocktails.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>IronCocktails</h5>
            </a>

            <p>A full CRUD application from sractch.</p>
          </div>
          <div className="image-container mixolov">
            <a
              href="https://mixolove-frontend.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5>MixoLover </h5>
            </a>

            <p>A full MERN application.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
