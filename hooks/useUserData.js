import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://192.168.1.6:3000/UserData";

export const fetchUserData = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const useUserData = () => {
  return useQuery({
    queryKey: ["fetchUserData"],
    queryFn: fetchUserData,
  });
};

export const addUser = async (userData) => {
  console.log("Adding user");
  const response = await axios.post(
    `${API_URL}`,
    userData
  );
  return response.data;
};

export const updateUser = async (id, userData) => {
  console.log("Updating user");
  const response = await axios.put(
    `${API_URL}/${id}`,
    userData
  );
  return response.data;
};

export const deleteUser = async (id) => {
  console.log("Deleting user");
  await axios.delete(`${API_URL}/${id}`);
};
