     
         let point = JSON.parse( localStorage.getItem('point'));
         if(point === null){
            point ={
                win:0,
                loss:0,
                tie:0
            }
         }    
           updatescore();
           
           function updatescore(){
                document.querySelector('.js-score').innerHTML=`Wins : ${point.win}.   Losses : ${point.loss}.   Ties : ${point.tie}.`;
            }   
          function computerChoice() {
            computerPick=Math.random();
           if(computerPick>=0&&computerPick<1/2){
                  computerPlay='rock';
                  
           }
           else if(computerPick>=1/2&&computerPick<2/3){
                  computerPlay='paper';
           }
           else if(computerPick>=2/3&&computerPick<=1){
                  computerPlay='scissor';
           }

           return computerPlay;
          }
          let result='';
          function userPick(userchoice){

              const computerChoice1 = computerChoice();
              
              if(userchoice==='scissor'){
                     if(computerChoice1==='rock'){
                         result='loss';

                    }
                    else if(computerChoice1==='paper'){
                        result='win';
                    }
                    else if(computerChoice1==='scissor'){
                         result='tie';
                    }
              }
              else if(userchoice==='paper'){
                    if(computerChoice1==='rock'){
                         result='win';

                    }
                    else if(computerChoice1==='paper'){
                        result='tie';
                    }
                    else if(computerChoice1==='scissor'){
                         result='loss';
                    }
              }
              else if(userchoice==='rock'){
                    if(computerChoice1==='rock'){
                         result='tie';

                    }
                    else if(computerChoice1==='paper'){
                        result='loss';
                    }
                    else if(computerChoice1==='scissor'){
                         result='win';
                    }

              }

              if(result==='win'){
                     point.win+=1;

              }
              else if(result==='loss'){
                      point.loss+=1;

              }
               else if(result==='tie'){                                
                    point.tie+=1;

              }
              function updatemoves() {
                 document.querySelector('.js-move').innerHTML=`Your : <img src="image/${userchoice}-emoji.png"  class="move-img">Computer : <img src="image/${computerChoice1}-emoji.png"  class="move-img">`; 
             }
              localStorage.setItem('point',JSON.stringify(point));
                  updatescore();
                  updateresult()
                  updatemoves()
              
          }
            
             function updateresult(){
                let Result=result.toUpperCase();
                 document.querySelector('.js-result').innerHTML=`Result : ${Result}`;
             }