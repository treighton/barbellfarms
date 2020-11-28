<?php
/**
 * WP Theme constants and setup functions
 *
 * @package Bbfarm
 */

// Useful global constants.
define( 'BBFARM_VERSION', '0.1.0' );
define( 'BBFARM_TEMPLATE_URL', get_template_directory_uri() );
define( 'BBFARM_PATH', get_template_directory() . '/' );
define( 'BBFARM_INC', BBFARM_PATH . 'includes/' );

require_once BBFARM_INC . 'core.php';
require_once BBFARM_INC . 'overrides.php';
require_once BBFARM_INC . 'template-tags.php';
require_once BBFARM_INC . 'utility.php';
require_once BBFARM_INC . 'blocks.php';

// Run the setup functions.
Bbfarm\Core\setup();
Bbfarm\Blocks\setup();

// Require Composer autoloader if it exists.
if ( file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	require_once 'vendor/autoload.php';
}

if ( ! function_exists( 'wp_body_open' ) ) {

	/**
	 * Shim for the the new wp_body_open() function that was added in 5.2
	 */
	function wp_body_open() {
		do_action( 'wp_body_open' );
	}
}
