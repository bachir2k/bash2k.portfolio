# Configuration EmailJS pour l'envoi de mails

## 🚀 Configuration Requise

Pour que le formulaire de contact fonctionne, vous devez configurer EmailJS :

### 1. Créer un compte EmailJS
1. Rendez-vous sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit

### 2. Configurer le service email
1. Dans votre dashboard EmailJS, allez dans "Email Services"
2. Ajoutez votre fournisseur email (Gmail, Outlook, etc.)
3. Notez le **Service ID**

### 3. Créer un template email
1. Allez dans "Email Templates"
2. Créez un nouveau template avec ces variables :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{subject}}` - Sujet du message
   - `{{message}}` - Contenu du message
   - `{{to_email}}` - Votre email (sallbachir047@gmail.com)
3. Notez le **Template ID**

### 4. Obtenir la clé publique
1. Allez dans "Account" → "General"
2. Copiez la **Public Key**

### 5. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
VITE_EMAILJS_TO_EMAIL=votre_email_de_reception   # ex: sallbachir047@gmail.com
VITE_EMAILJS_TO_NAME=votre_nom                   # ex: Bachir Sall
```

### 6. Redémarrer le serveur

Après avoir configuré les variables, redémarrez votre serveur de développement :

```bash
npm run dev
```

## 📧 Template Email Recommandé

**Subject :** `Nouveau message de {{from_name}} : {{subject}}`

**Body :**
```
Bonjour Bachir,

Vous avez reçu un nouveau message via votre portfolio :

De : {{from_name}} ({{from_email}})
Sujet : {{subject}}

Message :
{{message}}

Cordialement,
Votre Portfolio
```

## 🔧 Dépannage

Si les emails ne s'envoient pas :
1. Vérifiez que toutes les variables d'environnement sont configurées
2. Vérifiez que votre service email est correctement configuré dans EmailJS
3. Consultez la console du navigateur pour les erreurs
4. Vérifiez les quotas EmailJS (100 emails gratuits par mois)

## 📝 Note Importante

Le fichier `.env` contenant vos clés API ne doit **JAMAIS** être commité sur Git. Assurez-vous qu'il est dans votre `.gitignore`.
