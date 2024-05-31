type Company = {
  description: string;
  id: string;
  name: string;
};

export type JobState = {
  date: string | null;
  description: string;
  id: string;
  title: string;
  company: Company;
};

export type JobResponse = {
  job: JobState[];
};
