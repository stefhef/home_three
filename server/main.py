import uvicorn as uvicorn
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
import json

from db.db import init_db, get_session

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await init_db()


@app.get("/get_all_books")
async def get_books(session: AsyncSession = Depends(get_session)):
    query_b = await session.execute("""
    SELECT books.id,
       types.title,
       genres.title,
       authors.name,
       books.title,
       books.score,
       books.price,
       books.annotation
FROM books
         INNER JOIN types ON books.type = types.id
         INNER JOIN genres ON books.genre = genres.id
         INNER JOIN authors ON books.author = authors.id""")

    query_r = await session.execute("""
    SELECT 
    reviews.id,
    reviews.book
FROM reviews
         INNER JOIN authors ON reviews.author = authors.id
    """)

    books = query_b.all()
    reviews = query_r.all()
    res = {}
    for rev_id, book in reviews:
        if rev_id not in res:
            res[rev_id] = [book]
        else:
            res[rev_id].append(book)
    result = []
    for book in books:
        i = {"id": book[0],
             "type": book[1],
             "genre": book[2],
             "author": book[3],
             "title": book[4],
             "score": book[5],
             "price": book[6],
             "annotation": book[7]}
        result.append(i)
    return result
    # return json.dumps(result)


@app.get("/get_book/{id}")
async def get_books(book_id, session: AsyncSession = Depends(get_session)):
    query = await session.execute(f"""
    SELECT books.id,
       types.title,
       genres.title,
       authors.name,
       books.title,
       books.score,
       books.price,
       books.annotation
FROM books
         INNER JOIN types ON books.type = types.id
         INNER JOIN genres ON books.genre = genres.id
         INNER JOIN authors ON books.author = authors.id
         WHERE books.id = {book_id}""")
    books = query.all()
    return books


if __name__ == "__main__":
    uvicorn.run('main:app', log_level="info", reload=True, host="0.0.0.0", port=8000)
