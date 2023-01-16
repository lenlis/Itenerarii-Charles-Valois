PDate='Date :';
PPlace='Lieu :';
PSource='Archives :';

var dictionary = {
  'Chateau de Fontainebleau': 'Fontenblo', 
  'Paris, Louvre': 'Louvre',
  'Bourges': 'Bourges', 
  'Bourges': 'Beaugency', 
  'Gien': 'Gien', 
  'Chateau de Saint-Germain-en-Laye': 'Saint-Germain', 
  'Bordeaux': 'Bordeaux', 
  'Mont-de-Marsan': 'Mont-de-Marsan', 
  'Bayonne': 'Bayonne', 
  'Saint-Jean-de-Luz': 'Saint-Jean-de-Luz', 
  'Chateau de Saint-Maur-des-Fosses': 'Saint-Mor-de-Fosse', 
  'Camp pres de Chateaudun': 'Chateaudun', 
  'Camp pres de Rouen': 'Rouen', 
  'Chateau de Vincennes': 'Vincennes', 
  'Camp de Saint Mesmin pres Orleans': 'Orlean', 
  'Troye': 'Trua', 
  'Chateau de Chenonceau': 'Shenonso', 
  'Mantes': 'Mant', 
  'Camp pres du Havre': 'Havre', 
  'Chateau de Gaillon': 'Gaillon', 
  'Chateau Meulan': 'Meulan', 
  'Lyon': 'Lyon', 
  'Roussillon': 'Roussillon', 
  'Valence': 'Valence', 
  'Avignon': 'Avignon', 
  'Marseille': 'Marseilles', 
  'Arles': 'Arles', 
  'Tarascon': 'Tarascon', 
  'Montpellier': 'Montpellier', 
  'Carcassonne': 'Carcasson', 
  'Toulouse': 'Toulouse', 
  'Villers-Cotterets': 'Villers-Cottere', 
  'Chiry-Ourscamp': 'Chiry-Ourscamp', 
  'Soissons': 'Soissons', 
  'Compiegne': 'Kompen', 
  'Senlis': 'Senlis', 
  'Metz': 'Mec', 
  'Plessis-lez-Tours': 'Plessis-lez-Tours', 
  'Замок Бирон': 'Biron', 
  'Camp pres de Tonnay-Boutonne': 'Tonnay-Boutonne', 
  "Camp pres de Saint-Jean-d'Angely": 'Saint-Jean-Anjeli', 
  "Chateau d'Angers": 'Angers', 
  'Chateaubriant': 'Chateaubriant', 
  'Argentan': 'Argentan', 
  'Chateau de Blois': 'Blua', 
  'Chateau de Houssay': 'Houssay', 
  "Chateau d'Amboise": 'Amboise', 
  'Saint-Leger-en-Yvelines': 'Yvelines', 
  'Lesigny': 'Lesigny'
}

lines = [
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre au roi Sebastien I de Portugal / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 110,  32.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Jeanne d'Autriche / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 110,  21.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Catherine d'Autriche / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 110,  22.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, cardinal de Portugal / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 110,  23.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mars 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre au duc d'Etampes, gouverneur de Bretagne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 17,  31.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 avril 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre au comte de Tende, gouverneur de Provence / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 17,  32.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 avril 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre au comte de Joyeuse, gouverneur general du Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 17,  38.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX, Catherine de Medicis",
    "Дата пребывания": "Mi-avril 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Fernando Alvarez de Toledo, duc d'Alba / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 17,  39.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 avril 1561",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre au gouverneur general du Piemont, seigneur de Bourdillon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  1.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mi-aout 1561",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre a Antoine de Bourbon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  42.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "18 aout 1561",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre au gouverneur general du Piemont, seigneur de Bourdillon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  2.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "26 octobre 1561",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre au gouverneur general de Guinee, Burie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  64.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre-decembre 1561",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre au duc de Savoie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  33.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction au seigneur de Negrepellis, envoye comme commissaire royal en Guyenne et Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  65.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au Parlement de Toulouse / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  5.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, eveque de Limoges / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  72.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, eveque de Limoges / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  73.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  2.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 ou 9 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au vicomte de Martigues / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  3.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur de Provence, comte de Tande / / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 24,  13.",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Premiere decennie de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre aux capitaines : rheingraf Johann-Philipp von Salm, et seigneur de Malicorne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  4.",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Premiere quinzaine de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a la municipalite de La Rochelle / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  52.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Premiere quinzaine de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Memoire (memorandum) aux gouverneurs generaux de Guienne, seigneur de Burie et seigneur de Monluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  62.",
    "Номер": 10
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mai 1562",
    "Место пребывания": "Inconnu",
    "Источник": "Instructions au gouverneur general de Guinee, seigneur de Bury / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  73.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "26 juin 1562",
    "Место пребывания": "Beaugency",
    "Источник": "Instructions au seigneur de Saintneterre pour qu'il soit envoye en Provence, en Lyonne et dans le Dauphine / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  61.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Lettre au representant francais au Conseil de Trente, seigneur de Lille (Andre II Guillart, Sr de l'Isle) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  27, 30.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Lettre au representant francais au Conseil de Trente, seigneur de Lansac (Louis de Lansac) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  29.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Instructions aux representants francais au Concile de Trente / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  28.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Instructions aux representants francais au Concile de Trente / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  39.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 septembre 1562",
    "Место пребывания": "Gien",
    "Источник": "Instructions au seigneur d'Escars et au seigneur de Selve pour negocier avec le roi Philippe II d'Espagne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  66, 67.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "15 septembre 1562",
    "Место пребывания": "Camp pres de Chateaudun",
    "Источник": "Lettre a l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  3.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au duc de Nemours / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  57.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre a l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  9, 10.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au capitaine de Losse / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  58.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au capitaine de La Brosse / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  59.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au duc de Nemours / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  60.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "24 octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, eveque de Limoges / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  33.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Instructions au duc de Montpensieur pour se rendre en Guyenne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  54.",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au capitaine de Xaintrailles / Institut d'histoire de Saint-Petersbourg, Academie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338.  24.",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Premiere decennie de novembre 1562",
    "Место пребывания": "Camp pres de Rouen",
    "Источник": "Lettre au duc de Montpensier, commissaire royal en Guyane / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  55.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 novembre 1562",
    "Место пребывания": "Chateau de Vincennes",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  19.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Deuxieme quinzaine de novembre 1562",
    "Место пребывания": "Chateau de Vincennes",
    "Источник": "Lettre au gouverneur general de Guinee Monluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  63.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 decembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  17.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3-7 ou 23-28 decembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a une personne non identifiee (Prince de Conde) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  56.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Decembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur general du Piemont, seigneur de Bourdillon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  53.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Le debut de 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Instructions au baron Pierre de Cochart, valet de chambre du roi et envoye a Constantinople / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  11.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Le debut de 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre au colonel Sampiero Corso / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  12.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Le debut de 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre au resident francais a Constantinople, Petremol de La Norvoie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  13B.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Le debut de 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre a Joseph Nassi, agent au service francais a Constantinople / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  14.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Le debut de 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre au Sultan Soleiman Ier / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  36.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 janvier 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  21.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 janvier 1563",
    "Место пребывания": "Chartres",
    "Источник": "Lettre au cardinal de Lorraine / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  6.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "26 fevrier 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  24.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 mars 1563",
    "Место пребывания": "Camp de Saint Mesmin pres Orleans",
    "Источник": "Lettre au gouverneur du Dauphine, Prince de La Roche-sur-Yon / Institut d'histoire de Saint-Petersbourg, Academie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 332.  4.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 mars 1563",
    "Место пребывания": "Troye",
    "Источник": "Lettre au seigneur de Vaillac, capitaine du chateau de Trompette a Bordeaux / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  6.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mars 1563",
    "Место пребывания": "Camp de Saint Mesmin pres Orleans",
    "Источник": "Ordre circulaire aux municipalites des  bonnes villes  du domaine royal de maintenir l'ordre public. / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  43.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mi-avril 1563",
    "Место пребывания": "Chateau de Chenonceau",
    "Источник": "Lettre aux membres du Conсile de Trente / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  10.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "15 avril 1563",
    "Место пребывания": "Chateau de Chenonceau",
    "Источник": "Lettre au cardinal de Lorraine / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  17.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19-26 mai 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur general de Guyenne, seigneur de Montluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  7.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mai 1563",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  34.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mai 1563",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre au representant francais au Concile de Trente, seigneur de Lansac / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2,  37.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Printemps 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Instructions au seigneur d'Oisel (Henri Clutin, Sr d'Oisel) pour etre envoye en Espagne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 73,  13.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 juin 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre aux echevins et conseillers de la municipalite de Paris / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  8.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 juin 1563",
    "Место пребывания": "Mantes",
    "Источник": "Instructions aux officiels royaux / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  9, 10.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 juin 1563",
    "Место пребывания": "Chateau de Vincennes",
    "Источник": "Ordre a Guillaume de Marle, marchand prevost, et aux echevins de Paris / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  15, 16, 41.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Juin 1563",
    "Место пребывания": "Chateau de Vincennes",
    "Источник": "Lettre au gouverneur general de Guienne, seigneur de Monluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  23.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 juillet 1563",
    "Место пребывания": "Mantes",
    "Источник": "Lettre au gouverneur general de Guyenne, seigneur de Montluc et seigneur de Bury / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  69А-B.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 juillet 1563",
    "Место пребывания": "Entre Louviers et Fecamp (Normandie)",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  30.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28-31 juillet 1563",
    "Место пребывания": "Camp pres du Havre",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  35.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Juillet 1563",
    "Место пребывания": "Inconnu",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  39.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 septembre 1563",
    "Место пребывания": "Chateau de Gaillon",
    "Источник": "Presentation a l'ambassadeur d'Espagne en France, seigneur de Chantonnay / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  38.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8-10 septembre 1563",
    "Место пребывания": "Chateau de Gaillon",
    "Источник": "Lettre a Fernando Alvarez de Toledo et Pimentel, duc d'Alba / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  35.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14-27 septembre 1563",
    "Место пребывания": "Chateau Meulan",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  40.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 octobre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Reglement du Conseil du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  20.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Liste des membres du Conseil du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  32.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Deuxieme quinzaine de novembre - decembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Christophe de Thou, premier president du Parlement de Paris / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  13А.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "7-23 decembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instructions pour que le baron de Biron se rende en Provence / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 78,  3.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 decembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au seigneur de Danville-Montmorency, gouverneur du Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  18., Publication : Lublinskaya, 1962. P. 341-344.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 janvier 1564",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre circulaire aux gouverneurs et gouverneurs generaux des provinces d'Angoumois, de Guyenne, de Languedoc et de Provence : seigneur de Sansac, Comte de Lude, seigneur de Burie, Comte de Tende et seigneur d'Escars / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  68.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 janvier 1564",
    "Место пребывания": "Chateau de Saint-Maur-des-Fosses",
    "Источник": "Lettre au comte de Tande, gouverneur de Provence / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  17.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 fevrier 1564",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a eveque de Seez / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2).",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "15-30 juin 1564",
    "Место пребывания": "Lyon",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  47.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 aout 1564",
    "Место пребывания": "Roussillon",
    "Источник": "Decision du Conseil du Roy sur la remanence des huguenots en Provence / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2,  57.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Septembre 1564",
    "Место пребывания": "Valence",
    "Источник": "Lettre au marechal de Vieilleville / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  40.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 octobre 1564",
    "Место пребывания": "Avignon",
    "Источник": "La certification de l'accord entre le nonce apostolique, Fabrizio Serbelloni, et le capitaine-gouverneur d'Orange, Antoine de Wolfang / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2,  59.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 octobre 1564",
    "Место пребывания": "Avignon",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 88r",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 novembre 1564",
    "Место пребывания": "Marseille",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 203v",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 215r",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre au gouverneur de Provence, Comte de Tande / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  26.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 225v",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 decembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  63.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 decembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre au gouverneur general de Guienne, seigneur de Monluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  70.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "6 decembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  59.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 decembre 1564",
    "Место пребывания": "Tarascon",
    "Источник": "Lettre a Hassan Pacha, bailerbey (souverain) d'Algerie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  27.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 decembre 1564",
    "Место пребывания": "Montpellier",
    "Источник": "Memoire a l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 111,  68.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 decembre 1564",
    "Место пребывания": "Montpellier",
    "Источник": "Lettre au comte de Joyeuse, gouverneur general du Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  28.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "15 janvier 1565",
    "Место пребывания": "Carcassonne",
    "Источник": "Instructions au seigneur de Sansay, chambellan du Roi, et au seigneur de Fontaines, valet de chambre du Roi / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  25.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12-26 janvier 1565",
    "Место пребывания": "Carcassonne",
    "Источник": "Lettre a une personne non identifiee (mon cousin) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  37.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 fevrier 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre close au Conseil des finances concernant le versement d'une pension a un representant des cantons suisses / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  38.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Fevrier - mi-mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au seigneur de Chavigny, gouverneur general de Touraine / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  33.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au seigneur de Villeparisis, ambassadeur de France a Rome / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  28, 20, 31.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1-19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au Pape Pie V / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  72A.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1-19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre close aux fonctionnaires d'Agenoy, Kersey, Sainte-Foy, Bragerac / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  39.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1-19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre a une personne non identifiee (mon cousin) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  39.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Avril 1565",
    "Место пребывания": "Bordeaux",
    "Источник": "Lettre a une personne non identifiee / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  32.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "18 avril 1565",
    "Место пребывания": "Bordeaux",
    "Источник": "Lettre au baron de Meuillon, gouverneur de Marseille / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  34.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 mai 1565",
    "Место пребывания": "Mont-de-Marsan",
    "Источник": "Lettre au capitaine de Carces / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  21.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19 juin 1565",
    "Место пребывания": "Bayonne",
    "Источник": "Decision de proceder a une remontrance aupres des chevaliers de l'ordre St. Jean de Jerusalem / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2,  92.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Premiere decennie de juillet 1565",
    "Место пребывания": "Saint-Jean-de-Luz",
    "Источник": "Lettre au resident francais a Constantinople Petremol / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 18,  37.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 mai 1566",
    "Место пребывания": "Chateau de Saint-Maur-des-Fosses",
    "Источник": "Lettre aux fonctionnaires de la Cour des comptes / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  35.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "18 mai 1566",
    "Место пребывания": "Chateau de Saint-Maur-des-Fosses",
    "Источник": "Lettre au Pape Pie V / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  41.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 mai 1566",
    "Место пребывания": "Chateau de Saint-Maur-des-Fosses",
    "Источник": "Lettre au Parlement de Paris / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (1).",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 24r",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (2). Fol. 34r",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur general de Guienne, seigneur de Monluc/ Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  71А.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "9 aout 1566",
    "Место пребывания": "Villers-Cotterets",
    "Источник": "Lettre au gouverneur general de Guienne, seigneur de Monluc/ Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  71B.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 aout 1566",
    "Место пребывания": "Chiry-Ourscamp",
    "Источник": "Lettre au comte de Joyeuse, gouverneur general du Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  42.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 septembre 1566",
    "Место пребывания": "Soissons",
    "Источник": "Lettre au gouverneur de Provence, Comte de Tande / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  36.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11-16 septembre 1566",
    "Место пребывания": "Chateau de Gaillon",
    "Источник": "Lettre a Francois de L'Aubespine / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  38.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 septembre 1566",
    "Место пребывания": "Chateau de Gaillon",
    "Источник": "Lettre a Hassan Pacha, bailerbey (souverain) d'Algerie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  75.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 octobre 1566",
    "Место пребывания": "Chateau de Monceaux",
    "Источник": "Lettre a l'ambassadeur de France a Rome, comte de Tournon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  43.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19 octobre 1566",
    "Место пребывания": "Chateau de Monceaux",
    "Источник": "Lettre a l'ambassadeur de France a Rome, comte de Tournon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  59.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19 octobre 1566",
    "Место пребывания": "Chateau de Monceaux",
    "Источник": "Lettre a l'ambassadeur de France a Rome, comte de Tournon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  61.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "26 octobre 1566",
    "Место пребывания": "Chateau de Monceaux",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (1). Fol. 71r",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Decembre 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France a Rome, comte de Tournon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  37.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Decembre 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au Pape Pie IV / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  39.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 decembre 1566",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Instruction a l'abbe de Saint-Gildas, agent diplomatique / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 17,  65, Авт. 21/1,  24.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 decembre 1566",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Instruction a l'abbe de Saint-Gildas, agent diplomatique / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  64.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 decembre 1566",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Instruction a l'abbe de Saint-Gildas, agent diplomatique / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 86,  65.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 janvier 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Reponse a la petition remise aux nobles accompagnant la flotte de Monluc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  72.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Mai 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction a Claude III de L'Aubespine, ambassadeur en Espagne / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  74.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 juillet 1567",
    "Место пребывания": "Compiegne",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 262r",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14 aout 1567",
    "Место пребывания": "Senlis",
    "Источник": "Ordre de Charles IX au bailli du Grand Chatelet de Paris / Bibliotheque nationale russe. Departement des manuscrits. Collection de lettres en parchemin de P.P. Dubrovsky. Stock 971. Book 2.  174.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 septembre 1567",
    "Место пребывания": "Chateau de Montceaux",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 293r",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "24 septembre 1567",
    "Место пребывания": "Chateau de Montceaux",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 297r",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  1.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "9 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 318r",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 321v",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 319v",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "18 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 326r",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 327r",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "24 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 330r",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 331r",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  2.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 337v",
    "Номер": 10
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  4.",
    "Номер": 11
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  46.",
    "Номер": 12
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  5.",
    "Номер": 13
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  7.",
    "Номер": 14
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  6.",
    "Номер": 15
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  47.",
    "Номер": 16
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "15 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  45.",
    "Номер": 17
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  8.",
    "Номер": 18
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  9.",
    "Номер": 19
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  10.",
    "Номер": 20
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  44.",
    "Номер": 21
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  11.",
    "Номер": 22
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "30 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  12.",
    "Номер": 23
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3). Fol. 361r",
    "Номер": 24
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Decembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  3.",
    "Номер": 25
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": 1567,
    "Место пребывания": "Sans lieu",
    "Источник": "Lettre aux autorites judiciaires du Bourbonnais / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 3. Book 862 (3).",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  15.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  48.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  16.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  17.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  18.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  19.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  13",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "31 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  49.",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  14.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  20.",
    "Номер": 10
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  21.",
    "Номер": 11
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  22.",
    "Номер": 12
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  50.",
    "Номер": 13
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "9 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  23.",
    "Номер": 14
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  24.",
    "Номер": 15
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  25.",
    "Номер": 16
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  51.",
    "Номер": 17
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  26.",
    "Номер": 18
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 fevrier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  27.",
    "Номер": 19
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 mars 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  28.",
    "Номер": 20
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 mars 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France aux Pays-Bas, seigneur de La Forest (Jacques Bochetel, Sr de la Forest) / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  52.",
    "Номер": 21
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France aux Pays-Bas, seigneur de La Forest / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  54.",
    "Номер": 22
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au regent d'Ecosse, comte John Murray / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  55.",
    "Номер": 23
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Ecosse, seigneur Villiers de Beaumont / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1,  12.",
    "Номер": 24
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'ambassadeur de France en Ecosse, seingneur Villiers de Beaumont / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  53.",
    "Номер": 25
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 juin 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur d'Orleans, seigneur de Balzac d'Entragues / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  56.",
    "Номер": 26
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 juin 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre close au bailli d'Orleans, Jerosme Groslot / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  57.",
    "Номер": 27
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au capitaine de Lutzelbourg / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  44.",
    "Номер": 28
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 janvier 1569",
    "Место пребывания": "Chateau de Montceaux",
    "Источник": "Lettre a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1,  13.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 mars 1569",
    "Место пребывания": "Metz",
    "Источник": "Liste des instructions et des ordres du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 188. Book 4.  21.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Март 1569",
    "Место пребывания": "Metz",
    "Источник": "La charte definissant les droits du monastere de Saint-Francois dans le diocese d'Evreux / Bibliotheque d'Etat de Russie. Departement des manuscrits. Stock 68,  370.3",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 avril 1569",
    "Место пребывания": "Metz",
    "Источник": "Lettre a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1,  35.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Fin du juin 1569",
    "Место пребывания": "Orleans",
    "Источник": "Lettre au marechal de Brissac / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  46.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 aout 1569",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Liste des instructions et des ordres du Roi / Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 188. Book 4.  20.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "9 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  29.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  30.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "18 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  31.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  32.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  58.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "17 octobre 1569",
    "Место пребывания": "Chateau de Biron",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  33.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 novembre 1569",
    "Место пребывания": "Camp pres de Tonnay-Boutonne",
    "Источник": "Lettre a l'ambassadeur de France en Suisse, Pomponne de Bellievre / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  45",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19 novembre 1569",
    "Место пребывания": "Camp pres de Saint-Jean-d'Angely",
    "Источник": "Ordre de Charles IX aux responsables financiers des Generaux de Rouen et de Caen / Bibliotheque nationale russe. Departement des manuscrits. Collection de lettres en parchemin de P.P. Dubrovsky. Stock 971. Book 2.  175.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Novembre 1569",
    "Место пребывания": "Camp pres de Tonnay-Boutonne",
    "Источник": "Lettre a l'ambassadeur de France en Suisse, Pomponne de Bellievre / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  47.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Fevrier 1570",
    "Место пребывания": "Chateau d'Angers",
    "Источник": "Lettre au duc de Nemours / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 24,  10.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 mars 1570",
    "Место пребывания": "Chateau d'Angers",
    "Источник": "Lettre a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1,  77.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 avril 1570",
    "Место пребывания": "Chateaubriant",
    "Источник": "Extraits de trois lettres a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2,  14.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 juin 1570",
    "Место пребывания": "Argentan",
    "Источник": "Lettre a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2,  38.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "7 aout 1570",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Ordonnance sur le maintien de l'ordre a la Cour / Bibliotheque nationale russe. Departement des manuscrits. Reglement de la maison du Roi. P. 133r-134v.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 septembre 1570",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au baron des Adrets, general et gouverneur en Dauphine // Musee historique de l'Etat (Moscou, Federation de Russie). Departement des sources ecrites. Stock 188. Book 4.  22.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "23 octobre 1570",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a l'eveque d'Orleans Morvilliers / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  48",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 septembre 1571",
    "Место пребывания": "Chateau de Blois",
    "Источник": "Lettre a Gaspar de Fabre, capitaine de la flottille du Levante / Archives d'Etat de la litterature et de l'art (Moscou, Federation de Russie). Sock 1347. Book 1.  116.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Septembre 1571",
    "Место пребывания": "Chateau de Blois",
    "Источник": "Lettre au duc de Savoie / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/3,  95.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "19 novembre 1571",
    "Место пребывания": "Chateau de Houssay",
    "Источник": "Lettre au duc de Nevers / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  49",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "2 janvier 1572",
    "Место пребывания": "Chateau d'Amboise",
    "Источник": "Decision du  Prive conseil  du Roy / Bibliotheque nationale russe. Departement des manuscrits. Reglement de la maison du Roi. P. 114r-114v.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "13 juin 1572",
    "Место пребывания": "Сhateau de Boulogne",
    "Источник": "Lettre au duc de Longueville, / Institut d'histoire de Saint-Petersbourg, Academie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338.  26.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "Octobre 1572",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Ordre sur les nouvelles regles de service des conservateurs / Bibliotheque nationale russe. Departement des manuscrits. Reglement de la maison du Roi. P. 116 v.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 decembre 1572",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Ordre a la Cour des comptes du Parlement de Paris / Bibliotheque nationale russe. Departement des manuscrits. Stock 993. Book 2. Collection d'autographes de P.K. Suchtelen. France.  33.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  40.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  44.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "27 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  50.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "27 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  59.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  60.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "7 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  61.",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "7 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  62.",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  63.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  62.",
    "Номер": 10
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "11 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  57.",
    "Номер": 11
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14 fevrier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  68.",
    "Номер": 12
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 fevrier 1573",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  69.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "26 fevrier 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  70.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "27 fevrier 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  71.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 mars 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  34.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 mars 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  35.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "8 mars 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  36.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "9 mars 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Institut d'histoire de Saint-Petersbourg, Academie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338.  27.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "10 mars 1573",
    "Место пребывания": "Saint-Leger-en-Yvelines",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  39А.",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 mars 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  41.",
    "Номер": 1
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "24 mars 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  42.",
    "Номер": 2
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "27 mars 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  43.",
    "Номер": 3
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  45.",
    "Номер": 4
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  46.",
    "Номер": 5
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  47.",
    "Номер": 6
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "7 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  48.",
    "Номер": 7
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  49.",
    "Номер": 8
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  51.",
    "Номер": 9
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  52.",
    "Номер": 10
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  53.",
    "Номер": 11
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "24 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  54.",
    "Номер": 12
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 avril 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  55.",
    "Номер": 13
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  56.",
    "Номер": 14
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "3 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  58.",
    "Номер": 15
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  66.",
    "Номер": 16
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "4 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2,  61.",
    "Номер": 17
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "5 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  59.",
    "Номер": 18
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "20 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  64.",
    "Номер": 19
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "22 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  65.",
    "Номер": 20
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  67.",
    "Номер": 21
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 mai 1573",
    "Место пребывания": "Chateau de Fontainebleau",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  37.",
    "Номер": 22
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "14 juin 1573",
    "Место пребывания": "Chateau de Montceaux",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  38.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "21 juin 1573",
    "Место пребывания": "Lesigny",
    "Источник": "Lettre a l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fenelon / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2,  52.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "29 juin 1573",
    "Место пребывания": "Chateau de Boulogne",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  39B.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "28 octobre 1573",
    "Место пребывания": "Villers-Cotterets",
    "Источник": "Lettre de reponse aux demandes des huguenots du Languedoc / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  50",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "12 decembre 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre a une personne non identifiee / Bibliotheque nationale russe. Departement des manuscrits. Stock 993. Book 2. Collection d'autographes de P.K. Suchtelen. France.  34.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "1573",
    "Место пребывания": "Sans lieu",
    "Источник": "Lettre a Henri, duc d'Anjou, frere du Roy / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2,  60.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "16 janvier 1574",
    "Место пребывания": "Chateau de Saint-Germain-en-Laye",
    "Источник": "Ordre au tresorier special de Guinee / Bibliotheque nationale russe. Departement des manuscrits. Stock 992. Book 1. Recueil de lois et de lettres etrangeres.  140.",
    "Номер": ""
  },
  {
    "Имя монарха": "Charles IX",
    "Дата пребывания": "25 avril 1574",
    "Место пребывания": "Chateau de Vincennes",
    "Источник": "Lettre a l'Ambassadeur de France en Suisse, seigneur d'Hautefort / Bibliotheque nationale russe. Departement des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1,  51",
    "Номер": ""
  }
];