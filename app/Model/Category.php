<?php

declare(strict_types=1);

namespace App\Model;

use Nette;

final class Category
{
    use Nette\SmartObject;

    private Nette\Database\Explorer $database;

    private const
        table = 'category',
        name = 'name',
        slug = 'slug',
        description = 'description',
        image_uri = 'image_uri',
        parent_id = 'parent_id',
        status = 'status',
        popular = 'popular',
        sort = 'sort',
        meta_title = 'meta_title',
        meta_keyword = 'meta_keyword',
        meta_description = 'meta_description',
        created_at = 'created_at',
        updated_at = 'updated_at',
        deleted_at = 'deleted_at';

    public function __construct(Nette\Database\Explorer $database)
    {
        $this->database = $database;
    }

//    public function getCategoryList(): array
//    {
//        return $this->database->table(self::table)->fetchAll();
//    }
}