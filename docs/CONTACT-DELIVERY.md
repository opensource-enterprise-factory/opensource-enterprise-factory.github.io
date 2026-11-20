# OSEF — Réception des demandes B2B (FR / EN)

## Configuration

- Portail : https://osef.africascaler.com/contact.html et https://osef.africascaler.com/en/contact.html
- Destinataire : `lionel.sakiti@africascaler.com` (fourni par le responsable OSEF).
- Transport : POST HTTPS vers `https://formsubmit.co/lionel.sakiti@africascaler.com`, prestataire externe **FormSubmit.co**.
- Éléments : consentement obligatoire, anti-spam CAPTCHA et champ piège `_honey`, redirection vers une page de statut prudente.
- Aucun script tiers n'est exécuté directement dans la page OSEF. Le prestataire reçoit les champs lors de la soumission.
- Ce choix implique un traitement tiers : https://formsubmit.co/privacy.pdf ; données personnelles limitées au nécessaire, aucune pièce jointe, aucun secret ni dossier client.

## Mise en service — action humaine indispensable

1. Après le déploiement Pages, ouvrir `/contact.html` et envoyer une **demande de test fictive**, sans données personnelles ni sensibles.
2. Vérifier la boîte de réception **et les spams** de `lionel.sakiti@africascaler.com`.
3. **Activer / confirmer l'adresse** depuis l'e-mail de FormSubmit. L'activation ne peut pas être simulée ou réalisée par le code du dépôt.
4. Renvoyer un deuxième test, puis vérifier la présence de la demande et son contenu dans la boîte.
5. Vérifier le parcours anglais, le CAPTCHA, la réception et le destinataire. Ne pas publier « réception validée » avant ces tests.
6. Si possible, remplacer ensuite l'adresse visible dans le code par l'endpoint opaque fourni par FormSubmit, afin de réduire l'exposition au spam.

## Limites

- La redirection vers la page `contact-received.html` ne garantit pas la **livraison e-mail**.
- En cas d'indisponibilité de FormSubmit, la page reste accessible mais le formulaire ne sera pas transmis.
- Aucun CRM, workflow commercial, accusé de réception automatique ou preuve de conformité réglementaire n'est mis en place.
- Vérifier et valider juridiquement le recours à ce prestataire, la politique de confidentialité OSEF et les durées de conservation avant diffusion commerciale à grande échelle.
- L'e-mail de destination sera visible dans le code public ; surveillance anti-spam recommandée.

## Références prestataire

- https://formsubmit.co/documentation
- https://formsubmit.co/help
- https://formsubmit.co/privacy.pdf
