export enum UserRoleID {
  admin = 1,
  student,
  companyRepresentative,
  universityRepresentative,
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  roleId: UserRoleID;
  username: string;
  email: string;
  password: string;
  contacts?: {
    phone?: string;
    github?: string;
    website?: string;
    linkedin?: string;
  };
  avatarURL?: string;
};

export type UserForRegistration = Omit<User, "id">;

export type UserWithoutPassword = Omit<User, "password">;

export type UserForLogin = {
  email: string;
  password: string;
};
