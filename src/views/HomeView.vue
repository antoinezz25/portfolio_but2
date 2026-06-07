<template>
  <v-container class="home-page py-8">

    <v-row class="mb-6" align="stretch">
      <v-col cols="12" md="9">
        <v-card class="h-100 section-card" elevation="0">
          <v-card-text class="pb-0">
            <p class="section-label">Portfolio · BUT Informatique · Stage 2025–2026</p>
          </v-card-text>
          <v-card-title class="text-h4 font-weight-bold section-title pt-0">Antoine Duarte</v-card-title>
          <v-card-text>
            <p class="text-body-2 text-justify">
              Ce portfolio a été conçu dans le cadre de la validation de ma deuxième année de BUT Informatique. Il présente et évalue les compétences techniques, méthodologiques et humaines mobilisées lors de mon stage à la DSIN de l'Université Marie et Louis Pasteur. À travers l'analyse de quatorze traces de mon activité, ce site démontre mon niveau dans des savoir-faire généraux acquis en contexte professionnel réel.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" class="d-flex justify-center align-center">
        <div class="photo-wrapper">
          <v-img :src="photoPro" alt="Antoine Duarte" cover class="hero-photo"></v-img>
        </div>
      </v-col>
    </v-row>

    <v-card class="mb-6 section-card" elevation="0">
      <v-card-text class="pb-0">
        <p class="section-label">Entreprise</p>
      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold section-title pt-0">Contexte de l'Entreprise</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="8">
            <p class="text-body-2 text-justify mb-5">
              Mon stage s'est déroulé au sein de la <strong>Direction des Systèmes d'Information et du Numérique (DSIN)</strong> de l'Université Marie et Louis Pasteur, plus précisément dans le <strong>Pôle Métier</strong>. Ce service gère l'intégration des solutions logicielles répondant aux besoins de l'établissement.
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <p class="field-label mb-3">Équipe</p>
                <p class="text-body-2 mb-1"><span class="text-grey-lighten-1">Responsable :</span> Christelle Duarte</p>
                <p class="text-body-2 mb-1"><span class="text-grey-lighten-1">Tuteur :</span> Loan Guyon</p>
                <p class="text-body-2 text-grey-darken-1 mt-2" style="font-size: 0.8rem;">Antonin Rothe · Robin Vuittenez<br>Logan Humbert · Anne-Marie Guyo · Corrine Charles</p>
              </v-col>
              <v-col cols="12" sm="6">
                <p class="field-label mb-3">Outils &amp; environnement</p>
                <p class="text-body-2 mb-1">Linux Mint · PostgreSQL · MongoDB</p>
                <p class="text-body-2 mb-1">Talend / Talaxie · Swagger</p>
                <p class="text-body-2 mb-1">SAP Business Objects · QlikSense</p>
                <p class="text-body-2">DREmgr</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="4" class="d-flex align-center justify-center">
            <v-img :src="logoUMLP" alt="Logo UMLP" class="bg-white rounded pa-3" width="100%" max-width="170"></v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="mb-6 section-card" elevation="0">
      <v-card-text class="pb-0">
        <p class="section-label">Équipe</p>
      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold section-title pt-0">Organigramme de la DSIN</v-card-title>
      <v-card-text>
        <p class="text-body-2 mb-4" style="color: #888;">Positionnement du Pôle Métier dans l'organisation globale de la Direction des Systèmes d'Information.</p>
        <ZoomableImage :src="organigramme" alt="Organigramme DSIN" :preview-height="600" />
      </v-card-text>
    </v-card>

    <v-card class="mb-6 section-card" elevation="0">
      <v-card-text class="pb-0">
        <p class="section-label">Sujet</p>
      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold section-title pt-0">Contexte du Sujet de Stage</v-card-title>
      <v-card-text>
        <div class="mb-4">
          <p class="field-label mb-2">Existant &amp; problématiques</p>
          <p class="text-body-2 text-justify">
            L'université traverse une transition majeure au sein de son Système d'Information, passant de l'ancien logiciel de scolarité <strong>Apogée</strong> vers le nouveau système national <strong>Pégase</strong>. Cette transition et cohabitation engendre des défis de reprise de données (RDD) et de synchronisation : il a été acté de faire un passage en production partielle à la rentrée 2026 et il faut faire cohabiter les systèmes pour assurer la continuité de service.
          </p>
        </div>
        <v-divider class="mb-4" color="#2e2e2e"></v-divider>
        <div class="mb-4">
          <p class="field-label mb-2">Sujet</p>
          <p class="text-body-2 text-justify">
            Au sein du SI et de l'écosystème applicatif Pégase, ma mission a consisté à recréer et développer de nouveaux <strong>flux d'intégration (ETL)</strong>. Pégase étant une solution hébergée en SaaS, j'ai également pris en charge l'installation et le paramétrage d'une base locale d'établissement (<strong>DRE</strong>) pour rapatrier les données, avant de concevoir des <strong>requêtes décisionnelles</strong> pour les exploiter sous QlikSense et BO.          </p>
        </div>
        <v-divider class="mb-4" color="#2e2e2e"></v-divider>
        <div>
          <p class="field-label mb-2">Enjeux &amp; objectifs</p>
          <p class="text-body-2 text-justify">
            Assurer la continuité de service dès la campagne des inscriptions administratives début juillet.Dans le cadre de la reprise de données l'objectif était de venir en soutients de l'équipe de RDD en executant des requètes pour facilité la fiabilisation des données reprisent. Pour le projet <strong>Calcium</strong> (gestion des rendez-vous médicaux étudiants), l'objectif était d'automatiser quotidiennement un croisement de données massif. Il fallait également garantir à la gouvernance et aux directions des composantes des tableaux de bord statistiques fiables malgré la complexité de la nouvelle architecture logicielle.
          </p>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="section-card" elevation="0">
      <v-card-text class="pb-0">
        <p class="section-label">Compétences</p>
      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold section-title pt-0">Savoir-Faire Généraux mis en jeu</v-card-title>
      <v-card-text>
        <p class="text-body-2 mb-5 text-justify">
          Les savoir-faire généraux mobilisés lors de ce stage sont regroupés ci-dessous selon les trois axes du portfolio. Chaque catégorie est illustrée par plusieurs traces et fait l'objet d'une auto-évaluation détaillée dans la page correspondante.
        </p>
        <v-row>
          <v-col cols="12" md="4">
            <v-card variant="outlined" class="h-100 bg-grey-darken-4 border-red-lighten-1 d-flex flex-column">
              <v-card-text class="pb-1 flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-3">
                  <span class="text-subtitle-2 text-red-lighten-1 font-weight-bold">Technique Informatique</span>
                  <v-chip size="x-small" variant="tonal" color="red-lighten-1">6 traces</v-chip>
                </div>
                <ul class="sf-list">
                  <li>Savoir concevoir, implémenter et administrer des flux d'intégration de données (API et ETL)</li>
                  <li>Savoir préparer, modéliser et extraire des données décisionnelles (Business Intelligence)</li>
                  <li>Savoir configurer et déployer un environnement technique</li>
                </ul>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn variant="text" color="red-lighten-1" size="small" to="/tech/trace1" append-icon="mdi-arrow-right">Voir le détail</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card variant="outlined" class="h-100 bg-grey-darken-4 border-blue-lighten-1 d-flex flex-column">
              <v-card-text class="pb-1 flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-3">
                  <span class="text-subtitle-2 text-blue-lighten-1 font-weight-bold">Suivi de Projet</span>
                  <v-chip size="x-small" variant="tonal" color="blue-lighten-1">4 traces</v-chip>
                </div>
                <ul class="sf-list">
                  <li>Savoir planifier, suivre et piloter un projet informatique</li>
                  <li>Savoir documenter et garantir la maintenabilité d'un projet informatique</li>
                </ul>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn variant="text" color="blue-lighten-1" size="small" to="/proj/trace3" append-icon="mdi-arrow-right">Voir le détail</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card variant="outlined" class="h-100 bg-grey-darken-4 border-green-lighten-1 d-flex flex-column">
              <v-card-text class="pb-1 flex-grow-1">
                <div class="d-flex align-center justify-space-between mb-3">
                  <span class="text-subtitle-2 text-green-lighten-1 font-weight-bold">Intégration en Entreprise</span>
                  <v-chip size="x-small" variant="tonal" color="green-lighten-1">4 traces</v-chip>
                </div>
                <ul class="sf-list">
                  <li>Savoir s'intégrer dans une équipe et communiquer en milieu professionnel</li>
                  <li>Savoir appréhender et analyser un Système d'Information complexe</li>
                </ul>
              </v-card-text>
              <v-card-actions class="pt-0">
                <v-btn variant="text" color="green-lighten-1" size="small" to="/integration/trace5" append-icon="mdi-arrow-right">Voir le détail</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script setup>
import photoPro from '@/assets/trace/photo_pro.jpeg'
import logoUMLP from '@/assets/trace/Logo-Universite-Marie-et-Louis-Pasteur-UMLP.png'
import organigramme from '@/assets/trace/organigramme.png'
import ZoomableImage from '@/components/ZoomableImage.vue'
</script>

<style scoped>
.home-page {
  max-width: 1150px;
}

.section-card {
  background: #1f1f1f !important;
  border: 1px solid #353535;
  border-radius: 12px !important;
}

.section-label {
  color: #ffcc80;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.field-label {
  color: #ffcc80;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0;
}

.section-title {
  color: #f4f6fb;
}

.hero-photo {
  width: 100%;
  height: 100%;
}

.photo-wrapper {
  width: 210px;
  height: 210px;
  border: 4px solid #353535;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.sf-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sf-list li {
  position: relative;
  padding-left: 1.1rem;
  margin-bottom: 0.55rem;
  font-size: 0.875rem;
  color: #d5d9e2;
  line-height: 1.55;
}

.sf-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: #555;
}

:deep(.v-card-text),
:deep(.v-card-text p) {
  color: #d5d9e2;
  line-height: 1.65;
}
</style>
