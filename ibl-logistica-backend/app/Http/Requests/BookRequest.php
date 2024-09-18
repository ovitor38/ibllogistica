<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class BookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'status' => false,
            'errors' => $validator->errors()
        ],422));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array

    {
        $book = $this->route('books');
        return [
            "title" => 'required',
            "author" => 'required',
            "isbn" => 'required|unique:books,isbn' . ($book ? $book->id : null),
            "page_count" => 'required|numeric',
            "edition" => 'required',
            "publisher" => 'required',
        ];
    }

    public function messages():array
    {

        return[
            'title.required' => 'Campo título é obrigatório',
            'author.required' => 'Campo Autor é obrigatório',
            'isbn.required' => 'Campo sisbn é obrigatório',
            'isbn.unique' => 'Campo isbn já cadastrado, o valor precisa ser único',
            "page_count.required" => "campo número de páginas é obrigatório",
            "page_count.numeric" => "campo número de páginas deve ser um número",
            "editon.required" => "Campo edição é obrigaório",
            "publisher.required" => "Campo editora é obrigatório"
        ];
    }
}
