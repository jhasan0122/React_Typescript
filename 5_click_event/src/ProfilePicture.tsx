
function ProfilePicture() {
    const imageUrl = './src/assets/profile_pic.jpg'

    return(
        <img onClick={event=> {
                (event.target as HTMLElement).style.display = "none";
            }
        } src={imageUrl} alt={"profile-pic"} />
    )
}

export default ProfilePicture