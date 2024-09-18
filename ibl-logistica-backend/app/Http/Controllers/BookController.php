<?php

namespace App\Http\Controllers;

use App\Http\Requests\BookRequest;
use App\Models\Book;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{

    public function show(Book $book): JsonResponse
    {

        return response()->json([
            'status' => true,
            'book' => $book
        ], 200);
    }

    public function store(BookRequest $request): JsonResponse
    {

        DB::beginTransaction();

        try {
            $book = Book::create($request->all());

            DB::commit();

            return response()->json([
                'status' => true,
                'book' => $book,
                'message' => 'Livro cadastrado com sucesso'
            ], 201);
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'Houve um erro ao tentar cadastrar esse livro',
                'error' => $e
            ], 400);
        }
    }

    public function update(Request $request, Book $book): JsonResponse
    {

        DB::beginTransaction();

        try {
            $book = Book::findOrFail($book->id);
            $book->update($request->all());
            DB::commit();

            return response()->json([
                'status' => true,
                'book' => $book,
                'message' => 'Livro Atualizado com sucesso'
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();

            return response()->json([
                'status' => false,
                'message' => 'Houve um erro ao tentar cadastrar esse livro',
                'error' => $e
            ], 400);
        }
    }

    public function destroy(Book $book): JsonResponse
    {

        try {
            $book->delete($book);

            return response()->json([
                'status' => true,
                'book' => $book,
                'message' => 'Livro deletado com sucesso'
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Houve um erro ao tentar deletar esse livro',
                'error' => $e
            ], 400);
        }
    }

    public function index(Request $request)
    {
        $allowedFields = ['title', 'author', 'isbn', 'page_count', 'edition', 'publisher'];

        $query = $request->only($allowedFields);

        if (empty($query)) {
            $books = Book::orderBy('id', 'ASC')->get();

            return response()->json([
                'status' => true,
                'books' => $books
            ], 200);
        }

        $booksQuery = Book::query();

        foreach ($query as $field => $value) {
            $booksQuery->where($field, 'LIKE', "%{$value}%");
        }

        $books = $booksQuery->get();

        if ($books->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'Nenhum livro encontrado com os parâmetros fornecidos',
            ], 404);
        }

        return response()->json([
            'status' => true,
            'books' => $books,
            'message' => 'Livros encontrados com sucesso',
        ], 200);
    }
}
