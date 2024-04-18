/*

enum UserType {
    ADMIN
    USER
}

model User {
    id        String   @id @default(cuid())
    username  String
    type      UserType @default(USER)
    premium Boolea @default(false)
    password  String
    ip        String
    createdAt DateTime @default(now())
    sessions  Session[]
    accounts  Account[]
}

model Account {
    id        String   @id @default(cuid())
    password  String
    session   String
    userId    String
    user      User     @relation(fields: [userId], references: [id])
}
}*/

enum UserType {
    Admin,
    User
}

interface User {
    id: string;
    username: string;
    type: UserType;
    premium: boolean;
    createdAt: Date;
}


interface Account {
    id: string;
}

export type {
    User,
    Account
};
