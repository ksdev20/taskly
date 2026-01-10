import { useEffect, useState } from "react";
import "../styles/components/TasksSection.css";
import { Icon } from "../icons/icons";
import { getTasks } from "../dbFunctions/dbFunctions";

interface Task {
  taskName: string;
  day: string;
  notification: string;
  priority: string;
  tags: Array<string>;
  stage?: string;
}

export function TasksSection() {
  const [tasks, setTasks] = useState<Array<Task>>([]);
  useEffect(() => {
    getTasks().then((data) => {
      console.log("data", data);
      if (data) setTasks(data);
    });
  }, []);
  return (
    <section className="tasks-section flex-col">
      <section className="day-section flex-col round-white">
        <div className="ds-top tasks-sec-grid">
          <div className="bold">Name</div>
          <p>DUE DATE</p>
          <p>STAGE</p>
          <p>PRIORITY</p>
          <p>MODIFY</p>
        </div>
        <div className="tasks-list">
          {tasks.map((obj, idx) => {
            const duedate = obj.day !== "" ? obj.day : "Today";
            const priority = obj.priority !== "" ? obj.priority : "Low";
            const stage = obj.stage ? obj.stage : "In progress";
            return (
              <div key={idx} className="tl-task tasks-sec-grid">
                <div className="flex-row">
                  <input type="checkbox" name="" id="" />
                  <p className="semi-bold">{obj.taskName}</p>
                </div>
                <p className="due-date">{duedate}</p>
                <p className="add-task-btn stage">{stage}</p>
                <p className="priority medium">{priority}</p>
                <Icon name="edit" color="#000" />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
