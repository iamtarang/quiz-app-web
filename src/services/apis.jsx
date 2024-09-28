// import { useQuery } from "@tanstack/react-query";
// import { getAllCourses } from "./queries";

// export const useCourses = () => {
// 	return useQuery({
// 		queryKey: ['courses'],
// 		queryFn: getAllCourses
// 	});
// }
/* eslint-disable no-unused-vars */
import { connection } from "../Auth";

export const getAllCourses = async () => {
	return (await connection.get('/course/get'))
};