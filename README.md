# react-node-tech-test

Test React App

# Front-end
## How to start ?
`npm run start`

# Back-end - API
## How to start ?
`npm run server`

## <ins>List all business<ins>

### `Route`

```
GET /business
```

## <ins>Get one business detail<ins>

### `Route`
```
GET /business/:id
```

### `URL parameters`

| Name     | Type       | Description                           |Example                  |
|----------|------------|---------------------------------------|-------------------------|
| id | `String` | Business uuid | `0b19a553-b642-477d-a355-3cc820748c02` |

## <ins>Create new business<ins>

### `Route`
```
POST /business
```

### `Body`

`Content-Type : application/json`

| Name     | Type       | Description                           |Example                  |
|----------|------------|---------------------------------------|-------------------------|
| title | `String` | Business name | `"Chantier residence Paris 15eme"` |
| manager | `String` | Manager name | `"Jean Dupont"` |
| city | `String` | Business city | `"Paris"` |
| type | `String` | Business type | `"Construction"` |
| closed | `Boolean` | Business status, closed or not | `false` |


## <ins>Update one business detail<ins>

### `Route`
```
PUT /business/:id
```

### `URL parameters`

| Name     | Type       | Description                           |Example                  |
|----------|------------|---------------------------------------|-------------------------|
| id | `String` | Business uuid | `0b19a553-b642-477d-a355-3cc820748c02` |


### `Body`

`Content-Type : application/json`

| Name     | Type       | Description                           |Example                  |
|----------|------------|---------------------------------------|-------------------------|
| title | `String` | Business name | `"Chantier residence Paris 15eme"` |
| manager | `String` | Manager name | `"Jean Dupont"` |
| city | `String` | Business city | `"Paris"` |
| type | `String` | Business type | `"Construction"` |
| closed | `Boolean` | Business status, closed or not | `false` |
