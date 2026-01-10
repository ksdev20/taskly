import { useState } from "react";
import { Icon } from "../icons/icons";
import "../styles/components/AddTaskPopup.css";
import { TagPopup } from "./TagPopup";
import { performDbAction } from "../dbFunctions/dbFunctions";

export function AddTaskPopup({ popupHandler }: { popupHandler: any }) {
  const [state, setTaskState] = useState({
    taskName: "",
    description: "",
    day: "",
    notification: "",
    priority: "",
    tags: [],
  });

  const [nameError, setNameError] = useState(false);
  const [tagPopup, setTagPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const setState = (field: string, value: any) => {
    setTaskState((prev) => ({ ...prev, [field]: value }));
  };

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) popupHandler(false);
  };

  const dayClick = (day: string) => {
    const valueToSet = state.day === day ? "" : day;
    setState("day", valueToSet);
  };

  const notificationClick = () => {
    const valueToSet = state.notification === "in-1-hour" ? "" : "in-1-hour";
    setState("notification", valueToSet);
  };

  const priorityClick = (p: string) => {
    const valueToSet = state.priority === p ? "" : p;
    setState("priority", valueToSet);
  };

  const onAddTask = async () => {
    if (state.taskName === "") {
      setNameError(true);
      return;
    } else {
      setNameError(false);
      setLoading(true);
      performDbAction("add", state).then(e => {
        setLoading(false);
        window.location.reload();
      });
    }
  };

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
              <div className="atp-btn-end">
                <button
                  className={`atpm-btn ${
                    state.priority === "low" ? "active" : ""
                  }`}
                  onClick={() => priorityClick("low")}
                >
                  Low
                </button>
                <button
                  className={`atpm-btn ${
                    state.priority === "medium" ? "active" : ""
                  }`}
                  onClick={() => priorityClick("medium")}
                >
                  Medium
                </button>
                <button
                  className={`atpm-btn ${
                    state.priority === "high" ? "active" : ""
                  }`}
                  onClick={() => priorityClick("high")}
                >
                  High
                </button>
                <Icon name="add" />
              </div>
            </div>
            <div className="atp-btn">
              <div className="atp-btn-start">
                <Icon name="tags" />
                <p>Tags</p>
              </div>
              <div className="atp-btn-end">
                <button onClick={() => setTagPopup(true)}>
                  <Icon name="add" />
                </button>
                {
                  state.tags.length === 0 ? <p>Add tags</p> : state.tags.map((e, idx) => <div key={idx} className="tag-name">{e}</div>)
                }
              </div>
              {tagPopup && <TagPopup popupHandler={setTagPopup} state={state} setState={setState}/>}
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
              {loading ? 'Creating...' : 'Create task'}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
