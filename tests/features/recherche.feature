# language: fr
Fonctionnalité: Recherche de médicaments

  Scénario: Recherche de médicaments fructueuse
    Etant donné que je me suis enregistré en tant que
      | nom                | email            | motDePasse |
      | Jose Garcia Moreno | test@yopmail.com | Test123456 |
    Et que je me connecte à l'application avec
      | login            | motDePasse |
      | test@yopmail.com | Test123456 |
    Quand je fais une recherche avec le mot "Doliprane"
    Alors la liste des résultats ne propose que des médicaments contenant le mot "Doliprane"