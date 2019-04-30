const resultsImg = {
    best: 'http://www.laughspark.info/uploadfiles//funny-orangutan-dance-4460.gif',
    decent: 'https://media3.giphy.com/media/26gsspfbt1HfVQ9va/giphy.gif?cid=790b76115cc53fb56c3764522ee9bc1b&rid=giphy.gif',
    tryAgain: 'https://66.media.tumblr.com/tumblr_lreztluEB81qzado8o4_250.gif'
  }
  
  const questionBank = [      
  {question: "The Blue whale is the largest animal to have ever lived on the planet earth.  Which of the following whales is the second largest of all time?", 
  choices: { 
    a: "Right whale", 
    b: "Humpback whale", 
    c: "Sperm whale", 
    d: "Finback whale"}, 
  correctAnswer: "Finback whale", 
  rationale: "The Finback whale is a streamline version of the Blue whale, build for speed at enormous size.", 
  img: 'https://ocean.si.edu/sites/default/files/styles/photo_full/public/what-is-the-largest-whale-comparison-chart-full.jpg?itok=NZ1sn__o'}, 
       
  {question: "\'Bird brain\' is commonly used as a derogatory term for lack of intelligence, which of the following birds lends credence to this term with a brain smaller than its eye?", 
  choices: { 
    a: "Canary", 
    b: "Ostrich", 
    c: "Greater yellow-headed vulture", 
    d: "Toucan"}, 
  correctAnswer: "Ostrich", 
  rationale: "This is not the most scientific depiction, however it does a great job of demonstrating the size comparison.",   
  img: 'http://2il.org/wp-content/uploads/2015/03/An-eye-of-ostrich-is-big-from-its-brain.jpg'}, 
    
  {question: "Which of the following animals is the fastest runner?", 
  choices: { 
    a: "Human", 
    b: "Hippo", 
    c: "Cow", 
    d: "Polar bear"}, 
  correctAnswer: "Human", 
  rationale: "Humans have been clocked running as fast as 28mph, and in this list are the fastest.  Cows surprisingly can reach speeds of 25 mph.  Polar bears 20mph and Hippos 19mph.", 
  img: 'https://static.businessinsider.com/image/55df0cc2bd86ef12008b640a/image.gif?_ga=2.109479174.2022371014.1556623625-1342294315.1556623625'}, 
  
  {question: "How many hours does a horse sleep in a 24 hour period?", 
  choices: { 
    a: "8", 
    b: "4", 
    c: "3", 
    d: "6"}, 
  correctAnswer: "3", 
  rationale: "Three hours a day roughly, and they only require 30 minutes in order to meet their needs for REM sleep.",
  img: 'http://www.quickmeme.com/img/5b/5bda238d8a63605d4355f60f5fc730dd7726bcadc3ffda4d4314259d4985304f.jpg'}, 
   
  {question: "The Giant ground sloth roamed the Americas, and is an ancient cousin to the two and three toed sloths that live in the American Rainforests.  Which answer below is the closest to the Giant ground sloth\"s size? ", 
  choices: { 
    a: "a compact car", 
    b: "an African elephant", 
    c: "a Mountain lion", 
    d: "a Triceratops"}, 
  correctAnswer: "an African elephant", 
  rationale: "This is an amazing image.  It is theorized that the avacado seed grew to its size because Giant ground sloths would swallow it whole and spread the trees with their scat!", 
  img: 'http://www.prehistoric-wildlife.com/images/species/m/megatherium-size.jpg'}, 
    
  {question: "The platypus is one of two types of mammals that lays eggs, which of the following is the other one?", 
  choices: { 
    a: "Dingo", 
    b: "Pangolin", 
    c: "Panda", 
    d: "Echidna"}, 
  correctAnswer: "Echidna", 
  rationale: "There are multiple sepcies of echidna and they all lay eggs, then hold them in a pouch to keep them warm.",
  img: 'https://www.sciencenews.org/sites/default/files/2016/11/112616_sm_echidna.gif'}, 
    
  {question: "Which of the following is the largest rodent?", 
  choices: { 
    a: "Brown rat", 
    b: "Capybara", 
    c: "Giant Hutia", 
    d: "North American beaver"}, 
  correctAnswer: "Capybara", 
  rationale: "Capybara can be domesticated and can learn more verbal commands than most dogs.",
  img: 'https://memeguy.com/photos/images/capybara-its-the-largest-member-of-the-rodent-family-213220.gif'}, 
  
  {question: "How fast can an Ostrich run?", 
  choices: { 
    a: "23mph", 
    b: "33mph", 
    c: "43mph", 
    d: "53mph"}, 
  correctAnswer: "43mph", 
  rationale: "That is one fast bird.",
  img: 'https://cdn.dribbble.com/users/1497565/screenshots/3219232/run-ostrich-lauralonni.gif'}, 
    
  {question: "Which of the following animals only requires 20-40 seconds to empty their bladder?", 
  choices: { 
    a: "Elephant", 
    b: "Mouse", 
    c: "Okapi", 
    d: "All of the above"}, 
  correctAnswer: "All of the above", 
  rationale: "Crazy to know that a mouse and elephant empty their bladders in roughly the same amount of time.  It as been coined the law of urination.",
  img: 'https://gifimage.net/wp-content/uploads/2018/06/stopwatch-gif-13.gif'}, 
  
  {question: "How many eggs does a Tiger shark lay on average?", 
  choices: { 
    a: "20", 
    b: "15", 
    c: "10", 
    d: "None of the above"}, 
  correctAnswer: "None of the above", 
  rationale: "Tiger Sharks have live births!",
  img: 'http://english.ryukyushimpo.jp/wp-content/uploads/2017/03/31f1cfedfa53fe899175d03a666fa3f9.jpg'}, 
  
  {question: "Which mammal experiences the longest pregnancy?", 
  choices: { 
    a: "Elephant", 
    b: "Hippo", 
    c: "Blue whale", 
    d: "Narwhal"}, 
  correctAnswer: "Elephant", 
  rationale: "Elephant pregnancy lasts longer than two human pregnancies",
  img: 'https://study.com/cimages/multimages/16/gestation1.png'}, 
  
  {question: "Which animal has the longest tusk or tooth?", 
  choices: { 
    a: "Saber Tooth tiger", 
    b: "Narwhal", 
    c: "Hippo", 
    d: "Walrus"}, 
  correctAnswer: "Narwhal", 
  rationale: "That \'horn\' is actually a tooth sticking out through their head!",
  img: 'https://polarfurtraders.com/wp-content/uploads/2015/10/Narwhal_Tusks-Ivory-e1449285030519.jpg'}, 
     
  {question: "Which Primate has a prehensile tail?", 
  choices: { 
    a: "Baboon", 
    b: "Orangutan", 
    c: "Spider monkey", 
    d: "Ring tailed lemur"}, 
  correctAnswer: "Spider monkey", 
  rationale: "Watch some videos on these monkeys.  They are fantastic climbers thanks in large part to their tails.", 
  img: 'https://www.mindenpictures.com/cache/pcache2/00785601.jpg'}, 
   
  {question: "The Green Basilisk lizard is commonly called the Jesus Christ lizard.  What can this lizard do to earn the name?", 
  choices: { 
    a: "Turns water into wine.", 
    b: "Can resurrect from the dead.", 
    c: "Walks on water.", 
    d: "Can cure blindness."}, 
  correctAnswer: "Walks on water.", 
  rationale: "Runs on water actually!", 
  img: 'https://media1.tenor.com/images/ef9969c012d3cfac2f3f18b5273af37d/tenor.gif'}, 
   
  {question: "Which animal has a blue tongue?", 
  choices: { 
    a: "Blue-tongued skink", 
    b: "Chow Chow dog", 
    c: "Okapi", 
    d: "All of the above"}, 
  correctAnswer: "All of the above", 
  rationale: "The only other animal with a blue tongue is the giraffe which is a close relative of the Okapi.",
  img: 'http://www.reptilesweb.com/wp-content/uploads/2014/05/blue-tongue-skink.jpg'}, 
     
  {question: "How fast can a Mako shark swim?", 
  choices: { 
    a: "37mph", 
    b: "42mph", 
    c: "47mph", 
    d: "32mph"}, 
  correctAnswer: "42mph", 
  rationale: "Toothy water bullet!",
  img: 'https://i.chzbgr.com/full/7675867904/hA06396BC/'}, 
   
  {question: "How high can a jaguar jump?", 
  choices: { 
    a: "10 feet", 
    b: "12 feet", 
    c: "8 feet", 
    d: "14 feet"}, 
  correctAnswer: "10 feet", 
  rationale: "They could jump up and land on a basketball rim.",
  img: 'https://iv1.lisimg.com/image/15207659/514full.jpg'}, 
  
  {question: "Tiger beetles are the fastest running insects clocking a blazing 5.6 mph.  This is about 125 body length per second.  If a Tiger beetle could maintain that speed while the size of a cheetah how fast would it be running?", 
  choices: { 
    a: "100mph - 200mph", 
    b: "300mph - 400mph", 
    c: "500mph - 600mph", 
    d: "None of the above"}, 
  correctAnswer: "300mph - 400mph", 
  rationale: "Cheetahs are 43 inches to 59 inches in length, or 3.6 – 4.9 ft long.  This length would be traveled 125 times in 1 second.  So for 3.6 feet, (3.6 x 125 x 60 x 60) / 5280 = 305mph and using the same equation for 4.9 feet = 419mph",
  img: 'https://media.giphy.com/media/3oGRFKJ8Ea3hKkLRyE/giphy.gif'}, 
    
  {question: "Humans are one of only five species that are known to experience menopause. Which group of mammals also experience menopause?", 
  choices: { 
    a: "Prime Apes (Gorillas (Highland and Lowland), Chimpanzees, Orangutans.", 
    b: "Rhinos and Hippos. (White and Black Rhinos, pigmy and standard Hippos.",
    c: "Bears (Grizzly bear, Polar bear, Black bear, Sun bear.", 
    d: "Marine Mammals (Narwhal, Beluga whale, Orca, Short-finned Pilot whales."}, 
  correctAnswer: "Marine Mammals (Narwhal, Beluga whale, Orca, Short-finned Pilot whales.", 
  rationale: "Marine Mammals, it is mentioned that elephants may experience menopause as well, but not confirmed as of yet.  The exceptionally long life span of marine mammals (some exceeding 100+ years) makes menopause necessary.",
  img: 'https://naturalishistoria.files.wordpress.com/2012/04/ukogorterposterwhales-world.jpg'}, 
   
  {question: "What is the airspeed velocity of an unladen swallow?", 
  choices: { 
    a: "4mph", 
    b: "14mph", 
    c: "24mph", 
    d: "34mph"}, 
  correctAnswer: "24mph", 
  rationale: "I had to include this question, and thanks to the google machine, 24mph is in fact the velocity",
  img: 'http://style.org/images/unladenswallow/swallow_st2.gif'}, 
   
  {question: "Which mammal routinely gives birth to identical quadruplets?", 
  choices: { 
    a: "Armodillo", 
    b: "Opossum", 
    c: "Tazmanian Devil", 
    d: "Naked mole-rat"}, 
  correctAnswer: "Armodillo", 
  rationale: "armored bois like to make four exact replicas.",
  img: 'https://static3.depositphotos.com/1006124/219/i/950/depositphotos_2191544-stock-photo-armadillo-babies.jpg'} 
  ]; 