import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className ="card">
            <img className= "card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Syeda Zainab</h2>
            <p className="card-text">I am a web developer, and I am an aspiring back-end developer</p>

        </div>
    );
}

export default Card