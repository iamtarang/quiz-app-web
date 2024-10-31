import { ColumnFilter } from "./ColumnFilter";

export const QUIZZES = [
    {
        Header: "ID",
        accessor: "id",
        Filter: ColumnFilter
    },
    {
        Header: "Quiz Name",
        accessor: "title",
        Filter: ColumnFilter
    },
    {
        Header: "Course",
        accessor: "course_datum.course_name",
        Filter: ColumnFilter
    },
    {
        Header: "Semester",
        accessor: "semester_datum.semester",
        Filter: ColumnFilter
    },
    {
        Header: "Subject",
        accessor: "subject_datum.subject",
        Filter: ColumnFilter
    },
];
