<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Lib\Response\Responder;
use App\Models\Admins;
use Auth;
use Illuminate\Http\Request;
use Response;

class AuthorizationController extends Controller
{
    public function login(Request $request)
    {
        $input = $request->all();

        $validation = \Validator::make($input, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validation->fails()) {
            return Responder::send_unprocessable("", $validation->errors());
        }

        if (Auth::guard('customers')->attempt(['email' => $input['email'], 'password' => $input['password']])) {
            $customer = Auth::guard('customers')->user();

            $token = $customer->createToken('MyApp', ['customers'])->plainTextToken;

            return Responder::send_success("Login Successful", [
                'token' => $token,
                'info' => $customer
            ]);
        } else {
            return Responder::send_unprocessable("Login Failed");
        }
    }

    public function register(Request $request)
    {
        $msg = "Wrong Informations!";
        $success = false;
        $data = [];
        $errors = [];
        $http_code = 200;
        $input = $request->all();
        //validator
        $validator = \Validator::make($input, [
            "name" => "required",
            "email" => "required|email|unique:App\Models\Customers,email",
            "password" => "required",
            "repass" => "required|same:password"
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            return Responder::send_unprocessable($msg, $errors);
        } else {
            $input['password'] = bcrypt($input['password']);
            $admin = Admins::create($input);
            $data = [
                'token' => $admin->createToken('MyApp')->plainTextToken,
                'name' => $admin->name
            ];
            $msg = "Register Success!";
            return Responder::send_success($msg, $data);
        }
    }
}
