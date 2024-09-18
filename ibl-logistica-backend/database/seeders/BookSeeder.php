<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books')->insert([
            [
                'title' => 'Dom Quixote',
                'author' => 'Miguel de Cervantes',
                'isbn' => '9788535914849',
                'page_count' => 928,
                'edition' => '1ª Edição',
                'publisher' => 'Companhia das Letras',
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'isbn' => '9780451524935',
                'page_count' => 328,
                'edition' => '2ª Edição',
                'publisher' => 'Penguin Books',
            ],
            [
                'title' => 'O Senhor dos Anéis',
                'author' => 'J.R.R. Tolkien',
                'isbn' => '9780544003415',
                'page_count' => 1216,
                'edition' => '3ª Edição',
                'publisher' => 'HarperCollins',
            ],
            [
                'title' => 'A Revolução dos Bichos',
                'author' => 'George Orwell',
                'isbn' => '9780451526342',
                'page_count' => 112,
                'edition' => '1ª Edição',
                'publisher' => 'Penguin Books',
            ],
            [
                'title' => 'O Pequeno Príncipe',
                'author' => 'Antoine de Saint-Exupéry',
                'isbn' => '9780156012195',
                'page_count' => 96,
                'edition' => '5ª Edição',
                'publisher' => 'Harcourt',
            ],
        ]);
    }
}
