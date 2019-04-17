const questionBank = [ 
    
    {question: "The Blue whale is the largest animal to have ever lived on the planet earth.  Which of the following whales is the second largest of all time?",
    choices: {
        a: "Right whale",
        b: "Humpback whale",
        c: "Sperm whale",
        d: "Finback whale"},
    correctAnser: "c",
    rationale: "https://ocean.si.edu/sites/default/files/styles/photo_full/public/what-is-the-largest-whale-comparison-chart-full.jpg?itok=NZ1sn__o"},
    
    {question: '“Bird brain” is commonly used as a derogatory term for lack of intelligence, which of the following birds lends credence to this term with a brain smaller than its eye?',
    choices: {
        a: "Canary",
        b: "Ostrich",
        c: "Greater yellow-headed vulture",
        d: "Toucan"},
    correctAnser: "b",
    rationale: "This is not the most scientific depiction, however it does a great job of demonstrating the size comparison.  https://funyourmind.wordpress.com/2016/08/31/ostrichs-eyes-are-bigger-than-its-brain/"},
    
    {question: "Which of the following animals is the fastest runner?",
    choices: {
        a: "Human",
        b: "Hippo",
        c: "Cow",
        d: "Polar bear"},
    correctAnser: "a",
    rationale: "Humans have been clocked running as fast as 28mph, and in this list are the fastest.  Cows surprisingly can reach speeds of 25 mph.  Polar bears 20mph and Hippos 19mph."},
    
    {question: "How many hours does a horse sleep in a 24 hour period?",
    choices: {
        a: "8",
        b: "4",
        c: "3",
        d: "6"},
    correctAnser: "c",
    rationale: "Three hours a day roughly, and they only require 30 minutes in order to meet their needs for REM sleep."},
    
    {question: "The Giant ground sloth roamed the Americas, and is an ancient cousin to the two and three toed sloths that live in the American Rainforests.  Which answer below is the closest to the Giant ground sloth’s size? ",
        choices: {
        a: "a compact car",
        b: "an African elephant",
        c: "a Mountain lion",
        d: "a Triceratops"},
    correctAnser: "b",
    rationale: "../../images/species/m/megatherium-size.jpg"},
    
    {question: "The platypus is one of two types of mammals that lays eggs, which of the following is the other one?",
    choices: {
        a: "Dingo",
        b: "Pangolin",
        c: "Panda",
        d: "Echidna"},
    correctAnser: "d",
    rationale: "https://en.wikipedia.org/wiki/Echidna"},
    
    {question: "Which of the following is the largest rodent?",
    choices: {
        a: "Brown rat",
        b: "Capybara",
        c: "Giant Hutia",
        d: "North American beaver"},
    correctAnser: "b",
    rationale: "https://en.wikipedia.org/wiki/List_of_largest_rodents"},
   
    {question: "How fast can an Ostrich run?",
    choices: {
        a: "23mph",
        b: "33mph",
        c: "43mph",
        d: "53mph"},
    correctAnser: "c",
    rationale: "http://www.speedofanimals.com/animals/ostrich?h=1.52"},
    
    {question: "Which of the following animals only requires 20-40 seconds to empty their bladder?",
    choices: {
        a: "Elephant",
        b: "Mouse",
        c: "Okapi",
        d: "All of the above"},
    correctAnser: "d",
    rationale: "https://arxiv.org/abs/1310.3737"},
    
    {question: "How many eggs does a Tiger shark lay on average?",
    choices: {
        a: "20",
        b: "15",
        c: "10",
        d: "None of the above"},
    correctAnswer: "d",
    rationale: "https://en.wikipedia.org/wiki/Tiger_shark"},
    
    {question: "Which mammal experiences the longest pregnancy?",
    choices: {
        a: "Elephant",
        b: "Hippo",
        c: "Blue whale",
        d: "Narwhal"},
    correctAnswer: "a",
    rationale: "https://en.wikipedia.org/wiki/List_of_mammalian_gestation_durations"},
    
    {question: "Which animal has the longest tusk or tooth?",
    choices: {
        a: "Saber Tooth tiger",
        b: "Narwhal",
        c: "Hippo",
        d: "Walrus"},
    correctAnswer: "b",
    rationale: "https://en.wikipedia.org/wiki/Narwhal"},
    
    {question: "Which Primate has a prehensile tail?",
    choices: {
        a: "Baboon",
        b: "Orangutan",
        c: "Spider monkey",
        d: "Ring tailed lemur"},
    correctAnswer: "c",
    rationale: "https://en.wikipedia.org/wiki/Spider_monkey"},
    
    {question: "The Green Basilisk lizard is commonly called the Jesus Christ lizard.  What can this lizard do to earn the name?",
    choices: {
        a: "Turns water into wine.",
        b: "Can resurrect from the dead.",
        c: "Walks on water.",
        d: "Can cure blindness."},
    correctAnswer: "c",
    rationale: "https://www.nationalgeographic.com/animals/reptiles/g/green-basilisk-lizard/"},
    
    {question: "Which animal has a blue tongue?",
    choices: {
        a: "Blue-tongued skink",
        b: "Chow Chow",
        c: "Okapi",
        d: "all of the above"},
    correctAnswer: "d",
    rationale: "http://www.arielesieling.com/blog/2016/animals-with-blue-tongues"},
    
    {question: "How fast can a Mako shark swim?",
    choices: {
        a: "37mph",
        b: "42mph",
        c: "47mph",
        d: "32mph"},
    correctAnswer: "b",
    rationale: "https://en.wikipedia.org/wiki/Shortfin_mako_shark"},
    
    {question: "How high can a jaguar jump?",
    choices: {
        a: "10 feet",
        b: "12 feet",
        c: "8 feet",
        d: "14 feet"},
    correctAnswer: "a",
    rationale: "http://bedtimemath.org/fun-math-animals-jumping/"},

    {question: "Tiger beetles are the fastest running insects clocking a blazing 5.6 mph.  This is about 125 body length per second.  If a Tiger beetle could maintain that speed while the size of a cheetah how fast would it be running?",
    choices: {
        a: "100mph - 200mph",
        b: "300mph - 400mph",
        c: "500mph - 600mph",
        d: "None of the above"},
    correctAnswer: "b",
    rationale: "Cheetahs are 43 inches to 59 inches in length, or 3.6 – 4.9 ft long.  This length would be traveled 125 times in 1 second.  So for 3.6 feet, (3.6 x 125 x 60 x 60) / 5280 = 305mph and using the same equation for 4.9 feet = 419mph"},
    
    {question: "Humans are one of only five species that are known to experience menopause. Which group of mammals also experience menopause?",
    choices: {
        a: "Prime Apes (Gorillas (Highland and Lowland), Chimpanzees, Orangutans.",
        b: "Rhinos and Hippos. (White and Black Rhinos, pigmy and standard Hippos.",
        c: "Bears (Grizzly bear, Polar bear, Black bear, Sun bear.",
        d: "Marine Mammals (Narwhal, Beluga whale, Orca, Short-finned Pilot whales."},
    correctAnswer: "d",
    rationale: "Marine Mammals, it is mentioned that elephants may experience menopause as well, but not confirmed as of yet.  The exceptionally long life span of marine mammals (some exceeding 100+ years) makes menopause necessary."},
    
    {question: "what is the airspeed velocity of an unladen swallow?",
    choices: {
        a: "4mph",
        b: "14mph",
        c: "24mph",
        d: "34mph"},
    correctAnswer: "c",
    rationale: "I had to include this question, and thanks to the google machine, 24mph is in fact the velocity"},
    
    {question: "Which mammal routinely gives birth to identical quadruplets?",
    choices: {
        a: "Armodillo",
        b: "Opossum",
        c: "Tazmanian Devil",
        d: "Naked mole-rat"},
    correctAnswer: "a",
    rationale: "https://video.nationalgeographic.com/video/0000015a-3d7c-d7df-a9df-fffc39e90002"}
];