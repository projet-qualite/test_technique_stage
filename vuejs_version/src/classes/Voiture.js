
// Classe voiture qui sera manipuler après avoir chargé le JSON
export default class Voiture
{

    constructor(name, description, img, marque, annee_production, 
        production, classe, usine_assemblage, energie, moteur, position_moteur, cylindree, puissance_maximale, 
        couple_maximal, transmission, boite_de_vitesses, poids_a_vide,vitesse_maximale,acceleration,
        consommation_mixte,emission_de_co2,carrosserie,longueur,largeur,hauteur,empattement,coefficient_de_trainee,
        chassis,plate_forme,suspensions,direction,freins
        ) {
        this._name = name;
        this._description = description;
        this._img = img;
        this._marque = marque;
        this._annee_production = annee_production;
        this._production = production;
        this._classe = classe;
        this._usine_assemblage = usine_assemblage;
        this._energie = energie;
        this._moteur = moteur;
        this._position_moteur = position_moteur;
        this._cylindree = cylindree;
        this._puissance_maximale = puissance_maximale;
        this._couple_maximal = couple_maximal;
        this._transmission = transmission;
        this._boite_de_vitesses = boite_de_vitesses;
        this._poids_a_vide = poids_a_vide;
        this._vitesse_maximale = vitesse_maximale;
        this._acceleration = acceleration;
        this._consommation_mixte = consommation_mixte;
        this._emission_de_co2 = emission_de_co2;
        this._carrosserie = carrosserie;
        this._longueur = longueur
        this._hauteur = hauteur;
        this._largeur = largeur;
        this._empattement = empattement;
        this._coefficient_de_trainee = coefficient_de_trainee;
        this._chassis = chassis;
        this._plate_forme = plate_forme;
        this._suspensions = suspensions;
        this._direction = direction;
        this._freins = freins;
      }
    
      get name() {
        return this._name;
      }

      set name(newName)
      {
        this._name = newName;
      }

      get description() {
        return this._description;
      }

      get img() {
        return this._img;
      }

      get marque() {
        return this._marque;
      }

      get annee_production() {
        return this._annee_production;
      }

      get production() {
        return this._production;
      }

      get classe() {
        return this._classe;
      }

      get usine_assemblage() {
        return this._usine_assemblage;
      }

      get energie() {
        return this._energie;
      }

      get moteur() {
        return this._moteur;
      }

      get position_moteur() {
        return this._position_moteur;
      }

      get cylindree() {
        return this._cylindree;
      }

      get puissance_maximale() {
        return this._puissance_maximale;
      }

      get couple_maximal() {
        return this._couple_maximal;
      }

      get transmission() {
        return this._transmission;
      }

      get boite_de_vitesses() {
        return this._boite_de_vitesses;
      }

      get poids_a_vide() {
        return this._poids_a_vide;
      }

      get vitesse_maximale() {
        return this._vitesse_maximale;
      }


      get acceleration() {
        return this._acceleration;
      }

      get consommation_mixte() {
        return this._consommation_mixte;
      }

      get emission_de_co2() {
        return this._emission_de_co2;
      }


      get carrosserie() {
        return this._carrosserie;
      }

      get longueur() {
        return this._longueur;
      }

      get largeur() {
        return this._largeur;
      }


      get hauteur() {
        return this._hauteur;
      }

      get empattement() {
        return this._empattement;
      }

      get coefficient_de_trainee() {
        return this._coefficient_de_trainee;
      }


      get chassis() {
        return this._chassis;
      }


      get plate_forme() {
        return this._plate_forme;
      }

      get suspensions() {
        return this._suspensions;
      }

      get direction() {
        return this._direction;
      }

      get freins() {
        return this._freins;
      }

    
      

}