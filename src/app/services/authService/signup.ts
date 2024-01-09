import {httpClient} from "../httpClient.ts";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export default async function signup(params: SignupParams) {
  const {data} = await httpClient.post<SignupResponse>('/auth/signup', params);

  return data;
}
