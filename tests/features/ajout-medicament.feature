# language: fr
Fonctionnalité: Ajout d'un médicament à la pharmacie

  Scénario: Ajout d'un médicament à partir d'une recherche
    Etant donné que je me suis enregistré en tant que
      | nom                | email            | motDePasse |
      | Jose Garcia Moreno | test@yopmail.com | Test123456 |
    Et que je me connecte à l'application avec
      | login            | motDePasse |
      | test@yopmail.com | Test123456 |
    Quand je fais une recherche avec le mot "Doliprane"
    Et que je choisis "DOLIPRANE 1000 mg, comprimé"
    Et que je saisis la date de péremption
    Et que je valide l'enregistrement du médicament
    Alors le médicament "DOLIPRANE 1000 mg, comprimé" a bien été enregistré