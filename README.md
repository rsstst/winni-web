# Winnicode Project
## Project used for finishing internship program at PT. Winnicode Garuda Teknologi

### setting up nextjs
- cd client
- npm install
- npm run dev

### setting up strapi
- cd server
- npm install
- rename the .env.example to .env
- npm run develop
- create a superadmin user
- stop the strapi after creating the user and sucessfully logged in
- npx strapi import exportLatest.tar.gz.enc
- use "strapi" as the encryption code
- npm run develop

### troubleshoot
1. if you can't run the strapi, rename or duplicate the .env.example into .env without changing the content
2. if nextjs can't read properties, import the latest exported database and edit it to your fit
3. the encryption code when importing is "strapi", all undercase