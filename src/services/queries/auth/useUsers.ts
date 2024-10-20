"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "../query-keys";
import { User } from "@/types/user";
import request from "@/utils/axios";

export const useUsers = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => (await request.get("/users")) as User[],
  });
};
