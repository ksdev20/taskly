import { useState } from "react";
import { Icon } from "../icons/icons";
import "../styles/components/AddTaskPopup.css";

export function AddTaskPopup({ popupHandler }: { popupHandler: any }) {
  const [state, setTaskState] = useState({
    taskName: "",
    description: "",
    day: "",
    notification: "",
    priority: false,
    tags: [],
  });

  const [nameError, setNameError] = useState(false);

  const setState = (field: string, value: any) => {
    setTaskState((prev) => ({ ...prev, [field]: value }));
  };

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) popupHandler(false);
  };

  const onAddTask = () => {
    if (state.taskName === "") {
      setNameError(true);
      return;
    }

    if (state.taskName !== "") {
      setNameError(false);
    }
  };

  const dayClick = (day: string) => {
    if (state.day === day){
      setState("day", "");
      return;
    }
    setState("day", day);
  }

  const notificationClick = () => {
    if (state.notification === "in-1-hour") {
      setState("notification", "");
      return;
    }
    setState("notification", "in-1-hour");
  };

  const handlePriority = () => {
    if (state.priority === true) {
      setState("priority", false);
      return;
    }
    setState("priority", true);
  }

  return (
    <div className="add-task-popup">
      <div className="container-atp" onClick={handleOutsideClick}>
        <div className="atp-box">
          <section className="atp-top">
            <Icon name="task" size={28} />
            <div className="task-name">
              {nameError && (
                <label htmlFor="" className="error-label">
                  <Icon name="error" />
                  Enter name of task please !
                </label>
              )}
              <input
                type="text"
                placeholder="Name of Task"
                value={state.taskName}
                onChange={(e) => setState("taskName", e.target.value)}
              />
            </div>
            <button onClick={() => popupHandler(false)}>
              <Icon name="close" size={28} />
            </button>
          </section>
          <section className="atp-middle">
            <div className="atp-btn">
              <div className="atp-btn-start">
                <Icon name="day" />
                <p>*Day</p>
              </div>
              <div className="atp-btn-end">
                <button
                  className={`atpm-btn ${
                    state.day === "today" ? "active" : ""
                  }`}
                  onClick={() => dayClick("today")}
                >
                  Today
                </button>
                <button
                  className={`atpm-btn ${
                    state.day === "tomorrow" ? "active" : ""
                  }`}
                  onClick={() => dayClick("tomorrow")}
                >
                  Tomorrow
                </button>
                <Icon name="add" />
              </div>
            </div>
            <div className="atp-btn">
              <div className="atp-btn-start">
                <Icon name="notifications" />
                <p>Notification</p>
              </div>
              <div className="atp-btn-end">
                <button
                  className={`atpm-btn ${
                    state.notification === "in-1-hour" ? "active" : ""
                  }`}
                  onClick={notificationClick}
                >
                  In 1 hour
                </button>
                <Icon name="add" />
              </div>
            </div>
            <div className="atp-btn">
              <div className="atp-btn-start">
                <Icon name="priority" />
                <p>Priority</p>
              </div>
              <div className={`atp-btn-end ${state.priority === true ? 'active' : ''}`}>
                <button onClick={handlePriority}>{state.priority === true ? <Icon name="add-filled" /> : <Icon name="add" />}</button>
                <p>{state.priority === true ? 'Added Priority' : 'Add priority'}</p>
              </div>
            </div>
            <div className="atp-btn">
              <div className="atp-btn-start">
                <Icon name="tags" />
                <p>Tags</p>
              </div>
              <div className="atp-btn-end">
                <Icon name="add" />
                <p>Add tags</p>
              </div>
            </div>
          </section>
          <section className="atp-desc-section">
            <p>Description</p>
            <textarea
              name="Description"
              id=""
              value={state.description}
              onChange={(e) => setState("description", e.target.value)}
            ></textarea>
          </section>
          <section className="atp-bottom">
            <button className="add-task-btn" onClick={onAddTask}>
              Create task
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
