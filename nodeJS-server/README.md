# NodeJS <--> Node-RED

**Required software**:
- NodeJS - tested on (v14.20.0)
- NPM - tested on (v9.4.1)
- Node-RED - tested on (v2.2.2)

- Extra software Postman for the API endpoint testing.

## NodeJS server

The servers source code is located in te *nodeJS-server* folder. \
The Node JS server is built by using the expressJS extension. 
The main objective of the REST API server is to provide three API endpoints.

### Server Parameters

- protocol: **HTTP**
- IP address: **127.0.0.1** or **localhost**
- port: **8081**

### Endpoints
[Postman collection](/NodeJS%20----%20Node-RED.postman_collection.json)


- GET - **/getUsers** - The endpoint returns all users stored in the *nodeJS-server/users.csv* file.\
The stored users will be in the response body in the following content:

```json
{
  "users": [
    {
      "userName": "Radvanyi Matyas",
      "email": "  mradvanyi0122@gmail.com",
      "address": "  Rohovce 49 93030",
      "creationTimestamp": "  7574861c3ec89941"
    }
  ]
}
```

- GET - **/getUser?userName=<*userName*>** - The endpoint will return information about the user specified in the Query parameter. 
In case the user is not stored in the CSV file it will return an empty JSON.\
Example response body:

```json
{
    "userName": "Radvanyi Matyas",
    "email": "  mradvanyi0122@gmail.com",
    "address": "  Rohovce 49 93030",
    "creationTimestamp": "  7574861c3ec89941"
}
```

- POST - **/postUsers** \
The /postUsers endpoints purpose is to enable insert of users ot a CSV file which the server controls.
The usersData is passed in the requests body.
Example input data:
```json
{
  "users":
  [
    {
      "userName":"Radvanyi Matyas",
      "email":"mradvanyi0122@gmail.com",
      "address": "Rohovce 49 93030",
      "creationTimestamp": "7574861c3ec89941"
    },
    {
      "userName":"Radvanyi Tamas",
      "email":"tradvanyi@gmail.com",
      "address": "Rohovce 44 93030",
      "creationTimestamp": "7574861c3ec89941"
    }
  ]
}
```


### Installation
Clone the repository:  
```markdown
git clone git@github.com:Mradvanyi123/NodeJS-Node-RED.git
```
Install packages: 
```markdown
npm install
```
Start server: 
```markdown
npm start
```
