let naming = document.querySelector('.leader .name');
let score = document.querySelector('.leader .score');
// btn and layout
// button of starting game and remove the layout
let btnGame = document.querySelector('.btn');
let layout = document.querySelector('.layout');
let layout_user = document.querySelector('.user-data');
let span = document.querySelector('.count');
btnGame.onclick = function(){
    layout.remove();
    btnGame.remove();
    layout_user.style.display = 'block';
}
let nor ;
// send user data to the info name 
let input_user = document.querySelector('.text');
let send_data = document.querySelector('.verify');
let setting_name = document.querySelector('.my-name');
let scoreofgameover = document.querySelector('.score_gameover');
send_data.onclick= function(){
    if(input_user.value == null || input_user.value == "")
    {
        setting_name.textContent += 'Unknown'
        get_name('Unknown');
        layout_user.remove();   
    }
    else
    {
        setting_name.textContent += input_user.value;
        get_name(input_user.value);
        layout_user.remove();
    }
    document.getElementById('mus_start').play();

    
document.onscroll = function ()
{
    if(window.scrollY >= 200)
    {
        document.querySelector('.resize').style.display = 'block';
    }
    else
    {
        document.querySelector('.resize').style.display = 'none';
    }
}

document.querySelector('.resize').onclick = ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth',
    })
}
       let counter = 50;
       // show the counter
       document.querySelector('.seconds').style.display='block';
  let counting = setInterval(()=>{
           document.querySelector('.seconds').innerHTML = counter -- ;
          if(nor == 80)
          {
                clearInterval(counting);
            document.querySelector('.resize').style.display = 'none';
                pre();
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          }
           if(counter < 0)
           {
            clearInterval(counting);
            document.querySelector('.resize').style.display = 'none';
                setTimeout(() => {
                    ShowThem();
                }, 1000);
      
                setTimeout(() => {
                window.location.reload();
               },3000);
           }
       },1000);
}

// create function that contain the details of perfict
function pre ()
{
    document.querySelector('.seconds').style.display='none';
    document.querySelector('.game_over').style.display = 'none';
    document.querySelector('.prefict').style.display = 'block';
    document.querySelector('.full_score').style.display='block';
    document.querySelector('.full_score').innerHTML='Your Score:'+document.querySelector('.score div').innerHTML;
    document.getElementById('bravo').play();
}
// showing the layout of gameover and the score div
function ShowThem ()
{
    document.querySelector('.game_over').style.display = 'block';
    // set the score on the layout of game over
    scoreofgameover.style.display = 'block';
    scoreofgameover.innerHTML='Your Score:'+document.querySelector('.score div').innerHTML;
}


//main block
let mainblocks = document.querySelector('.blocks-cards');
let duration = 1000;
// getting the elements of cards 
let array = Array.from(document.querySelectorAll('.blocks-cards .card'));
let indexsArray = [...Array(array.length).keys()];

// get random element of the indexarray 

function Sweap_Array (myarr)
{
    let Current = myarr.length ,
        Temp,
        Random ;
    while(Current > 0)
    {
        Random = Math.floor(Math.random() * Current);
        Current --;

    // save element form the array
        Temp = myarr[Current];
    // Sweap the value of current with random 
        myarr[Current] = myarr[Random];
    // Sweap the value of random with current 
        myarr[Random] = Temp;
    }
    return myarr;
}
Sweap_Array(indexsArray);
   // set the cards orders
  array.forEach((ele,index) => {
    ele.style.order = indexsArray[index];
    ele.addEventListener('click',function(){ 
    // send the clicked card to the flipe function to add class rotate
    Flipe_cards(ele);
    // document.getElementById('mus_start').remove();
})
});

function Flipe_cards (flipped_card)
{
    // add class rotate to the clicked card
    flipped_card.classList.add('rotate');
    // get the cards with class rotate 
    let Two_cards = array.filter(ele=>ele.classList.contains('rotate'));
    if(Two_cards.length === 2)
    {
      Stop_Clicking();
      check(Two_cards[0],Two_cards[1]);
    }

}
// create the stop function for clicking
function Stop_Clicking () {
    mainblocks.classList.add('stop');
    // remove the stop clicking from the cards after the durations
    setTimeout(()=>{
        mainblocks.classList.remove('stop');
      },duration)
}

    let counter_score  = 0;

// create the check function
function check (first_card,second_card)
{
    let Teries = document.querySelector('.my-tries span');
    if(first_card.dataset.number == second_card.dataset.number )
    {   
        
            counter_score += 10;
        first_card.classList.remove('rotate');
        second_card.classList.remove('rotate');

        first_card.classList.add('flip');
        second_card.classList.add('flip');
        document.getElementById("sucess").play();
        Score(counter_score);
    }
    else
    {
        Teries.innerHTML = parseInt(Teries.innerHTML) +  1;
        setTimeout(()=>{
            first_card.classList.remove('rotate');
            second_card.classList.remove('rotate');
        },duration);
        document.getElementById("fail").play();
    }
}

// create function for name of user
let div_name = document.createElement('div');
function get_name(user_name,num)
{                    
    let text_name = document.createTextNode(user_name);
    div_name.append(text_name);
    div_name.style.cssText = 'font-size:18px; background-color:#ddd; color:#333; margin-top:10px; padding:5px;border-radius:5px;';
    naming.append(div_name);
}
// create function for score
let div_score = document.createElement('div');
function Score (score_counter)
{   
    div_score.innerHTML = '';
    div_score.append(score_counter);
    if(score_counter == 80)
    {
        nor = div_score.innerHTML;
    }
    div_score.style.cssText = 'font-size:18px; background-color:#ddd; color:#333; margin-top:10px; padding:5px;border-radius:5px; text-align:center;'
    score.appendChild(div_score);
}




