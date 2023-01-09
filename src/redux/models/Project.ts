export interface Project {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
    tags: string[];
    ownerId: string;
    companyID: string;
  }

  export type ProjectForRegistration = Omit<Project, "id" | "password">;