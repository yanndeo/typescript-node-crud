# Typescript-Node-CRUD
###
Nous avons utilisés les technos suivantes: nodejs + express typescript.

## Definition
<b>TypeScript</b> vous permet d'écrire du code JavaScript comme vous le souhaitez vraiment. TypeScript est un <b>sur-ensemble </b> typé de JavaScript qui se compile en JavaScript pur. <i>TypeScript est purement orienté objet avec des classes</i>, des interfaces et typé statiquement comme C # ou Java. <s>Le framework JavaScript populaire Angular 2.0 est écrit en TypeScript</s>. Mastering TypeScript peut aider les programmeurs à écrire des programmes orientés objet et à les compiler en JavaScript, à la fois côté serveur et côté client.

## Dans l'ensemble
-Génération du fichier tscongig pour parameter typescript .</br>
-Installation de DevDependencies et dont celles pour faire la liaison: Ex  @types/express ,@types/mongoose , ..morgan .
         <ul>
        <li>morgan : logs clair sur le terminal</li>
        <li>rimraf : helper pour suppression de repertoire depuis le terminal : ex :"clean": "rimraf ./dist" </li>
        <li> express-handlebars : moteur de template  de la brique express </li>
         <li> ncp : helper permettant de cp -r (copier) un repertoire de puis la cli . ex :"public": "ncp ./src/public/   ./dist/public/" </li>
        <li> nodemon , mongoose, .. </li>   
        </ul>
        
        
 ## Configuration du nodemon.json
        
   {
   "ignore":[
     "node_modules",
     ".git",
     "**/*.test.ts",
     "**/*.spec.ts"
   ],
   "watch":[
     "src"
   ],
   "ext": "ts" ,
   "exec": "npm run dev"
   
   
   ## Application
   
   Pour lancer l'application :
   - npm run build : qui va suppr. le dossier "dist" , copier le contenu de /public et /view dans l'arborescence du rep. /dist  recréer à la fin .
   - npm run start :  equivaut à "node dis/index.js" comme defini dans les script package.json
   
   NB :dist/ étant le repertoire dans lequelles les fichers sont converis en .js  (commonjs) comprenhensible donc pour le browser
   
