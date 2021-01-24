# language: fr
Fonctionnalité: Connexion à l'application
  Dans le but d'accéder à l'application
  En tant qu'utilisateur
  Je veux pouvoir me connecter

  Scénario: Connexion à l'application
    Etant donné que je me suis enregistré en tant que
      | nom                | email            | motDePasse |
      | Jose Garcia Moreno | test@yopmail.com | test       |
    Quand je me connecte à l'application avec
      | login            | motDePasse |
      | test@yopmail.com | test       |
    Alors je vois "Jose Garcia Moreno" affiché dans le bandeau de l'application
