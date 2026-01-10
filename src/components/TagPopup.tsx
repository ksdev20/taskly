import { useState } from "react";
import { Icon } from "../icons/icons";

export function TagPopup({ popupHandler, state, setState }: { popupHandler: any, state: any, setState: any }) {
  const [tag, setTag] = useState("");
  const handleAddTag = () => {
    if (tag === '') return;
    const prevTags = state.tags;
    prevTags.push(tag);
    setState("tags", prevTags);
    popupHandler(false);
  }
  return (
    <div className="add-tags-modal">
      <div className="atm-box">
        <button className="atmb-close" onClick={() => popupHandler(false)}>
          <Icon name="close" />
        </button>
        <div className="atmb-btn">Add Tag</div>
        <div className="atmb-input-sec">
          <input
            type="text"
            placeholder="Enter the tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button className="add-task-btn" onClick={handleAddTag}>Add</button>
        </div>
      </div>
    </div>
  );
}
