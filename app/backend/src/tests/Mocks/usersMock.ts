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

const tokenMock = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJwYXNzd29yZCI6IiQyYSQwOCR4aS5IeGsxY3pBTzBuWlIuLkIzOTN1MTBhRUQwUlExTjNQQUVYUTdIeHRMaktQRVpCdS5QVyJ9LCJpYXQiOjE2ODA1NDEwMjMsImV4cCI6MTY4MDYyNzQyM30.576rU9-aPEHfNqZnkStpieiuDhCQpWdgoIQaEvaYTw8";

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
