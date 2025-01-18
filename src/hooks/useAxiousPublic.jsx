import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://y-ten-dusky.vercel.app",
});
export default function useAxiousPublic() {
  return axiosPublic;
}
