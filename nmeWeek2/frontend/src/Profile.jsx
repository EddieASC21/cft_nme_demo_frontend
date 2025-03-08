import profilePic from "./assets/headshot.jpeg"
function Profile(){
    return(
       <div className="profile">
            <img className = "profileImg" src={profilePic} alt="profile picture" />
            <h2 className="profile-title">Eddie Ramirez Saquic</h2>
            <p className="profileText">Type shit</p>
       </div> 
    );
}

export default Profile