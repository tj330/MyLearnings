import { useParams } from "react-router-dom"
import { retrieveBook } from "../api/BookApiService"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"

export default function BookDetails() {
    const {id} = useParams()

    const [book, setBook] = useState([])

    function loadBook() {
        retrieveBook(id)
        .then(response => {
            console.log(response.data)
            setBook(response.data)
        })
        .catch(error => console.log(error))
    }
    useEffect(
        () => loadBook()
    )
    return (
        <>
        <Container className="fs-3">
            <h1 className="mb-3">{book.title}</h1>
            <h3 className="mb-3">{book.author}</h3>
            <h5 className="mb-5">Published on: {book.publicationYear}</h5>
            <p>{book.description}</p>
            {/* {console.log(typeof(book.description))} */}
        </Container>
        </>
    )
}