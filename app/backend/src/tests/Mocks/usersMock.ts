const loginReqMock = {
    email: "admin@admin.com",
    password: "secret_admin"
}

const dataUserMock = {
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc";

const loginWithOutEmailMock = {
    req: {
        eml: "adin@admin.com",
        password: "secret_admin",
    },
    message: {
        message: "All fields must be filled"
    },
}

const loginInvalidEmailMock = {
    req: {
        email: "@admin.com",
        password: "secret_admin",
    },
    message: {
        message: "Invalid email or password"
    },
}

const loginInvalidPasswordMock = {
    req: {
        email: "admin@admin.com",
        password: "admin123",
    },
    message: {
        message: "Invalid email or password"
    },
}

export {
    dataUserMock,
    tokenMock,
    loginWithOutEmailMock,
    loginInvalidEmailMock,
    loginInvalidPasswordMock
}

export default loginReqMock;
