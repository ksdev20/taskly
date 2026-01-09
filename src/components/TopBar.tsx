import { useState } from "react";
import { Icon } from "../icons/icons";
import '../styles/components/TopBar.css';
import { AddTaskPopup } from "./AddTaskPopup";

export function TopBar(){
    const [showPopup, setShowPopup] = useState(true);
    const handleClick = (e: any) => {
        setShowPopup(true);
    }
    return (
    <section className="top-bar round-white">
        <div className="search-bar-section">
            <input type="text" name="search-bar" id="" placeholder="Search"/>
        </div>
        <div className="tb-buttons">
            <button className="add-task-btn" onClick={handleClick}>
                <Icon name="add-task" color="#000"/>
                New Task
            </button>
            <button className="profile-btn">
                <img width="48" height="48" src="https://img.icons8.com/color/48/user-male-circle--v5.png" alt="user-male-circle--v5"/>
            </button>
        </div>
        {showPopup && <AddTaskPopup popupHandler={setShowPopup}/>}
    </section>
    )
}