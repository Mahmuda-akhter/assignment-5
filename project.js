
document.getElementById('noakhali_donate_button').addEventListener('click', function(){
    const inputValue= getInputValueById('nohakhali_donate_amount_input');
    const donateAccount= getElementValueFromId('noakhali-donate-amount');
    const accountBalance = getElementValueFromId('account-balance');
    const accountBalanceNumber=parseInt(accountBalance.innerText);

     if(inputValue <=0 || isNaN(inputValue)){
      getElementValueFromId('nohakhali_input_error').classList.remove("hidden")
      return  ;
     }
     else if(inputValue>accountBalanceNumber){
      return alert('insufficient balance');
     }
     else {
      getElementValueFromId("my_modal_4").showModal()
      
     }

     const donateNumber=parseInt(donateAccount.innerText);
     const donateAmountTotal= donateNumber + inputValue
     donateAccount.innerText= donateAmountTotal
    // subtract from main account balance
    const accountBalanceRemaining= accountBalanceNumber - inputValue;
    accountBalance.innerText = accountBalanceRemaining;

  // create a div
  const d= new Date()
  const historyItem=document.createElement('div');
  historyItem.className='bg-red p-3 rounded-md border border-gray-300'
  let date = Date();
  historyItem.innerHTML=`
    <p class='text-gray-600 text-xl '>${inputValue} Taka is Donated For Donate For Flood at Nohakhali,Bangladesh</p>
    <p class='text-gray-600 text-xl space-y-8 bg-slate-50 mt-5'>${date.toLocaleString()}
  `;
  historyContainer=document.getElementById('history-section')
  historyContainer.insertBefore(historyItem,historyContainer.firstChild);
 
})
document.getElementById('feni_donate_button').addEventListener('click', function(){
    const inputValue= getInputValueById('feni_donate_amount_input');
    const donateAccount= getElementValueFromId('feni-donate-amount');
    const accountBalance = getElementValueFromId('account-balance');
    const accountBalanceNumber=parseInt(accountBalance.innerText);

    if(inputValue <=0 || isNaN(inputValue)){
      getElementValueFromId('feni_input_error').classList.remove("hidden")
       return  ;
      }
    else if(inputValue>accountBalanceNumber){
      return alert('insufficient balance');
      }
    else{
      getElementValueFromId("my_modal_4").showModal()
      
    }

    const donateNumber=parseInt(donateAccount.innerText);
    const donateAmountTotal= donateNumber + inputValue
    donateAccount.innerText= donateAmountTotal
    // subtract from main account balance
    const accountBalanceRemaining= accountBalanceNumber - inputValue;
    accountBalance.innerText = accountBalanceRemaining;

   // create a div
   const d= new Date()
   const historyItem=document.createElement('div');
   historyItem.className='bg-red p-3 rounded-md border border-gray-300'
   let date = Date();
   historyItem.innerHTML=`
    <p class='text-gray-600 text-xl '>${inputValue} Taka is Donated For Donate For Flood at feni</p>
    <p class='text-gray-600 text-xl space-y-8 bg-slate-50 mt-5'>${date.toLocaleString()}
   `;
   historyContainer=document.getElementById('history-section')
   historyContainer.insertBefore(historyItem,historyContainer.firstChild);
})
document.getElementById('quota_donate_button').addEventListener('click', function(){
    const inputValue= getInputValueById('quota_donate_amount_input');
    const donateAccount= getElementValueFromId('quota-donate-amount');
    const accountBalance = getElementValueFromId('account-balance');
    const accountBalanceNumber=parseInt(accountBalance.innerText);

    if(inputValue <=0 || isNaN(inputValue)){
      getElementValueFromId('quota_input_error').classList.remove("hidden")
       return  ;
      }
    else if(inputValue>accountBalanceNumber){
      return alert('insufficient balance');
      }
    else{
      getElementValueFromId("my_modal_4").showModal()
    }

    const donateNumber=parseInt(donateAccount.innerText);
    const donateAmountTotal= donateNumber + inputValue
    donateAccount.innerText= donateAmountTotal
    // subtract from main account balance
    const accountBalanceRemaining= accountBalanceNumber - inputValue;
    accountBalance.innerText = accountBalanceRemaining;

  // create a div
  const d= new Date()
  const historyItem=document.createElement('div');
  historyItem.className='bg-red p-3 rounded-md border border-gray-300'
  let date = Date();
  historyItem.innerHTML=`
    <p class='text-gray-600 text-xl '>${inputValue} Taka is Donated For Donate For people who Injured in the Quota Movement, Bangladesh</p>
    <p class='text-gray-600 text-xl space-y-8 bg-slate-50 mt-5'>${date.toLocaleString()}
  `;
  historyContainer=document.getElementById('history-section')
  historyContainer.insertBefore(historyItem,historyContainer.firstChild);
})

// history section
const donationTab=document.getElementById('donation-btn')
const historyTab= document.getElementById('history-btn')
historyTab.addEventListener('click',function(){
   // remove and add class  when click in history button
  historyTab.classList.remove(
    'py-4' ,'px-8', 'bg-white','rounded-lg', 'text-gray-500' ,'font-bold', 'text-xl',
    'border','border-common_gray')
  historyTab.classList.add(
    'py-4','px-10','bg-my_green','rounded-lg','text-black','font-bold','text-xl');

  // remove and add class when click in history button
  donationTab.classList.remove(
    'py-4','px-10','bg-my_green','rounded-lg','text-black','font-bold','text-xl');
  donationTab.classList.add(
    'py-4' ,'px-8', 'bg-white','rounded-lg', 'text-gray-500' ,'font-bold', 'text-xl',
    'border','border-common_gray')
  
  // all form going to hidden
  all_form=getElementValueFromId('all_from')
  all_form.classList.add('hidden')

  // history section will visible when click history btn
  historyContainer=getElementValueFromId('history-section');
  historyContainer.classList.remove('hidden')
})

donationTab.addEventListener('click',function(){
  // remove and add from history tab when click in donation button
  historyTab.classList.remove('py-4','px-10','bg-my_green','rounded-lg','text-black','font-bold','text-xl')
  historyTab.classList.add('py-4' ,'px-8', 'bg-white','rounded-lg', 'text-gray-500' ,'font-bold', 'text-xl',
    'border','border-common_gray')
// remove and add from donation tab when click in donation button
  donationTab.classList.remove('py-4' ,'px-8', 'bg-white','rounded-lg', 'text-gray-500' ,'font-bold', 'text-xl',
    'border','border-common_gray')

  donationTab.classList.add('py-4','px-10','bg-my_green','rounded-lg','text-black','font-bold','text-xl')
    // all form going to visible
    all_form=getElementValueFromId('all_from')
  all_form.classList.remove('hidden')

  // history section will hidden when click donation btn
  historyContainer=getElementValueFromId('history-section');
  historyContainer.classList.add('hidden')
})

// go to blog pages 
document.getElementById('blog-btn').addEventListener('click', function(){
  window.location.href = "./blogpage.html";
})

