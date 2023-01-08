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
  email: string;
  password: string;
  avatarURL?: string;
};

export type UserForRegistration = Omit<User, "id">;

export type UserWithoutPassword = Omit<User, "password">;

export type UserForLogin = {
  email: string;
  password: string;
};
