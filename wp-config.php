<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gala' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'a6On@yphnUD2kXVS' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',         'FxSH!&O7P+XgJgA+hBQ3~P7517 UGurUe-[bVw/2;;mo( XiI-wfGueRRq.fSRh%' );
define( 'SECURE_AUTH_KEY',  '%=7ou=[+T}^$[rOX%r%@`E2}JIa=VdC75LA8Z5p><wXNzyP-^D(b(U.6o^X:wdL>' );
define( 'LOGGED_IN_KEY',    ')A!xl9KVEXhpfsTPjYLQJNfp)la+,&g6H3qG-C^Ye&3Svh4#h]|5Xd8 iBl^@Eew' );
define( 'NONCE_KEY',        '{Of) PmKeDDms#F?]`zQyJ.Jk)#j%1G`aJwj?9c?kt+c9,t&V@.D>$6%d+J/8Npm' );
define( 'AUTH_SALT',        'eb.zVs6zNb1q|/<|071r->#~(/U/mG5ZO#PJBCPYLB>[l]-|-f/FbbKZSLqZ#2=X' );
define( 'SECURE_AUTH_SALT', 'WNt/S:`=9ZrE,AaX@AQ|5%CW_wv2peJRDoArs jJnP2e|&q516%m)YJ(:Fae`:9u' );
define( 'LOGGED_IN_SALT',   'Yg3FM4.{+kuj`d29OaXc<jcWS37Q*nhy<b2wSc<0%x&B4gOE8%J]BAm22iMjGO9G' );
define( 'NONCE_SALT',       'R{)ZC.oWQ%7U`V$2TATU}p3w.KGji_;tGGE9#!|}IW&8:CnzD8b8Ondt:p4WD=e;' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'galawp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
