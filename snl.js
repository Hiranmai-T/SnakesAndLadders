function inputuser() {
    var person1 = prompt("Please enter your name", "Player1");
    var person2 = prompt("Please enter your name", "Player2");
    if (person1 != null) {
      document.getElementById("user1").innerHTML =
      "Player1: " + person1 ;
      document.getElementById('score1').innerHTML= person1+"'s Score:";
    }
    if (person2 != null) {
        document.getElementById("user2").innerHTML =
        "Player2: " + person2 ;
        document.getElementById('score2').innerHTML= person2+"'s Score:";
      }
}
// function addmusic(){
//     var music= new Audio("C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\Bossa-nova-beat-music-loop.mp3");
//     music.play();
// }

function add_images(){
    //addmusic();
    var i;
    for(i=1;i<=9;i++){
       
       var tile = document.createElement('img');
       tile.src = "C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\snake-lader-java-player1-master\\images\\tiles\\image_part_00"+i+".jpg";
       document.getElementById('container').appendChild(tile);
     } 
     for(i=10;i<=99;i++){
       
        var tile = document.createElement('img');
        tile.src = "C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\snake-lader-java-player1-master\\images\\tiles\\image_part_0"+i+".jpg";
        document.getElementById('container').appendChild(tile);
      } 
      var tile = document.createElement('img');
        tile.src = "C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\snake-lader-java-player1-master\\images\\tiles\\image_part_100.jpg";
        document.getElementById('container').appendChild(tile);
  }
// function generatenum(){
//     var x = Math.floor(Math.random()*6+1);
//     var img = document.getElementById('dice');
//     img.src="C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\snake-lader-java-player1-master\\images\\"+x+".jpg";
//     return x;
// }
var five={x:-152,y:76,z:26,s:1,t:31};
var thirteen={x:-228,y:-152,z:46,s:1,t:51};
var eighteen={x:-152,y:-76,z:39,s:-1,t:41};
var thirtyseven={x:-228,y:-152,z:62,s:1,t:71};
var fortyeight={x:-228,y:72,z:72,s:-1,t:81};
var sixty={x:-228,y:76,z:82,s:1,t:91};
var sixtyfive={x:-228,y:76,z:95,s:-1,t:110};

var twentythree = {x:152,y:304,z:7,s:1,t:11};
var thirtythree={x:228,y:76,z:9,s:1,t:11};
var fortyfour={x:228,y:228,z:14,s:-1,t:21};
var sixtyeight={x:304,y:-228,z:25,s:1,t:31};
var seventyseven={x:228,y:-228,z:41,s:1,t:51};
var ninetyfour={x:228,y:228,z:70,s:1,t:71};
var ninetyseven={x:228,y:152,z:66,s:1,t:71};


var ladder = new Map([[5,five],[13,thirteen],
       [18,eighteen],[37,thirtyseven],[48,fortyeight],[60,sixty],[65,sixtyfive]]);

var snake = new Map([[23,twentythree],[33,thirtythree],[44,fortyfour],
    [68,sixtyeight],[77,seventyseven],[94,ninetyfour],[97,ninetyseven]]);


console.log(ladder);
console.log(snake);


var score1=1,
    score2=1;
var temp1=11,
    temp2=11;
var sign1=1,
    sign2=1;
var turn = 1;
function play(){
    if(score1!=100 && score2!=100){
    var x = Math.floor(Math.random()*6+1),score,sign,temp;
    var dice = document.getElementById('dice');
    var id = 'player'+turn.toString();
    var img = document.getElementById(id);
    var left = document.defaultView.getComputedStyle(img,null).getPropertyValue("left");
    var top = document.defaultView.getComputedStyle(img,null).getPropertyValue("top");
    left = parseInt(left.substring(0,left.length-2));
    top=parseInt(top.substring(0,top.length-2));
    if(turn==1)
    {
        temp = temp1;
        score=score1;
        sign=sign1;
        turn = 2;
    }   
    else{
        temp = temp2;
        score=score2;
        sign=sign2;
        turn = 1;
    } 
    dice.src="C:\\Users\\hima\\Documents\\Snakes_N_Ladders\\snake-lader-java-player1-master\\images\\"+x+".jpg";
    
        if((score+x)<=100){
            var j;
            if((score+x)>=temp){
                if(score%10!=0){
                    
                    for(j=score;j<temp-1;j++){
                        left = left+sign*76;
                    }
                    sign=-1*sign;
                    if((score+x)>=temp){
                        top = top-76;
                        for(j=temp;j<(score+x);j++)
                           left = left+sign*76;
                    }
                }else{
                    top=top-76;
                    sign = -1*sign;
                    if((score+x)!=(score+1)){
                        for(j=score+1;j<(score+x);j++){
                            left = left+ sign*76;
                        }
                    }
                }
                temp=temp+10;
                
            }else{
               for(j=score;j<(score+x);j++)
                left=left+sign*76;
            }
            score=score+x;
         
         }
    
    if(ladder.has(score)){
        var val = ladder.get(score);
        top = top+val.x;
        console.log(top);
        console.log(left);
        left = left+val.y;
        score = val.z;
        sign=val.s;
        temp=val.t;
   }else if(snake.has(score)){
    var val = snake.get(score);
     top = top+val.x;
     left = left+val.y;
     score = val.z;
     sign=val.s;
     temp=val.t;
    }
    img.style.left=left.toString()+"px";
    img.style.top=top.toString()+"px";
    if(turn==1){
        temp2=temp;
        sign2=sign;
        score2=score;
        document.getElementById('score2num').innerHTML=score2;
    }else{
        temp1=temp;
        sign1=sign;
        score1=score;
        document.getElementById('score1num').innerHTML=score1;
    }
    if(score1==100){
        var player = document.getElementById('user1').innerHTML;
        document.getElementById('winner').innerHTML="Winner is "+player;
        return;
    }else if(score2==100){
        var player = document.getElementById('user2').innerHTML;
        document.getElementById('winner').innerHTML="Winner is "+player;
        return;
    }
  
  }
}
