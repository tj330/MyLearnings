import { useEffect, useState } from "react"
import { retrieveAllBooks, retrieveBook } from "../api/BookApiService"
import { Container } from "react-bootstrap"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function Books() {
    const [books, setBooks] = useState([])

    const navigate = useNavigate()

    function loadBooks() {
        retrieveAllBooks()
        .then(response => {
            setBooks(response.data)
        })
        .catch(error => console.log(error))
    }

    function bookDetails(id) {
        navigate(`/books/${id}`)
    }

    useEffect(
        () => loadBooks()
    )
    return (
        <>
            <h1 className="mb-5">Books</h1>
            <Container>
                {books.map(
                    
                    book => (
                        
                        <Card key={book.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{book.title} by {book.author}</Card.Title>
                                <Card.Text>
                                    {book.description.substring(0, 100)}...
                                </Card.Text>
                                <Button variant="light" onClick={() => {
                                    // id = book.id
                                    bookDetails(book.id)
                                }}>Details</Button>
                            </Card.Body>
                        </Card>
            
                    )
                )}
            </Container>
        </>
    )
}