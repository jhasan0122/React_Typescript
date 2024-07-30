import profile_pic from './assets/profile_pic.jpg'
function Card():JSX.Element {
    return(
        <div className={"card"}>
            <img className={"card-image"} src={profile_pic} alt="profilePic"/>
            <h2 className={"card-title"}>Jehan Hasan</h2>
            <p className={"card-text"}>I am leaning ReactJs and playing with my live.</p>
        </div>
    )
}
export default Card