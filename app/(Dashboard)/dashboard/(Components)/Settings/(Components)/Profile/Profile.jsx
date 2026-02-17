import styles from './Settings.module.css';

const Profile = ( {user}) => {


    return(
        <div>
            <div>
                <p>First name</p>
                <h4>{user.firstName}</h4>
            </div>
            <div>
                <p>Last name</p>
                <h4>{user.lastName}</h4>
            </div>
            <div>
                <p>Occupation</p>
                <h4>{user.occupation}</h4>
            </div>
            <div>
                <p>Username</p>
                <h4>{user.username}</h4>
            </div>
            <div>
                <p>Bio</p>
                <h4>{user.bio}</h4>
            </div>
        </div>
    )
}

export default Profile;