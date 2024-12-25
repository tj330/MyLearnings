import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from "./Welcome";
import Books from "./Books"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import BookDetails from "./BookDetails";

export default function LibraryApp() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/books" element={<Books/>}/>
                    <Route path="/books/:id" element={<BookDetails/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}