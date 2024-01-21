import "./rightbar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <span>Jane Doe</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260"
                                alt=""
                            />
                            <p>
                                <span>Jane Doe</span> Created a post 
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <p>
                                <span>John Doe</span> left a comment
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src= "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                            />
                            <p>
                                <span>John Doe</span> created a post
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt=""
                            />
                            <p>
                                <span>John Doe</span> liked a photo
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src= "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt=""
                            />
                            <p>
                                <span>Jane Doe</span> left a comment
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt=""
                            />
                            <div className="online"></div>
                            <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1200&format=pjpg&exif=1&iptc=1"
                                alt=""
                            />
                            <div className="online"></div>
                            <span>John Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://images.unsplash.com/photo-1512503680075-3d32d864212a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80"
                                alt=""
                            />
                            <div className="online"></div>
                            <span>Jane Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://img.freepik.com/free-photo/stylish-couple-love-sitting-street-romantic-trip_285396-9904.jpg"
                                alt=""
                            />
                            <div className="online"></div>
                            <span>Jane Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.jpg"
                                alt=""
                            />
                            <div className="online"></div>
                            <span>Jane Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;
