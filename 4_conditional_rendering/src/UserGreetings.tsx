
type User = {
    isLoggedIn: boolean,
    username: string,
}
function UserGreetings(props:User) {
    const welcomeMsg = <h2 className={"welcome-msg"}>Welcome {props.username}</h2>;
    const pleaseLogIn = <h2 className={"login-prompt"}>Please log in {props.username} to continue</h2>;

    return(
        props.isLoggedIn ? welcomeMsg : pleaseLogIn
    );
}
export default UserGreetings