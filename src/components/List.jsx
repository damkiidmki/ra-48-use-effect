export default function ListUsers(props) {
    const {users, handleClick} = props;

    return(
        <ul className="list-group">
            {
                users.map((user) => 
                    <li className="list-group-item" key={user.id} onClick={() => handleClick(user.id)}>{user.name}</li>
                )
            }
        </ul>
    );
}