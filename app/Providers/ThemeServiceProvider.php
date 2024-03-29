<?php

namespace App\Providers;

use Illuminate\Support\Collection;
use Roots\Acorn\Sage\SageServiceProvider;

class ThemeServiceProvider extends SageServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        parent::register();

        /**
         * Register theme support and navigation menus from the theme config.
         *
         * @return void
         */
        add_action('after_setup_theme', function (): void {
            Collection::make(config('theme.support'))
                ->map(fn ($params, $feature) => is_array($params) ? [$feature, $params] : [$params])
                ->each(fn ($params) => add_theme_support(...$params));

            Collection::make(config('theme.remove'))
                ->map(fn ($entry) => is_string($entry) ? [$entry] : $entry)
                ->each(fn ($params) => remove_theme_support(...$params));

            register_nav_menus(config('theme.menus'));

            Collection::make(config('theme.image_sizes'))
                ->each(fn ($params, $name) => add_image_size($name, ...$params));
        }, 20);

        /**
         * Register sidebars from the theme config.
         *
         * @return void
         */
        add_action('widgets_init', function (): void {
            Collection::make(config('theme.sidebar.register'))
                ->map(fn ($instance) => register_sidebar(
                    array_merge(config('theme.sidebar.config'), $instance)
                ));
        });

        /**
         * Disable WordPress Admin Bar for all users on mobile
         */
        if (wp_is_mobile()) {
            add_filter('show_admin_bar', '__return_false');
        }

        /**
         * Hide default "posts" in admin menu
         */
        add_action('admin_menu', function (): void {
            remove_menu_page('edit.php');
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        parent::boot();
    }
}
