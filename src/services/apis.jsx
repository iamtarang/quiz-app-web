/* eslint-disable no-unused-vars */
import { connection } from "../Auth";

export const getAllCourses = async () => await connection.post('/course/get');
export const getAllSemesters = async () => await connection.post('/semester/get');
export const getAllSubjects = async () => await connection.post('/subjects/get');


export const getAllQuiz = async (body) => await connection.post('/quiz/getFacultyQuiz', body);
