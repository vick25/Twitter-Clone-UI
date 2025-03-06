export type Tweet = {
    id: number;
    content: string;
    createdAt: Date;
    user?: number;
}

export type User = {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    avatar: string;
    bio: string;
    createdAt: Date;
}

export const tweets: Tweet[] = [
    { id: 1, content: 'Developpeur fullstack from Kadea', createdAt: new Date(), user: 3 },
    { id: 2, content: 'AdonisJS framework avec le Coach Sacré', createdAt: new Date(), user: 2 },
    { id: 3, content: 'Apprendre COBOL pour gagner plus', createdAt: new Date(), user: 1 },
    { id: 4, content: 'Libération des prisonniers politiques', createdAt: new Date(), user: 1 },
    { id: 5, content: 'J\'ai appris à coder en COBOL', createdAt: new Date(), user: 4 },
    { id: 6, content: 'AdonisJS est un framework super cool', createdAt: new Date(), user: 3 },
    { id: 7, content: 'Cobol est un langage de programmation très ancien', createdAt: new Date(), user: 1 },
    { id: 8, content: 'La nouvelle version de Node.js est sortie !', createdAt: new Date(), user: 2 },
    { id: 9, content: 'Je préfère PostgreSQL à MySQL', createdAt: new Date(), user: 5 },
    { id: 10, content: 'React vs Vue : quel est le meilleur framework frontend ?', createdAt: new Date(), user: 6 },
    { id: 11, content: 'Docker simplifie le déploiement des applications', createdAt: new Date(), user: 3 },
    { id: 12, content: 'Python est toujours le langage préféré des Data Scientists', createdAt: new Date(), user: 1 },
    { id: 13, content: 'Tailwind CSS rend le design tellement plus rapide', createdAt: new Date(), user: 4 },
    { id: 14, content: 'Quel est le meilleur éditeur de code : VSCode ou JetBrains ?', createdAt: new Date(), user: 2 },
    { id: 15, content: 'J\'ai commencé à apprendre Go, j\'adore la simplicité du langage !', createdAt: new Date(), user: 5 },
    { id: 16, content: 'Les bases de données NoSQL comme MongoDB sont très performantes', createdAt: new Date(), user: 6 },
    { id: 17, content: 'Un bon développeur doit toujours continuer à apprendre', createdAt: new Date(), user: 1 },
    { id: 18, content: 'AdonisJS a un système d\'authentification génial', createdAt: new Date(), user: 3 },
    { id: 19, content: 'NestJS apporte une structure propre pour les applications backend', createdAt: new Date(), user: 1 },
    { id: 20, content: 'Je viens de découvrir Bun, c\'est super rapide pour exécuter du JavaScript !', createdAt: new Date(), user: 2 }
]

export const users: User[] = [
    { id: 1, firstname: 'Victor', lastname: 'Kadiata', username: 'vick25', avatar: 'https://example.com/avatar1.jpg', bio: 'Le framework AdonisJS', createdAt: new Date() },
    { id: 2, firstname: 'Sacré', lastname: 'Mbiku', username: 'coachsacre', avatar: 'https://example.com/avatar2.jpg', bio: 'Le Coach Sacré', createdAt: new Date() },
    { id: 3, firstname: 'Alexis', lastname: 'Kabongo', username: 'kadea', avatar: 'https://example.com/avatar3.jpg', bio: 'Kadea', createdAt: new Date() },
    { id: 4, firstname: 'Rosalie', lastname: 'Fayulu', username: 'adonisjs-community', avatar: 'https://example.com/avatar4.jpg', bio: 'Communauté AdonisJS', createdAt: new Date() },
]