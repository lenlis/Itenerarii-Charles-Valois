PDate='Date: ';
PPlace='Lieu: ';
PSource='Archives: ';

var dictionary = {
  'Château de Fontainebleau': 'Fontenblo', 
  'Paris, Louvre': 'Louvre',
  'Bourges': 'Bourges', 
  'Beaugency': 'Beaugency', 
  'Gien': 'Gien', 
  'Château de Saint-Germain-en-Laye': 'Saint-Germain', 
  'Bordeaux': 'Bordeaux', 
  'Mont-de-Marsan': 'Mont-de-Marsan', 
  'Bayonne': 'Bayonne', 
  'Saint-Jean-de-Luz': 'Saint-Jean-de-Luz', 
  'Château de Saint-Maur-des-Fossés': 'Saint-Mor-de-Fosse', 
  'Camp près de Châteaudun': 'Chateaudun', 
  'Camp près de Rouen': 'Rouen', 
  'Château de Vincennes': 'Vincennes', 
  'Camp de Saint Mesmin près Orléans': 'Orlean', 
  'Troye': 'Trua', 
  'Château de Chenonceau': 'Shenonso', 
  'Mantes': 'Mant', 
  'Camp près du Havre': 'Havre', 
  'Château de Gaillon': 'Gaillon', 
  'Château Meulan': 'Meulan', 
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
  'Villers-Cotterêts': 'Villers-Cottere', 
  'Chiry-Ourscamp': 'Chiry-Ourscamp', 
  'Soissons': 'Soissons', 
  'Compiègne': 'Kompen', 
  'Senlis': 'Senlis', 
  'Metz': 'Mec', 
  'Plessis-lez-Tours': 'Plessis-lez-Tours', 
  'Château de Biron': 'Biron', 
  'Camp près de Tonnay-Boutonne': 'Tonnay-Boutonne', 
  "Camp près de Saint-Jean-d'Angély": 'Saint-Jean-Anjeli', 
  "Château d'Angers": 'Angers', 
  'Châteaubriant': 'Châteaubriant', 
  'Argentan': 'Argentan', 
  'Château de Blois': 'Blua', 
  'Château de Houssay': 'Houssay', 
  "Château d'Amboise": 'Amboise', 
  'Saint-Léger-en-Yvelines': 'Yvelines', 
  'Lésigny': 'Lesigny'
}

lines = [
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre au roi Sébastien I de Portugal / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 110, № 32.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Jeanne d'Autriche / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 110, № 21. / Publication : Falgairolle, 1897. P. 95.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Catherine d'Autriche / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 110, № 22. / Publication : Falgairolle, 1897. P. 96.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mars 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, cardinal de Portugal / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 110, № 23. / Publication : Falgairolle, 1897. P. 97.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mars 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre au duc d'Etampes, gouverneur de Bretagne / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 17, № 31. / Publication : Lublinskaya, 1962. P. 21–22.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 avril 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre au comte de Tende, gouverneur de Provence / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 17, № 32. / Publication : Lublinskaya, 1962. P. 23–24.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 avril 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre au comte de Joyeuse, gouverneur général du Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 17, № 38. / Publication : Lublinskaya, 1962. P. 24–26.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX, Catherine de Médicis",
    "Дата пребывания": "Mi-avril 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Fernando Alvarez de Toledo, duc d'Alba / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 17, № 39. / Publication : LCM. T. 1. P. 188-191.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 avril 1561",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre au gouverneur général du Piémont, seigneur de Bourdillon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 1.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mi-août 1561",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre à Antoine de Bourbon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 42.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "18 août 1561",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre au gouverneur général du Piémont, seigneur de Bourdillon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 2.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "26 octobre 1561",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre au gouverneur général de Guinée, Burie / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 64. / Publication : Lublinskaya, 1962. P. 178–180",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre-décembre 1561",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre au duc de Savoie / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 33.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction au seigneur de Negrepellis, envoyé comme commissaire royal en Guyenne et Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 65. / Publication : Lublinskaya, 1962. P. 47–50.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au Parlement de Toulouse / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 5. / Publication : Lublinskaya, 1962. P. 50–51.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, évêque de Limoges / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 72.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, évêque de Limoges / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 73.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 2.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 ou 9 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au vicomte de Martigues / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 3. / Publication : Lublinskaya, 1962. P. 62–63.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur de Provence, comte de Tande / / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 24, № 13.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Première décennie de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre aux capitaines : rheingraf Johann-Philipp von Salm, et seigneur de Malicorne / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 4.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Première quinzaine de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à la municipalité de La Rochelle / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 52. / Publication : Lublinskaya, 1962. P. 63–64.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Première quinzaine de mai 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Mémoire (mémorandum) aux gouverneurs généraux de Guienne, seigneur de Burie et seigneur de Monluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 62. / Publication : Lublinskaya, 1962. P. 57–59.",
    "Номер": "10"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "26 juin 1562",
    "Место пребывания": "Beaugency",
    "Источник": "Instructions au seigneur de Saintnéterre pour qu'il soit envoyé en Provence, en Lyonne et dans le Dauphiné / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 61.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Lettre au représentant français au Conseil de Trente, seigneur de Lille (André II Guillart, Sr de l'Isle) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 27, 30.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Lettre au représentant français au Conseil de Trente, seigneur de Lansac (Louis de Lansac) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 29.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Instructions aux représentants français au Concile de Trente / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 28.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 septembre 1562",
    "Место пребывания": "Bourges",
    "Источник": "Instructions aux représentants français au Concile de Trente / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 39.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 septembre 1562",
    "Место пребывания": "Gien",
    "Источник": "Instructions au seigneur d'Escars et au seigneur de Selve pour négocier avec le roi Philippe II d'Espagne / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, №№ 66, 67.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "15 septembre 1562",
    "Место пребывания": "Camp près de Châteaudun",
    "Источник": "Lettre à l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 3.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au duc de Nemours / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 57.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre à l'Ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 9, 10.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au capitaine de Losse / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 58. / Publication : Lublinskaya, 1962. P. P. 172–174.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au capitaine de La Brosse / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 59. / Publication : Lublinskaya, 1962. P. 174–176.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au duc de Nemours / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 60.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "24 octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, évêque de Limoges / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 33. / Publication (partiellement) : La Ferrière, 1867. P. 23-24.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Instructions au duc de Montpensieur pour se rendre en Guyenne / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 54.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au capitaine de Xaintrailles, губернатору Пор-де-Сент-Мари (Ажене) / Institut d'histoire de Saint-Pétersbourg, Académie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338. № 24.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Première décennie de novembre 1562",
    "Место пребывания": "Camp près de Rouen",
    "Источник": "Lettre au duc de Montpensier, commissaire royal en Guyane / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 55. / Publication : Lublinskaya, 1962. P. 195–199.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 novembre 1562",
    "Место пребывания": "Château de Vincennes",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 19. / Publication (partiellement) : LCM. T. I. P. 436.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Deuxième quinzaine de novembre 1562",
    "Место пребывания": "Château de Vincennes",
    "Источник": "Lettre au gouverneur général de Guinée Monluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 63. / Publication : Lublinskaya, 1962. P. 193–195.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 décembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 17. / Publication : LCM. T. I. P. 453-454.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3–7 ou 23–28 décembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à une personne non identifiée (Prince de Condé) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 56.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Décembre 1562",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur général du Piémont, seigneur de Bourdillon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 53.",
    "Номер": "3"
  },

  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 janvier 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 21.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 janvier 1563",
    "Место пребывания": "Chartres",
    "Источник": "Lettre au cardinal de Lorraine / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 6. / Publication (partiellement) : Lublinskaya, 1962. P. 216–217.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 mars 1563",
    "Место пребывания": "Camp de Saint Mesmin près Orléans",
    "Источник": "Lettre au gouverneur du Dauphiné, Prince de La Roche-sur-Yon / Institut d'histoire de Saint-Pétersbourg, Académie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 332. № 4.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 mars 1563",
    "Место пребывания": "Troye",
    "Источник": "Lettre au seigneur de Vaillac, capitaine du château de Trompette à Bordeaux / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 6.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mars 1563",
    "Место пребывания": "Camp de Saint Mesmin près Orléans",
    "Источник": "Ordre circulaire aux municipalités des « bonnes villes » du domaine royal de maintenir l'ordre public. / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 43.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mi-avril 1563",
    "Место пребывания": "Château de Chenonceau",
    "Источник": "Lettre aux membres du Conсile de Trente / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 10.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "15 avril 1563",
    "Место пребывания": "Château de Chenonceau",
    "Источник": "Lettre au cardinal de Lorraine / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 17.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19-26 mai 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur général de Guyenne, seigneur de Montluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 7. / Publication : Lublinskaya, 1962. P. 248–250.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mai 1563",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 34.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mai 1563",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre au représentant français au Concile de Trente, seigneur de Lansac / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2, № 37.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 juin 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre aux échevins et conseillers de la municipalité de Paris / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 8. / Publication : Lublinskaya, 1962. P. 267–269.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 juin 1563",
    "Место пребывания": "Mantes",
    "Источник": "Instructions aux officiels royaux / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 9, 10. / Publication : Lublinskaya, 1962. P. 279–284.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 juin 1563",
    "Место пребывания": "Château de Vincennes",
    "Источник": "Ordre à Guillaume de Marle, marchand prévost, et aux échevins de Paris / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, №№ 15, 16, 41. / Publication : Lublinskaya, 1962. P. 269–270.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Juin 1563",
    "Место пребывания": "Château de Vincennes",
    "Источник": "Lettre au gouverneur général de Guienne, seigneur de Monluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 23. / Publication : Lublinskaya, 1962. P. 276–279.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 juillet 1563",
    "Место пребывания": "Mantes",
    "Источник": "Lettre au gouverneur général de Guyenne, seigneur de Montluc et seigneur de Bury / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 69А-B.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 juillet 1563",
    "Место пребывания": "Entre Louviers et Fécamp",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 30.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28–31 juillet 1563",
    "Место пребывания": "Camp près du Havre",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 35.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 septembre 1563",
    "Место пребывания": "Château de Gaillon",
    "Источник": "Présentation à l'ambassadeur d'Espagne en France, seigneur de Chantonnay / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 38.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8–10 septembre 1563",
    "Место пребывания": "Château de Gaillon",
    "Источник": "Lettre à Fernando Alvarez de Toledo et Pimentel, duc d'Alba / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 35.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14–27 septembre 1563",
    "Место пребывания": "Château Meulan",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 40.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 octobre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Règlement du Conseil du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 20. / Publication : Lublinskaya, 1962. P. 325–327.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Liste des membres du Conseil du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 32. / Publication : Lublinskaya, 1962. P. 328–329.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Deuxième quinzaine de novembre – décembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Christophe de Thou, premier président du Parlement de Paris / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 13А. / Publication : Lublinskaya, 1962. P. 345.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "7–23 décembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instructions pour que le baron de Biron se rende en Provence / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 78, № 3. / Publication (partiellement) : Barthélemy, 1874. P. 6-10.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 décembre 1563",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au seigneur de Danville-Montmorency, gouverneur du Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 18. / Publication : Lublinskaya, 1962. P. 341–344.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 janvier 1564",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre circulaire aux gouverneurs et gouverneurs généraux des provinces d'Angoumois, de Guyenne, de Languedoc et de Provence : seigneur de Sansac, Comte de Lude, seigneur de Burie, Comte de Tende et seigneur d'Escars / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 68.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 janvier 1564",
    "Место пребывания": "Château de Saint-Maur-des-Fossés",
    "Источник": "Lettre au comte de Tande, gouverneur de Provence / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 17.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 février 1564",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à évêque de Séez / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2).",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "15–30 juin 1564",
    "Место пребывания": "Lyon",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 47.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 août 1564",
    "Место пребывания": "Roussillon",
    "Источник": "Décision du Conseil du Roy sur la rémanence des huguenots en Provence / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2, № 57.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Septembre 1564",
    "Место пребывания": "Valence",
    "Источник": "Lettre au maréchal de Vieilleville / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 40.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 octobre 1564",
    "Место пребывания": "Avignon",
    "Источник": "La certification de l'accord entre le nonce apostolique, Fabrizio Serbelloni, et le capitaine-gouverneur d'Orange, Antoine de Wolfang / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2, № 59. / Publication : Recueil des traitez de paix, 1700. P. 320-321.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 octobre 1564",
    "Место пребывания": "Avignon",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 88r",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 novembre 1564",
    "Место пребывания": "Marseille",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 203v",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 215r",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre au gouverneur de Provence, Comte de Tande / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 26.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 novembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 225v",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 décembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 63.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 décembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre au gouverneur général de Guienne, seigneur de Monluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 70.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "6 décembre 1564",
    "Место пребывания": "Arles",
    "Источник": "Lettre à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 59.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 décembre 1564",
    "Место пребывания": "Tarascon",
    "Источник": "Lettre à Hassan Pacha, bailerbey (souverain) d'Algérie / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 27.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 décembre 1564",
    "Место пребывания": "Montpellier",
    "Источник": "Mémoire à l'ambassadeur de France en Espagne, seigneur de Saint-Sulpice / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 111, № 68.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 décembre 1564",
    "Место пребывания": "Montpellier",
    "Источник": "Lettre au comte de Joyeuse, gouverneur général du Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 28.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "15 janvier 1565",
    "Место пребывания": "Carcassonne",
    "Источник": "Instructions au seigneur de Sansay, chambellan du Roi, et au seigneur de Fontaines, valet de chambre du Roi / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 25. / Publication : De Vic, Vaissette. T. IX. 1845. P. 513-514.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12–26 janvier 1565",
    "Место пребывания": "Carcassonne",
    "Источник": "Lettre à une personne non identifiée (mon cousin) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 37.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 février 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre close au Conseil des finances concernant le versement d'une pension à un représentant des cantons suisses / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 38.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Février – mi-mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au seigneur de Chavigny, gouverneur général de Touraine / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 33.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au seigneur de Villeparisis, ambassadeur de France à Rome / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 28, 20, 31.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1–19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre au Pape Pie V / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 72A.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1–19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre close aux fonctionnaires d'Agenoy, Kersey, Sainte-Foy, Bragerac / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 39.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1–19 mars 1565",
    "Место пребывания": "Toulouse",
    "Источник": "Lettre à une personne non identifiée (mon cousin) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 39.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Avril 1565",
    "Место пребывания": "Bordeaux",
    "Источник": "Lettre à une personne non identifiée / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 32.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "18 avril 1565",
    "Место пребывания": "Bordeaux",
    "Источник": "Lettre au baron de Meuillon, gouverneur de Marseille / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 34.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 mai 1565",
    "Место пребывания": "Mont-de-Marsan",
    "Источник": "Lettre au capitaine de Carcès / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 21.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19 juin 1565",
    "Место пребывания": "Bayonne",
    "Источник": "Décision de procéder à une remontrance auprès des chevaliers de l'ordre St. Jean de Jérusalem / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/2, № 92.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Première décennie de juillet 1565",
    "Место пребывания": "Saint-Jean-de-Luz",
    "Источник": "Lettre au résident français à Constantinople Petremol / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 18, № 37.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 mai 1566",
    "Место пребывания": "Château de Saint-Maur-des-Fossés",
    "Источник": "Lettre aux fonctionnaires de la Cour des comptes / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 35.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "18 mai 1566",
    "Место пребывания": "Château de Saint-Maur-des-Fossés",
    "Источник": "Lettre au Pape Pie V / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 41.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 mai 1566",
    "Место пребывания": "Château de Saint-Maur-des-Fossés",
    "Источник": "Lettre au Parlement de Paris / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (1).",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 24r",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (2). Fol. 34r",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Juillet 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur général de Guienne, seigneur de Monluc/ Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 71А.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "9 août 1566",
    "Место пребывания": "Villers-Cotterêts",
    "Источник": "Lettre au gouverneur général de Guienne, seigneur de Monluc/ Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 71B.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 août 1566",
    "Место пребывания": "Chiry-Ourscamp",
    "Источник": "Lettre au comte de Joyeuse, gouverneur général du Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 42.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 septembre 1566",
    "Место пребывания": "Soissons",
    "Источник": "Lettre au gouverneur de Provence, Comte de Tande / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 36.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11–16 septembre 1566",
    "Место пребывания": "Château de Gaillon",
    "Источник": "Lettre à François de L'Aubespine / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 38.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 septembre 1566",
    "Место пребывания": "Château de Gaillon",
    "Источник": "Lettre à Hassan Pacha, bailerbey (souverain) d'Algérie / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 75.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 octobre 1566",
    "Место пребывания": "Château de Monceaux",
    "Источник": "Lettre à l'ambassadeur de France à Rome, comte de Tournon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 43.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19 octobre 1566",
    "Место пребывания": "Château de Monceaux",
    "Источник": "Lettre à l'ambassadeur de France à Rome, comte de Tournon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 59.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19 octobre 1566",
    "Место пребывания": "Château de Monceaux",
    "Источник": "Lettre à l'ambassadeur de France à Rome, comte de Tournon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 61.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "26 octobre 1566",
    "Место пребывания": "Château de Monceaux",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (1). Fol. 71r",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Décembre 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France à Rome, comte de Tournon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 37.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Décembre 1566",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au Pape Pie IV / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 39.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 décembre 1566",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Instruction à l'abbé de Saint-Gildas, agent diplomatique / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 17, № 65, Авт. 21/1, № 24.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 décembre 1566",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Instruction à l'abbé de Saint-Gildas, agent diplomatique / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 64.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 décembre 1566",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Instruction à l'abbé de Saint-Gildas, agent diplomatique / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 86, № 65.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 janvier 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Réponse à la pétition remise aux nobles accompagnant la flotte de Monluc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 72.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Mai 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction à Claude III de L'Aubespine, ambassadeur en Espagne / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 74.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 juillet 1567",
    "Место пребывания": "Compiègne",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 262r",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14 août 1567",
    "Место пребывания": "Senlis",
    "Источник": "Ordre de Charles IX au bailli du Grand Châtelet de Paris / Bibliothèque nationale russe. Département des manuscrits. Collection de lettres en parchemin de P.P. Dubrovsky. Stock 971. Book 2. № 174.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 septembre 1567",
    "Место пребывания": "Château de Montceaux",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 293r",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "24 septembre 1567",
    "Место пребывания": "Château de Montceaux",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 297r",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 1.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "9 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 318r",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 321v",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 319v",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "18 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 326r",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 327r",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "24 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 330r",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 331r",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 novembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 2.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 337v",
    "Номер": "10"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 4.",
    "Номер": "11"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 46.",
    "Номер": "12"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Instruction à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 5.",
    "Номер": "13"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 7.",
    "Номер": "14"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 6.",
    "Номер": "15"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 47.",
    "Номер": "16"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "15 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 45.",
    "Номер": "17"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 8.",
    "Номер": "18"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 9.",
    "Номер": "19"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 10.",
    "Номер": "20"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 44.",
    "Номер": "21"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 11.",
    "Номер": "22"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "30 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 12.",
    "Номер": "23"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Registres des cadeaux du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 3. Book 862 (3). Fol. 361r",
    "Номер": "24"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Décembre 1567",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 3.",
    "Номер": "25"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 15.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 48.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 16.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 17.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 18.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 janvier 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 19.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 janvier1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 13.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "31 janvier1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 49.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 14.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 20.",
    "Номер": "10"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 21.",
    "Номер": "11"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 22.",
    "Номер": "12"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 50.",
    "Номер": "13"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "9 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 23.",
    "Номер": "14"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 24.",
    "Номер": "15"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 25.",
    "Номер": "16"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 51.",
    "Номер": "17"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 26.",
    "Номер": "18"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 février 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 27.",
    "Номер": "19"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 mars 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 28.",
    "Номер": "20"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 mars 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France aux Pays-Bas, seigneur de La Forest (Jacques Bochetel, Sr de la Forest) / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 52.",
    "Номер": "21"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France aux Pays-Bas, seigneur de La Forest / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 54.",
    "Номер": "22"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au régent d'Écosse, comte John Murray / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 55.",
    "Номер": "23"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Ecosse, seigneur Villiers de Beaumont / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1, № 12.",
    "Номер": "24"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 mai 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'ambassadeur de France en Ecosse, seingneur Villiers de Beaumont / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 53.",
    "Номер": "25"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 juin 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au gouverneur d'Orléans, seigneur de Balzac d'Entragues / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 56.",
    "Номер": "26"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 juin 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre close au bailli d'Orléans, Jerosme Groslot / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 57.",
    "Номер": "27"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre 1568",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au capitaine de Lutzelbourg / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 44.",
    "Номер": "28"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 janvier 1569",
    "Место пребывания": "Château de Montceaux",
    "Источник": "Lettre à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1, № 13.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 mars 1569",
    "Место пребывания": "Metz",
    "Источник": "Liste des instructions et des ordres du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 188. Book 4. № 21.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Март 1569",
    "Место пребывания": "Metz",
    "Источник": "La charte définissant les droits du monastère de Saint-François dans le diocèse d'Evreux / Bibliothèque d'État de Russie. Département des manuscrits. Stock 68, № 370.3",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 avril 1569",
    "Место пребывания": "Metz",
    "Источник": "Lettre à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1, № 35. / Publication : La Mothe Fénélon. T. VII. 1840. P. 11-13.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Fin du juin 1569",
    "Место пребывания": "Camp de Saint Mesmin près Orléans",
    "Источник": "Lettre au maréchal de Brissac / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 46.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 août 1569",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Liste des instructions et des ordres du Roi / Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 188. Book 4. № 20.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "9 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 29.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 30.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "18 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 31.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 32.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 septembre 1569",
    "Место пребывания": "Plessis-lez-Tours",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 58.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "17 octobre 1569",
    "Место пребывания": "Château de Biron",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 33.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 novembre 1569",
    "Место пребывания": "Camp près de Tonnay-Boutonne",
    "Источник": "Lettre à l'ambassadeur de France en Suisse, Pomponne de Bellievre / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 45",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19 novembre 1569",
    "Место пребывания": "Camp près de Saint-Jean-d'Angély",
    "Источник": "Ordre de Charles IX aux responsables financiers des Généraux de Rouen et de Caen / Bibliothèque nationale russe. Département des manuscrits. Collection de lettres en parchemin de P.P. Dubrovsky. Stock 971. Book 2. № 175.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Novembre 1569",
    "Место пребывания": "Camp près de Tonnay-Boutonne",
    "Источник": "Lettre à l'ambassadeur de France en Suisse, Pomponne de Bellievre / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 47.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Février 1570",
    "Место пребывания": "Château d'Angers",
    "Источник": "Lettre au duc de Nemours / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 24, № 10.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 mars 1570",
    "Место пребывания": "Château d'Angers",
    "Источник": "Lettre à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/1, № 77.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 avril 1570",
    "Место пребывания": "Châteaubriant",
    "Источник": "Extraits de trois lettres à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2, № 14.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 juin 1570",
    "Место пребывания": "Argentan",
    "Источник": "Lettre à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2, № 38.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "7 août 1570",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Ordonnance sur le maintien de l'ordre à la Cour / Bibliothèque nationale russe. Département des manuscrits. Règlement de la maison du Roi. P. 133r-134v.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 septembre 1570",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre au baron des Adrets, général et gouverneur en Dauphiné // Musée historique de l'État (Moscou, Fédération de Russie). Département des sources écrites. Stock 188. Book 4. № 22.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "23 octobre 1570",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à l'évêque d'Orléans Morvilliers / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 48",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 septembre 1571",
    "Место пребывания": "Château de Blois",
    "Источник": "Lettre à Gaspar de Fabre, capitaine de la flottille du Levante / Archives d'État de la littérature et de l'art (Moscou, Fédération de Russie). Sock 1347. Book 1. № 116.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Septembre 1571",
    "Место пребывания": "Château de Blois",
    "Источник": "Lettre au duc de Savoie / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 98/3, № 95.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "19 novembre 1571",
    "Место пребывания": "Château de Houssay",
    "Источник": "Lettre au duc de Nevers / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 49",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "2 janvier 1572",
    "Место пребывания": "Château d'Amboise",
    "Источник": "Décision du « Privé conseil » du Roy / Bibliothèque nationale russe. Département des manuscrits. Règlement de la maison du Roi. P. 114r-114v.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "13 juin 1572",
    "Место пребывания": "Сhâteau de Boulogne",
    "Источник": "Lettre au duc de Longueville, губернатору Пикардии / Institut d'histoire de Saint-Pétersbourg, Académie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338. № 26.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "Octobre 1572",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Ordre sur les nouvelles règles de service des conservateurs / Bibliothèque nationale russe. Département des manuscrits. Règlement de la maison du Roi. P. 116 v.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 décembre 1572",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Ordre à la Cour des comptes du Parlement de Paris / Bibliothèque nationale russe. Département des manuscrits. Stock 993. Book 2. Collection d'autographes de P.K. Suchtelen. France. № 33.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 40.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 44.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "27 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 50.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "27 janvier 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 59.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 60.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "7 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 61.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "7 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 62.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 63.",
    "Номер": "10"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 62.",
    "Номер": "11"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "11 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 57.",
    "Номер": "12"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14 février 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 68.",
    "Номер": "13"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 février 1573",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 69.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "26 février 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 70.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "27 février 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 71.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 mars 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 34.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 mars 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 35.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "8 mars 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 36.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "9 mars 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Institut d'histoire de Saint-Pétersbourg, Académie des sciences de Russie. Archives scientifiques et historiques. Section de l'Europe occidentale. Manuscrit 338. № 27.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "10 mars 1573",
    "Место пребывания": "Saint-Léger-en-Yvelines",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 39А.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 mars 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 41.",
    "Номер": "1"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "24 mars 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 42.",
    "Номер": "2"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "27 mars 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 43.",
    "Номер": "3"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "1 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 45.",
    "Номер": "4"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 46.",
    "Номер": "5"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 47.",
    "Номер": "6"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "7 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 48.",
    "Номер": "7"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 49.",
    "Номер": "8"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 51.",
    "Номер": "9"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 52.",
    "Номер": "10"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 53.",
    "Номер": "11"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "24 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 54.",
    "Номер": "12"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 avril 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 55.",
    "Номер": "13"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 56.",
    "Номер": "14"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "3 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 58.",
    "Номер": "15"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 66.",
    "Номер": "16"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "4 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 34/2, № 61.",
    "Номер": "17"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "5 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 59.",
    "Номер": "18"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "20 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 64.",
    "Номер": "19"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "22 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 65.",
    "Номер": "20"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 67.",
    "Номер": "21"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 mai 1573",
    "Место пребывания": "Château de Fontainebleau",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 37.",
    "Номер": "22"
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "14 juin 1573",
    "Место пребывания": "Château de Montceaux",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 38.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "21 juin 1573",
    "Место пребывания": "Lésigny",
    "Источник": "Lettre à l'ambassadeur de France en Angleterre, seigneur de La Mothe-Fénelon / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 90/2, № 52.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "29 juin 1573",
    "Место пребывания": "Château de Boulogne",
    "Источник": "Lettre à Henri, duc d'Anjou, frère du Roy / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/2, № 39B.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "28 octobre 1573",
    "Место пребывания": "Villers-Cotterêts",
    "Источник": "Lettre de réponse aux demandes des huguenots du Languedoc / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 50",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "12 décembre 1573",
    "Место пребывания": "Paris, Louvre",
    "Источник": "Lettre à une personne non identifiée / Bibliothèque nationale russe. Département des manuscrits. Stock 993. Book 2. Collection d'autographes de P.K. Suchtelen. France. № 34.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "16 janvier 1574",
    "Место пребывания": "Château de Saint-Germain-en-Laye",
    "Источник": "Ordre au trésorier spécial de Guinée / Bibliothèque nationale russe. Département des manuscrits. Stock 992. Book 1. Recueil de lois et de lettres étrangères. № 140.",
    "Номер": ""
  },
  {
    "Дата пребывания": "Charles IX",
    "Дата пребывания": "25 avril 1574",
    "Место пребывания": "Château de Vincennes",
    "Источник": "Lettre à l'Ambassadeur de France en Suisse, seigneur d'Hautefort / Bibliothèque nationale russe. Département des manuscrits. Collection de P.P. Dubrovsky. Autographe 21/1, № 51",
    "Номер": ""
  }];