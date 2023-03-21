import { useState, useEffect } from "react";
import { nanoid } from "nanoid"

export default function Details({info}) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.info(data);
                setUser(data)})
            .finally(() => setLoading(false));
    },[info.id])

    return(
        <>
            {loading && <h2>...Loading</h2>}
                {user && <div className="card " style={{width: 400}}>
                        <img key={nanoid(20)} className="card-img-top"  src={user.avatar} alt={user.name}></img>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item" key={nanoid(20)}>{user.name}</li>
                            <li className="list-group-item" key={nanoid(20)}>City: {user.details.city}</li>
                            <li className="list-group-item" key={nanoid(20)}>Company: {user.details.company}</li>
                            <li className="list-group-item" key={nanoid(20)}>Position: {user.details.position}</li>
                        </ul>
                    </div>
                }
        </>
    )
}