# Projet_JurryBlanc_SupportIt

# Système de Gestion des Équipements Informatiques

## Contexte du Projet

En tant que développeur full stack Java/Angular chez ITSolutions, vous êtes chargé de concevoir et de développer un système de gestion des équipements informatiques. Ce système doit permettre une gestion efficace des équipements, des pannes, et des tickets de support.

## User Stories

### Gestion des Équipements Informatiques

- **En tant qu'administrateur IT**, je veux pouvoir ajouter de nouveaux équipements informatiques au système afin de suivre leur état et leur utilisation.
- **En tant qu'administrateur IT**, je veux pouvoir modifier les informations des équipements existants pour maintenir des données à jour.
- **En tant qu'administrateur IT**, je veux pouvoir supprimer des équipements obsolètes ou hors service pour garder le système organisé.
- **En tant qu'administrateur IT**, je veux pouvoir voir une liste de tous les équipements avec leur état actuel pour une gestion efficace.

### Gestion et Suivi des Pannes

- **En tant qu'administrateur IT**, je veux pouvoir gérer (ajouter, modifier, supprimer) les pannes.
- **En tant qu'administrateur IT**, je veux pouvoir consulter l'historique des pannes pour chaque équipement afin d'identifier les équipements problématiques.

### Gestion des Tickets de Support

- **En tant qu'utilisateur**, je veux pouvoir créer un ticket de support pour signaler une panne afin de recevoir de l'aide.
- **En tant qu'administrateur IT**, je veux pouvoir attribuer les tickets de support aux techniciens disponibles pour une résolution rapide.
- **En tant que technicien IT**, je veux pouvoir voir les tickets qui me sont attribués pour les traiter efficacement.
- **En tant qu'utilisateur**, je veux pouvoir suivre l'état de mon ticket de support pour savoir quand mon problème sera résolu.

### Bonus

- **En tant qu'administrateur IT**, je veux recevoir des notifications pour les tickets en attente afin de ne pas manquer de demandes importantes.
- **En tant qu'administrateur IT**, je veux pouvoir voir des statistiques sur les pannes pour identifier les tendances et les problèmes récurrents.
- **En tant qu'administrateur IT**, je veux pouvoir générer des rapports sur l'état des équipements pour une meilleure gestion.
- **En tant qu'administrateur IT**, je veux pouvoir générer des rapports sur les performances du service de support pour améliorer l'efficacité.

## Fonctionnement

- **Historique des Pannes**: Conserve un enregistrement détaillé de toutes les pannes passées pour chaque équipement. Chaque entrée est liée à un équipement spécifique.
- **Tickets de Support**: Créés par les utilisateurs lorsqu'ils rencontrent des problèmes. Chaque ticket est lié à un utilisateur spécifique.
- **Attribution des Tickets**: Les tickets sont attribués aux techniciens pour résolution. Cette relation permet de suivre et évaluer les performances des techniciens.

## Diagrammes

### Diagramme de Cas d'Utilisation

![Diagramme de Cas d'Utilisation](./diagrams/use-case-diagram.png)

### Diagramme de Classe

![Diagramme de Classe]<img width="512"  src="https://github.com/user-attachments/assets/cc243b9d-a11e-41a5-bdcb-c0ef38163db4">


### Diagramme de Séquence

![Diagramme de Séquence]<img width="224"  src="https://github.com/user-attachments/assets/c4dc8858-0606-45d0-be0d-5f016551cc65">



## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre des demandes de tirage et discuter des modifications via les issues.

## Licence

Ce projet est sous la licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
