<?php

use App\Http\Controllers\Admin\AuthorizationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

defined('SPFX_AUTH') or define('SPFX_AUTH', 'auth:sanctum');
defined('SPFX_ADMIN') or define('SPFX_ADMIN', 'abilities:admin');
defined('SPFX_SERVICE') or define('SPFX_SERVICE', 'abilities:customer');

Route::middleware(SPFX_AUTH)->group(
    function () {

        //Admin Routes
        Route::prefix('admin')->middleware(SPFX_ADMIN)->group(function () {
            //Admin Auth Routes
            Route::prefix('auth')->controller(AuthorizationController::class)->group(function () {
                //non-login required
                Route::withoutMiddleware([SPFX_ADMIN, SPFX_AUTH])->group(function () {
                    Route::post('login', 'login');
                    Route::post('register', 'register');
                });

                Route::get('getInfo', 'userData')->name('userData');
            });
        });


        //Customer Routes
        Route::prefix('services')->middleware(SPFX_SERVICE)->group(function () {
        });
    }
);

Route::get('unauthorized', function () {
    return response()->json(['error' => 'Unauthorized.'], 401);
})->name('unauthorized');
