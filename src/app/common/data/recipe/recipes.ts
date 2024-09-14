import { Recipe } from './recipe';

export const recipes: Recipe[] = [
  {
    id: 1,
    imgUrl: 'assets/images/439881546_812546737439401_7179664926974566_n.jpg',
    name: 'Sushi',
    description: 'Tradycyjna japońska potrawa z ryżu, ryb i innych składników, podawana z sosem sojowym i wasabi.',
    instructions: [
      'Gotuj ryż sushi według instrukcji na opakowaniu.',
      'Przygotuj nadzienie ze świeżych lub surowych ryb, warzyw i innych składników, jakie lubisz.',
      'Rozłóż cienką warstwę ryżu na arkuszu nori.',
      'Nałóż nadzienie na górę ryżu.',
      'Zwiń arkusz nori wzdłuż dłuższego boku, formując zwartą rolkę.',
      'Pokrój rolkę na kawałki i podawaj z sosem sojowym i wasabi.'
    ]
  },
  {
    id: 2,
    imgUrl: 'assets/images/439762954_835935231671136_6328973457610153309_n.jpg',
    name: 'Curry warzywne',
    description: 'Pikantne danie kuchni indyjskiej z różnorodnymi warzywami gotowanymi w sosie curry.',
    instructions: [
      'Pokrój różne warzywa, takie jak ciecierzyca, papryka, ziemniaki, marchew, bakłażan itp.',
      'Podsmaż warzywa w dużym garnku lub patelni.',
      'Dodaj przyprawy curry i gotuj przez kilka minut.',
      'Dołóż pokrojone pomidory lub pastę pomidorową i gotuj jeszcze kilka minut.',
      'Podawaj z ugotowanym ryżem lub chlebem naan.'
    ]
  },
  {
    id: 3,
    imgUrl: 'assets/images/439273274_802815137948777_5345856065112772872_n.jpg',
    name: 'Ryż kimchi',
    description: 'Koreańskie danie z ryżem podawanym z pikantnym kimchi, czyli kiszonymi warzywami.',
    instructions: [
      'Ugotuj biały ryż według instrukcji na opakowaniu.',
      'Usmaż na patelni cebulę i kiełbasę na maśle. Dodaj kimchi.',
      'Dodaj ugotowany ryż na patelnie i podsmaż.',
      'Dopraw sosem sojowym i olejem sezamowym. Podawaj z jajkiem sadzonym.'
    ]
  },
  {
    id: 4,
    imgUrl: 'assets/images/439914843_829133185908479_8509747142550053271_n.jpg',
    name: 'Warzywa azjatyckie',
    description: 'Smaczne i kolorowe danie z warzywami charakterystycznymi dla kuchni azjatyckiej.',
    instructions: [
      'Ugotuj makaron ryżowy według instrukcji na opakowaniu.',
      'Pokrój różne warzywa, takie jak marchew, cukinia, papryka itp.',
      'Smaż warzywa na patelni w sosie z sosu sojowego, octu ryżowego, miodu, pasty gochujang, masła orzechowego i oleju sezamowego.',
      'Dodaj makaron na patelnie, wymieszaj wszystko i podsmaż aż do połączenia.',
      'Podawaj z ugotowanymi makaronem lub ryżem.'
    ]
  },
  {
    id: 5,
    imgUrl: '',
    name: 'Kotlety sojowe',
    description: 'Kotlety wykonane z mielonej soi, często stosowane jako alternatywa dla mięsa.',
    instructions: [
      'Namocz kotlety sojowe w bulionie.',
      'Dodaj przyprawy, jajko i bułkę tartą do zmielonej soi i wymieszaj.',
      'Formuj kotlety i smaż na patelni na złoty kolor.'
    ]
  },
  {
    id: 6,
    imgUrl: 'assets/images/439928476_1121524149130387_5619094370156480595_n.jpg',
    name: 'Curry z kurczakiem',
    description: 'Pikantne danie kuchni indyjskiej z kawałkami kurczaka gotowanymi w sosie curry.',
    instructions: [
      'Pokrój filety z kurczaka na kawałki.',
      'Podsmaż kurczaka na patelni, aż zbrązowieje.',
      'Dodaj pokrojone warzywa, przyprawy curry i mleko kokosowe.',
      'Gotuj na wolnym ogniu przez około 20-30 minut, aż kurczak będzie miękki.',
      'Podawaj z ugotowanym ryżem lub chlebem naan.'
    ]
  },
  {
    id: 7,
    imgUrl: '',
    name: 'Chłopski garnek',
    description: 'Rustyczne danie przygotowywane z różnych warzyw i mięsa, gotowane na wolnym ogniu.',
    instructions: [
      'Pokrój warzywa takie jak ziemniaki, marchew, cebula, kapusta na duże kawałki.',
      'Ułóż warzywa i mięso (np. kiełbasa, boczek) warstwami w dużym garnku.',
      'Dolej wody lub bulionu tak, aby wszystkie składniki były przykryte.',
      'Gotuj na wolnym ogniu przez około 1-2 godziny, aż wszystkie składniki będą miękkie i aromatyczne.'
    ]
  },
  {
    id: 8,
    imgUrl: '',
    name: 'Tortille meksykańskie',
    description: 'Placki tortilli nadziewane mięsem, warzywami i innymi dodatkami, popularne w kuchni meksykańskiej.',
    instructions: [
      'Podsmaż mięso mielone na patelni z dodatkiem cebuli, czosnku i przypraw.',
      'Dodaj pokrojone warzywa, takie jak papryka, kukurydza, pomidory, fasola.',
      'Podgrzej tortille na patelni.',
      'Nałóż nadzienie na każdą tortillę.',
      'Zwiń tortillę, formując zwartą rolkę lub połówkę księżyca.'
    ]
  },
  {
    id: 9,
    imgUrl: '',
    name: 'Ryż z warzywami meksykańskimi i jajkiem',
    description: 'Danie z ryżu przyrządzonego z meksykańskimi warzywami i jajkiem, podawane jako smaczna potrawa obiadowa.',
    instructions: [
      'Ugotuj biały ryż według instrukcji na opakowaniu.',
      'Podsmaż pokrojone warzywa, takie jak cebula, papryka, kukurydza, fasola, na patelni.',
      'W osobnej patelni przygotuj jajko sadzone.',
      'Podawaj gorący ryż z podsmażonymi warzywami i jajkiem na górze.'
    ]
  },
  {
    id: 10,
    imgUrl: 'assets/images/441248285_1003993341092733_5670809393347480052_n.jpg',
    name: 'Makaron ze szpinakiem i pieczarkami',
    description: 'Makaron podawany z duszonym szpinakiem, pieczarkami i aromatycznymi przyprawami.',
    instructions: [
      'Ugotuj makaron według instrukcji na opakowaniu.',
      'Na patelni podsmaż cebulę i czosnek.',
      'Dodaj pokrojone pieczarki, szpinak i suszone pomidory.',
      'Smaż na małym ogniu przez kilka minut i dodaj śmietankę 30%.',
      'Podawaj ugotowany makaron z sosem ze szpinakiem i pieczarkami.'
    ]
  },
  {
    id: 11,
    imgUrl: '',
    name: 'Sałatka z kurczakiem',
    description: 'Świeża sałatka z kawałkami grillowanego kurczaka, różnymi warzywami i sosem.',
    instructions: [
      'Grilluj kawałki kurczaka na grillu lub patelni.',
      'Pokrój warzywa, takie jak pomidory, ogórki, papryka, sałata.',
      'Przygotuj sos winegret lub inny ulubiony sos do sałatek.',
      'Wymieszaj wszystkie składniki razem i podawaj schłodzone.'
    ]
  },
  {
    id: 12,
    imgUrl: '',
    name: 'Pielmieni',
    description: 'Tradycyjne danie kuchni rosyjskiej i ukraińskiej, małe pierogi nadziewane mięsem i/lub warzywami.',
    instructions: [
      'Przygotuj ciasto na pierogi, zagniatając mąkę, wodę i sól.',
      'Przygotuj nadzienie z mięsa mielonego, cebuli i przypraw.',
      'Wyrób ciasto i wycinaj kółka.',
      'Nałóż nadzienie na kółko ciasta i zlepiaj brzegi, formując pieróg.',
      'Gotuj pierogi we wrzącej wodzie, aż wypłyną na wierzch.'
    ]
  },
  {
    id: 13,
    imgUrl: 'assets/images/zcZ1nENL.jpg',
    name: 'Tajski ryż z mięsem mielonym',
    description: 'Danie tajskie z ryżu podawanego z pikantnym sosem i mielonym mięsem.',
    instructions: [
      'Ugotuj ryż jasny według instrukcji na opakowaniu.',
      'Na patelni podsmaż cebulę, czosnek i mięso mielone.',
      'Dodaj fasolkę szparagową',
      'Wymieszaj wszystkie składniki razem z sosem sojowym i sosem rybnym.',
      'Podawaj gorący ryż z mięsem mielonym i warzywami na górze.'
    ]
  },
  {
    id: 14,
    imgUrl: '',
    name: 'Udka z kurczaka',
    description: 'Udka z kurczaka w sosie pieczeniowym',
    instructions: [
      'Przygotuj marynatę z oliwy, czosnku, przypraw i ziół.',
      'Natrzyj udka marynatą i podsmaż na patelni.',
      'Po zarumienieniu udek z obu stron, zalej wodą, dodaj kostkę mięsną i przykryj, żeby podusić.',
      'Zagęść sos skrobią ziemniaczaną.'
    ]
  },
  {
    id: 15,
    imgUrl: 'assets/images/439762954_1381730199198541_7794970896435507327_n.jpg',
    name: 'Burger',
    description: 'Klasyczny hamburger z soczystą wołowiną lub innym mięsem, podawany z dodatkami w bułce.',
    instructions: [
      'Przygotuj wołowinę mieloną lub wybrany rodzaj mięsa na kotlety.',
      'Formuj kotlety i grilluj je na ruszcie lub patelni.',
      'Przygotuj świeże warzywa, takie jak sałata, pomidory, cebula.',
      'Podgrzej bułki hamburgerowe.',
      'Złożenie burgera: nałóż sos, liść sałaty, kotlet, plaster sera, plastry pomidora i cebulę, a na wierzch górną część bułki.'
    ]
  },
  {
    id: 16,
    imgUrl: 'assets/images/439515552_734369925566810_8601495584278751283_n.jpg',
    name: 'Leczo z pomidorami',
    description: 'Tradycyjne danie węgierskie z warzywami, papryką, pomidorami i mięsem, duszone w sosie pomidorowym.',
    instructions: [
      'Pokrój cebulę i paprykę na drobne kawałki.',
      'Na patelni podsmaż cebulę, paprykę i mięso mielone.',
      'Dodaj pokrojone pomidory i dusz na wolnym ogniu przez kilka minut.',
      'Dodaj przyprawy, takie jak papryka w proszku, sól, pieprz.',
      'Gotuj na małym ogniu, aż warzywa będą miękkie i aromatyczne.'
    ]
  },
  {
    id: 17,
    imgUrl: '',
    name: 'Leczo bez pomidorów',
    description: 'Węgierskie danie kuchni domowej z warzywami i mięsem, gotowane bez dodatku pomidorów.',
    instructions: [
      'Pokrój cebulę, paprykę, ziemniaki i inne ulubione warzywa na kawałki.',
      'Na patelni podsmaż cebulę i mięso mielone.',
      'Dodaj pokrojone warzywa i dusz na wolnym ogniu, aż wszystkie składniki będą miękkie i dobrze ugotowane.'
    ]
  },
  {
    id: 18,
    imgUrl: '',
    name: 'Pierogi',
    description: 'Klasyczne danie kuchni polskiej, małe pierogi nadziewane mięsem, serem lub innymi składnikami.',
    instructions: [
      'Przygotuj ciasto na pierogi, zagniatając mąkę, wodę i sól.',
      'Przygotuj nadzienie według preferencji, takie jak mięso mielone, ziemniaki z serem, kapusta z grzybami itp.',
      'Wyrób ciasto i wycinaj kółka.',
      'Nałóż nadzienie na kółko ciasta i zlepiaj brzegi, formując pieróg.',
      'Gotuj pierogi we wrzącej wodzie, aż wypłyną na wierzch.'
    ]
  },
  {
    id: 19,
    imgUrl: '',
    name: 'Tortille z kurczakiem i warzywami',
    description: 'Placki tortilli nadziewane grillowanym kurczakiem, warzywami i innymi dodatkami.',
    instructions: [
      'Grilluj kawałki kurczaka na patelni lub grillu.',
      'Pokrój warzywa, takie jak papryka, cebula, kukurydza, pomidory, sałata.',
      'Podgrzej tortille na patelni.',
      'Nałóż na każdą tortillę kawałki kurczaka, warzywa i ulubione sosy.',
      'Zwiń tortillę, formując zwartą rolkę lub połówkę księżyca.'
    ]
  },
  {
    id: 20,
    imgUrl: '',
    name: 'Makaron z sosem śmietanowym i brokułami',
    description: 'Makaron podawany z sosem śmietanowym z dodatkiem świeżych brokułów i przypraw.',
    instructions: [
      'Ugotuj makaron według instrukcji na opakowaniu.',
      'Na patelni podsmaż cebulę i czosnek.',
      'Dodaj śmietanę i pokrojone brokuły, gotuj na wolnym ogniu przez kilka minut.',
      'Dodaj ugotowany makaron do sosu i wymieszaj.',
      'Podawaj posypane parmezanem i świeżym koperkiem.'
    ]
  },
  {
    id: 21,
    imgUrl: '',
    name: 'Spaghetti bolognese',
    description: 'Klasyczne włoskie danie z makaronem spaghetti podawanym z mięsnym sosem pomidorowym.',
    instructions: [
      'Ugotuj makaron spaghetti według instrukcji na opakowaniu.',
      'Na patelni podsmaż cebulę, czosnek i mięso mielone.',
      'Dodaj przecier pomidorowy, koncentrat pomidorowy i przyprawy.',
      'Gotuj na małym ogniu przez około 20-30 minut, aż sos zgęstnieje i aromatycznie się skoncentruje.',
      'Podawaj makaron z sosem bolognese posypany parmezanem.'
    ]
  },
  {
    id: 22,
    imgUrl: '',
    name: 'Makaron ze szpinakiem i kurczakiem',
    description: 'Makaron podawany z sosem ze szpinakiem, grillowanym kurczakiem i aromatycznymi przyprawami.',
    instructions: [
      'Ugotuj makaron według instrukcji na opakowaniu.',
      'Grilluj kawałki kurczaka na patelni lub grillu.',
      'Na patelni podsmaż cebulę i czosnek.',
      'Dodaj szpinak i smaż na małym ogniu, aż zmięknie.',
      'Wymieszaj ugotowany makaron z sosem szpinakowym i kawałkami kurczaka.'
    ]
  },
  {
    id: 23,
    imgUrl: '',
    name: 'Ryż z sosem indyjskim',
    description: 'Danie z ryżu podawanego z pikantnym indyjskim sosem curry, często z dodatkiem mięsa lub warzyw.',
    instructions: [
      'Ugotuj ryż jasny według instrukcji na opakowaniu.',
      'Na patelni podsmaż cebulę, czosnek i przyprawy curry.',
      'Dodaj pokrojone mięso lub warzywa, takie jak kurczak, ziemniaki, bakłażan, papryka.',
      'Dodaj mleko kokosowe i gotuj na wolnym ogniu przez około 20-30 minut.',
      'Podawaj gorący ryż z sosem curry na górze.'
    ]
  },
  {
    id: 24,
    imgUrl: 'assets/images/TVxsPk2x.jpg',
    name: 'Pity gyros',
    description: 'Popularne danie greckie z mięsem gyros podawanym w pitach z warzywami i sosem tzatziki.',
    instructions: [
      'Przygotuj mięso gyros, marynując je w oliwie, przyprawach i sokiem z cytryny.',
      'Grilluj mięso na ruszcie lub patelni, aż będzie chrupiące i dobrze ugotowane.',
      'Podgrzej pita na patelni.',
      'Nałóż na pitę kawałki mięsa, warzywa, takie jak pomidory, cebula, sałata.',
      'Dodaj sos tzatziki i zawijaj pitę.'
    ]
  },
  {
    id: 25,
    imgUrl: 'assets/images/pwPa6RYE.jpg',
    name: 'Zapiekanka',
    description: 'Polskie danie składające się z kromki chleba, pokrytej warzywami, mięsem i serem, pieczone w piekarniku.',
    instructions: [
      'Ułóż kromki chleba na blasze do pieczenia.',
      'Nałóż na każdą kromkę warzywa, takie jak pieczarki, papryka, cebula.',
      'Dodaj pokrojone mięso, takie jak szynka, kiełbasa.',
      'Posyp całość startym serem żółtym.',
      'Piec w piekarniku przez około 10-15 minut, aż ser się roztopi i zapiekanka zbrązowieje na wierzchu.'
    ]
  },
  {
    id: 26,
    imgUrl: '',
    name: 'Zapiekanka ziemniaczana',
    description: 'Pyszne danie ziemniaczane zapiekane w piekarniku z warstwą sera i kawałkami szynki.',
    instructions: [
      'Ziemniaki obrać, pokroić na plastry i ugotować.',
      'W naczyniu żaroodpornym ułożyć warstwę gotowanych ziemniaków.',
      'Na ziemniakach rozłożyć kawałki szynki.',
      'Posypać wszystko startym serem i zapiekać w piekarniku aż ser się roztopi i zrumieni.'
    ]
  },
  {
    id: 27,
    imgUrl: '',
    name: 'Plendze z cukrem',
    description: 'Swojsaka nazwa na placki ziemniaczane podsmażane na patelni i posypane cukrem.',
    instructions: [
      'Ziemniaki obrać i zetrzeć na tarce o drobnych oczkach.',
      'Odcisnąć nadmiar wody z ziemniaków za pomocą sitka lub ręcznika papierowego.',
      'Dodać do ziemniaków sól.',
      'Na patelni rozgrzać olej lub rozpuszczony tłuszcz, a następnie formować placki ziemniaczane za pomocą łyżki i smażyć na złocisty kolor z obu stron.',
      'Gorące placki posypać cukrem przed podaniem.'
    ]
  },
  {
    id: 28,
    imgUrl: '',
    name: 'Risotto',
    description: 'Włoskie danie z ryżu, gotowane na wywarze z dodatkiem masła, sera parmezan i aromatycznych przypraw.',
    instructions: [
      'Podgrzej bulion na patelni.',
      'Na drugiej patelni podsmaż cebulę i czosnek.',
      'Dodaj ryż i smaż przez kilka minut.',
      'Dodawaj bulion po trochu do ryżu, mieszając często, aż ryż wchłonie cały płyn.',
      'Gdy ryż będzie gotowy, dodaj masło, parmezan i przyprawy, wymieszaj dobrze i podawaj natychmiast.'
    ]
  },
  {
    id: 29,
    imgUrl: '',
    name: 'Chili con carne',
    description: 'Meksykańskie danie z mięsem mielonym, fasolą i pomidorami, pikantne i aromatyczne.',
    instructions: [
      'Na patelni podsmaż cebulę, czosnek i pokrojone warzywa, takie jak papryka, cukinia, bakłażan.',
      'Dodaj pokrojone pomidory lub przecier pomidorowy.',
      'Dolej bulion, dodaj przyprawy i gotuj na wolnym ogniu przez około 30 minut.',
      'Dodaj odcedzoną fasolę czerwoną oraz kukurydzę i gotuj jeszcze przez kilka minut.',
      'Podawaj z ugotowanym ryżem lub bułką.'
    ]
  },
  {
    id: 30,
    imgUrl: '',
    name: 'Chili sin carne',
    description: 'Wersja wegetariańska dania chili con carne, bez mięsa, ale z dodatkiem różnych warzyw i fasoli.',
    instructions: [
      'Na patelni podsmaż cebulę, czosnek i pokrojone warzywa, takie jak papryka, cukinia, bakłażan.',
      'Dodaj przecier pomidorowy, bulion warzywny i przyprawy.',
      'Dolej odcedzoną fasolę czerwoną i kukurydzę gotuj na wolnym ogniu przez około 30 minut.',
      'Podawaj z ugotowanym ryżem lub bułką.'
    ]
  },
  {
    id: 31,
    imgUrl: '',
    name: 'Grillowany kurczak',
    description: 'Kawałki kurczaka grillowane na ruszcie lub patelni, aromatyczne i soczyste.',
    instructions: [
      'Przygotuj marynatę z oliwy, czosnku, przypraw i ziół.',
      'Natrzyj kawałki kurczaka marynatą i odstaw na minimum 30 minut do lodówki.',
      'Rozgrzej grill lub patelnię.',
      'Grilluj kawałki kurczaka z obu stron, aż będą chrupiące i dobrze ugotowane w środku.'
    ]
  },
  {
    id: 32,
    imgUrl: '',
    name: 'Mięso z piekarnika',
    description: 'Danie z mięsa pieczonego w piekarniku z dodatkiem ziół i przypraw, aromatyczne i soczyste.',
    instructions: [
      'Przygotuj marynatę z oliwy, czosnku, przypraw i ziół.',
      'Natrzyj kawałki mięsa marynatą i odstaw na minimum 30 minut do lodówki.',
      'Przygotuj ulubione warzywa takie jak marchew, cebula, papryka.',
      'Rozgrzej piekarnik do temperatury 180°C.',
      'Ułóż kawałki mięsa i warzyw w naczyniu żaroodpornym i piecz przez około godzinę, aż będą chrupiące i dobrze ugotowane w środku.'
    ]
  },
  {
    id: 33,
    imgUrl: '',
    name: 'Fasolka po bretońsku',
    description: 'Klasyczne danie kuchni bretońskiej składające się z fasolki szparagowej gotowanej z cebulą, pomidorami i kawałkami boczku.',
    instructions: [
      'Umyć i pokroić fasolkę szparagową oraz cebulę.',
      'Podsmażyć cebulę, dodać boczek i smażyć.',
      'Dodać fasolkę szparagową i dusić.',
      'Dodać pomidory, dusić aż miękkie, doprawić i podawać.'
    ]
  },
  {
    id: 34,
    imgUrl: '',
    name: 'Makaron z pesto',
    description: 'Makaron podawany z sosem pesto, wykonanym z bazylii, orzechów, sera parmezan i oliwy z oliwek.',
    instructions: [
      'Ugotuj makaron według instrukcji na opakowaniu.',
      'Przygotuj sos pesto, miksując świeżą bazylię, orzechy włoskie, ser parmezan, czosnek i oliwę z oliwek.',
      'Wymieszaj ugotowany makaron z sosem pesto.',
      'Podawaj posypane startym parmezanem i pokrojonymi pomidorami koktajlowymi.'
    ]
  },
  {
    id: 35,
    imgUrl: 'assets/images/dVnAy2t8.jpg',
    name: 'Kotlety mielone',
    description: 'Klasyczne kotlety mielone z mięsa mielonego, bułki tartej i przypraw, smażone na złoty kolor.',
    instructions: [
      'Do mięsa mielonego dodaj bułkę tartą, jajko, przyprawy i dokładnie wymieszaj.',
      'Formuj kotlety z masy mięsnej.',
      'Smaż kotlety na rozgrzanej patelni z obu stron, aż będą złociste i dobrze ugotowane w środku.'
    ]
  },
  {
    id: 36,
    imgUrl: '',
    name: 'Quesadilla',
    description: 'Meksykańskie danie z tortilli nadziewanej serem i innymi składnikami, grillowane na patelni do chrupkości.',
    instructions: [
      'Podgrzej patelnię na średnim ogniu.',
      'Nałóż na tortillę warstwę sera, a następnie dodaj ulubione składniki, takie jak kurczak, papryka, cebula.',
      'Przykryj drugą tortillą.',
      'Smaż quesadillę na patelni przez kilka minut z każdej strony, aż będzie chrupiąca i ser się roztopi.'
    ]
  },
  {
    'id': 37,
    'imgUrl': 'assets/images/l2hhIMNw.jpg',
    'name': 'Pizza z pepperoni, szpinakiem i pieczarkami',
    'description': 'Domowa pizza na cienkim cieście z dodatkami takimi jak pepperoni, świeży szpinak, pieczarki, suszone pomidory i cebula.',
    'instructions': [
      'Rozgrzej piekarnik do 220°C.',
      'Nałóż sos pomidorowy na rozwałkowane ciasto do pizzy.',
      'Dodaj plastry pepperoni, świeże liście szpinaku, pokrojone pieczarki, suszone pomidory i kawałki cebuli.',
      'Posyp całość serem mozzarella.',
      'Piec pizzę w nagrzanym piekarniku przez około 12-15 minut, aż ciasto będzie chrupiące, a ser roztopiony i zarumieniony.'
    ]
  }

];

