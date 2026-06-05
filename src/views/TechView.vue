<template>
  <v-container>
    <v-card class="mb-6 bg-grey-darken-4">
      <v-card-title>Présentation et évaluation de savoir-faire techniques</v-card-title>
      <v-card-text>
        Cette partie présente mes compétences techniques en matière de traitement de la donnée, réparties entre l'intégration (ETL) et la restitution (Business Intelligence).
      </v-card-text>
    </v-card>

    <v-tabs v-model="tab" color="light-blue-accent-2">
      <v-tab value="trace1">TRACE 1 (Implémentation ETL)</v-tab>
      <v-tab value="trace2">TRACE 2 (Conception API)</v-tab>
      <v-tab value="trace3">TRACE 3 (Préparation BI)</v-tab>
      <v-tab value="trace4">TRACE 4 (Extraction BI)</v-tab>
      <v-tab value="trace5">TRACE 5 (DREmgr)</v-tab>
      <v-tab value="trace6">TRACE 6 (Connexion DRE / BO)</v-tab>
      <v-tab value="bilan">BILAN & ÉVALUATION</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-4">
      <v-window-item value="trace2">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Conception et Test des API (Swagger)</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-teal-darken-3 px-1">savoir analyser et exploiter la documentation technique d'une API</span>,
              <span class="bg-pink-darken-3 px-1">savoir paramétrer et exécuter une requête HTTP avec ses paramètres</span>,
              <span class="bg-indigo-darken-3 px-1">savoir interpréter les réponses du serveur (codes de statut et structure JSON)</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceSwagger" alt="Trace 2 - Swagger" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 2 : Interface Swagger illustrant la sélection de la ressource (Cadre A), l'injection des paramètres d'appel (Cadre B) et l'analyse de la réponse renvoyée par le serveur (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 2 illustre l'étape préparatoire indispensable avant de développer le moindre flux d'intégration de données. Elle représente l'interface Swagger, qui fournit une documentation interactive permettant de simuler des appels vers les serveurs de Pégase. Dans le cadre du projet "Calcium", cette phase de test manuel tient une place centrale et répond à un enjeu de cartographie précis : lors d'une migration Apogée → Pégase, chaque donnée utilisée dans l'ancien système doit être retrouvée ou reconstituée dans le nouveau. Concrètement, pour chaque champ nécessaire au flux (identifiant étudiant, code formation, adresse…), il faut d'abord vérifier <strong>si cette donnée existe dans Pégase</strong> — et si oui, quel endpoint et quelle structure JSON la contient. Si elle n'existe pas directement, il faut alors déterminer si elle peut être <strong>recalculée ou transformée</strong> à partir d'autres champs disponibles. C'est précisément ce travail de vérification que Swagger permet de conduire de manière interactive, avant toute automatisation.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Lors de cette phase préparatoire, j'ai dû <span class="bg-teal-darken-3 px-1">savoir analyser et exploiter la documentation technique d'une API</span> afin de cibler avec justesse la ressource pertinente (illustré par le Cadre A sur le routeur GET). Cela impliquait non seulement de lire la documentation, mais aussi de mener un travail de correspondance : identifier si les données requises par le flux existaient bien dans Pégase, sous quel endpoint et avec quelle structure. Lorsqu'une donnée n'existait pas directement, il fallait évaluer la possibilité de la reconstruire par transformation à partir des champs disponibles dans la réponse. Ensuite, pour vérifier les retours attendus, il était nécessaire de <span class="bg-pink-darken-3 px-1">savoir paramétrer et exécuter une requête HTTP avec ses paramètres</span>, en renseignant correctement les filtres tels que l'UUID et le code établissement (Cadre B). Enfin, l'étape finale m'a permis de <span class="bg-indigo-darken-3 px-1">savoir interpréter les réponses du serveur (codes de statut et structure JSON)</span>, vérifiant ainsi l'obtention du code serveur 200 de succès et validant que la structure des données reçues correspondait bien à ce dont le flux avait besoin (Cadre C).
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace1">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Architecture de croisement conditionnel (Talend)</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-blue-darken-3 px-1">savoir consommer et paginer des API REST sécurisées</span>,
              <span class="bg-green-darken-3 px-1">savoir optimiser les performances de jointure par la mise en cache</span>,
              <span class="bg-purple-darken-3 px-1">savoir nettoyer et transformer des flux de données JSON</span>,
              <span class="bg-orange-darken-3 px-1">savoir sécuriser les flux contre les pannes et exceptions</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceCalcium" alt="Trace 1 - Talend" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 1 : Extrait du Job Talend illustrant la lecture en mémoire (A), le filtrage avancé (B) et le déclenchement conditionnel de l'API (C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 1 illustre le cœur du traitement logique d'un Job Talend. Elle représente le moment exact où les données de l'étudiant en cours de traitement sont croisées avec les données de l'offre de formation de l'université (stocké en mémoire au point A), avant d'être filtrées de manière sécurisée (point B) pour déclencher — ou non — un appel vers une nouvelle API (point C). Il est important de préciser que cette capture n'est qu'un <strong>extrait ciblé d'un job bien plus vaste</strong> : le flux complet comporte de nombreux autres composants en amont gérant l'authentification, la récupération paginée des données et le chargement des référentiels, ainsi que des composants en aval assurant les transformations finales et l'export CSV.<br>
                Dans le cadre de mon stage, ce flux a une place centrale pour le projet "Calcium" (gestion des rendez-vous médicaux). Plutôt que de surcharger les bases de données PostgreSQL de l'université hébergées en mode SAAS avec des requêtes répétitives, ce job extrait, croise et consolide les parcours académiques (formations, cursus, adresses) de milliers d'apprenants afin de générer un fichier d'import CSV quotidien, fiable et parfaitement formaté.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour répondre aux besoins de l'application Calcium et traiter ce grand volume d'étudiants, j'ai dû <span class="bg-blue-darken-3 px-1">savoir consommer et paginer des API REST sécurisées</span>. L'un des défis majeurs a été de gérer la pagination de l'API de l'université pour itérer sur plus de 300 pages de résultats sans perte de données. Afin de ne pas interroger l'API pour chaque ligne et saturer le réseau, j'ai choisi de <span class="bg-green-darken-3 px-1">savoir optimiser les performances de jointure par la mise en cache</span>. Comme le montre le Point A de la Trace 1, les référentiels (comme le catalogue des communes par exemple) sont chargés une seule fois puis lus en mémoire vive (RAM), ce qui permet un croisement quasi-instantané avec le dossier de l'étudiant.<br><br>
                Au cours du développement, j'ai été confronté à des rejets du serveur (erreurs de connexion) dus à la cadence trop élevée de Talend, ainsi qu'à des crashs liés à des données manquantes. Pour y remédier, j'ai dû <span class="bg-orange-darken-3 px-1">savoir sécuriser les flux contre les pannes et exceptions</span>. Au niveau du Point B de la Trace 1, j'ai configuré un filtrage en "mode avancé" avec du code Java pour intercepter les valeurs nulles et éviter des arrêts brutaux du programme (NullPointerException). Cette rigueur garantit que l'appel API du Point C ne se déclenche que si l'identifiant est strictement valide.<br><br>
                Enfin, avant l'exportation finale, j'ai utilisé des composants de mapping pour <span class="bg-purple-darken-3 px-1">savoir nettoyer et transformer des flux de données JSON</span>. Les informations brutes comportaient des résidus typographiques (crochets, guillemets d'échappement). J'ai combiné des fonctions Java directement dans les flux pour fournir un fichier cible parfaitement exploitable par l'application médicale.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace3">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Scripting d'extraction et de transformation de données sous QlikSense</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-blue-darken-3 px-1">savoir scripter l'extraction de données depuis une source distante</span>,
              <span class="bg-green-darken-3 px-1">savoir transformer et nettoyer des données via le langage de script Qlik</span>,
              <span class="bg-purple-darken-3 px-1">savoir préparer les tables pour optimiser le modèle associatif</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceQlick" alt="Trace 3 - QlikSense" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 3 : Éditeur de script QlikSense illustrant la connexion à la base de données distante (Cadre A), les règles de transformation métier sur les séries de baccalauréat (Cadre B) et l'organisation du code en sections (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 3 représente la phase de préparation des données (ETL) intégrée directement au sein du moteur de l'outil de Business Intelligence QlikSense. Avant de pouvoir générer les tableaux de bord interactifs, il est indispensable de charger et de formater les données brutes. Dans le cadre de mon stage, cette étape a une place cruciale car elle s'inscrit dans un contexte de migration en cours : il existait déjà un tableau de bord QlikSense fonctionnel, alimenté uniquement par les données d'<strong>Apogée</strong>. Ma mission était de faire évoluer ce tableau de bord pour qu'il soit également compatible avec les données de <strong>Pégase</strong>, le nouveau système en cours de déploiement. Cette contrainte implique un enjeu de transformation important : les données issues des deux systèmes d'information sont structurées différemment, mais doivent produire des indicateurs <strong>identiques en sortie</strong> pour que les tableaux de bord restent cohérents et comparables dans le temps. Cette trace montre concrètement ce travail d'harmonisation : la connexion à l'univers de données DRE (qui rapatrie les données de Pégase) ainsi qu'à d'autres connexions Apogée non visibles sur cet extrait, le nettoyage et la normalisation des informations de scolarité, et la structuration d'un modèle de données capable d'absorber cette dualité. Le tableau de bord produit a vocation à être utilisé directement par la direction des composantes de l'université pour piloter leurs indicateurs de scolarité.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour alimenter l'application QlikSense avec des indicateurs fiables, j'ai dû <span class="bg-blue-darken-3 px-1">savoir scripter l'extraction de données depuis une source distante</span>. Comme l'illustre le Cadre A de la Trace 3, j'ai créé et paramétré une connexion vers la base PostgreSQL de l'univers DRE de l'université afin de rapatrier les tables nécessaires via des requêtes de chargement.<br><br>Cependant, les données brutes de scolarité n'étaient pas directement exploitables, et surtout pas comparables entre elles : Apogée et Pégase utilisent des nomenclatures et des structures différentes pour représenter les mêmes réalités métier. J'ai donc dû <span class="bg-green-darken-3 px-1">savoir transformer et nettoyer des données via le langage de script Qlik</span> pour harmoniser ces deux sources vers un format de sortie unique et cohérent. Le Cadre B de la Trace 3 illustre concrètement ce travail d'homogénéisation : l'utilisation de la fonction conditionnelle <code>if</code> m'a permis de recoder dynamiquement des dizaines de codes techniques de baccalauréat (dont les valeurs diffèrent entre les deux systèmes) en catégories lisibles communes, comme "Equivalence", "Bac professionnel" ou "Bac technologique". Ce type de transformation est la clé pour que les indicateurs du tableau de bord restent valides quelle que soit la source d'origine de la donnée.<br><br>Enfin, tout ce travail de code avait pour but de <span class="bg-purple-darken-3 px-1">savoir préparer les tables pour optimiser le modèle associatif</span>. Le Cadre C de la Trace 3 montre l'architecture rigoureuse du script, divisée en sections thématiques distinctes. Cette organisation m'a permis de concevoir un modèle de données cohérent en évitant les erreurs de jointures et les boucles circulaires, facilitant ainsi les performances de l'application et la maintenance du projet par l'équipe.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace4">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Conception de requête et extraction de données avec Business Objects</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-orange-darken-3 px-1">savoir concevoir des requêtes complexes sur un univers de données</span>,
              <span class="bg-pink-darken-3 px-1">savoir appliquer des filtres et des conditions de restriction</span>,
              <span class="bg-teal-darken-3 px-1">savoir valider et contrôler la cohérence d'un jeu de données extrait</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceBo" alt="Trace 4 - Business Objects" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 4 : Interface de SAP Business Objects illustrant la sélection des dimensions via l'univers de données (Cadre A), l'application des filtres croisés (Cadre B) et le contrôle des données brutes via l'aperçu (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 4 illustre l'utilisation de l'outil Business Intelligence SAP Business Objects (BO) pour l'interrogation ciblée de la base de données de l'université. Elle dévoile les "coulisses" techniques d'une extraction d'information. On y observe la sélection minutieuse des champs à afficher via un "univers" métier (DRE-v3), la mise en place de conditions strictes pour cibler une population étudiante précise, et enfin la phase de test avec l'aperçu des résultats bruts anonymisés. Dans le cadre de mes missions de stage, cette maîtrise de BO m'a permis de fournir des jeux de données fiables aux services administratifs de l'université, sans avoir à développer des requêtes SQL manuelles complexes.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour répondre aux demandes d'extraction spécifiques des services administratifs, j'ai dû <span class="bg-orange-darken-3 px-1">savoir concevoir des requêtes complexes sur un univers de données</span>. Comme le montre le Cadre A de la Trace 4, cela demande une bonne compréhension du modèle de données de l'université pour naviguer dans l'arborescence à gauche et sélectionner les bons indicateurs de restitution (code période, libellé de formation, note finale, etc.).<br><br>Afin de ne cibler que la population pertinente (ici, les étudiants de la formation <em>UNC-201</em> et de l'objet <em>UNC-12</em> sur la période universitaire <em>23-24</em>), j'ai dû <span class="bg-pink-darken-3 px-1">savoir appliquer des filtres et des conditions de restriction</span>. Le Cadre B illustre cette étape au niveau de l'éditeur de requête, en utilisant des opérateurs logiques (<code>ET</code>) pour croiser les données d'inscription et de résultats avec une grande précision.<br><br>Enfin, avant de valider l'extraction complète et d'exporter le fichier cible pour les utilisateurs finaux, j'ai pris soin de <span class="bg-teal-darken-3 px-1">savoir valider et contrôler la cohérence d'un jeu de données extrait</span>. Le Cadre C démontre cette étape de recette visuelle : l'actualisation de l'aperçu m'assure instantanément que la requête fonctionne, que les filtres s'appliquent correctement, et que les informations métiers (résultat final, note) remontent de manière cohérente sans générer de doublons ou d'erreurs d'exécution.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace5">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Configuration système et monitoring de l'environnement serveur DREmgr</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-blue-darken-3 px-1">savoir configurer les variables d'environnement et les accès sécurisés d'un serveur</span>,
              <span class="bg-green-darken-3 px-1">savoir paramétrer les flux de synchronisation de données distantes</span>,
              <span class="bg-purple-darken-3 px-1">savoir analyser des logs système pour monitorer l'état des automatisations</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceDremgr" alt="Trace 5 - DREmgr" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 5 : Paramétrage du fichier d'environnement natif via l'éditeur terminal nano (Cadres A et B) et interface de supervision des logs d'importation automatisée (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 5 illustre la mise en place de l'outil DREmgr, l'interface permettant de récupérer et de gérer les données répliquées de l'établissement (DRE). L'installation de base de cet outil a été gérée en étroite collaboration avec l'équipe système, qui a pris le soin de m'expliquer l'architecture sous-jacente : DREmgr est déployé via <strong>Docker</strong>, et l'ensemble des services qui le composent (base de données, interface web, ...) s'exécutent dans des conteneurs orchestrés. Cette explication m'a permis de comprendre pourquoi le fichier <code>.env</code> joue un rôle aussi central — il est la seule interface de configuration accessible sans toucher aux conteneurs eux-mêmes — et d'appréhender concrètement ce que signifie intervenir dans un environnement conteneurisé en production. Mon rôle spécifique a ensuite été d'intervenir "sous le capot" du serveur, via un terminal Linux, pour compléter ce fichier de configuration central. Les captures montrent l'injection des variables d'accès aux bons emplacements pour la base de données (Cadre A), le ciblage des flux d'importation (Cadre B), et enfin, l'interface graphique de monitoring permettant de vérifier que les tâches automatisées s'exécutent correctement (Cadre C).<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour que cet outil fonctionne de manière sécurisée et s'intègre au réseau de l'université, j'ai dû <span class="bg-blue-darken-3 px-1">savoir configurer les variables d'environnement et les accès sécurisés d'un serveur</span>. Comme le montre le Cadre A de la Trace 5, j'ai édité le fichier dremgr.env généré lors de l'installation par l'équipe système. Mon intervention via l'éditeur de ligne de commande GNU nano 7.2 a consisté à y renseigner précisément les identifiants métiers (POSTGRES_USER) et les mots de passe aux bons endroits pour garantir la connexion.<br><br>Il a fallu ensuite <span class="bg-green-darken-3 px-1">savoir paramétrer les flux de synchronisation de données distantes</span>. Le Cadre B illustre cette étape avec la configuration du profil de production : j'ai défini l'adresse cible (prod_DRE_URL) permettant au serveur de télécharger les sauvegardes (dumps).<br><br>Enfin, l'outil étant automatisé, j'ai dû <span class="bg-purple-darken-3 px-1">savoir analyser des logs système pour monitorer l'état des automatisations</span>. Le Cadre C démontre cette supervision active : je m'appuie sur la lecture des fichiers cron.log et import.log pour vérifier les mises à jour du code source et la création des schémas. Surtout, cette analyse m'a permis d'intercepter et de résoudre concrètement un problème d'importation des dumps qui bloquait l'exécution des tâches planifiées, en remontant à la source de l'anomalie signalée par les lignes d'erreurs pendant l'import.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace6">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Configuration de la connexion entre l'univers Business Objects et la base de données DRE</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="bg-orange-darken-3 px-1">savoir paramétrer une connexion relationnelle vers une base de données distante</span>,
              <span class="bg-teal-darken-3 px-1">savoir administrer un projet local et ses ressources dans un outil de conception d'information</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceConnectionDRE" alt="Trace 6 - Connexion DRE / BO" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 6 : Outil de conception d'information SAP illustrant l'intégration de la connexion dans le projet local (Cadre A) et le paramétrage des accès sécurisés vers la base PostgreSQL distante (Cadre B)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 6 illustre le pont technique établi entre le serveur de données et l'outil de restitution Business Intelligence. Après le déploiement des données répliquées de l'établissement (DRE) via l'intégration d'un fichier .biar, il est indispensable de rétablir la communication entre la base de données et l'environnement SAP Business Objects. Cette capture d'écran montre l'utilisation de l'Outil de conception d'information (IDT) pour configurer et tester la connexion sécurisée vers la base PostgreSQL contenant les données de l'université. Cette étape de configuration de l'environnement logiciel est le prérequis absolu pour que les utilisateurs finaux puissent requêter l'univers et générer leurs rapports administratifs.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour rendre les données de la DRE exploitables par l'outil de reporting, j'ai dû <span class="bg-orange-darken-3 px-1">savoir paramétrer une connexion relationnelle vers une base de données distante</span>. Le Cadre B de la Trace 6 illustre ce paramétrage minutieux de l'environnement : j'ai configuré le pilote réseau (ODBC pour PostgreSQL 10), renseigné les identifiants de l'administrateur de la base (dreadmin), ciblé précisément la source de données DRE32, et utilisé la fonction de test pour valider que le flux réseau entre le serveur d'application et la base de données était opérationnel.<br><br>Au-delà de la simple connexion réseau, il fallait intégrer proprement ce lien dans l'architecture logicielle, ce qui implique de <span class="bg-teal-darken-3 px-1">savoir administrer un projet local et ses ressources dans un outil de conception d'information</span>. Le Cadre A montre comment cette connexion (le fichier DRE32.cns) s'articule au sein du projet structuré, aux côtés de la fondation de données (.dfx) et de la couche de présentation (.blx). Cette organisation rigoureuse garantit que l'environnement décisionnel (BO) interroge la bonne base de données fraîchement déployée lors de la publication de l'univers.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="bilan">
        <v-card class="bg-grey-darken-4 mb-6">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir concevoir, implémenter et administrer des flux d'intégration de données (API et ETL)
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>
          
          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="bg-teal-darken-3 px-1">Savoir analyser et exploiter la documentation technique d'une API</span> : cartographie des endpoints Pégase et vérification de la disponibilité des données (Trace 2).</li>
              <li class="mb-1"><span class="bg-blue-darken-3 px-1">Savoir consommer et paginer des API REST sécurisées</span> : extraction massive de données avec gestion de jetons d'accès (Trace 1).</li>
              <li class="mb-1"><span class="bg-purple-darken-3 px-1">Savoir nettoyer et transformer des flux de données JSON</span> : croisement en mémoire vive dans Talaxie avec des référentiels universitaires.</li>
              <li class="mb-1"><span class="bg-orange-darken-3 px-1">Savoir sécuriser les flux contre les pannes et les exceptions Java</span> : gestion des timeouts et des NullPointerException.</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Ces compétences ont servi à créer l'alimentation automatique de l'application médicale « Calcium », générant un fichier d'import CSV quotidien, fiable et exploitable.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> Si le fonctionnement d'une API a été abordé en BUT, l'utilisation de jetons sécurisés en production a été acquise en autonomie. L'usage de la solution ETL (Talaxie) et le traitement de données en RAM ont été maîtrisés sur le terrain.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Difficulté :</strong> Élevée. L'exigence de production demandait de comprendre la logique de flux Talaxie, d'extraire la donnée utile au sein d'architectures JSON denses, et de concevoir du code Java défensif.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Évaluation :</strong> Bon / Maîtrisé. La conception d'un pipeline manipulant plus de 650 000 lignes garantit des compétences opérationnelles et transposables.
            </p>

            <p class="text-body-2 mb-0 text-justify">
              <strong class="text-grey-lighten-1">Avant / Après stage :</strong> <strong>Avant :</strong> Compétences cantonnées au SQL de base et requêtes simples d'API locales sans sécurité. <strong>Après :</strong> Autonomie complète sur l'architecture et le maintien de flux d'intégration de bout en bout.
            </p>
          </v-card-text>
        </v-card>
        <v-card class="bg-grey-darken-4 mb-6">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir préparer, modéliser et extraire des données décisionnelles (Business Intelligence)
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>
          
          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="bg-blue-darken-3 px-1">Scripter l'extraction de données depuis une source distante</span> : connexion aux bases PostgreSQL/DRE via les connecteurs QlikSense (Trace 3).</li>
              <li class="mb-1"><span class="bg-green-darken-3 px-1">Transformer et nettoyer des données via le langage de script Qlik</span> : harmonisation des données Apogée et Pégase vers un référentiel commun (Trace 3).</li>
              <li class="mb-1"><span class="bg-orange-darken-3 px-1">Concevoir des requêtes complexes sur un univers de données</span> : croisement et filtrage ciblé sous SAP Business Objects (Trace 4).</li>
              <li class="mb-1"><span class="bg-teal-darken-3 px-1">Valider et contrôler la cohérence d'un jeu de données extrait</span> : vérification de la fiabilité des indicateurs avant tout export (Trace 4).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Ce volet analytique visait à exploiter les bases de données (scolarité, personnel) pour bâtir les indicateurs de la DSIN. J'ai utilisé des solutions d'entreprise (QlikSense, Business Objects) pour alimenter des dashboards décisionnels de haut niveau.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> L'utilisation d'outils analytiques d'entreprise et les concepts de Business Intelligence m'étaient totalement inconnus. L'apprentissage s'est fait sur le terrain, en appréhendant l'interface visuelle de BO et la syntaxe spécifique au script Qlik.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Difficulté :</strong> Moyenne. Le principal défi a été de s'adapter à des éditeurs logiciels très lourds et d'assimiler la structure fine d'un univers de données pour garantir l'absence d'erreurs de calcul dans le reporting final.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Évaluation :</strong> Intermédiaire. Mon approche de la donnée s'est professionnalisée, passant de la simple requête textuelle à la modélisation et restitution visuelle structurée.
            </p>

            <p class="text-body-2 mb-0 text-justify">
              <strong class="text-grey-lighten-1">Avant / Après stage :</strong> <strong>Avant :</strong> En école, nous manipulions du SQL standard sans aucun outil lourd de modélisation visuelle. J'ignorais totalement ce qu'était la BI et ces outils. <strong>Après :</strong> Grâce à ces missions décisionnelles, mon sens de la requête a progressé vers un profil intermédiaire. Je sais manipuler un script interne à une solution d'entreprise (QlikSense), construire visuellement une interrogation sur BO, tout en assurant la fiabilité des résultats finaux.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="bg-grey-darken-4">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir configurer et déployer un environnement technique
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>
          
          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="bg-blue-darken-3 px-1">Configurer les variables d'environnement d'un service en production</span> : paramétrage sécurisé du fichier .env de DREmgr déployé sous Docker par l'équipe système (Trace 5).</li>
              <li class="mb-1"><span class="bg-orange-darken-3 px-1">Paramétrer une connexion relationnelle vers une base de données distante</span> : configuration ODBC vers la base PostgreSQL DRE depuis SAP IDT (Trace 6).</li>
              <li class="mb-1"><span class="bg-teal-darken-3 px-1">Administrer un projet local et ses ressources dans un outil de conception d'information</span> : organisation des couches connexion, fondation et présentation dans SAP IDT (Trace 6).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Garantir que les outils d'intégration et de BI reposent sur une infrastructure stable. J'ai pris en charge la configuration des environnements techniques — paramétrage de services déjà déployés par l'équipe système et établissement des liens réseau sécurisés (connexions ODBC) — sans intervenir sur le déploiement lui-même.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> Si les concepts de virtualisation ont été abordés en cours, la confrontation avec des règles réseau strictes (proxy d'entreprise) et l'administration de serveurs réels s'est faite sur le terrain.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Difficulté :</strong> Élevée. La complexité de l'infrastructure réseau de l'université demandait de diagnostiquer finement chaque couche (système, réseau, serveurs) pour débloquer les flux d'information.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Évaluation :</strong> Intermédiaire confirmé. Je comprends l'impact du système (Proxy, VM) sur les applications métier et je suis capable d'intervenir pour les configurer.
            </p>

            <p class="text-body-2 mb-0 text-justify">
              <strong class="text-grey-lighten-1">Avant / Après stage :</strong> <strong>Avant :</strong> La configuration d'environnements serveurs en production m'était inconnue. Les notions de réseau et de déploiement restaient théoriques, déconnectées des contraintes réelles d'une infrastructure d'entreprise. <strong>Après :</strong> Je suis capable d'intervenir dans un environnement de production pour configurer des services (paramétrage .env, connexions ODBC), comprendre l'architecture sous-jacente (Docker, serveurs Linux) et établir des liens fonctionnels entre des composants techniques hétérogènes.
            </p>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

import traceSwagger from '@/assets/trace/trace_swagger.png'
import traceCalcium from '@/assets/trace/trace_calcium.png'
import traceQlick from '@/assets/trace/trace_qlick.png'
import traceBo from '@/assets/trace/trace_BO.png'
import traceDremgr from '@/assets/trace/trace_DREmgr.png'
import traceConnectionDRE from '@/assets/trace/trace_connection_DRE.JPG'
import ZoomableImage from '@/components/ZoomableImage.vue'

const tab = ref('trace1')
</script>
