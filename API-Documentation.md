# STAGE 2 API DOCUMENTATION

## Getting Started

- To set up locally, click [here](README.md)

- Base URL: https://hngx-mustopha-backend.cyclic.app

---

### Error Handling

Error responses are returned in the format below

```
{
  "status": false,
  "message": "Error message"
}
```

The API will return these error types when requests fail:

- 400: Bad Request
- 404: Resource Not Found
- 409: Conflict Operation
- 500: Internal Server Error

---

### Endpoints

#### POST `/api`

- General

  - Creates a new person
  - Request Arguments: None
  - Required field(s): name
  - Optional fields: gender, state, age

- Sample Request:

```json
POST https://hngx-mustopha-backend.cyclic.app/api
Content-Type: application/json

{
    "name": "Mustopha Qomorudeen",
    "gender": "male",
    "state": "Osun",
    "age": 20
}
```

- Sample Response:

```json
{
  "id": "88f3095f70bc00fdeab60de26cdcf5ea",
  "name": "Mustopha Qomorudeen",
  "gender": "male",
  "state": "Osun",
  "age": 20
}
```

#### GET `/api/:id`

- General

  - Fetches a person record
  - Request Arguments: name (name of a person)

- Sample Request:

```json
GET https://hngx-mustopha-backend.cyclic.app/api/88f3095f70bc00fdeab60de26cdcf5ea
```

- Sample Response:

```json
{
  "id": "88f3095f70bc00fdeab60de26cdcf5ea",
  "name": "Mustopha Qomorudeen",
  "gender": "male",
  "state": "Osun",
  "age": 20
}
```

#### PUT `/api/:id`

- General

  - Updates a person record
  - Request Arguments: name (name of a person)

- Sample Request:

```json
PUT https://hngx-mustopha-backend.cyclic.app/api/88f3095f70bc00fdeab60de26cdcf5ea
Content-Type: application/json

{
    "state": "Lagos",
    "age": 25
}
```

- Sample Response:

```json
{
  "id": "88f3095f70bc00fdeab60de26cdcf5ea",
  "name": "Mustopha Qomorudeen",
  "gender": "male",
  "state": "Lagos",
  "age": 25
}
```

#### DELETE `/api/:id`

- General

  - Deletes a person record
  - Request Arguments: name (name of a person)

- Sample Request:

```json
DELETE https://hngx-mustopha-backend.cyclic.app/api/88f3095f70bc00fdeab60de26cdcf5ea
```

- Sample Response:

```json
{
  "message": "Record deleted successfully!"
}
```
