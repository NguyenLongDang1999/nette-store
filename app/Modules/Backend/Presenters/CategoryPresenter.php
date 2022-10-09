<?php

declare(strict_types=1);

namespace App\Modules\Backend\Presenters;

use App\Forms\Category\CategoryForm;
use App\Model\Category;
use Nette\Application\UI\Form;

final class CategoryPresenter extends BasePresenter
{
    private CategoryForm $form;
    private Category $category;

    public function __construct(CategoryForm $categoryForm, Category $category)
    {
        $this->form = new $categoryForm;
        $this->category = $category;
    }

    public function renderDefault(): void
    {
//        $categoryList = $this->category->getCategoryList();
    }

    protected function createComponentSearchForm(): Form
    {
        return $this->form->searchForm();
    }

    protected function createComponentFormList(): Form
    {
        return new Form;
    }
}
