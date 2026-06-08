<template>
  <v-container>
    <v-card class="mb-6 bg-grey-darken-4">
      <v-card-title>Présentation et évaluation de savoir-faire sur l'intégration en entreprise</v-card-title>
      <v-card-text>
        Cette partie se concentre sur mes compétences comportementales et mon travail collaboratif au sein du Pôle Métier de la DSIN.
      </v-card-text>
    </v-card>

    <v-tabs v-model="tab" color="light-blue-accent-2">
      <v-tab value="trace11">TRACE 11 (Rituels d'équipe)</v-tab>
      <v-tab value="trace12">TRACE 12 (Partage technique)</v-tab>
      <v-tab value="trace13">TRACE 13 (Schéma SI Pégase)</v-tab>
      <v-tab value="trace14">TRACE 14 (Exploration Doc)</v-tab>
      <v-tab value="bilan">BILAN & ÉVALUATION</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-4">
      <v-window-item value="trace11">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Participation aux rituels d'équipe et réunions de synchronisation</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir participer activement aux rituels de suivi d'une équipe informatique</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir communiquer sur l'avancement de ses tâches lors de points de synchronisation</span>,
              <span class="text-purple-lighten-2 font-weight-medium">savoir collaborer avec différents acteurs techniques et métiers lors de réunions dédiées</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceCalendrier" alt="Trace 11 - Extrait de mon calendrier professionnel" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 11 : Extrait de mon calendrier professionnel (Mai 2026) illustrant les rituels hebdomadaires de l'équipe (Cadre A), ainsi que les interactions spécifiques avec les pôles métiers et techniques (Cadre B)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 11 illustre mon emploi du temps et ma participation à la vie du service au sein de la DSIN. Ce calendrier professionnel montre la planification des différentes réunions de suivi et de conception auxquelles j'ai été convié tout au long du mois de mai 2026. En entreprise, le développement informatique n'est jamais un acte isolé ; il nécessite une coordination permanente. Cette trace atteste de ma pleine intégration dans les mécanismes de communication de l'organisation, qu'il s'agisse des points de synchronisation routiniers avec mes collègues directs ou de groupes de travail plus ciblés sur mes missions.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour m'intégrer efficacement au sein du service, j'ai dû <span class="text-blue-lighten-2 font-weight-medium">savoir participer activement aux rituels de suivi d'une équipe informatique</span>. Le Cadre A de la Trace 11 démontre cette assiduité : chaque mardi matin, je participe au point de suivi hebdomadaire du pôle. Ces réunions sont indispensables pour écouter les problématiques des autres développeurs et comprendre les enjeux globaux du service au-delà de mes propres tâches.<br><br>Au cours de ces rituels réguliers repérés dans ce même Cadre A, il faut <span class="text-green-lighten-2 font-weight-medium">savoir communiquer sur l'avancement de ses tâches lors de points de synchronisation</span>. C'est l'occasion pour moi de prendre la parole pour faire un état des lieux de mes développements, de remonter d'éventuels points de blocage à mon tuteur, et d'ajuster mes priorités pour la semaine à venir.<br><br>Enfin, mon intégration ne s'est pas limitée à mon équipe technique directe. J'ai également dû <span class="text-purple-lighten-2 font-weight-medium">savoir collaborer avec différents acteurs techniques et métiers lors de réunions dédiées</span>. Le Cadre B l'illustre parfaitement en regroupant deux types de rencontres : je suis impliqué dans des points d'étape avec le pôle métier (les utilisateurs administratifs finaux) ainsi que dans des réunions techniques ciblées sur mes propres chantiers (implémentation QlikSense). Cela prouve ma capacité à adapter mon discours selon mes interlocuteurs, qu'ils soient techniciens ou administratifs.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

            <v-window-item value="trace13">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Analyse et cartographie du Système d'Information (SI) Pégase</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir s'approprier l'architecture globale d'un système d'information complexe</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir identifier les flux de données et les dépendances entre applications métiers</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceSI" alt="Trace 13 - Schéma SI Pégase" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 13 - Schéma d'architecture du SI Pégase illustrant le rôle central des API (Cadre A) et le ciblage des flux d'intégration à développer pour l'application cible Calcium (Cadre B)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 13 illustre la cartographie complète de la nouvelle architecture logicielle de l'université. Lors d'une arrivée dans un service comme la DSIN, surtout en pleine période de transition entre l'ancien système Apogée et le nouveau système national Pégase, il est impossible de commencer à développer sans avoir une vision globale de l'environnement. Ce schéma d'urbanisation recense l'ensemble des interactions entre le cœur Pégase (en mode SaaS), la base de données répliquée (DRE), les API, et la multitude d'applications satellites de l'établissement (Parcoursup, Moodle, Annuaire, etc.). Cette trace prouve ma capacité à prendre du recul pour comprendre les rouages complexes de l'entreprise avant d'agir techniquement.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Pour m'intégrer efficacement et être pertinent dans mes développements, j'ai dû <span class="text-blue-lighten-2 font-weight-medium">savoir s'approprier l'architecture globale d'un système d'information complexe</span>. Le Cadre A de la Trace 13 illustre le pôle central des "API Externes PEGASE". Plutôt que de coder à l'aveugle, l'étude de ce schéma m'a permis de comprendre comment les données transitaient depuis le mode SaaS jusqu'aux briques d'interrogation, conditionnant ainsi toute ma démarche de développement sur l'outil d'intégration Talend / Talaxie.<br><br>Une fois le contexte global assimilé, j'ai dû <span class="text-green-lighten-2 font-weight-medium">savoir identifier les flux de données et les dépendances entre applications métiers</span> pour isoler mon périmètre d'action. Le Cadre B démontre cette phase d'analyse : j'y ai repéré l'application médicale « CALCIUM » (mon projet principal) et j'ai constaté que le lien d'alimentation (la flèche rouge "Inscriptions") correspondait à un "Flux à mettre en œuvre par l'établissement". Cette lecture m'a permis de valider techniquement mon cahier des charges : mon rôle était de matérialiser ce flux en pointillés en créant le pont logiciel entre l'API et l'application finale.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

            <v-window-item value="trace12">
        <v-card class="bg-grey-darken-4">
          <v-card-title>E-mail interne sur le partage d'une solution technique</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-teal-lighten-2 font-weight-medium">savoir s'intégrer et communiquer au sein d'une équipe de développement</span>,
              <span class="text-orange-lighten-2 font-weight-medium">savoir être force de proposition pour lever un blocage technique</span>,
              <span class="text-pink-lighten-2 font-weight-medium">savoir documenter et transmettre une solution à ses collaborateurs</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceMail" alt="Trace 12 - E-mail technique" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 12 : Communication interne illustrant le partage d'une solution technique (Cadres B et C) à l'ensemble de l'équipe (Cadre A) suite à une réunion de synchronisation]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 12 illustre ma capacité à m'intégrer dans la dynamique de mon service. Il s'agit d'un e-mail envoyé à Théo, un alternant travaillant sur un projet similaire dans un autre service, avec le reste de l'équipe en copie. La veille, lors d'une réunion, nous avions identifié un point de blocage concernant la récupération des notes des étudiants. De mon côté, j'ai poursuivi les recherches de manière autonome et j'ai rédigé ce courriel pour partager la solution que j'avais identifiée (l'utilisation d'une branche privée de l'API PEGASE). Cette trace montre comment la communication asynchrone et le partage de connaissances permettent de faire avancer un projet commun en entreprise.<br><br>
                
                <strong>Descriptif des savoir-faire :</strong><br>
                Travailler dans un service informatique ne se résume pas à coder seul dans son coin. J'ai dû <span class="text-teal-lighten-2 font-weight-medium">savoir s'intégrer et communiquer au sein d'une équipe de développement</span>. Comme le montre le Cadre A, j'ai pris soin d'inclure les personnes concernées en copie de mon message pour que l'information circule correctement au sein du service.<br><br>Face à un problème soulevé collectivement, j'ai voulu <span class="text-orange-lighten-2 font-weight-medium">savoir être force de proposition pour lever un blocage technique</span>. Le Cadre B démontre cette proactivité : je n'ai pas attendu qu'on me donne la solution, j'ai cherché par moi-même le bon endpoint ("notes-resultats") pour débloquer mon collègue.<br><br>Enfin, trouver la solution est une chose, mais il faut aussi <span class="text-pink-lighten-2 font-weight-medium">savoir documenter et transmettre une solution à ses collaborateurs</span>. Le Cadre C prouve que j'ai pris le temps d'illustrer mon propos avec une capture d'écran Swagger claire, montrant les paramètres exacts à renseigner, afin que mon collègue puisse reproduire la solution instantanément sans perte de temps.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace14">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Exploration et analyse de la documentation officielle Pégase</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-teal-lighten-2 font-weight-medium">savoir s'approprier un nouveau contexte fonctionnel complexe</span>,
              <span class="text-indigo-lighten-2 font-weight-medium">savoir analyser un livrable documentaire externe</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceDocPegase" alt="Trace 14 - Documentation Pégase" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 14 : Exploration de la documentation officielle Pégase V29 (142 pages) illustrant le volume global des livrables à analyser dans l'explorateur de fichiers (Cadre A), la navigation structurée dans le sommaire du document avec ciblage des sections fonctionnelles (Cadre B) et l'extraction d'une table de paramétrage métier concrète (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 14 illustre l'exploration de la documentation officielle du logiciel SaaS Pégase, le nouveau système national de gestion de la scolarité universitaire. Avant d'écrire la moindre ligne de code ou de configurer un flux d'intégration, il est indispensable de comprendre le contexte fonctionnel du système avec lequel on interagit. Le Cadre A montre l'ampleur de la tâche : la documentation Pégase se compose de dizaines de fichiers Word volumineux (dont le seul module d'inscription administrative, V29_PC-SCOL_FORM_INS, représente 142 pages et 12,1 Mo). Le Cadre B illustre la navigation ciblée dans le sommaire de ce document, avec l'identification des sections fonctionnelles directement pertinentes pour les développements du service (ici, "Pièces à fournir" et "Profils exonérants"). Le Cadre C montre le résultat concret de cette lecture : la compréhension d'une table de paramétrage métier (les profils exonérants et leur impact sur le calcul des droits d'inscription), information directement réutilisable pour valider les flux de données à implémenter.<br><br>

                <strong>Descriptif des savoir-faire :</strong><br>
                Pour mener mes développements sur des données de scolarité universitaire, un domaine totalement inconnu, j'ai dû <span class="text-teal-lighten-2 font-weight-medium">savoir m'approprier un nouveau contexte fonctionnel complexe</span>. Le Cadre B démontre cette démarche méthodique : plutôt que de lire le document de bout en bout, j'ai appris à naviguer dans son sommaire structuré pour cibler rapidement les sections pertinentes (les profils d'exonération, les pièces à fournir, les types de formation), ce qui m'a permis de monter en compétence efficacement sur la logique métier de Pégase sans me perdre dans les centaines de pages hors périmètre.<br><br>Face au volume considérable de ces livrables (illustré par le Cadre A), j'ai dû <span class="text-indigo-lighten-2 font-weight-medium">savoir analyser un livrable documentaire externe</span>. Cette compétence dépasse la simple lecture : elle implique de lire de manière critique et sélective, d'identifier les données fonctionnelles qui ont un impact direct sur les développements (comme la colonne "Exoins Extra" visible dans le Cadre C, qui conditionne le comportement de certains flux), et de distinguer ce qui est pertinent pour l'établissement de ce qui ne l'est pas dans une documentation SaaS générique destinée à tous les établissements du territoire.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="bilan">
        <v-card class="bg-grey-darken-4 mb-6">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir s'intégrer dans une équipe et communiquer en milieu professionnel
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>

          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="text-blue-lighten-2 font-weight-medium">Savoir participer activement aux rituels de suivi d'une équipe informatique</span> : assiduité aux points hebdomadaires pour comprendre les enjeux globaux du service au-delà de ses propres tâches (Trace 11).</li>
              <li class="mb-1"><span class="text-green-lighten-2 font-weight-medium">Savoir communiquer sur l'avancement de ses tâches lors de points de synchronisation</span> : prise de parole régulière pour remonter les blocages et ajuster les priorités en concertation avec le tuteur (Trace 11).</li>
              <li class="mb-1"><span class="text-purple-lighten-2 font-weight-medium">Savoir collaborer avec différents acteurs techniques et métiers lors de réunions dédiées</span> : adaptation du discours selon l'interlocuteur (technicien ou administratif) pour rester pertinent dans tous les contextes (Trace 11).</li>
              <li class="mb-1"><span class="text-orange-lighten-2 font-weight-medium">Savoir être force de proposition pour lever un blocage technique et le transmettre</span> : recherche autonome d'une solution et partage structuré (e-mail illustré par une capture Swagger) à l'ensemble de l'équipe (Trace 12).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Ces compétences comportementales ont été mobilisées dès les premières semaines de stage. La DSIN étant organisée autour de réunions récurrentes et de groupes de travail inter-services, m'y intégrer activement était une condition nécessaire pour mener à bien mes missions techniques.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> Les dynamiques réelles de communication d'entreprise (rituels de suivi, e-mails internes structurés, points métiers) ne sont pas simulées en BUT. La posture attendue — être proactif, remonter ses blocages, partager ses trouvailles — s'est construite uniquement sur le terrain, par l'exposition directe aux interactions professionnelles du service.
            </p>

            <div class="d-flex align-center flex-wrap mb-4" style="gap: 20px;">
              <div class="d-flex align-center" style="gap: 8px;">
                <span class="text-body-2 text-grey-lighten-1 font-weight-medium">Difficulté</span>
                <v-chip size="small" color="amber" variant="tonal">Moyenne</v-chip>
              </div>
              <div class="d-flex align-center" style="gap: 8px;">
                <span class="text-body-2 text-grey-lighten-1 font-weight-medium">Évaluation</span>
                <v-chip size="small" color="blue" variant="tonal">Intermédiaire</v-chip>
              </div>
            </div>

            <v-row class="mt-1">
              <v-col cols="12" sm="6">
                <div class="avant-block pa-3">
                  <p class="avant-apres-label mb-2">Avant le stage</p>
                  <p class="text-body-2 text-justify mb-0">Mes interactions de groupe en BUT se limitaient à des projets de classe encadrés, sans dynamique réelle d'entreprise ni obligation de rendre compte à une hiérarchie.</p>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="apres-block pa-3">
                  <p class="avant-apres-label mb-2">Après le stage</p>
                  <p class="text-body-2 text-justify mb-0">Je sais m'insérer dans les rituels professionnels d'un service, adapter mon discours selon mes interlocuteurs et contribuer activement à la dynamique collective du pôle.</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="bg-grey-darken-4">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir appréhender et analyser un Système d'Information complexe
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>

          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="text-blue-lighten-2 font-weight-medium">Savoir s'approprier l'architecture globale d'un système d'information complexe</span> : lecture et compréhension de schémas d'urbanisation pour situer son périmètre d'action dans la chaîne applicative (Trace 13).</li>
              <li class="mb-1"><span class="text-green-lighten-2 font-weight-medium">Savoir identifier les flux de données et les dépendances entre applications métiers</span> : repérage des flux à implémenter pour valider techniquement le cahier des charges avant tout développement (Trace 13).</li>
              <li class="mb-1"><span class="text-teal-lighten-2 font-weight-medium">S'approprier un nouveau contexte fonctionnel complexe</span> : montée en compétence rapide sur un domaine métier inconnu (scolarité universitaire, migration Apogée → Pégase) sans formation préalable (Trace 14).</li>
              <li class="mb-1"><span class="text-indigo-lighten-2 font-weight-medium">Analyser un livrable documentaire externe</span> : extraction des informations opérationnelles utiles dans une documentation SaaS dense de plus de 300 pages pour cibler les bons endpoints API (Trace 14).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Pour développer des flux d'intégration pertinents, il m'était indispensable de comprendre la macrostructure du SI universitaire en pleine transition Apogée → Pégase. Cette compréhension a conditionné toute ma démarche de développement sur l'outil Talaxie.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> L'échelle d'un SI d'entreprise (SaaS, API, DRE, applications satellites) dépasse largement ce qui est simulé en IUT. L'assimilation de l'architecture et l'exploration de documentations techniques massives ont été réalisées intégralement en autodidacte, sans accompagnement pédagogique structuré.
            </p>

            <div class="d-flex align-center flex-wrap mb-4" style="gap: 20px;">
              <div class="d-flex align-center" style="gap: 8px;">
                <span class="text-body-2 text-grey-lighten-1 font-weight-medium">Difficulté</span>
                <v-chip size="small" color="deep-orange" variant="tonal">Élevée</v-chip>
              </div>
              <div class="d-flex align-center" style="gap: 8px;">
                <span class="text-body-2 text-grey-lighten-1 font-weight-medium">Évaluation</span>
                <v-chip size="small" color="blue" variant="tonal">Intermédiaire</v-chip>
              </div>
            </div>

            <v-row class="mt-1">
              <v-col cols="12" sm="6">
                <div class="avant-block pa-3">
                  <p class="avant-apres-label mb-2">Avant le stage</p>
                  <p class="text-body-2 text-justify mb-0">La notion de SI à grande échelle m'était étrangère. En IUT, les architectures restaient simples, locales et directement lisibles sans effort d'analyse particulier.</p>
                </div>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="apres-block pa-3">
                  <p class="avant-apres-label mb-2">Après le stage</p>
                  <p class="text-body-2 text-justify mb-0">Je suis en mesure d'appréhender un SI d'entreprise complexe, de comprendre les enjeux d'une migration SaaS et d'identifier mon point d'intervention dans une chaîne applicative globale.</p>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import traceMail from '@/assets/trace/trace_mail.png'
import traceSI from '@/assets/trace/trace_SI.png'
import traceCalendrier from '@/assets/trace/trace_ordre_du_jour.png'
import traceDocPegase from '@/assets/trace/trace_doc_pegase.png'
import ZoomableImage from '@/components/ZoomableImage.vue'

const route = useRoute()
const tab = ref(route.query.tab === 'bilan' ? 'bilan' : 'trace11')
</script>

<style scoped>
.avant-block {
  border-left: 2px solid var(--text-faint);
  background: var(--surface-tint);
  border-radius: 0 4px 4px 0;
}
.apres-block {
  border-left: 2px solid #66bb6a;
  background: rgba(102,187,106,0.04);
  border-radius: 0 4px 4px 0;
}
.avant-apres-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-label);
  margin: 0;
}
</style>
