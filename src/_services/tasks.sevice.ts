import axios from "axios";

export const taskService = {
    getTasksByGroup,
    getTasksById
}

async function getTasksByGroup(group: string) {
    const url = `http://localhost:5000/tasks/group/${group}`;
    let response = await axios.get(url);
    return response.data
}

async function getTasksById(_id: string | undefined) {
    const url = `http://localhost:5000/tasks/id/${_id}`;
    let response = await axios.get(url);
    return response.data
}
