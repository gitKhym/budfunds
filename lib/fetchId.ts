import { fetchAPI } from "./fetch";

export const fetchIdFromUsername = async (username: string) => {
  try {
    const res = await fetchAPI(`/(api)/users/getUserId?username=${username}`, {
      method: "GET",
    });
    return res.data.id;
  } catch (err) {
    console.error("Can't fetch userId", err);
  }
};
