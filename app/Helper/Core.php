<?php

declare(strict_types=1);

namespace App\Helper;

class Core
{
    public static function menuList(): array
    {
        return [
            'manage-dashboard' => [
                'title' => 'Trang thống kê',
                'content' => [
                    [
                        'presenter' => 'Dashboard',
                        'title' => 'Trang thống kê',
                        'icon' => 'bx bx-home-circle',
                        'href' => 'Dashboard:default',
                        'content' => []
                    ]
                ]
            ],
            'manage-product' => [
                'title' => 'Quản lý sản phẩm',
                'content' => [
                    [
                        'presenter' => 'Category',
                        'title' => 'Danh mục sản phẩm',
                        'icon' => 'bx bx-category',
                        'href' => 'this',
                        'content' => [
                            [
                                'name' => 'default',
                                'title' => 'Danh sách',
                                'href' => 'Category:default'
                            ],
                            [
                                'name' => 'create',
                                'title' => 'Thêm mới',
                                'href' => 'Category:default'
                            ],
                            [
                                'name' => 'recycle',
                                'title' => 'Thùng rác',
                                'href' => 'Category:default'
                            ]
                        ]
                    ]
                ]
            ]
        ];
    }

    public static function statusList(): array
    {
        return [
            '' => '-- Chọn Trạng thái --',
            constant('STATUS_ACTIVE') => 'Hoạt động',
            constant('STATUS_INACTIVE') => 'Không hoạt động',
        ];
    }

    public static function popularList(): array
    {
        return [
            '' => '-- Chọn Độ phổ biến --',
            constant('STATUS_ACTIVE') => 'Phổ biến',
            constant('STATUS_INACTIVE') => 'Không phổ biến',
        ];
    }
}