# Africa COSS Meetup Abidjan #01 — Recette du formulaire

## Portée
Page : `events/africa-coss-meetup-01.html`. Préinscription sur invitation, pas une confirmation automatique. Événement envisagé en février 2027, date et lieu non confirmés.

## Architecture V1
Formulaire statique envoyé par HTTPS à FormSubmit, comme le formulaire de contact OSEF existant. Aucun stockage de données personnelles dans GitHub. Une réponse e-mail n'est **pas** une base d'inscriptions administrable. Le plafond de 40–60 places et la liste d'attente doivent être gérés manuellement dans un registre privé.

## Bloquants avant mise en ligne / communication
- [ ] Faire activer le destinataire `lionel.sakiti@africascaler.com` auprès de FormSubmit.
- [ ] Effectuer un envoi de test avec données fictives et vérifier la réception réelle, les champs et le CAPTCHA.
- [ ] Prévoir une page de retour dédiée précisant « demande reçue par le prestataire » sans promettre une confirmation d'inscription ; remplacer `contact-received.html`.
- [ ] Définir et publier une notice de confidentialité adaptée : responsable du traitement, finalités, sous-traitant, durée de conservation, droits et contact.
- [ ] Définir le registre privé, l'accès des organisateurs, les règles de suppression et la procédure de validation des places.
- [ ] Tester sur mobile, au clavier, et vérifier les messages d'erreur.
- [ ] Confirmer date, lieu et procédure de contact avant annonce publique.
- [ ] Faire approuver la mise en production par le responsable événement.

## Évolutions ultérieures
Confirmation personnalisée par e-mail, capacité/liste d'attente, export CSV authentifié, statistiques agrégées et protection anti-abus renforcée. Ne pas prétendre que ces fonctionnalités existent en V1.

## Confidentialité
Le consentement pour les prochains événements est séparé et facultatif. Ne jamais transmettre automatiquement les données des participants aux sponsors. Toute mise en relation nécessite un accord approprié.
