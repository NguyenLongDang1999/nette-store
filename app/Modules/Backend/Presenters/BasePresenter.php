<?php

declare(strict_types=1);

namespace App\Modules\Backend\Presenters;

use App\Helper\Core;
use Nette;

abstract class BasePresenter extends Nette\Application\UI\Presenter
{
    public function beforeRender(): Core
    {
        return $this->template->core = new Core();
    }
}

