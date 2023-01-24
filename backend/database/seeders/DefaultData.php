<?php

namespace Database\Seeders;

use App\Models\Admins;
use App\Models\Customers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DefaultData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admins::create([
            "name" => "Admin",
            "surname" => "Demo",
            "phone" => "654654",
            "email" => "admin@gmail.com",
            "password" => bcrypt("demoadmin"),
        ]);

        Customers::create([
            "name" => "Customer",
            "surname" => "Demo",
            "phone" => "654654",
            "email" => "customer@gmail.com",
            "password" => bcrypt("democustomer"),
        ]);

    }
}
