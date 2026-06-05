<template>
  <v-container>
    <v-card class="mb-6 bg-grey-darken-4">
      <v-card-title>Présentation et évaluation de savoir-faire en suivi de projet</v-card-title>
      <v-card-text>
        Cette partie présente mes compétences en gestion et suivi de projet : planification via Gantt, participation aux réunions de suivi et rédaction de documentation technique de maintenabilité.
      </v-card-text>
    </v-card>

    <v-tabs v-model="tab" color="light-blue-accent-2">
      <v-tab value="trace7">TRACE 7 (Gantt)</v-tab>
      <v-tab value="trace8">TRACE 8 (Compte-rendu réunion)</v-tab>
      <v-tab value="trace9">TRACE 9(Documentation Calcium)</v-tab>
      <v-tab value="trace10">TRACE 10 (Documentation DRE)</v-tab>
      <v-tab value="bilan">BILAN & ÉVALUATION</v-tab>
    </v-tabs>

    <v-window v-model="tab" class="mt-4">
      <v-window-item value="trace7">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Planification et suivi des tâches via un diagramme de Gantt</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir s'intégrer dans un planning collaboratif et identifier ses missions</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir évaluer l'état d'avancement et valider des jalons</span>,
              <span class="text-purple-lighten-2 font-weight-medium">savoir visualiser et respecter le découpage temporel d'un projet</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceGantt" alt="Trace 7 - Diagramme de Gantt" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 7 : Extrait du diagramme de Gantt de la DSIN illustrant l'affectation individuelle des tâches (Cadre A), le suivi du taux de réalisation (Cadre B) et la projection temporelle du déploiement (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 7 illustre l'utilisation d'un outil de gestion de projet classique et indispensable en entreprise : le diagramme de Gantt. Il s'agit ici du tableau de bord global de la DSIN pour le grand déploiement du système Pégase et de ses environnements (Test et Production). Cette trace matérialise le découpage du projet en jalons précis sur plusieurs mois. Dans le cadre de mon stage, ce document a une importance capitale : il permet de situer mon travail technique (la mise en place de la DRE et des flux API Calcium) dans l'écosystème global de l'équipe, en fixant des échéances (deadlines) claires pour coordonner la mise en production avec les autres développeurs et chefs de projet.<br><br>

                <strong>Descriptif des savoir-faire :</strong><br>
                Pour participer activement aux mécanismes de suivi de projet du service, j'ai dû <span class="text-blue-lighten-2 font-weight-medium">savoir s'intégrer dans un planning collaboratif et identifier ses missions</span>. Comme le montre le Cadre A de la Trace 7, le projet global est vaste, mais il est découpé par acteur. Savoir isoler mes lignes d'intervention (Antoine) parmi celles de mes collaborateurs (Christelle, Loan, Antonin) est la première étape de mon autonomie.<br><br>Une fois les tâches identifiées, il a fallu <span class="text-green-lighten-2 font-weight-medium">savoir évaluer l'état d'avancement et valider des jalons</span>. Le Cadre B démontre cette compétence de suivi régulier : au fur et à mesure de mes développements, j'ai rendu compte de mon travail pour que le pourcentage d'avancement passe à 100%, confirmant ainsi la réussite technique de mes jalons de test et de production.<br><br>Enfin, un projet informatique est soumis à des contraintes de temps strictes. J'ai donc dû <span class="text-purple-lighten-2 font-weight-medium">savoir visualiser et respecter le découpage temporel d'un projet</span>. Le Cadre C illustre cette projection dans le temps. L'organisation visuelle du Gantt m'a permis d'anticiper ma charge de travail sur les mois d'avril, mai et juin, de comprendre les dépendances (par exemple, terminer l'installation DRE en environnement de test avant de passer à la production), et de m'assurer que mes livrables respectaient le rythme imposé par l'équipe métier.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace9">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Rédaction de la documentation technique et pérennisation du projet</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir rédiger une documentation technique claire et structurée</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir synthétiser l'architecture et la logique métier d'un flux de données</span>,
              <span class="text-purple-lighten-2 font-weight-medium">savoir assurer la maintenabilité et la transmission d'un projet informatique</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceDocumentation" alt="Trace 9- Documentation technique" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 9: Extrait de la documentation technique du job Talaxie "Calcium" expliquant le contexte (Cadre A), les dépendances techniques en mémoire (Cadre B) et la logique algorithmique étape par étape (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 9illustre la phase finale et cruciale du cycle de développement logiciel : la documentation. Une fois le job d'intégration de données "Calcium" terminé et fonctionnel, j'ai rédigé ce document technique de synthèse (réalisé en LaTeX pour un rendu professionnel). Cette capture montre la structuration de l'information : une introduction rappelant l'objectif métier pour l'université, le détail des référentiels chargés en mémoire vive avec le nom exact des composants Talend, et la description séquentielle des opérations de traitement. Ce livrable est indispensable, car il garantit que n'importe quel autre développeur ou technicien de la DSIN pourra auditer, comprendre et modifier ce flux à l'avenir, pérennisant ainsi le travail réalisé durant mon stage.<br><br>

                <strong>Descriptif des savoir-faire :</strong><br>
                Pour clôturer ma mission de développement proprement, j'ai dû <span class="text-blue-lighten-2 font-weight-medium">savoir rédiger une documentation technique claire et structurée</span>. Le Cadre C de la Trace 9illustre cette rigueur de présentation : la logique du flux n'est pas un bloc de texte indigeste, mais est décomposée en étapes numérotées, chronologiques et titrées (Nettoyage, Extraction, Formatage) facilitant la lecture.<br><br>L'enjeu n'était pas simplement de copier-coller du code, mais de <span class="text-green-lighten-2 font-weight-medium">savoir synthétiser l'architecture et la logique métier d'un flux de données</span>. Le Cadre B le démontre : j'explique "en langage humain" l'utilité métier de chaque composant technique complexe (par exemple, justifier l'usage de tHashOutput_4 pour l'API LDAP ou tHashOutput_3 pour les communes).<br><br>Enfin, l'objectif ultime de cette démarche rédactionnelle était de <span class="text-purple-lighten-2 font-weight-medium">savoir assurer la maintenabilité et la transmission d'un projet informatique</span>. En posant explicitement le contexte global du flux pour l'université dès le Cadre A, je m'assure que mon travail s'inscrit durablement dans le système d'information. Cette contextualisation garantit une passation fluide et sécurise le cycle de vie de l'application médicale "Calcium" bien au-delà de mon stage.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace8">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Participation à un point de suivi et présentation de livrables en réunion d'équipe</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir s'intégrer dans un planning collaboratif et identifier ses missions</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir évaluer l'état d'avancement et valider des jalons</span>,
              <span class="text-purple-lighten-2 font-weight-medium">savoir visualiser et respecter le découpage temporel d'un projet</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceReunion" alt="Trace 8 - Compte-rendu réunion de suivi" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 8 : Invitation au point de suivi hebdomadaire du pôle métiers illustrant la composition multi-acteurs de la réunion (Cadre A), la présentation d'un livrable par Antoine à l'ordre du jour (Cadre B) et les points d'avancement opérationnel du déploiement Pégase (Cadre C)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 8 illustre la dimension opérationnelle du suivi de projet : non plus la planification graphique sur le Gantt, mais son pendant en réunion d'équipe. Il s'agit d'une invitation au "Point de suivi hebdomadaire pôle métiers" du 2 juin 2026, réunion récurrente organisée par Christelle Duarte (Responsable) qui rassemble l'ensemble du pôle. Cette trace matérialise concrètement la manière dont l'avancement du projet est communiqué, suivi et validé collectivement dans un cadre professionnel. Elle montre également que mon niveau d'intégration dans l'équipe était suffisant pour être convié à présenter mes propres développements devant l'ensemble du service.<br><br>

                <strong>Descriptif des savoir-faire :</strong><br>
                Le Cadre A de la Trace 8 démontre ma capacité à <span class="text-blue-lighten-2 font-weight-medium">savoir m'intégrer dans un planning collaboratif et identifier ses missions</span> : être présent à cette réunion implique de connaître son périmètre, de comprendre les enjeux des autres membres du pôle et de se positionner dans l'écosystème global du service — au même titre qu'un Gantt permet d'isoler ses propres lignes d'action.<br><br>

                Le Cadre B est le point central de cette trace : "Présentation Flux Calcium par Antoine" figure explicitement à l'ordre du jour. Cette entrée démontre que je devais <span class="text-green-lighten-2 font-weight-medium">savoir évaluer l'état d'avancement et valider des jalons</span> non seulement de manière interne (en mettant à jour le Gantt), mais aussi en le communiquant à l'oral devant l'équipe. Cela impliquait de préparer une synthèse claire de mes développements et d'être capable de répondre aux questions des autres membres du pôle.<br><br>

                Enfin, le Cadre C illustre la convergence entre les jalons du Gantt et les points d'avancement en réunion. Les entrées "Ecosystème et flux PEGASE à finaliser (LDAP, CALCIUM)" et "DRE" de l'ordre du jour correspondent exactement aux tâches que je gérais. Cela prouve que je savais <span class="text-purple-lighten-2 font-weight-medium">visualiser et respecter le découpage temporel d'un projet</span> : les échéances du Gantt se traduisaient directement en points à présenter lors des réunions de suivi, créant ainsi une boucle de pilotage cohérente.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="trace10">
        <v-card class="bg-grey-darken-4">
          <v-card-title>Rédaction et transmission de la documentation technique DRE</v-card-title>
          <v-card-text>
            <div class="mb-4">
              Savoir-faire élémentaires :
              <span class="text-blue-lighten-2 font-weight-medium">savoir rédiger une documentation technique claire et structurée</span>,
              <span class="text-green-lighten-2 font-weight-medium">savoir synthétiser l'architecture et la logique métier d'un flux de données</span>,
              <span class="text-purple-lighten-2 font-weight-medium">savoir assurer la maintenabilité et la transmission d'un projet informatique</span>.
            </div>

            <v-row>
              <v-col cols="12" md="5" class="text-center">
                <ZoomableImage :src="traceDocDre" alt="Trace 10 - Documentation DRE et email" :preview-height="360" />
                <div class="text-caption mt-1">[Trace 10 : Documentation technique DREmgr illustrant la structuration du contenu de référence (Cadre A) et l'email Zimbra de transmission officielle à l'équipe technique avec la documentation en pièce jointe (Cadre B)]</div>
              </v-col>
              <v-col cols="12" md="7">
                <strong>Descriptif général de la trace :</strong><br>
                La Trace 10 illustre un deuxième exercice de documentation technique, complémentaire à la Trace 9 portant sur le job Talaxie "Calcium". Ici, l'objet documenté est différent : il s'agit de l'environnement DREmgr (le gestionnaire de la base de données répliquée de l'établissement), un outil d'infrastructure et non un flux de traitement de données. Le Cadre A montre un extrait du PDF produit (section 4 — Gestion et Configuration des Addons), témoignant d'une documentation structurée sur un domaine système. Le Cadre B présente l'email envoyé via la messagerie professionnelle Zimbra à Antonin Rothe, membre de l'équipe, avec les tuteurs en copie, accompagné du document en pièce jointe. Cette trace démontre que la documentation n'est pas une fin en soi, mais le vecteur d'une vraie transmission de savoir au sein de l'équipe.<br><br>

                <strong>Descriptif des savoir-faire :</strong><br>
                À l'image de la Trace 9, j'ai dû <span class="text-blue-lighten-2 font-weight-medium">savoir rédiger une documentation technique claire et structurée</span>. Le Cadre A le démontre : la section 4 du document est découpée en sous-sections numérotées (4.1 Installation et mise à jour des addons, 4.2 Déploiement de scripts, 4.3 Configuration des schémas), chacune accompagnée d'extraits de code et d'instructions de ligne de commande précises. Cette rigueur de présentation rend le document directement opérationnel pour un technicien.<br><br>

                Pour documenter DREmgr, il fallait également <span class="text-green-lighten-2 font-weight-medium">savoir synthétiser l'architecture et la logique métier d'un flux de données</span>. Le domaine ici est l'infrastructure système : j'ai dû expliquer le rôle des addons dans l'écosystème DRE, leurs dépendances avec le fichier de configuration central (dremgr.env) et les scripts de préparation des tables — un contenu plus technique et système que la documentation du job Talaxie, prouvant ma capacité à documenter différents niveaux de l'architecture.<br><br>

                Le Cadre B est la pièce maîtresse de cette trace pour le savoir-faire <span class="text-purple-lighten-2 font-weight-medium">savoir assurer la maintenabilité et la transmission d'un projet informatique</span>. Contrairement à la Trace 9 qui illustrait la rédaction du document, cette trace illustre l'étape suivante : la diffusion active. En envoyant la documentation à Antonin Rothe (qui travaillait sur les mêmes flux) et en mettant mon tuteur en copie et la responsable de pole en copie, je garantis que les connaissances ne restent pas cloisonnées et que le projet peut être repris par l'équipe après mon départ.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-window-item>

      <v-window-item value="bilan">
        <v-card class="bg-grey-darken-4 mb-6">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir planifier, suivre et piloter un projet informatique
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>

          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="text-blue-lighten-2 font-weight-medium">Savoir s'intégrer dans un planning collaboratif et identifier ses missions</span> : lecture du Gantt partagé (Trace 7) et participation aux réunions multi-acteurs (Trace 8).</li>
              <li class="mb-1"><span class="text-green-lighten-2 font-weight-medium">Savoir évaluer l'état d'avancement et valider des jalons</span> : mise à jour du taux de réalisation sur le Gantt (Trace 7) et présentation orale des livrables en réunion de suivi (Trace 8).</li>
              <li class="mb-1"><span class="text-purple-lighten-2 font-weight-medium">Savoir visualiser et respecter le découpage temporel d'un projet</span> : projection des dépendances dans le temps (Trace 7) et cohérence entre les jalons planifiés et les points à l'ordre du jour (Trace 8).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Ces compétences ont été mobilisées pour m'inscrire dans la gestion de projet globale de la DSIN lors du déploiement du SI Pégase, en assurant la cohérence de mes livrables (DRE, flux Calcium) avec le calendrier imposé à l'équipe sur plusieurs mois.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> La gestion de projet par Gantt a été pratiquée concrètement en BUT au travers des SAE (Situations d'Apprentissage et d'Évaluation), réalisées en groupe avec de vrais diagrammes de Gantt, des deadlines et des livrables à honorer. Cependant, ces planifications restaient dans un cadre scolaire : sans équipe professionnelle, sans impact sur un déploiement réel, ni dépendances critiques entre jalons. M'insérer dans un Gantt d'entreprise partagé, avec une responsabilité réelle sur des jalons de mise en production, relève d'un apprentissage acquis sur le terrain.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Difficulté :</strong> Moyenne. Le principal défi était d'anticiper les dépendances entre tâches (finir l'environnement de test avant la production) et de remonter à temps les éventuels blocages à mon tuteur sans attendre la prochaine réunion de synchronisation.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Évaluation :</strong> Intermédiaire. Je suis en mesure de m'inscrire, de m'organiser et de rendre compte de mon avancement dans un outil de planification de projet professionnel partagé, en respectant les dépendances et les deadlines collectives.
            </p>

            <p class="text-body-2 mb-0 text-justify">
              <strong class="text-grey-lighten-1">Avant / Après stage :</strong> <strong>Avant :</strong> Les SAE de BUT m'avaient déjà exposé à la gestion de planning par Gantt, avec des deadlines et des rendus de groupe. Mais ces planifications restaient dans un cadre scolaire, sans pression réelle d'équipe ni conséquences concrètes sur une production partagée. <strong>Après :</strong> Je suis capable de me positionner dans un planning collaboratif professionnel, de respecter des échéances qui ont un impact direct sur le déploiement d'un SI, et d'en assurer le reporting auprès de l'équipe projet.
            </p>
          </v-card-text>
        </v-card>

        <v-card class="bg-grey-darken-4">
          <v-card-title class="d-flex justify-space-between align-start text-wrap">
            Savoir documenter et garantir la maintenabilité d'un projet informatique
            <v-chip color="orange-darken-2" variant="outlined" size="small" class="ml-4 mt-1">Bilan</v-chip>
          </v-card-title>

          <v-card-text class="pt-2">
            <ul class="text-body-2 mb-4 ml-6">
              <li class="mb-1"><span class="text-blue-lighten-2 font-weight-medium">Savoir rédiger une documentation technique claire et structurée</span> : structuration séquentielle du job Talaxie en LaTeX (Trace 9) et du manuel DREmgr en sections numérotées avec extraits de code (Trace 10).</li>
              <li class="mb-1"><span class="text-green-lighten-2 font-weight-medium">Savoir synthétiser l'architecture et la logique métier d'un flux de données</span> : explication des composants Talend en "langage humain" (Trace 9) et description de l'architecture des addons DREmgr (Trace 10).</li>
              <li class="mb-1"><span class="text-purple-lighten-2 font-weight-medium">Savoir assurer la maintenabilité et la transmission d'un projet informatique</span> : contextualisation du livrable Calcium (Trace 9) et diffusion active du manuel DRE par email aux membres de l'équipe (Trace 10).</li>
            </ul>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'utilisation :</strong> Ces compétences ont été mobilisées pour deux projets distincts : la documentation du job Talaxie "Calcium" (flux ETL) rédigée en LaTeX, et la documentation de l'environnement DREmgr (infrastructure système) transmise à l'équipe via email. Les deux livrables ont pour finalité commune de garantir la pérennité du travail réalisé durant le stage.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Contexte d'apprentissage :</strong> La rédaction de documentation a été pratiquée en BUT, notamment dans le cadre des SAE et de rendus de projets académiques où il fallait produire des documents précis et structurés. Cependant, ces documentations avaient un objectif fondamentalement différent : elles s'adressaient à un correcteur, pas à un technicien, et n'avaient pas pour but d'assurer la continuité ou la maintenabilité d'un projet à long terme. Ce changement de perspective — écrire pour un futur mainteneur plutôt que pour un évaluateur — s'est construit entièrement sur le terrain.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Difficulté :</strong> Moyenne. Le défi était de vulgariser sans trahir la rigueur technique : expliquer la logique métier d'un flux sans se perdre dans les détails d'implémentation, tout en restant suffisamment précis pour être directement exploitable par un autre développeur.
            </p>

            <p class="text-body-2 mb-3 text-justify">
              <strong class="text-grey-lighten-1">Évaluation :</strong> Intermédiaire confirmé. Le document produit est directement exploitable par l'équipe de la DSIN et répond à un standard professionnel de qualité, depuis la contextualisation métier jusqu'au détail des composants techniques Talaxie.
            </p>

            <p class="text-body-2 mb-0 text-justify">
              <strong class="text-grey-lighten-1">Avant / Après stage :</strong> <strong>Avant :</strong> J'avais déjà rédigé des documentations précises pour mes SAE et projets de BUT, avec un niveau d'exigence réel. Mais leur finalité était différente : elles s'adressaient à un correcteur et n'avaient pas vocation à garantir la continuité d'un projet par d'autres développeurs. <strong>Après :</strong> Je suis capable de produire une documentation structurée (en LaTeX), orientée maintenabilité et transmission, qui s'inscrit dans le cycle de vie complet d'un projet professionnel.
            </p>
          </v-card-text>
        </v-card>
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import traceGantt from '@/assets/trace/trace_gantt.png'
import traceDocumentation from '@/assets/trace/trace_documentation.png'
import traceReunion from '@/assets/trace/trace_reunion_compte_rendu.png'
import traceDocDre from '@/assets/trace/trace_doc_dre.png'
import ZoomableImage from '@/components/ZoomableImage.vue'

const tab = ref('trace7')
</script>
