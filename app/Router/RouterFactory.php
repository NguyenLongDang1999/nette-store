<?php

declare(strict_types=1);

namespace App\Router;

use Nette;
use Nette\Application\Routers\RouteList;


final class RouterFactory
{
    use Nette\StaticClass;

    public static function createRouter(): RouteList
    {
        $router = new RouteList;

        // Backend
//        $router->withPath('cms-admin')
//            ->withModule('Backend')
//            ->addRoute('<presenter>/<action>', 'Dashboard::default');

        $router->withModule('Backend')->addRoute('cms-admin[/<presenter=Dashboard>][/<action=default>][/<id>]');

        return $router;
    }
}
