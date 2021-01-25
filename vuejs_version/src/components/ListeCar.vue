<template>
  <v-container>

    <v-layout row
      >
          

          <!-- 
            Partie des filtres
           -->
          <v-flex xs12 md12 sm12 lg3>

          <div class="grey lighten-5 mt-8">
            <v-col>
              <h1 hidden>{{nb}}</h1>

              <h1>Recherche</h1>
              <v-text-field
              class="sm-12"
                  solo
                  v-model="search"
                  label="Rechercher..."
                  append-icon="mdi-magnify"
                ></v-text-field>

                <h1>Filtre</h1>
              <v-select
                label="Marque"
                :items="list_marque"
                v-model="marque"
                dense
                outlined
              ></v-select>

             
            <!-- 
            On clique sur le bouton réinitialiser pour réinitialiser les filtres
           -->
            <v-btn
            class="center"
            depressed
            color="error"
            @click="reinitialiser()"
          >
            Reinitialiser
          </v-btn>
              

            </v-col>
            </div>

          </v-flex>

        <!-- 
            Affichage des voitures
           -->
        <v-flex xs12 md12 sm12 lg9 class="justify-center">


          <!-- 
            Création de tabs pour la pagination
           -->

          <v-tabs
          class="mt-8"
            v-model="tab"
            background-color="deep-blue accent-4"
            centered
            dark
            show-arrows
          >
            <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

            <!-- 
            On affiche 6 voitures par page
            On divise donc le nombre de voitures total renvoyé par l'api par 6 et on prends sa borne supérieure
           -->

            <v-tab
              v-for="index in Math.ceil(filtreVoiture.length/6)"
              :key="index"
              :href="'#tab-' + index"
            >
               {{ index }}
            </v-tab>
          </v-tabs>


          <!-- 
            On fait un parcours du tableau des voitures en créant les items

           -->
          <div v-for="index2 in Math.ceil(filtreVoiture.length/6)"
              :key="index2">
              
              <v-tabs-items v-model="tab">
                <v-row>
                <div v-for="(n,index3) in 6" :key="index3">
                  <v-tab-item :value="'tab-'+index2" >
                    
                   
                          <v-card

                          v-if="(index3+(index2-1)*6)<=filtreVoiture.length-1"
                            flat
                            outlined
                            class=" mr-5 ml-5 mt-8"
                            max-width="250"
                          >
                            <v-img
                              :src="filtreVoiture[index3+(index2-1)*6].img"
                              height="150"
                            ></v-img>
                            

                            <v-card-title>
                              {{filtreVoiture[index3+(index2-1)*6]._name}}
                            </v-card-title>

                            <v-card-subtitle>
                              {{filtreVoiture[index3+(index2-1)*6]._classe}}
                            </v-card-subtitle>

                            <v-card-actions>
                              <!-- 
                                Redirection sur la page Détail pour afficher le détail
                              -->
                              <router-link
                              :to="{ name: 'Detail', params: {voiture: filtreVoiture[index3+(index2-1)*6]}}">

                                <v-btn
                                  color="orange lighten-2"
                                  depressed
                                >
                                  Détails
                                </v-btn>
                              </router-link>
                              

                              <v-spacer></v-spacer>


                              <!-- 
                                Sert à afficher la description
                              -->
                              <v-btn
                                icon
                                @click="description(index3+(index2-1)*6)"
                              >
                            
                                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                              </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                              <div v-show="show[index3+(index2-1)*6]">
                                <v-divider></v-divider>

                                <v-card-text>
                                  {{filtreVoiture[index3+(index2-1)*6]._description}}
                                </v-card-text>
                              </div>
                            </v-expand-transition>
                    </v-card>
                    
                  

                    
                  </v-tab-item>
                </div>
                </v-row>
                  
          </v-tabs-items>
          
              

          </div>
          

        </v-flex>
        




    </v-layout>
    

   

    

    
  </v-container>
</template>

<script>
import Voiture from '../classes/Voiture';
import axios from 'axios'

  export default {
    name: 'ListeCar',

    data: () => ({
      search: '', // Contient la valeur de la recherche pour trier la liste
      list_voitures: [], // liste des voitures
      list_marque: [], // liste des marques des voitures
      list_usine: [], // liste des usines de fabrication des voitures
      marque: '', // marque selectionné
      tab: null,
      pagination: {},
      nb: 0,
      show: [],   // tableau qui va contenir un booléen pour chaque voiture pour afficher ou non la description
      jsonfile: [], // tableau du fichier json de l'api
      
      }
    ),

    created () {

      //const headers = { 'Access-Control-Allow-Origin': '*'};
      this.chargerVoitures();


      // Appel de l'api
      // Dans le fichier racine vue.config.js il y a le proxy https://jsonkeeper.com
      axios.get("/b/0K8O").then(response => {
        console.log("+++ SUCCESS+++");
        console.log(response);
        this.jsonfile = response.data
        this.chargerVoitures()
      }).catch(()=>{
        console.log("---ERREUR----")
      })
      
    
  },


  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.list_voitures.length / this.pagination.rowsPerPage) : 0
    },

    // fonction permettant de filtrer la liste des voitures
    filtreVoiture()
    {
      console.log("test")
      return this.list_voitures.filter((voiture)=>{
        return voiture._name.toLowerCase().match(this.search) && voiture._marque.match(this.marque);
      })
    },

    

    
  },

    methods:{


      // méthode pour afficher ou non la description
      description(i)
      {
        if(this.show[i])
        {
          this.show[i] = false;
        }

        else{
          this.show[i] = true;
        }

        
        this.nb++;
       
      },

      // methode pour initialiser les listes des voitures, des marques et des usines
      chargerVoitures()
      {
        for(let i = 0; i<this.jsonfile.length; i++)
        {
          this.show.push(false); // initialement on ne peut pas afficher les description des voitures donc elles sont toutes à false
          
          this.list_voitures.push(
            new Voiture(
              this.jsonfile[i]["name"],
              this.jsonfile[i]["description"],
              this.jsonfile[i]["img"] ,
              this.jsonfile[i]["marque"],
              this.jsonfile[i]["annees-de-production"],
              this.jsonfile[i].production,
              this.jsonfile[i].classe,
              this.jsonfile[i]["usine-s-dassemblage"],
              this.jsonfile[i].energie,
              this.jsonfile[i]["moteur-s"],
              this.jsonfile[i]["position-du-moteur"],
              this.jsonfile[i].cylindree,
              this.jsonfile[i]["puissance-maximale"],
              this.jsonfile[i]["couple-maximal"],
              this.jsonfile[i].transmission,
              this.jsonfile[i]["boite-de-vitesses"],
              this.jsonfile[i]["poids-a-vide"],
              this.jsonfile[i]["vitesse-maximale"],
              this.jsonfile[i].acceleration,
              this.jsonfile[i]["consommation-mixte"],
              this.jsonfile[i]["emission-de-co2"],
              this.jsonfile[i]["carrosserie-s"],
              this.jsonfile[i].longueur,
              this.jsonfile[i].hauteur,
              this.jsonfile[i].largeur,
              this.jsonfile[i].empattement,
              this.jsonfile[i]["coefficient-de-trainee"],
              this.jsonfile[i].chassis,
              this.jsonfile[i]["plate-forme"],
              this.jsonfile[i].suspensions,
              this.jsonfile[i].direction,
              this.jsonfile[i].freins

            )
          )
          this.list_marque.push(this.jsonfile[i]["marque"])
          if(this.jsonfile[i]["usine-s-dassemblage"] != null) //pour certaines voitures l'usine de fabrication n'est pas mentionnée, donc la condition est mis pour eviter d'avoir des valleurs null dans le tableau
          {
            this.list_usine.push(this.jsonfile[i]["usine-s-dassemblage"])
          }
          
        }
        
        Array.from(new Set(this.list_marque)) // utilisé pour éviter les doublons
        Array.from(new Set(this.list_usine))  // utilisé pour éviter les doublons

      },

      //Méthode réinitialise les filtres
      reinitialiser()
    {
      this.marque = ''
      this.search = ''
      this.usine = ''
    }

      

    },

    
  }
</script>
