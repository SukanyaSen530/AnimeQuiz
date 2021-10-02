const readlineSync = require('readline-sync');
const chalk = require('chalk');

//Initialization
let score = 0;
let scoreArray = [
  {
    contestant : "Armin",
    points:6
  },
  {
    contestant : "Eren",
    points:7
  },
  {
    contestant : "Mikasa",
    points:8
  }
];

const play = (answer, userAns) => {
       if(userAns.toLowerCase() === answer.toLowerCase()){
       console.log(chalk.bgBlue.bold("Right, The answer is : ", answer));
       score++;
       console.log("Current Score -> ", score);
       }else{
       console.log(chalk.bgRed.bold("Wrong!, -1 for this! :("));
       score--;
       console.log("Current Score -> ", score);
    }
}

const loopPlay = (arr) => {
   for(let i=0; i < arr.length; i++){
              let userAns = readlineSync.keyIn(chalk.yellowBright(arr[i].ques));
              if(userAns === '0'){
                console.log(`Current Score --> ${score}`);
                break;
              }
              play(arr[i].ans, userAns);
          }
    }

//Arrays
//Level - 1 Questions 
const DemonSlayerQuiz = [
    {
      ques: `1.Who trained Tanjiro as well as the other disciples?
      a)Kozo Kanamori
      b)Kyojuro Rengoku 
      c)Muichiro Tokito 
      d)Sakonji Urokodaki  
      `,
      ans: "d"
    },
    {
      ques: `2.Who killed the Tanjiro's family?   
      a)Kazumi
      b)Muzan Kibutsuji
      c)Kyogai
      d)Yahaba 
      ` ,
      ans: "b"
    },
    {
      ques: `3.Why does Nezuko attack demons instead of humans?
       a)Because Urokodaki used hypnosis on Nezuko when she was sleeping to make her see demons as the enemy and humans as friends.
       b)Because Giyu put a Bamboo Muzzle on her mouth. 
       `,
      ans: "a"
    },
    {
      ques: `4.Who is Lady Tamayo?
      a)A demon doctor 
      b)Wife of Muzan
      c)A Hashira
      d)Tanjiro's Mother  
      `,
      ans: "a"
    },
    {
      ques: `5.Who trained Tanjiro for 6 months? 
      a)Makomo
      b)Hashibira Inosuke
      c)Kazumi 
      d)Ubuyashiki Kanata 
      `,
      ans: "a"
    },
    {
      ques: `6.Who are the two former students of Urokodaki?
      a)Teruko and Hanako
      b)Kokushibo and Satoko
      c)Shoichi and Kiyoshi
      d)Sabito and Makomo
      `,
      ans: "d"
    },
    {
      ques: `7.A hashira slashed his hands a little bit so blood can come out and drip, did Nezuko drink it?
       a)Yes
       b)No
       `,
      ans: "b"
    },
    {
      ques: `What was Tanjiro's friend called (Hint: Lightning)
      a)Pig Face
      b)Zenitsu
      c)Nezuko
      d)Hashira   
      `,
      ans: "b"
    },
     {
      ques: `9. Color of Tanjiro's Sword
      a)Red 
      b)Blue 
      c)Black 
      d)Yellow  
      `,
      ans: "c"
    },
    {
      ques: `10.Tanjiro had a sword what was it
      a)Nichri Sword 
      b)Wooden Sword 
      c)Blood Demon Art Sword
      d)Invisible Sword  
      `,
      ans: "a"
    }
];

const narutoQuiz = [
    {
      ques: `1.What is Naruto's last name? 
      a)Uzumaki 
      b)Uaimaki 
      c)Uchicha 
      d)Uzimaki  
      `,
      ans: "a"
    },
    {
      ques: `2.What is the first Ninjutsu that Naruto learns from the sacred scroll?   
      a)Shadow Clone Jutsu 
      b)Summoning Jutsu 
      c)Rasengan 
      d)Chidori 
      ` ,
      ans: "a"
    },
    {
      ques: `3.Sasuke is the sole survivor of the Uchiha Clan. 
       a)True 
       b)False  
       `,
      ans: "b"
    },
    {
      ques: `4.Sensei of Group 7 squad! 
      a)Kakashi 
      b)Iruka 
      c)Jiraya 
      d)Kurunai  
      `,
      ans: "a"
    },
    {
      ques: `5.What is the ability passed through the Uchiha's advanced bloodline? 
      a)Byakugan 
      b)Kage Bunshin no Jutsu 
      c)Bunshin no Jutsu 
      d)Sharingan  
      `,
      ans: "d"
    },
    {
      ques: `6.Who tricked Naruto into stealing a sacred scroll?
      a)Gaara
      b)Mizuki
      c)Kabuto
      d)Danzo
      `,
      ans: "b"
    },
    {
      ques: `7.What does 'Chidori' mean? 
       a)one thousand birds
       b)five thousand swords
       c)five hundred punches 
       d)ten thousand stones  
       `,
      ans: "a"
    },
    {
      ques: `What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?
      a)Shadow Lotus
      b)Primary lotus
      c)Fiery Lotus
      d)Lotus of destruction   
      `,
      ans: "b"
    },
     {
      ques: `9. Who can do shadow possesion jutsu? 
      a)Shikamaru 
      b)Rock Lee 
      c)Shino 
      d)Hinata  
      `,
      ans: "a"
    },
    {
      ques: `10.What test did Naruto fail in the academy? (which jutsu)  
      a)Sexy Jutsu 
      b)Tai Jutsu 
      c)Clone Jutsu 
      d)Dojutsu  
      `,
      ans: "c"
    }
];

//Level - 2 Questions
const narutoQuiz2 = [
    {
      ques: `11.What is the name of Zabuza's sword?
      a)Shark Skin/Samehada
      b)Haku
      c)Executioner's Blade/Kubikiribocho
      d)Helmsplitter/Kabutowari 
      `,
      ans: "c"
    },
    {
      ques: `12.Which team isn't included in the "Rookie 9" classification during the Chunin Exams?  
      a)Team7 
      b)TeamGuy
      c)Team8 
      d)Team10 
      ` ,
      ans: "b"
    },
    {
      ques: `13.Which of Gamabunta's sons does Naruto accidentally summon during his fight against Gaara? 
       a)Gamakichi
       b)Gamamoro
       c)Gamaken
       d)Gamoka 
       `,
      ans: "a"
    },
    {
      ques: `14.Who are Itachi and Kisame looking for when they first arrive in Konoha together?
      a)Shino 
      b)Sasuke 
      c)Naruto 
      d)Neji 
      `,
      ans: "c"
    },
    {
      ques: `15.Why is Kakashi always late? 
      a)He gets lost on the path of life 
      b)He visits the Hokage daily 
      c)He visits the Memorial Stone 
      d)He's reading Jiraiya's novels 
      `,
      ans: "c"
    },
    {
      ques: `16.Which members of the Sound Village go to Konoha to bring Sasuke to Orochimaru?
      a)Jirobo, Kidomaru, Kimimaro, Ukon
      b)Jirobo, Kidomaru, Kabuto, Sakon
      c)Kidomaru, Tayuya, Sakon, Ukon
      d)Jirobo, Kidomaru, Tayuya, Sakon, Ukon
      `,
      ans: "d"
    },
    {
      ques: `17.Which of the Eight Gates does Rock Lee stop at against Gaara in the Chunin Exams? 
       a)5th Gate : The Gate of Closing
       b)4th Gate : The Gate of Pain
       c)6th Gate : The Gate of Joy
       d)3rd Gate : The Gate of Life
       `,
      ans: "a"
    },
    {
      ques: `18.How many times does Naruto use the Nine Tails' power in Part 1 of the series?
      a)7
      b)4
      c)5
      d)9   
      `,
      ans: "a"
    },
     {
      ques: `19. Which former Kage was also the Jinchuriki of the Three Tails? 
      a)1st RaiKageu 
      b)4th MizuKage
      c)5th Kazekage 
      d)3rd Hokage 
      `,
      ans: "b"
    },
    {
      ques: `20.Which Tailed Beast did Rin have inside her?
      a)3 Tailed Beast
      b)2 Tailed Beast
      c)4 Tailed Beast
      d)9 Tailed Beast
      `,
      ans: "a"
    }
];


//Input/Output
let userName = readlineSync.question('May I have your name? ');
console.log(chalk.bold.blueBright('Hi ' + userName + '! '));


console.log(chalk.green(`Rules for the game!
1. There are 10 questions! For each question you get +1 points and for a wrong answer you get -1, 
2. Press a/b/c/d for the answers without hitting Enter! 
(Any other key will be counted as wrong and -1 will be deducted from overall score!)
3. You can go to Level 2 if you get minimum of 8 (which is the high score for L-1) points in Level1 Quiz. (Currently we have Level-2 only for NARUTO)
4. Press 0 to exit. \n`));

const choice = readlineSync.keyIn('Choose Your Topic : 1.Naruto 2.Demon Slayer!  \n');

switch(choice){
  case '1': console.log(chalk.red.bold("Let's check if you are a SHINOBI!"));
           loopPlay(narutoQuiz);
           if(score >= 8){
             console.log(chalk.bold.blueBright(`Congratulations! ${userName}... \n
             Welcome to Level-2 (It's going to be difficult!)`));
             loopPlay(narutoQuiz2);
           }
           break;
  case '2': console.log(chalk.red.bold("Let's check if you are a DEMONSLAYER!"));
           loopPlay(DemonSlayerQuiz);
           break;
  default: "Invalid Selection! Sorry"; break;
}

console.log(`Hey! Good Job ${userName}! Your score is ${score}`);

let maxPoint = 0, lastUser = "";

for(let i=0; i < scoreArray.length; i++){
   if(scoreArray[i].points > maxPoint){
     maxPoint = scoreArray[i].points;
     lastUser = scoreArray[i].contestant;
   }
}

if(score > maxPoint){
  console.log(chalk.green(`Congratulations! You beat the highscore of ${lastUser}->${maxPoint} by ${score-maxPoint}`));
}

console.log("--------------------");