export type CompanyState = {
  description: string;
  id: string;
  name: string;
};

export type JobState = {
  date: string | null;
  description: string;
  id: string;
  title: string;
  company: CompanyState;
};

export type JobResponse = {
  jobs: JobState[];
};
