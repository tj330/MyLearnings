import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

export default function Welcome() {
    return(
        <>
            <Container className="mt-3 fs-5">
                <h1 >Welcome to MyLibrary</h1>
                <div className="mt-5">
                <p>This library consists of my favorite programming books which helped me learn to code and understand tech. It serves as a curated collection of resources covering various programming languages, frameworks, and concepts, including beginner-friendly guides, advanced topics, and industry best practices. Whether you're exploring algorithms, mastering DevOps, or diving into cloud computing, this library is designed to inspire and empower your learning journey.</p>
                <Button variant="light" className="mt-5"><Link to="/books">Click to view Books</Link></Button>
                </div>
            </Container>
        </>
    )
}