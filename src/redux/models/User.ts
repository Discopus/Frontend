enum UserRoleID {
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

export type UserForLogin = {
  email: string;
  password: string;
};
