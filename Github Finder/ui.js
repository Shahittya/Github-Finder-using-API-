class UI{
  constructor(){
  this.profile=document.querySelector(`#profile`) //fetching the profile 
  }
  ShowProfile(user){
    this.clearAlert() //we clear the alert here for unexpected message to user
    
    this.profile.innerHTML= `
    
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
      
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
      </div>
      <div class="col-md-9">
        <button class="btn btn-warning m-1">Public Repos: ${user.public_repos}</button>
        <button class="btn btn-secondary m-1">Public Gists: ${user.public_gists}</button>
        <button class="btn btn-success m-1">Followers: ${user.followers}</button>
        <button class="btn btn-info m-1">Following: ${user.following}</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website/Blog: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Member Since: ${user.created_at}</li>
          <li class="list-group-item">Name: ${user.name}</li>
          <li class="list-group-item">Login: ${user.login}</li>
        
        </ul>
      </div>
    </div>
  </div>
    `;
  }
  //showing alert 
  ShowAlert(message,className){

    this.clearAlert()
    this.clearProfile()
        let div=document.createElement(`div`)
    div.appendChild(document.createTextNode(message))
    div.className=className
    let searchContainer=document.querySelector(`.searchContainer`)
    let search=document.querySelector(`.search`)
    searchContainer.insertBefore(div,search)

  }
  //clear the alert
  clearAlert(){
    let currentAlert=document.querySelector(`.alert`)
    if(currentAlert){
      currentAlert.remove()

    }
  }
  //clear profile
  clearProfile(){

    this.profile.innerHTML=``
    this.clearAlert()
  }
}