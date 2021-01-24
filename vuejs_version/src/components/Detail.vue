<template>

  <div>

    <div class="grey lighten-5 mt-8">
      <v-col>

        <h1 class="text-center">
          {{voiture._name}}
        </h1>
      </v-col>
    </div>

    <v-row>

    <!-- Affichage de l'image de la voiture, du titre, et de l'année de production -->
    <v-flex xs12 md6 sm12 lg6 class="mt-16">

    

    <v-card
            class="mx-auto"
            flat
            outlined
            max-width="600"
          >
            <router-link
              :to="{ name: 'ListeCar'}">

              <v-btn
                color="orange"
                depressed
              >
                Retour
              </v-btn>
            </router-link>

         

              
            <v-img
              class="white--text align-end"
              height="300px"
              :src="voiture._img"
            >
             
            </v-img>
              <v-card-title>
                {{voiture._name}}
              </v-card-title>

              <v-card-subtitle>
                {{voiture._classe}}
              </v-card-subtitle>
              


            <v-card-text class="text--primary">
              <v-card flat>
                
              </v-card>
            </v-card-text>

            
      </v-card>
    </v-flex>


  <!-- Affichage des caractéritiques -->

    <v-flex xs12 md6 sm12 lg6 class="mt-16">

          <v-card
          flat
          class="mx-auto"
            max-width="600"
            outlined
          >
            


            <v-card-text class="text--primary">
              <v-card flat>
                

                  <v-tabs
                  v-model="tab"
                  background-color="deep-blue accent-4"
                  centered
                  dark
                  icons-and-text
                >
                  <v-tabs-slider></v-tabs-slider>

                  <v-tab href="#tab-1">
                    description
                  </v-tab>

                  <v-tab href="#tab-2">
                    Techniques
                  </v-tab>

                  <v-tab href="#tab-3">
                    Divers
                  </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item :value="'tab-'+1">
                
                      <v-card flat>
                        <v-card-text>{{ voiture._description }}</v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item :value="'tab-'+2">
                
                      <v-card flat>
                        <v-card-text>
                          

                            <v-col>
                                  <v-chip
                                  v-for="v in vitesse" :key="v.nom"
                                    class="ma-2"
                                    color="primary"
                                  >
                                    {{v.nom}} : {{v.valeur}}
                                  </v-chip>


                                  <v-chip
                                  v-for="m in moteur" :key="m.nom"
                                    class="ma-2"
                                    color="primary"
                                  >
                                    {{m.nom}} : {{m.valeur}}
                                  </v-chip>




                            </v-col>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item :value="'tab-'+3">
                
                      <v-card flat>
                        <v-card-text>
                          <v-col>

                            <v-chip
                              v-for="d in divers" :key="d.nom"
                              class="ma-2"
                              color="red"
                              text-color="white"
                              >
                                    {{d.nom}} : {{d.valeur}}
                            </v-chip>

                             


                            </v-col>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                
                  </v-tabs-items>
              </v-card>
            </v-card-text>

            
          </v-card>
    </v-flex>

    </v-row>

         
    
      

    

  </div>

</template>


<script>
    //import router from '../router'

    export default {
        name: 'Detail',
        data () {
            return {
                voiture: null, //Variable qui contient l'objet voiture envoyé depuis la liste
                tab: null, //Variable qui contient la table des caractéritiques
                vitesse:null, //Variable qui contient les les caractéritiques se référant à la vitesse
                moteur: null, //Variable qui contient les les caractéritiques se référant au moteur
                divers: null, //Variable qui contient les les caractéritiques se référant aux caractéristiques diverse
                
            }
        },
        created() {
            this.voiture = this.$route.params.voiture; // Instanciation de l'objet voiture


            // Affectation des valeurs des différence variables
            this.vitesse = [
              {
                nom: "Vitesse maximale",
                valeur: this.voiture._vitesse_maximale,
              },

              {
                nom: "Acceleration",
                valeur: this.voiture._acceleration,
              },

              {
                nom: "Boite de vitesse",
                valeur: this.voiture._boite_de_vitesses,
              }

            ],

            console.log(this.vitesse)

            this.moteur = [
              {
                nom: "Energie",
                valeur: this.voiture._energie,
              },

              {
                nom: "Moteur",
                valeur: this.voiture._moteur,
              },

              {
                nom: "Position",
                valeur: this.voiture._position_moteur,
              }

            ],

            this.divers = [

              {
                nom: "Année de production",
                valeur: this.voiture._annee_production,
              },

              
              {
                nom: "Consommation Mixte",
                valeur: this.voiture._consommation_mixte,
              },

              {
                nom: "Couple maximal",
                valeur: this.voiture._couple_maximal,
              },
              {
                nom: "Cylindre",
                valeur: this.voiture._cylindree,
              },

              {
                nom: "Puissance maximale",
                valeur: this.voiture._puissance_maximale,
              },

              {
                nom: "Poids à vide",
                valeur: this.voiture._poids_a_vide,
              },

              {
                nom: "Transmission",
                valeur: this.voiture._transmission,
              },

              {
                nom: "Usine d'assemblage",
                valeur: this.voiture._usine_assemblage,
              },

              

            ]
            
        }
       
        
    }
</script>