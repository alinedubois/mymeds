# language: fr
Fonctionnalité: Connexion/Déconnexion à l'application

  Scénario: Connexion à l'application
    Etant donné que je me suis enregistré en tant que
      | nom                | email            | motDePasse |
      | Jose Garcia Moreno | test@yopmail.com | Test123456 |
    Quand je me connecte à l'application avec
      | login            | motDePasse |
      | test@yopmail.com | Test123456 |
    Alors je vois l'avatar de "Jose Garcia Moreno" affiché dans le bandeau de l'application

  Scénario: Déconnexion de l'application
    Etant donné que je me suis enregistré en tant que
      | nom                | email            | motDePasse |
      | Jose Garcia Moreno | test@yopmail.com | Test123456 |
    Quand je me connecte à l'application avec
      | login            | motDePasse |
      | test@yopmail.com | Test123456 |
    Et que je me déconnecte de l'application
    Alors je vois la mire de connexion
