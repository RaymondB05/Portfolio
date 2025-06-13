# Portfolio Rayan Biad

Un portfolio professionnel développé avec React et TailwindCSS.

## Instructions pour exécuter le projet localement

### Prérequis

- Node.js (v16 ou supérieur)
- pnpm (recommandé) ou npm ou yarn

### Étapes pour exécuter le projet

1. **Cloner le projet**

   ```bash
   git clone [URL-DE-VOTRE-REPOSITORY]
   cd [NOM-DU-DOSSIER]
   ```

2. **Installer les dépendances**

   ```bash
   pnpm install
   # OU avec npm
   npm install
   # OU avec yarn
   yarn
   ```

3. **Lancer le serveur de développement**

   ```bash
   pnpm run dev
   # OU avec npm
   npm run dev
   # OU avec yarn
   yarn dev
   ```

4. **Ouvrir le navigateur**

   Accédez à `http://localhost:5173` pour voir le portfolio en mode développement.

## Construire pour la production

```bash
pnpm run build
# OU avec npm
npm run build
# OU avec yarn
yarn build
```

Cela générera un dossier `dist` avec les fichiers statiques optimisés pour la production.

## Options d'hébergement gratuit

Pour héberger gratuitement votre portfolio, voici quelques options recommandées :

### 1. Vercel (Recommandé)

1. Créez un compte sur [Vercel](https://vercel.com/)
2. Installez Vercel CLI : `npm i -g vercel`
3. Connectez-vous à votre compte : `vercel login`
4. Déployez depuis votre dossier projet : `vercel`
5. Pour les déploiements suivants : `vercel --prod`

### 2. Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Option Drag & Drop : après avoir exécuté `pnpm run build`, glissez-déposez le dossier `dist` dans l'interface de Netlify
3. Option avec Git : connectez votre repository GitHub/GitLab et configurez le déploiement automatique

### 3. GitHub Pages

1. Créez un repository GitHub
2. Ajoutez dans votre `vite.config.js` :
   ```js
export default defineConfig({
  plugins: [react()],
  base: '/nom-de-votre-repo/', // si vous publiez sur GitHub Pages
})
   ```
3. Exécutez `pnpm run build`
4. Publiez le contenu du dossier `dist` sur la branche `gh-pages`

## Personnalisation

Le portfolio utilise les données depuis le fichier `src/data/portfolioData.js`. Modifiez ce fichier pour mettre à jour vos informations personnelles, compétences, projets, etc.

Les images et autres ressources statiques doivent être placées dans le dossier `public/assets/`.

## Structure du projet

```
portfolio/
├── public/
│   └── assets/
│       └── images/
│           └── profile-image.jpg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── index.html
```