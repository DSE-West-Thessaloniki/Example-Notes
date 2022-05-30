<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()
            ->state(['username' => 'admin'])
            ->hasNotes(30)
            ->create();
        User::factory()
            ->count(10)
            ->hasNotes(30)
            ->create();
    }
}
