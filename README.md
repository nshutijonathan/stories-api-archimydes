# stories-api-archimydes

This API contains all the information of the stories(i.e. Ticket or Card) created by the users .

## API ENDPOINTS

| Ressource URL        | Methods | Description                    |
| -------------------- | ------- | ------------------------------ |
| /                    | GET     | Home Route                     |
| /api/v1/users        | GET     | UsersList(Admin-Only)          |
| /api/v1/users/:id    | GET     | Single User by Id(Admin-Only)  |
| /api/v1/users/:id    | DELETE  | Delete single user(Admin-Only) |
| /api/v1/users/:id    | PUT     | Update single user(Admin-Only) |
| /api/v1/login        | POST    | login user                     |
| /api/v1/users/me     | POST    | get current user profile       |
| /api/v1/signup       | POST    | User sign up                   |
| /api/v1/stories      | GET     | GET all stories(admin only)    |
| /api/v1/mine/stories | GET     | GET my stories                 |
| /api/v1/stories/:id  | GET     | GET a single story             |
| /api/v1/stories      | POST    | Create a story                 |

### POST api/v1/login

```
{
    "email":"Richard@gmail.com",
    "password":"Richard@gmail.com"
}

```

### POST api/v1/users/me

```
"x-auth-token":"token"
```

### GET api/v1/users

```
{

}
```

### GET api/v1/users/:id

```
{

}
```

### POST api/v1/signup

```

{

    "firstname":"iranzi",
    "lastname":"claude",
    "email":"iranzi.claude@outlook.com",
    "password":"12345@12"


}

```

### GET api/v1/stories

```
{
    "message": "stories fetched successfully",
    "status": 200,
    "data": [
        {
            "id": 1,
            "summary": "Fixing heroku issues",
            "description": "our application fails in production",
            "type": "bugfix",
            "complexity": "Low",
            "estimated_time_of_completion": "12hrs",
            "cost": "viewing logs",
            "status": "new",
            "approved": true,
            "rejected": false,
            "added_by": 1,
            "createdAt": "2021-02-05T10:22:54.913Z",
            "updatedAt": "2021-02-05T10:22:54.913Z"
        },
        {
            "id": 2,
            "summary": "Write tests ",
            "description": "our application's test coverage is low",
            "type": "enhancment",
            "complexity": "Mid",
            "estimated_time_of_completion": "12hrs",
            "cost": "writting unit tests",
            "status": "new",
            "approved": true,
            "rejected": false,
            "added_by": 1,
            "createdAt": "2021-02-05T10:22:54.914Z",
            "updatedAt": "2021-02-05T10:22:54.914Z"
        },
        {
            "id": 3,
            "summary": "Implement login",
            "description": "Design and implement Auth microservice to users to log in ",
            "type": "developement",
            "complexity": "Hign",
            "estimated_time_of_completion": "2days",
            "cost": "Writing API endpoints",
            "status": "new",
            "approved": true,
            "rejected": false,
            "added_by": 2,
            "createdAt": "2021-02-05T10:22:54.914Z",
            "updatedAt": "2021-02-05T10:22:54.914Z"
        },
        {
            "id": 5,
            "summary": "req.body.summary",
            "description": "req.body.description",
            "type": "enhancement",
            "complexity": "req.body.complexity",
            "estimated_time_of_completion": "req.body.timeEstimation",
            "cost": "req.body.cost",
            "status": " req.body.status",
            "approved": false,
            "rejected": false,
            "added_by": 1,
            "createdAt": "2021-02-05T17:06:24.862Z",
            "updatedAt": "2021-02-05T17:06:24.862Z"
        },
        {
            "id": 6,
            "summary": "req.body.summary",
            "description": "req.body.description",
            "type": "enhancement",
            "complexity": "low",
            "estimated_time_of_completion": "req.body.timeEstimation",
            "cost": "req.body.cost",
            "status": " req.body.status",
            "approved": false,
            "rejected": false,
            "added_by": 1,
            "createdAt": "2021-02-05T17:08:31.352Z",
            "updatedAt": "2021-02-05T17:08:31.352Z"
        },
        {
            "id": 4,
            "summary": "req.body.summary",
            "description": "req.body.description",
            "type": "req.body.type",
            "complexity": "req.body.complexity",
            "estimated_time_of_completion": "req.body.timeEstimation",
            "cost": "req.body.cost",
            "status": " req.body.status",
            "approved": true,
            "rejected": false,
            "added_by": 1,
            "createdAt": "2021-02-05T16:38:10.467Z",
            "updatedAt": "2021-02-05T17:20:43.087Z"
        }
    ],
    "total": 6
}
```

## API-HOSTED ON HEROKU

[Link](https://stories-api-archimydes.herokuapp.com/)

## Clone the repository

[Github](https://github.com/nshutijonathan/stories-api-archimydes)

## Tools Used

### Language

[Javascript](https://devdocs.io/javascript/)

### Server Environment

[NodeJS](https://nodejs.org/en/download/)

### Framework

[Express](https://expressjs.com/)

### Testing Framework

[Mocha and Chai](https://mochajs.org/api/)

### Style Guide

[Airbnb](https://github.com/airbnb/javascript)

### Test Coverage

[nyc](https://www.npmjs.com/package/nyc)

### Deployment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
 [Node Package Installer - NPM] this usually comes with Node.
```

## SET NODE

TO setup the project on your local machine do the following
Install Node or download it .

```
npm install node
```

## Install PostgresSql

```
[PostgresSql](https://www.postgresql.org/download/)
```

## Installation

The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
npm install
```

## Database

```
Open pgAdmin - http://127.0.0.1:55424/

Create new database called "stories_api"

Open .env file

Overwrite DATABASE_URL with:
DATABASE_URL=postgres://[USERNAME]:[PASSWORD]@localhost/[DATABASE_NAME]

```

## Run the server

```
npm run migration
npm run seeds
npm run start (use 'npm run dev' for local development)

```

## View API documentation

```
http://localhost:5000/apis-docs/

```

## .env.sample

DEV_USERNAME=your_username
DEV_PASSWORD=your_password
DEV_DATABASE=your_development_data_base
DEV_HOST=your_host
SECRET_KEY=justanotherrandomsecretkey

## Contributors

Jonathan Nshuti <nshutijonathan130@gmail.com>

## License & Copyright

Copyright (c) Jonathan Nshuti
