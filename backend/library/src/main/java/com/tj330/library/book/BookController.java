package com.tj330.library.book;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookController {
    private BookRepository bookRepository;
 
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/books")
    public List<Book> retrieveAllUsers() {
        return bookRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/books/{id}")
    public Optional<Book> bookDetails(@PathVariable int id) {
        return bookRepository.findById(id);
    }

    @PostMapping("/books")
    public Book addBook(@Valid @RequestBody Book book) {
        Book savedBook = bookRepository.save(book);
        return savedBook;
    }

    @DeleteMapping("/book/{id}")
    public void deleteBook(@PathVariable int id) {
        bookRepository.deleteById(id);
    }


}
