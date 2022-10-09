<?php

declare(strict_types=1);

namespace App\Forms\Category;

use App\Helper\Core;
use Nette;
use Nette\Application\UI\Form;

final class CategoryForm
{
    use Nette\SmartObject;

    private Core $core;

    public function __construct()
    {
        $this->core = new Core();
    }

    public function searchForm(): Form
    {
        $form = new Form;
        $form->setMethod('get');

        $search = $form->addContainer('search');
        $search->addText('name', 'Tên danh mục');
        $search->addSelect('parent_id', 'Danh mục cha', []);
        $search->addSelect('status', 'Trạng thái', $this->core->statusList());
        $search->addSelect('popular', 'Độ phổ biến', $this->core->popularList());
        $search->addButton('search', 'Tìm kiếm');
        $search->addButton('reset', 'Làm mới');

        return $form;
    }
}