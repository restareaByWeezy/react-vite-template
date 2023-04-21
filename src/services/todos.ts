import axios from 'axios';

import { serverConsole } from '@/utils/serverConsole';

export const getTodos = async () => {
  try {
    const response = await axios.get(`/api/todos`);
    serverConsole(response.data);
    return response.data;
  } catch (error) {
    serverConsole(error);
  }
};

export const postTodos = async (data: string[]) => {
  try {
    const response = await axios.post(`/api/todos`, data);
    serverConsole(response.data);
    return response.data;
  } catch (error) {
    serverConsole(error);
  }
};

export const deleteTodos = async (data: string[]) => {
  try {
    const response = await axios.delete(`/api/todos`, { data });
    serverConsole(response.data);
    return response.data;
  } catch (error) {
    serverConsole(error);
  }
};

export const updateTodos = async (data: string[]) => {
  try {
    const response = await axios.put(`/api/todos`, data);
    serverConsole(response.data);
    return response.data;
  } catch (error) {
    serverConsole(error);
  }
};
