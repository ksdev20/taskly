const url1 = "http://localhost:50000/api/addTask";
const urls = [
  {
    action: "add",
    url: "http://localhost:50000/api/addTask",
    successMsg: "Task added successfully",
    failMsg: "Failed to add task",
  },
  {
    action: "remove",
    url: "http://localhost/50000/api/removeTask/",
    successMsg: "Task removed successfully",
    failMsg: "Failed to remove task",
  },
  {
    action: "",
    url: "",
    successMsg: "",
    failMsg: "",
  },
  {
    action: "",
    url: "",
    successMsg: "",
    failMsg: "",
  },
];

export async function getTasks(){
  console.log("gettasks called !");
    return fetch("http://localhost:50000/api/getTasks", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => res.json()).then(data => {
        if (data.success === true){
            return data.user.tasks;
        } else {
            console.log("failed to fetch");
            return [];
        }
    }).catch(e => {
        console.error(e.message);
        return [];
    })
}

export async function performDbAction(action, obj) {
  const urlObj = urls.find((obj) => obj.action === action);
  console.log("urlObj", urlObj);
  const { url, successMsg, failMsg } = urlObj;
  console.log(url);
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json)
    .then((data) => {
        console.log(data);
      if (data.success === true) {
        console.log(successMsg);
        return true;
      } else {
        console.log(failMsg);
        return false;
      }
    })
    .catch((e) => {
      console.error(e.message);
      return false;
    });
}
