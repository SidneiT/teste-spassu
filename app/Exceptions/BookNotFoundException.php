<?php

namespace App\Exceptions;

use Exception;

class BookNotFoundException extends Exception
{
    /**
     * @var int
     */
    protected $code;

    public function getStatusCode(): int
    {
        return $this->code;
    }
}
