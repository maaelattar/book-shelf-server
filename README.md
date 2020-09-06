# Book Shelf API

Book Shelf API Documentation

**_View Front-End Repository: [https://github.com/maaelattar/book-shelf](https://github.com/maaelattar/book-shelf)_**

## Response Codes

### Response Codes

```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity
50X: Server Error
```

### Error Codes Details

```
100: Bad Request
110: Unauthorized
120: User Authenticaion Invalid
130: Parameter Error
140: Item Missing
150: Conflict
160: Server Error
```

## Books Endpoint

**Request:**

```
GET /api/books
```

**Successful Response:**

Returns list of books

Example:

```json
HTTP/1.1 200 OK
[
    {
        "_id": "5f54b0c21a349f0017653ba3",
        "title": "One Fish, Two Fish, Red Fish, Blue Fish",
        "isbn": "0394800133, 0394900138",
        "author": "Dr. Seuss",
        "description": "A story-poem about the activities of such unusual animals as the Nook, Womp, Yink, Yap, Gack and the Zeds. A \"fabulous book of easy words, exciting pictures and inviting rhythm.\"--Elementary English.\n\n",
        "published_date": "1988-01-01T00:00:00.000Z",
        "publisher": " Beginner Books",
        "updated_date": "2020-09-06T09:49:54.535Z",
        "__v": 0
    },
    ...
    ]
```

---

**Request:**

```
GET /api/books/:id
```

**URL Params**

Required Params:

```
{
   _id=[string]
}
```

**Successful Response:**

Returns a book that matches given id param

Example:

```json
HTTP/1.1 200 OK

   {
        "_id": "5f54cbf3b3e2d20017136958",
        "title": "The Maldive mystery",
        "isbn": "0917561198",
        "author": "Thor Heyerdahl",
        "description": "This edition doesn't have a description yet",
        "published_date": "1986-01-01T00:00:00.000Z",
        "publisher": " Adler & Adler ",
        "updated_date": "2020-09-06T11:45:55.212Z",
        "__v": 0
    }

```

**Failed Response:**

```json
{
  "nobookfound": "No Book found"
}
```

---

**Request:**

```
POST /api/books/
```

**Data Params**

Example Form Data:

```json
{
    "title": "Measuring Penny",
    "isbn": "0805053603",
    "author": "Loreen Leedy",
    "description": "Lisa learns about the mathematics of measuring by measuring her dog Penny with all sorts of units, including pounds, inches, dog biscuits, and cotton swabs.
",
    "published_date": "01/01/1997",
    "publisher": " Henry Holt",
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK

{
    "msg": "Book added successfully"
}

```

**Failed Response:**

```json
{
  "error": "Unable to add this book"
}
```

---

**Request:**

```
PUT /api/books/:id
```

**URL Params**

Required Params:

```
{
   _id=[string]
}
```

**Data Params**

Example Form Data that you want to be updated:

```json
{
  "published_date": "01/02/1997"
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK

{
    "msg": "Updated successfully"
}

```

**Failed Response:**

```json
{
  "error": "Unable to update the Database"
}
```

---

**Request:**

```
DELETE /api/books/:id
```

**URL Params**

Required Params:

```
{
   _id=[string]
}
```

**Successful Response:**

```json
HTTP/1.1 200 OK

{
    "msg": "Book entry deleted successfully"
}

```

**Failed Response:**

```json
{
  "error": "No such a book"
}
```
