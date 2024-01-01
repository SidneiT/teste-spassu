<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Database\Eloquent\MassAssignmentException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    protected function shouldReturnJson($request, Throwable $e): bool
    {
        return parent::shouldReturnJson($request, $e) || $request->is("api/*");
    }
    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (RouteNotFoundException $e, $request) {
            return response()->json([
                'message' => "Route not found",
            ], 404);
        });

        $this->renderable(function (ModelNotFoundException $e, $request) {
            return response()->json([
                'message' => 'Bad Request'
            ], 400);
        });

        $this->renderable(function (NotFoundHttpException $e, $request) {
            return response()->json([
                'message' => 'Record not found',
                'code'=> 404
            ], 404);
        });


        $this->renderable(function (BookNotFoundException $e, $request) {
            return response()->json([
                'message' => "Book not found"
            ], 404);
        });

        $this->renderable(function (BookCreateUpdateException $e, $request) {
            return response()->json([
                'message' => "Fail to save book on database",
            ], 500);
        });

        

    }
}
