export interface CourseState {
  name: string;
  description: string;
}

export interface GetCourseParameter {
  page: string;
  limit: string;
}

export interface GetCourseResponse {
  status: number;
  count: number;
  message: string;
  data: {
    course: CourseState[];
  };
}
