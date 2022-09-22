const team = ()=>{
    fetch('http://localhost/cTech/api/manage/team')
    .then(response => response.json())
    .then(data => displayTeam(data.data))
}
team();

const displayTeam = team =>{
    console.log(team)
    team.forEach(team => {
        console.log(team)
          const displayTeam = document.getElementById('team_member');
          const img =document.set
          const div =document.createElement('div');
          div.classList.add('team-member');
          div.innerHTML =` <div class="col-md-3 col-sm-4 col-xs-12" >
          <div class="single-member">
              <div class="team-img">
                  <a href="#">
                      <img src="http://localhost/cTech/${team.team_img}" alt="">
                  </a>
              </div>
              <div class="team-content text-center">
                  <h4><a href="#">${team.team_name}</a></h4>
                  <p>${team.team_designation}</p>
                  <ul class="social-icon">
                      <li><a class="facebook" href=""><i class="fa fa-facebook"></i></a></li>
                      <li><a class="twitter" href=""><i class="fa fa-twitter"></i></a></li>
                      <li><a class="instagram" href=""><i class="fa fa-instagram"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>`;
      displayTeam.appendChild(div)
    });
}

{/* <img src="img/team/md.jpg" alt=""> */}