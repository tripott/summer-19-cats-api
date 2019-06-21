# Cats API

A little API to manage a clowder of cats. Meow.

## Endpoint Reference

## `GET /cats`

Returns a collection of cat objects as JSON.

**Example**

```
GET http://localhost:5555/cats
```

returns

```json
[
  {
    "id": "cat_jerry",
    "type": "cat",
    "name": "Jerry",
    "breed": "tabby",
    "owner": "Steve Martin",
    "age": 2,
    "isDeceased": false,
    "vaccinations": ["rabies", "cat fever"]
  },
  {
    "id": "cat_tom",
    "type": "cat",
    "name": "Tom",
    "breed": "minx",
    "owner": "Judy",
    "age": 6,
    "isDeceased": true,
    "vaccinations": ["rabies"]
  }
]
```

## Filter Cats By Breed - `GET /cats?breed={breed}`

Filters cats by breed using a query string.

**Example**

```
GET http://localhost:5555/cats?breed=tabby
```

Returns a clowder (array) of tabby cats:

```json
[
  {
    "id": "cat_jerry",
    "type": "cat",
    "name": "Jerry",
    "breed": "tabby",
    "owner": "Steve Martin",
    "age": 2,
    "isDeceased": false,
    "vaccinations": ["rabies", "cat fever"]
  }
]
```

If there are no cats that match the breed, you will receive `200 OK` and an empty array of cats in the response body:

```json
[]
```

## `POST /cats`

Adds a cat to the collection of cats. A cat must be a valid JSON document and placed in the request body.

**Example**

```
POST http://localhost:5555/cats
```

### Request Headers

| Headers      | Type   | Required | Description                        |
| ------------ | ------ | -------- | ---------------------------------- |
| Content-Type | string | True     | Media type Ex: 'application/json'. |

### Request Body

```json
{
  "name": "Tom",
  "breed": "minx",
  "owner": "Judy",
  "age": 6,
  "isDeceased": true,
  "vaccinations": ["rabies"]
}
```

### Response

### Response 201 Created

```json
{
  "id": "cat_tom",
  "ok": true
}
```

### Response 409 Conflict

```json
{
    "ok": false
    "errorMsg": "Could not create cat due to conflict.  Try a different cat name."
}

```
