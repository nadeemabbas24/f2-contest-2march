
let score = {red:0, blue:0, green:0, yellow:0}

function OpeningCeremony(score, callback){
     setTimeout(function() {
    console.log("Let the games begin");
    document.write("<h1>Let the games begin");
    document.write("</br> To see the result open console");
    callback(score, callback)
  }, 1000);
}


function Race100M(score, callback){
     setTimeout(function() {
    console.log("====Race100M starts====");   
    console.log("previous score ",score);   
   
    score.red = Math.floor(Math.random() * 6 +10);
    score.blue = Math.floor(Math.random() * 6 +10);
    score.green = Math.floor(Math.random() * 6 +10);
    score.yellow = Math.floor(Math.random() * 6 +10);
     const sorted = Object.entries(score).sort((a, b) => a[1] - b[1]);
    score[sorted[0][0]] = 50; //takes least second to complete
    score[sorted[1][0]] =25;  //takes second least second to complete
    score[sorted[2][0]] = 0;
    score[sorted[3][0]] = 0;
    console.log("current score ",score); 
    console.log(`${sorted[0][0]} won the Race100M`);
    LongJump(score, callback);
  }, 3000);
}

function LongJump(score, callback){
     setTimeout(function() {
    console.log("====Long jump starts=====");
    console.log("previous score ",score);
    //choose the color index randomly
    let colorIndex = Math.floor(Math.random()*5);
    console.log("current score ",score); 
    if(colorIndex === 0)
     {  score.red += 150;
        console.log("red won the LongJump");
     }
     if(colorIndex === 1)
      {score.blue += 150;
       console.log("blue won the LongJump");
      }
      if(colorIndex === 2)
      {score.green += 150;
       console.log("green won the LongJump")}
      if(colorIndex === 4)
      {score.yellow += 150;
      console.log("green won the LongJump");}
   
    HighJump(score, callback);
  }, 2000);
}

function HighJump(score, callback){
     setTimeout(function() {
    console.log("=====High jump starts=====");
    let color = prompt("Enter the color of your choice");
    console.log("previous score ",score);
    if(color==='red' || color==='blue' || color=='green' || color==='yellow')
     { 
        score[color] +=100;
        console.log("current score",score); 
        
    }
    else
    console.log("Event was cancelled");    
    AwardCeremony(score);
  }, 1000);
}

function AwardCeremony(score){
     setTimeout(function() {
        const sortedScore = Object.entries(score)
        .sort((a, b) => b[1] - a[1]);
        // .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    console.log("Award ceremony begin");
    console.log("current score", score);
    console.log(`${sortedScore[0][0]} came first with ${sortedScore[0][1]} score.`);
    console.log(`${sortedScore[1][0]} came second with ${sortedScore[1][1]} score.`);
    console.log(`${sortedScore[2][0]} came third with ${sortedScore[2][1]} score.`);
    console.log(`${sortedScore[3][0]} came fourth with ${sortedScore[3][1]} score.`);
   
    console.log()
    

    
  }, 1000);
}

OpeningCeremony(score,Race100M);

