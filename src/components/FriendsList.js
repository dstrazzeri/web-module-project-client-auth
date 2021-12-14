import React, {useState, useEffect} from "react"
import axios from "axios";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(()=> {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:3000/api/friends', {
            header: {
                authorization: token
            }
        })
        .then(resp => {
            setFriends(resp.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])
    return (<div>
        <h1>FriendsList</h1>
        <ul>
            {
                friends.map(friend =>{
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })
            }
        </ul>
    </div>)
  }

  export default FriendsList;