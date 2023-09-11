# STAGE 2 API DOCUMENTATION

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

- Sample Request:

```json
POST https://hngx-mustopha-backend.cyclic.app/api
Content-Type: application/json

{
  {
    "name": "Mustopha Qomorudeen",
    "gender": "male",
    "state": "Osun",
    "age": 20
  }
}
```

- Sample Response:

```json
{
  "status": true,
  "data": {
    "id": "88f3095f70bc00fdeab60de26cdcf5ea",
    "name": "Mustopha Qomorudeen",
    "gender": "male",
    "state": "Osun",
    "age": 20
  }
}
```

#### GET `/api`

- General

  - Fetches a person record
  - Request Arguments: None

- Sample Request:

```json
GET https://hngx-mustopha-backend.cyclic.app/api
```

- Sample Response:

```json
{
  "status": true,
  "message": "Record Fetched Successfully",
  "data": {
    "id": "88f3095f70bc00fdeab60de26cdcf5ea",
    "name": "Mustopha Qomorudeen",
    "gender": "male",
    "state": "Osun",
    "age": 20
  }
}
```

#### PUT `/api`

- General

  - Updates a person record
  - Request Arguments: None

- Sample Request:

```json
PUT https://hngx-mustopha-backend.cyclic.app/api
Content-Type: application/json

{
    "name": "Mustopha Qomorudeen",
    "state": "Lagos",
    "age": 25
}
```

- Sample Response:

```json
{
  "status": true,
  "message": "Record updated successfully",
  "data": {
    "id": "88f3095f70bc00fdeab60de26cdcf5ea",
    "name": "Mustopha Qomorudeen",
    "gender": "male",
    "state": "Lagos",
    "age": 25
  }
}
```

#### DELETE `/api`

- General

  - Deletes a person record
  - Request Arguments: None

- Sample Request:

```json
DELETE https://hngx-mustopha-backend.cyclic.app/api
Content-Type: application/json

{
    "name": "Mustopha Qomorudeen"
}
```

- Sample Response:

```json
{
  "status": true,
  "message": "Record deleted successfully!"
}
```
