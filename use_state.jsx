// function component
import React, {useState} from 'react'

const App = () => {

const [user, setUser] = useState(
    {
        username: "Avocado",
        age: 33
    }
)

    return (
        <div>
        <h2>{user.username}</h2>
        <p>{user.age}</p>

        <button onClick={
            () => setUser(
                currentUser => ({
                    ...currentUser,
                    age: 16
                })
            )
        }>Change age</button>
        </div>
    )
}

export default App
