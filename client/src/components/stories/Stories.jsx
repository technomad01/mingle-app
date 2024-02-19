import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const { currentUser } = useContext(AuthContext)

    //TEMPORARY
    const stories = [
        {
            id: 1,
            name: "Derek James",
            img: "https://images.pexels.com/photos/1654498/pexels-photo-1654498.jpeg?cs=srgb&dl=pexels-guy-kawasaki-1654498.jpg&fm=jpg",
        },
        {
            id: 2,
            name: "Eve Baker",
            img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
        },
        {
            id: 3,
            name: "Alan Wong ",
            img: "https://media.istockphoto.com/id/1298575561/photo/fresh-sushi-selection-on-wooden-board.jpg?b=1&s=170667a&w=0&k=20&c=TtQcefWrt1PN530qF2ij1sgAzc4Znx6pyZU6iHjWnd4=",
        },
        {
            id: 4,
            name: "Bella Smith ",
            img: "https://media.istockphoto.com/id/1309001221/photo/real-ale-pub-welcome.jpg?b=1&s=170667a&w=0&k=20&c=FlMcl6M22NpAwSC1aYpXnTpVH6jlIHn74KXj4ySrn2s=",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories