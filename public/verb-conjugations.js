// Parlez Comprehensive Verb Conjugation Database
// 21 Key A1/A2 Verbs across 1st, 2nd, and 3rd Groups with Complete 6-Person Sentences & Phonetics
(function () {
  const verbs = [
  {
    "id": "parler",
    "infinitive": "parler",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to speak / talk",
    "scene": "speech-bubbles",
    "stem": "parl",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "parle",
      "tu": "parles",
      "il": "parle",
      "nous": "parlons",
      "vous": "parlez",
      "ils": "parlent"
    },
    "rule": "1er groupe régulier : radical parl- + terminaisons -e, -es, -e, -ons, -ez, -ent.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je parle français et anglais en classe.",
        "blank": "Je _____ français et anglais en classe.",
        "english": "I speak French and English in class.",
        "phonetic": "[zhuh parl frahn-seh ay ahn-gleh ahn klahs]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu parles avec ton voisin.",
        "blank": "Tu _____ avec ton voisin.",
        "english": "You speak with your neighbor.",
        "phonetic": "[tew parl ah-vek tohn vwah-zehn]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il parle calmement à ses amis.",
        "blank": "Il _____ calmement à ses amis.",
        "english": "He speaks calmly to his friends.",
        "phonetic": "[eel parl kahl-muh-mahn ah say-z ah-mee]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous parlons du cours de français.",
        "blank": "Nous _____ du cours de français.",
        "english": "We speak about the French class.",
        "phonetic": "[noo par-lohn dew koor duh frahn-seh]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous parlez très bien français !",
        "blank": "Vous _____ très bien français !",
        "english": "You speak French very well!",
        "phonetic": "[voo par-lay treh byehn frahn-seh]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils parlent de leurs vacances d’été.",
        "blank": "Ils _____ de leurs vacances d’été.",
        "english": "They speak about their summer holidays.",
        "phonetic": "[eel parl duh lur vah-kahns day-tay]"
      }
    }
  },
  {
    "id": "aimer",
    "infinitive": "aimer",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to like / love",
    "scene": "heart-like",
    "stem": "aim",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "aime",
      "tu": "aimes",
      "il": "aime",
      "nous": "aimons",
      "vous": "aimez",
      "ils": "aiment"
    },
    "rule": "Élision devant voyelle : Je + aime → J’aime.",
    "sentences": {
      "je": {
        "pronoun": "J’",
        "sentence": "J’aime beaucoup la musique et le cinéma.",
        "blank": "J’_____ beaucoup la musique et le cinéma.",
        "english": "I like music and cinema very much.",
        "phonetic": "[zh em boh-koo lah mew-zeek ay luh see-nay-mah]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu aimes lire le journal le matin ?",
        "blank": "Tu _____ lire le journal le matin ?",
        "english": "Do you like reading the paper in the morning?",
        "phonetic": "[tew em leer luh zhoor-nahl luh mah-tehn]"
      },
      "il": {
        "pronoun": "Elle",
        "sentence": "Elle aime faire du vélo dans le parc.",
        "blank": "Elle _____ faire du vélo dans le parc.",
        "english": "She likes cycling in the park.",
        "phonetic": "[el em fehr dew vay-loh dahn luh park]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous aimons voyager ensemble.",
        "blank": "Nous _____ voyager ensemble.",
        "english": "We like travelling together.",
        "phonetic": "[noo-z ay-mohn vwah-yah-zhay ahn-sahnbl]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous aimez la cuisine française ?",
        "blank": "Vous _____ la cuisine française ?",
        "english": "Do you like French cuisine?",
        "phonetic": "[voo-z ay-may lah kwee-zeen frahn-sehz]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils aiment les animaux de compagnie.",
        "blank": "Ils _____ les animaux de compagnie.",
        "english": "They like pets.",
        "phonetic": "[eel-z em lay-z ah-nee-moh duh kohn-pahn-yee]"
      }
    }
  },
  {
    "id": "habiter",
    "infinitive": "habiter",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to live / reside",
    "scene": "house-home",
    "stem": "habit",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "habite",
      "tu": "habites",
      "il": "habite",
      "nous": "habitons",
      "vous": "habitez",
      "ils": "habitent"
    },
    "rule": "H muet : Je + habite → J’habite. Prépositions : à + ville, en/au + pays.",
    "sentences": {
      "je": {
        "pronoun": "J’",
        "sentence": "J’habite à Paris dans un bel appartement.",
        "blank": "J’_____ à Paris dans un bel appartement.",
        "english": "I live in Paris in a beautiful flat.",
        "phonetic": "[zhah-beet ah pah-ree dahn uhn bel ah-par-tuh-mahn]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu habites près de ton université ?",
        "blank": "Tu _____ près de ton université ?",
        "english": "Do you live near your university?",
        "phonetic": "[tew ah-beet preh duh tohn ew-nee-vehr-see-tay]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il habite au Canada depuis deux ans.",
        "blank": "Il _____ au Canada depuis deux ans.",
        "english": "He lives in Canada since two years.",
        "phonetic": "[eel ah-beet oh kah-nah-dah duh-pwee duh-z ahn]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous habitons dans un quartier calme.",
        "blank": "Nous _____ dans un quartier calme.",
        "english": "We live in a quiet neighborhood.",
        "phonetic": "[noo-z ah-bee-tohn dahn uhn kar-tyay kahlm]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous habitez loin de la gare ?",
        "blank": "Vous _____ loin de la gare ?",
        "english": "Do you live far from the station?",
        "phonetic": "[voo-z ah-bee-tay lwehn duh lah gar]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils habitent en France avec leur famille.",
        "blank": "Ils _____ en France avec leur famille.",
        "english": "They live in France with their family.",
        "phonetic": "[eel-z ah-beet ahn frahns ah-vek lur fah-meey]"
      }
    }
  },
  {
    "id": "travailler",
    "infinitive": "travailler",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to work",
    "scene": "work",
    "stem": "travaill",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "travaille",
      "tu": "travailles",
      "il": "travaille",
      "nous": "travaillons",
      "vous": "travaillez",
      "ils": "travaillent"
    },
    "rule": "Régulier en -er. Prononciation : -ent final à la 3e personne du pluriel est muet.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je travaille du lundi au vendredi.",
        "blank": "Je _____ du lundi au vendredi.",
        "english": "I work Monday to Friday.",
        "phonetic": "[zhuh trah-vahy dew luhn-dee oh vahn-druh-dee]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu travailles à plein temps ou à temps partiel ?",
        "blank": "Tu _____ à plein temps ou à temps partiel ?",
        "english": "Do you work full-time or part-time?",
        "phonetic": "[tew trah-vahy ah plehn tahn oo ah tahn par-syel]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il travaille dans un hôpital moderne.",
        "blank": "Il _____ dans un hôpital moderne.",
        "english": "He works in a modern hospital.",
        "phonetic": "[eel trah-vahy dahn uhn-n oh-pee-tahl moh-dehrn]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous travaillons sur un nouveau projet.",
        "blank": "Nous _____ sur un nouveau projet.",
        "english": "We are working on a new project.",
        "phonetic": "[noo trah-vah-yohn sewr uhn noo-voh proh-zheh]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous travaillez souvent le week-end ?",
        "blank": "Vous _____ souvent le week-end ?",
        "english": "Do you often work on weekends?",
        "phonetic": "[voo trah-vah-yay soo-vahn luh wee-kend]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils travaillent ensemble au bureau.",
        "blank": "Ils _____ ensemble au bureau.",
        "english": "They work together at the office.",
        "phonetic": "[eel trah-vahy ahn-sahnbl oh bew-roh]"
      }
    }
  },
  {
    "id": "manger",
    "infinitive": "manger",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to eat",
    "scene": "eat-now",
    "stem": "mang",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "eons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "mange",
      "tu": "manges",
      "il": "mange",
      "nous": "mangeons",
      "vous": "mangez",
      "ils": "mangent"
    },
    "rule": "Particularité orthographique : nous mang-e-ons (le -e- conserve le son doux [ʒ]).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je mange un sandwich à midi.",
        "blank": "Je _____ un sandwich à midi.",
        "english": "I eat a sandwich at noon.",
        "phonetic": "[zhuh mahnzh uhn sahnd-weetch ah mee-dee]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu manges des fruits au petit-déjeuner ?",
        "blank": "Tu _____ des fruits au petit-déjeuner ?",
        "english": "Do you eat fruits for breakfast?",
        "phonetic": "[tew mahnzh day frwee oh puh-tee-day-zhuh-nay]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il mange à la cafétéria de l’école.",
        "blank": "Il _____ à la cafétéria de l’école.",
        "english": "He eats at the school cafeteria.",
        "phonetic": "[eel mahnzh ah lah kah-fay-tay-ree-ah duh lay-kohl]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous mangeons au restaurant ce soir.",
        "blank": "Nous _____ au restaurant ce soir.",
        "english": "We eat at the restaurant tonight.",
        "phonetic": "[noo mahn-zhohn oh res-toh-rahn suh swahr]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous mangez souvent des plats italiens ?",
        "blank": "Vous _____ souvent des plats italiens ?",
        "english": "Do you often eat Italian dishes?",
        "phonetic": "[voo mahn-zhay soo-vahn day plah ee-tah-lyehn]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils mangent ensemble à vingt heures.",
        "blank": "Ils _____ ensemble à vingt heures.",
        "english": "They eat together at 8 p.m.",
        "phonetic": "[eel mahnzh ahn-sahnbl ah vehn ur]"
      }
    }
  },
  {
    "id": "regarder",
    "infinitive": "regarder",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to watch / look at",
    "scene": "mexican-film",
    "stem": "regard",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "regarde",
      "tu": "regardes",
      "il": "regarde",
      "nous": "regardons",
      "vous": "regardez",
      "ils": "regardent"
    },
    "rule": "Verbe régulier en -er. Objet direct : regarder un film, la télévision.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je regarde un bon film mexicain ce soir.",
        "blank": "Je _____ un bon film mexicain ce soir.",
        "english": "I watch a good Mexican movie tonight.",
        "phonetic": "[zhuh ruh-gard uhn bohn feelm mek-see-kehn suh swahr]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu regardes les nouvelles à la télé ?",
        "blank": "Tu _____ les nouvelles à la télé ?",
        "english": "Do you watch the news on TV?",
        "phonetic": "[tew ruh-gard lay noo-vel ah lah tay-lay]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il regarde les photos de vacances.",
        "blank": "Il _____ les photos de vacances.",
        "english": "He looks at the holiday pictures.",
        "phonetic": "[eel ruh-gard lay foh-toh duh vah-kahns]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous regardons le match de football.",
        "blank": "Nous _____ le match de football.",
        "english": "We watch the football match.",
        "phonetic": "[noo ruh-gar-dohn luh mahtch duh foot-bawl]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous regardez souvent des documentaires ?",
        "blank": "Vous _____ souvent des documentaires ?",
        "english": "Do you often watch documentaries?",
        "phonetic": "[voo ruh-gar-day soo-vahn day doh-kew-mahn-tehr]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils regardent le coucher de soleil.",
        "blank": "Ils _____ le coucher de soleil.",
        "english": "They watch the sunset.",
        "phonetic": "[eel ruh-gard luh koo-shay duh soh-lehy]"
      }
    }
  },
  {
    "id": "jouer",
    "infinitive": "jouer",
    "group": "1er groupe (-er)",
    "groupCode": "1",
    "english": "to play",
    "scene": "chess-board",
    "stem": "jou",
    "endings": {
      "je": "e",
      "tu": "es",
      "il": "e",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "joue",
      "tu": "joues",
      "il": "joue",
      "nous": "jouons",
      "vous": "jouez",
      "ils": "jouent"
    },
    "rule": "Jouer à + sport/jeu (au tennis, aux échecs) ; Jouer de + instrument (du piano, de la guitare).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je joue aux échecs le dimanche après-midi.",
        "blank": "Je _____ aux échecs le dimanche après-midi.",
        "english": "I play chess on Sunday afternoons.",
        "phonetic": "[zhuh zhoo oh ay-shek luh dee-mahnsh ah-preh-mee-dee]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu joues de la guitare acoustique ?",
        "blank": "Tu _____ de la guitare acoustique ?",
        "english": "Do you play acoustic guitar?",
        "phonetic": "[tew zhoo duh lah gee-tar ah-koos-teek]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il joue au football avec ses collègues.",
        "blank": "Il _____ au football avec ses collègues.",
        "english": "He plays football with his colleagues.",
        "phonetic": "[eel zhoo oh foot-bawl ah-vek say koh-leg]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous jouons à des jeux de société.",
        "blank": "Nous _____ à des jeux de société.",
        "english": "We play board games.",
        "phonetic": "[noo zhoo-ohn ah day zhuh duh soh-syay-tay]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous jouez du piano depuis longtemps ?",
        "blank": "Vous _____ du piano depuis longtemps ?",
        "english": "Have you been playing piano for a long time?",
        "phonetic": "[voo zhoo-ay dew pyah-noh duh-pwee lohn-tahn]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils jouent dans le jardin public.",
        "blank": "Ils _____ dans le jardin public.",
        "english": "They play in the public park.",
        "phonetic": "[eel zhoo dahn luh zhar-dehn pew-bleek]"
      }
    }
  },
  {
    "id": "finir",
    "infinitive": "finir",
    "group": "2e groupe (-ir régulier)",
    "groupCode": "2",
    "english": "to finish / end",
    "scene": "finish-flag",
    "stem": "fin",
    "endings": {
      "je": "is",
      "tu": "is",
      "il": "it",
      "nous": "issons",
      "vous": "issez",
      "ils": "issent"
    },
    "conjugation": {
      "je": "finis",
      "tu": "finis",
      "il": "finit",
      "nous": "finissons",
      "vous": "finissez",
      "ils": "finissent"
    },
    "rule": "Modèle du 2e groupe : radical fin- + terminaisons -is, -is, -it, -issons, -issez, -issent (double s au pluriel).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je finis la leçon avant de sortir.",
        "blank": "Je _____ la leçon avant de sortir.",
        "english": "I finish the lesson before going out.",
        "phonetic": "[zhuh fee-nee lah luh-sohn ah-vahn duh sor-teer]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu finis ton travail à quelle heure ?",
        "blank": "Tu _____ ton travail à quelle heure ?",
        "english": "What time do you finish your work?",
        "phonetic": "[tew fee-nee tohn trah-vahy ah kel ur]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il finit son cours de français à 17 heures.",
        "blank": "Il _____ son cours de français à 17 heures.",
        "english": "He finishes his French class at 5 p.m.",
        "phonetic": "[eel fee-nee sohn koor duh frahn-seh ah dees-seht ur]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous finissons les exercices du livre.",
        "blank": "Nous _____ les exercices du livre.",
        "english": "We finish the textbook exercises.",
        "phonetic": "[noo fee-nee-sohn lay-z eg-zehr-seess dew leevr]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous finissez de préparer le dîner ?",
        "blank": "Vous _____ de préparer le dîner ?",
        "english": "Are you finishing preparing dinner?",
        "phonetic": "[voo fee-nee-say duh pray-pah-ray luh dee-nay]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils finissent toujours leurs devoirs tôt.",
        "blank": "Ils _____ toujours leurs devoirs tôt.",
        "english": "They always finish their homework early.",
        "phonetic": "[eel fee-neess too-zhoor lur duh-vwahr toh]"
      }
    }
  },
  {
    "id": "choisir",
    "infinitive": "choisir",
    "group": "2e groupe (-ir régulier)",
    "groupCode": "2",
    "english": "to choose",
    "scene": "choose-path",
    "stem": "chois",
    "endings": {
      "je": "is",
      "tu": "is",
      "il": "it",
      "nous": "issons",
      "vous": "issez",
      "ils": "issent"
    },
    "conjugation": {
      "je": "choisis",
      "tu": "choisis",
      "il": "choisit",
      "nous": "choisissons",
      "vous": "choisissez",
      "ils": "choisissent"
    },
    "rule": "2e groupe régulier : radical chois- + -is, -is, -it, -issons, -issez, -issent.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je choisis le menu du chef au restaurant.",
        "blank": "Je _____ le menu du chef au restaurant.",
        "english": "I choose the chef’s menu at the restaurant.",
        "phonetic": "[zhuh shwah-zee luh muh-new dew shef oh res-toh-rahn]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu choisis quelle robe pour la fête ?",
        "blank": "Tu _____ quelle robe pour la fête ?",
        "english": "Which dress do you choose for the party?",
        "phonetic": "[tew shwah-zee kel rohb poor lah fet]"
      },
      "il": {
        "pronoun": "Elle",
        "sentence": "Elle choisit un pull chaud en laine.",
        "blank": "Elle _____ un pull chaud en laine.",
        "english": "She chooses a warm wool sweater.",
        "phonetic": "[el shwah-zee uhn pool shoh ahn len]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous choisissons de voyager en train.",
        "blank": "Nous _____ de voyager en train.",
        "english": "We choose to travel by train.",
        "phonetic": "[noo shwah-zee-sohn duh vwah-yah-zhay ahn trehn]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous choisissez un dessert ou un café ?",
        "blank": "Vous _____ un dessert ou un café ?",
        "english": "Do you choose a dessert or coffee?",
        "phonetic": "[voo shwah-zee-say uhn day-sehr oo uhn kah-fay]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils choisissent leur destination de vacances.",
        "blank": "Ils _____ leur destination de vacances.",
        "english": "They choose their holiday destination.",
        "phonetic": "[eel shwah-zeess lur des-tee-nah-syohn duh vah-kahns]"
      }
    }
  },
  {
    "id": "reflechir",
    "infinitive": "réfléchir",
    "group": "2e groupe (-ir régulier)",
    "groupCode": "2",
    "english": "to think / reflect",
    "scene": "reflect-think",
    "stem": "réfléch",
    "endings": {
      "je": "is",
      "tu": "is",
      "il": "it",
      "nous": "issons",
      "vous": "issez",
      "ils": "issent"
    },
    "conjugation": {
      "je": "réfléchis",
      "tu": "réfléchis",
      "il": "réfléchit",
      "nous": "réfléchissons",
      "vous": "réfléchissez",
      "ils": "réfléchissent"
    },
    "rule": "Réfléchir à quelque chose : 2e groupe avec -issons, -issez, -issent.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je réfléchis à votre proposition.",
        "blank": "Je _____ à votre proposition.",
        "english": "I am thinking about your proposal.",
        "phonetic": "[zhuh ray-flay-shee ah voh-tr proh-poh-zee-syohn]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu réfléchis avant de prendre une décision ?",
        "blank": "Tu _____ avant de prendre une décision ?",
        "english": "Do you think before making a decision?",
        "phonetic": "[tew ray-flay-shee ah-vahn duh prahndr ewn day-see-zyohn]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il réfléchit au meilleur itinéraire.",
        "blank": "Il _____ au meilleur itinéraire.",
        "english": "He reflects on the best route.",
        "phonetic": "[eel ray-flay-shee oh meh-yur ee-tee-nay-rehr]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous réfléchissons à la solution du problème.",
        "blank": "Nous _____ à la solution du problème.",
        "english": "We are thinking about the solution.",
        "phonetic": "[noo ray-flay-shee-sohn ah lah soh-lew-syohn dew proh-blem]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous réfléchissez bien avant de répondre.",
        "blank": "Vous _____ bien avant de répondre.",
        "english": "You think carefully before answering.",
        "phonetic": "[voo ray-flay-shee-say byehn ah-vahn duh ray-pohndr]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils réfléchissent à leur avenir professionnel.",
        "blank": "Ils _____ à leur avenir professionnel.",
        "english": "They are thinking about their professional future.",
        "phonetic": "[eel ray-flay-sheess ah lur ahv-neer proh-feh-syoh-nel]"
      }
    }
  },
  {
    "id": "rougir",
    "infinitive": "rougir",
    "group": "2e groupe (-ir régulier)",
    "groupCode": "2",
    "english": "to blush / turn red",
    "scene": "blush-face",
    "stem": "roug",
    "endings": {
      "je": "is",
      "tu": "is",
      "il": "it",
      "nous": "issons",
      "vous": "issez",
      "ils": "issent"
    },
    "conjugation": {
      "je": "rougis",
      "tu": "rougis",
      "il": "rougit",
      "nous": "rougissons",
      "vous": "rougissez",
      "ils": "rougissent"
    },
    "rule": "Verbes de couleur en -ir : rougir, blanchir, jaunir suivent tous le 2e groupe.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je rougis facilement quand je suis timide.",
        "blank": "Je _____ facilement quand je suis timide.",
        "english": "I blush easily when I am shy.",
        "phonetic": "[zhuh roo-zhee fah-seel-mahn kahn zhuh swee tee-meed]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu rougis sous le soleil d’été.",
        "blank": "Tu _____ sous le soleil d’été.",
        "english": "You turn red under the summer sun.",
        "phonetic": "[tew roo-zhee soo luh soh-lehy day-tay]"
      },
      "il": {
        "pronoun": "Elle",
        "sentence": "Elle rougit quand on lui fait un compliment.",
        "blank": "Elle _____ quand on lui fait un compliment.",
        "english": "She blushes when given a compliment.",
        "phonetic": "[el roo-zhee kahn ohn lwee feh uhn kohn-plee-mahn]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous rougissons de honte devant cette erreur.",
        "blank": "Nous _____ de honte devant cette erreur.",
        "english": "We blush from embarrassment at this mistake.",
        "phonetic": "[noo roo-zhee-sohn duh ohnt duh-vahn seht ehr-ur]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous rougissez un peu, tout va bien ?",
        "blank": "Vous _____ un peu, tout va bien ?",
        "english": "You are blushing a bit, is everything ok?",
        "phonetic": "[voo roo-zhee-say uhn puh too vah byehn]"
      },
      "ils": {
        "pronoun": "Les tomates",
        "sentence": "Les tomates rougissent sur le marché.",
        "blank": "Les tomates _____ sur le marché.",
        "english": "The tomatoes turn red at the market.",
        "phonetic": "[lay toh-maht roo-zheess sewr luh mar-shay]"
      }
    }
  },
  {
    "id": "prendre",
    "infinitive": "prendre",
    "group": "3e groupe (irrégulier -re)",
    "groupCode": "3",
    "english": "to take / have (food, transit)",
    "scene": "transit-bus",
    "stem": "prend / pren / prenn",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "prends",
      "tu": "prends",
      "il": "prend",
      "nous": "prenons",
      "vous": "prenez",
      "ils": "prennent"
    },
    "rule": "3 radicaux : je/tu prend-s, il prend ; nous pren-ons, vous pren-ez ; ils prenn-ent (double n).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je prends le bus tous les matins.",
        "blank": "Je _____ le bus tous les matins.",
        "english": "I take the bus every morning.",
        "phonetic": "[zhuh prahn luh bews toos lay mah-tehn]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu prends un café ou un thé ?",
        "blank": "Tu _____ un café ou un thé ?",
        "english": "Do you take coffee or tea?",
        "phonetic": "[tew prahn uhn kah-fay oo uhn tay]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il prend son manteau avant de partir.",
        "blank": "Il _____ son manteau avant de partir.",
        "english": "He takes his coat before leaving.",
        "phonetic": "[eel prahn sohn mahn-toh ah-vahn duh par-teer]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous prenons le métro car c’est plus rapide.",
        "blank": "Nous _____ le métro car c’est plus rapide.",
        "english": "We take the metro because it is faster.",
        "phonetic": "[noo pruh-nohn luh may-troh kar say plew rah-peed]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous prenez la deuxième rue à droite.",
        "blank": "Vous _____ la deuxième rue à droite.",
        "english": "You take the second street on the right.",
        "phonetic": "[voo pruh-nay lah duh-zyem rew ah drwaht]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils prennent le train pour aller à Lyon.",
        "blank": "Ils _____ le train pour aller à Lyon.",
        "english": "They take the train to go to Lyon.",
        "phonetic": "[eel pren luh trehn poor ah-lay ah lee-ohn]"
      }
    }
  },
  {
    "id": "aller",
    "infinitive": "aller",
    "group": "3e groupe (irrégulier)",
    "groupCode": "3",
    "english": "to go",
    "scene": "cross-street",
    "stem": "va / all / vont",
    "endings": {
      "je": "is",
      "tu": "s",
      "il": "",
      "nous": "ons",
      "vous": "ez",
      "ils": ""
    },
    "conjugation": {
      "je": "vais",
      "tu": "vas",
      "il": "va",
      "nous": "allons",
      "vous": "allez",
      "ils": "vont"
    },
    "rule": "Irrégulier total : je vais, tu vas, il va, nous allons, vous allez, ils vont. Utilisé pour le futur proche (aller + inf).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je vais à l’école à pied tous les jours.",
        "blank": "Je _____ à l’école à pied tous les jours.",
        "english": "I go to school on foot every day.",
        "phonetic": "[zhuh veh ah lay-kohl ah pyay toos lay zhoor]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu vas chez le médecin ce matin ?",
        "blank": "Tu _____ chez le médecin ce matin ?",
        "english": "Are you going to the doctor’s this morning?",
        "phonetic": "[tew vah shay luh mayd-sehn suh mah-tehn]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il va à la piscine municipale le samedi.",
        "blank": "Il _____ à la piscine municipale le samedi.",
        "english": "He goes to the municipal pool on Saturday.",
        "phonetic": "[eel vah ah lah pee-seen mew-nee-see-pahl luh sahm-dee]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous allons au marché acheter des légumes.",
        "blank": "Nous _____ au marché acheter des légumes.",
        "english": "We go to the market to buy vegetables.",
        "phonetic": "[noo-z ah-lohn oh mar-shay ash-tay day lay-gewm]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Comment allez-vous aujourd’hui ?",
        "blank": "Comment _____ -vous aujourd’hui ?",
        "english": "How are you doing today?",
        "phonetic": "[koh-mahn tah-lay-voo oh-zhoor-dwee]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils vont au cinéma regarder un film.",
        "blank": "Ils _____ au cinéma regarder un film.",
        "english": "They go to the cinema to watch a movie.",
        "phonetic": "[eel vohn oh see-nay-mah ruh-gar-day uhn feelm]"
      }
    }
  },
  {
    "id": "sortir",
    "infinitive": "sortir",
    "group": "3e groupe (-ir irrégulier)",
    "groupCode": "3",
    "english": "to go out / exit",
    "scene": "exit-door",
    "stem": "sor / sort",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "t",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "sors",
      "tu": "sors",
      "il": "sort",
      "nous": "sortons",
      "vous": "sortez",
      "ils": "sortent"
    },
    "rule": "Attention : verbe du 3e groupe ! Pas de -iss- (nous sortons, pas sortissons).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je sors souvent avec mes amis le vendredi.",
        "blank": "Je _____ souvent avec mes amis le vendredi.",
        "english": "I often go out with my friends on Friday.",
        "phonetic": "[zhuh sor soo-vahn ah-vek may-z ah-mee luh vahn-druh-dee]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu sors ce soir ou tu restes à la maison ?",
        "blank": "Tu _____ ce soir ou tu restes à la maison ?",
        "english": "Are you going out tonight or staying home?",
        "phonetic": "[tew sor suh swahr oo tew rest ah lah meh-zohn]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il sort du bureau à dix-huit heures.",
        "blank": "Il _____ du bureau à dix-huit heures.",
        "english": "He leaves the office at 6 p.m.",
        "phonetic": "[eel sor dew bew-roh ah deez-weet ur]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous sortons dîner au restaurant.",
        "blank": "Nous _____ dîner au restaurant.",
        "english": "We go out to dinner at the restaurant.",
        "phonetic": "[noo sor-tohn dee-nay oh res-toh-rahn]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous sortez à quelle station de métro ?",
        "blank": "Vous _____ à quelle station de métro ?",
        "english": "Which metro station do you exit at?",
        "phonetic": "[voo sor-tay ah kel stah-syohn duh may-troh]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils sortent de la salle de cours.",
        "blank": "Ils _____ de la salle de cours.",
        "english": "They exit the classroom.",
        "phonetic": "[eel sort duh lah sahl duh koor]"
      }
    }
  },
  {
    "id": "dormir",
    "infinitive": "dormir",
    "group": "3e groupe (-ir irrégulier)",
    "groupCode": "3",
    "english": "to sleep",
    "scene": "sleep-zzz",
    "stem": "dor / dorm",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "t",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "dors",
      "tu": "dors",
      "il": "dort",
      "nous": "dormons",
      "vous": "dormez",
      "ils": "dorment"
    },
    "rule": "3e groupe en -ir : singulier court (je dors, tu dors, il dort) et pluriel en dorm- (nous dormons).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je dors huit heures par nuit.",
        "blank": "Je _____ huit heures par nuit.",
        "english": "I sleep eight hours per night.",
        "phonetic": "[zhuh dor weet ur par nwee]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu dors bien dans ta nouvelle chambre ?",
        "blank": "Tu _____ bien dans ta nouvelle chambre ?",
        "english": "Do you sleep well in your new bedroom?",
        "phonetic": "[tew dor byehn dahn ta noo-vel shahnbr]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il est fatigué, alors il dort profondément.",
        "blank": "Il est fatigué, alors il _____ profondément.",
        "english": "He is tired, so he sleeps soundly.",
        "phonetic": "[eel ay fah-tee-gay ah-lor eel dor proh-fohn-day-mahn]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous dormons tard le dimanche matin.",
        "blank": "Nous _____ tard le dimanche matin.",
        "english": "We sleep in late on Sunday mornings.",
        "phonetic": "[noo dor-mohn tar luh dee-mahnsh mah-tehn]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous dormez combien d’heures par jour ?",
        "blank": "Vous _____ combien d’heures par jour ?",
        "english": "How many hours do you sleep per day?",
        "phonetic": "[voo dor-may kohn-byehn dur par zhoor]"
      },
      "ils": {
        "pronoun": "Les enfants",
        "sentence": "Les enfants dorment déjà.",
        "blank": "Les enfants _____ déjà.",
        "english": "The children are already sleeping.",
        "phonetic": "[lay-z ahn-fahn dorm day-zhah]"
      }
    }
  },
  {
    "id": "partir",
    "infinitive": "partir",
    "group": "3e groupe (-ir irrégulier)",
    "groupCode": "3",
    "english": "to leave / depart",
    "scene": "suitcase-depart",
    "stem": "par / part",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "t",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "pars",
      "tu": "pars",
      "il": "part",
      "nous": "partons",
      "vous": "partez",
      "ils": "partent"
    },
    "rule": "3e groupe : je pars, tu pars, il part, nous partons, vous partez, ils partent.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je pars en vacances en Italie demain.",
        "blank": "Je _____ en vacances en Italie demain.",
        "english": "I depart on vacation to Italy tomorrow.",
        "phonetic": "[zhuh par ahn vah-kahns ahn-n ee-tah-lee duh-mehn]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu pars à quelle heure pour la gare ?",
        "blank": "Tu _____ à quelle heure pour la gare ?",
        "english": "What time do you leave for the station?",
        "phonetic": "[tew par ah kel ur poor lah gar]"
      },
      "il": {
        "pronoun": "Le train",
        "sentence": "Le train part à 19h43 précises.",
        "blank": "Le train _____ à 19h43 précises.",
        "english": "The train departs at 7:43 p.m. sharp.",
        "phonetic": "[luh trehn par ah deez-nurf ur kar-ahnt trwah pray-seez]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous partons tôt le matin pour éviter le trafic.",
        "blank": "Nous _____ tôt le matin pour éviter le trafic.",
        "english": "We leave early in the morning to avoid traffic.",
        "phonetic": "[noo par-tohn toh luh mah-tehn poor ay-vee-tay luh trah-feek]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous partez en voyage cet été ?",
        "blank": "Vous _____ en voyage cet été ?",
        "english": "Are you leaving on a trip this summer?",
        "phonetic": "[voo par-tay ahn vwah-yahzh seht ay-tay]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils partent vivre dans une autre ville.",
        "blank": "Ils _____ vivre dans une autre ville.",
        "english": "They leave to live in another city.",
        "phonetic": "[eel part veevr dahn ewn ohtr veel]"
      }
    }
  },
  {
    "id": "venir",
    "infinitive": "venir",
    "group": "3e groupe (irrégulier)",
    "groupCode": "3",
    "english": "to come",
    "scene": "meetup-friends",
    "stem": "vien / ven / vienn",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "t",
      "nous": "ons",
      "vous": "ez",
      "ils": "ent"
    },
    "conjugation": {
      "je": "viens",
      "tu": "viens",
      "il": "vient",
      "nous": "venons",
      "vous": "venez",
      "ils": "viennent"
    },
    "rule": "Passé récent : venir de + infinitif (Je viens de manger). 3 radicaux : vien-s, ven-ons, vienn-ent.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je viens de finir mon travail.",
        "blank": "Je _____ de finir mon travail.",
        "english": "I have just finished my work.",
        "phonetic": "[zhuh vyehn duh fee-neer mohn trah-vahy]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu viens à la fête ce samedi ?",
        "blank": "Tu _____ à la fête ce samedi ?",
        "english": "Are you coming to the party this Saturday?",
        "phonetic": "[tew vyehn ah lah fet suh sahm-dee]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il vient de prendre son café.",
        "blank": "Il _____ de prendre son café.",
        "english": "He has just had his coffee.",
        "phonetic": "[eel vyehn duh prahndr sohn kah-fay]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous venons en bus ou en métro.",
        "blank": "Nous _____ en bus ou en métro.",
        "english": "We come by bus or by metro.",
        "phonetic": "[noo vuh-nohn ahn bews oo ahn may-troh]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous venez d’où exactement ?",
        "blank": "Vous _____ d’où exactement ?",
        "english": "Where do you come from exactly?",
        "phonetic": "[voo vuh-nay doo eg-zahkt-mahn]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils viennent nous rendre visite ce soir.",
        "blank": "Ils _____ nous rendre visite ce soir.",
        "english": "They come to visit us tonight.",
        "phonetic": "[eel vyehn noo rahndr vee-zeet suh swahr]"
      }
    }
  },
  {
    "id": "faire",
    "infinitive": "faire",
    "group": "3e groupe (irrégulier)",
    "groupCode": "3",
    "english": "to do / make",
    "scene": "chore-cooking",
    "stem": "fai / fais / fait / font",
    "endings": {
      "je": "s",
      "tu": "s",
      "il": "t",
      "nous": "ons",
      "vous": "tes",
      "ils": "ont"
    },
    "conjugation": {
      "je": "fais",
      "tu": "fais",
      "il": "fait",
      "nous": "faisons",
      "vous": "faites",
      "ils": "font"
    },
    "rule": "Attention aux formes irrégulières : vous faites (pas faisez) et ils font (pas faisent).",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je fais mes devoirs de français le soir.",
        "blank": "Je _____ mes devoirs de français le soir.",
        "english": "I do my French homework in the evening.",
        "phonetic": "[zhuh feh may duh-vwahr duh frahn-seh luh swahr]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu fais du sport pendant le week-end ?",
        "blank": "Tu _____ du sport pendant le week-end ?",
        "english": "Do you exercise over the weekend?",
        "phonetic": "[tew feh dew spor pahn-dahn luh wee-kend]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il fait les courses au marché chaque samedi.",
        "blank": "Il _____ les courses au marché chaque samedi.",
        "english": "He does the grocery shopping at the market every Saturday.",
        "phonetic": "[eel feh lay koors oh mar-shay shahk sahm-dee]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous faisons la cuisine ensemble.",
        "blank": "Nous _____ la cuisine ensemble.",
        "english": "We cook together.",
        "phonetic": "[noo fuh-zohn lah kwee-zeen ahn-sahnbl]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Qu’est-ce que vous faites dans la vie ?",
        "blank": "Qu’est-ce que vous _____ dans la vie ?",
        "english": "What do you do in life?",
        "phonetic": "[kess kuh voo fet dahn lah vee]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils font du vélo le long de la rivière.",
        "blank": "Ils _____ du vélo le long de la rivière.",
        "english": "They ride bikes along the river.",
        "phonetic": "[eel fohn dew vay-loh luh lohn duh lah ree-vyehr]"
      }
    }
  },
  {
    "id": "etre",
    "infinitive": "être",
    "group": "Auxiliaire / 3e groupe",
    "groupCode": "3",
    "english": "to be",
    "scene": "city-living",
    "stem": "suis / es / est / somm / êt / sont",
    "endings": {
      "je": "",
      "tu": "",
      "il": "",
      "nous": "es",
      "vous": "es",
      "ils": ""
    },
    "conjugation": {
      "je": "suis",
      "tu": "es",
      "il": "est",
      "nous": "sommes",
      "vous": "êtes",
      "ils": "sont"
    },
    "rule": "Auxiliaire indispensable : je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
    "sentences": {
      "je": {
        "pronoun": "Je",
        "sentence": "Je suis étudiant en cours de français.",
        "blank": "Je _____ étudiant en cours de français.",
        "english": "I am a student in French class.",
        "phonetic": "[zhuh swee ay-tew-dyahn ahn koor duh frahn-seh]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu es prêt pour partir ?",
        "blank": "Tu _____ prêt pour partir ?",
        "english": "Are you ready to leave?",
        "phonetic": "[tew ay preh poor par-teer]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il est très heureux de vous voir.",
        "blank": "Il _____ très heureux de vous voir.",
        "english": "He is very happy to see you.",
        "phonetic": "[eel ay treh-z uh-ruh duh voo vwahr]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous sommes tous dans la même classe.",
        "blank": "Nous _____ tous dans la même classe.",
        "english": "We are all in the same class.",
        "phonetic": "[noo suhm toos dahn lah mem klahs]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous êtes disponible ce soir ?",
        "blank": "Vous _____ disponible ce soir ?",
        "english": "Are you available tonight?",
        "phonetic": "[voo-z et dees-poh-neebl suh swahr]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils sont fatigués après leur long voyage.",
        "blank": "Ils _____ fatigués après leur long voyage.",
        "english": "They are tired after their long trip.",
        "phonetic": "[eel sohn fah-tee-gay ah-preh lur lohn vwah-yahzh]"
      }
    }
  },
  {
    "id": "avoir",
    "infinitive": "avoir",
    "group": "Auxiliaire / 3e groupe",
    "groupCode": "3",
    "english": "to have",
    "scene": "feel-good",
    "stem": "ai / as / a / av / ont",
    "endings": {
      "je": "",
      "tu": "",
      "il": "",
      "nous": "ons",
      "vous": "ez",
      "ils": ""
    },
    "conjugation": {
      "je": "ai",
      "tu": "as",
      "il": "a",
      "nous": "avons",
      "vous": "avez",
      "ils": "ont"
    },
    "rule": "Auxiliaire indispensable : j’ai, tu as, il a, nous avons, vous avez, ils ont.",
    "sentences": {
      "je": {
        "pronoun": "J’",
        "sentence": "J’ai un cours de français à dix heures.",
        "blank": "J’_____ un cours de français à dix heures.",
        "english": "I have a French class at 10 o’clock.",
        "phonetic": "[zhay uhn koor duh frahn-seh ah deez ur]"
      },
      "tu": {
        "pronoun": "Tu",
        "sentence": "Tu as un stylo pour prendre des notes ?",
        "blank": "Tu _____ un stylo pour prendre des notes ?",
        "english": "Do you have a pen to take notes?",
        "phonetic": "[tew ah uhn stee-loh poor prahndr day noht]"
      },
      "il": {
        "pronoun": "Il",
        "sentence": "Il a deux frères et une sœur.",
        "blank": "Il _____ deux frères et une sœur.",
        "english": "He has two brothers and a sister.",
        "phonetic": "[eel ah duh frehr ay ewn s ur]"
      },
      "nous": {
        "pronoun": "Nous",
        "sentence": "Nous avons rendez-vous devant la gare.",
        "blank": "Nous _____ rendez-vous devant la gare.",
        "english": "We have an appointment in front of the station.",
        "phonetic": "[noo-z ah-vohn rahn-day-voo duh-vahn lah gar]"
      },
      "vous": {
        "pronoun": "Vous",
        "sentence": "Vous avez réservé une table pour deux ?",
        "blank": "Vous _____ réservé une table pour deux ?",
        "english": "Have you reserved a table for two?",
        "phonetic": "[voo-z ah-vay ray-zehr-vay ewn tahbl poor duh]"
      },
      "ils": {
        "pronoun": "Ils",
        "sentence": "Ils ont beaucoup d’amis en France.",
        "blank": "Ils _____ beaucoup d’amis en France.",
        "english": "They have many friends in France.",
        "phonetic": "[eel-z ohn boh-koo dah-mee ahn frahns]"
      }
    }
  }
];
  const pronouns = [
  {
    "key": "je",
    "label": "Je / J’"
  },
  {
    "key": "tu",
    "label": "Tu"
  },
  {
    "key": "il",
    "label": "Il / Elle / On"
  },
  {
    "key": "nous",
    "label": "Nous"
  },
  {
    "key": "vous",
    "label": "Vous"
  },
  {
    "key": "ils",
    "label": "Ils / Elles"
  }
];

  window.ParlezVerbConjugations = {
    verbs: verbs,
    pronouns: pronouns,
    getVerbById: function(id) {
      return verbs.find(v => v.id === id);
    },
    getVerbsByGroup: function(groupCode) {
      if (!groupCode || groupCode === 'all') return verbs;
      return verbs.filter(v => v.groupCode === groupCode);
    }
  };
})();
