<?php

namespace App\Lib\Response;

class Responder
{
    public static function send_success(string $msg, mixed $data = [])
    {
        return self::send_response(true, $msg, $data, HttpStatusCodes::HTTP_OK, []);
    }

    public static function send_bad_request(string $msg, $errors = [])
    {
        return self::send_response(false, $msg, [], HttpStatusCodes::HTTP_BAD_REQUEST, $errors);
    }

    public static function send_unprocessable(string $msg, $errors = [])
    {
        return self::send_response(false, $msg, [], HttpStatusCodes::HTTP_UNPROCESSABLE_ENTITY, $errors);
    }

    public static function send_unauthorized(string $msg)
    {
        $msg = "Unauthorized Access!";
        return self::send_response(false, $msg, [], HttpStatusCodes::HTTP_UNAUTHORIZED, []);
    }

    public static function send_response(bool $success, string $msg = "", $data = [], int $http_code, $errors = [])
    {
        $response = [
            'success' => $success,
        ];

        if ($msg != "") $response['msg'] = $msg;
        if ($data) $response['data'] = $data;
        if ($errors) $response['errors'] = $errors;

        return response()->json($response, $http_code);
    }
}
