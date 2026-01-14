"use server";

import { decodeJwt } from "jose";
import { getCookie } from "./authToken";

export const getCurrentUser = async () => {
  try {
    const token = await getCookie("accessToken");

    if (!token) {
      return { session: null, jwtUser: null };
    }

    const session = decodeJwt(token);

    return { session, user: {} };
  } catch (error) {
    console.log(error);
    return { session: null };
  }
};
