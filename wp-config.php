<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!C uA8EZOaYO{MO!vQRc$#8c)..aWNvKImD,$kYAVhjla5UT0a2|b1,[ZY#?&CHF' );
define( 'SECURE_AUTH_KEY',  'LyYHvVGuqDy0Z{!(*p,DLCclZ$mzTN+^QooQQA4$FqT7(A*T(54aip]yR0da/V96' );
define( 'LOGGED_IN_KEY',    ':&W5[d&9uidpV{8/lQv[xJZh?qKoQi/W:c@IVvsX~U;r.HlZELK=n3`2|!BF!USY' );
define( 'NONCE_KEY',        'g8zHF%./gS-t.*<H;fdVSR/Q5N+X+#V^Q3+w.%a!v10d7Ipiymitc`ma|bVO4`*X' );
define( 'AUTH_SALT',        '?Z;9,MsYRs6h[^sowZAg+we]cs)u>KVN[[3Y5F[P<B<Oa8,=]|4btJ;w.AQ=^}`>' );
define( 'SECURE_AUTH_SALT', ')QtKs($O8Cv9j_vTSCl[[Y07>] ${t}*_Nc^C349d:s7zlcW@sSW>d<fi$N&y>lG' );
define( 'LOGGED_IN_SALT',   '=X+>az?EV0{^FbH13=]:Nu]`Xz<OX.^dD*CyWI.}7mzJ9xu3b]b{175w):CGye37' );
define( 'NONCE_SALT',       'Y9zpA0^<iJ#RBD%c8]hrWY8erzP9Vp#LsB;F<!<Y6KS,3i@8789^+Bgk4k2 EckI' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
