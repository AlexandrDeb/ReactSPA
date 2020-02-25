import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://picfiles.alphacoders.com/191/191008.jpg" alt=""/>
        </div>
        <div>
            ava + descrption
        </div>
        <MyPosts/>
    </div>
};

export default Profile;