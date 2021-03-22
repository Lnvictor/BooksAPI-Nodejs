# Books API Node js

A Book collection API Implemented in Node js. Express js framework and Sequelize ORM was used to define web endpoints and Database mappings, respectively...
The database choosed was PostgreSQL due the fact that it is open source. The Postgres database runs insida a docker container

---

## Requirements

- Node js
- Docker engine, Docker-CLI and docker-compose

---

## Setup Database

```console
docker-compose up -d
```

---

## Install Nodejs Requirements

```console
npm install
```

---

## Run

```
node api
```

---

## Avaliable Endpoints
1.POST: Creating

> Create a Book entity and persists in DB.

```console
    http://localhost:5000/books
```

> Send book attributes in JSON request body...

```json
    {
        "name": "Animal Farm",
        "desc": "Some description here",
        "genre": "Romance",
        "author": "George Orwell",
        "price": "120.5"
    }
```
---
2.GET: Retrieving Books Objects

> Get all books stored in database
>--
    
```console
    http://localhost:5000/books
```

> Response: a list with all jsons...
```json
    [
        {
            "name": "Animal Farm",
            "desc": "Some description here",
            "genre": "Romance",
            "author": "George Orwell",
            "price": "120.5"
        }
    ]
```

> Get one book passing an integer id
>---

```console
    http://localhost:5000/books/1
```

> Response: Just one JSON
```json
    {
        "name": "Animal Farm",
        "desc": "Some description here",
        "genre": "Romance",
        "author": "George Orwell",
        "price": "120.5"
    }
```
---

3.POST

 > Update Books By ID

 ```console
    http://localhost:5000/books/1
 ```

 > Send attributes to be changes in json body

 ```json
    {
        "desc": "Test-Update"
    }
 ```

 > Getting the object with ID "1"

 ```json
    {
        "name": "Animal Farm",
        "desc": "Test-Update",
        "genre": "Romance",
        "author": "George Orwell",
        "price": "120.5"   
    }
 ```
---
 4.DELETE: Deleting Books by ID

 ```console
     http://localhost:5000/books/1
 ```

 > This request return 404 status code. It means that the object was delete from database.

---


## References

- Node js Official Documentation
- Sequelize Official Documentation