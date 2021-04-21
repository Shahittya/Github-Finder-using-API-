let SearchBtn=document.querySelector(`#SearchBtn`)
let SearchUser=document.querySelector(`#SearchUser`)
let ui=new UI
SearchBtn.addEventListener(`click`,(e)=>{
  let userText=SearchUser.value
  if(userText!=``){
  fetch(`https://api.github.com/users/${userText}`)
  .then(result=>result.json())
  .then(data=>{
    console.log(data);
    if(data.message==`Not Found`){
      //showalert
      ui.ShowAlert(`User Not Found`,`alert alert-danger`)
    }else{
      //showprofile
      ui.ShowProfile(data)
    }
  });
  }else{
    //clearProfile
    ui.clearProfile()
  }
    


});