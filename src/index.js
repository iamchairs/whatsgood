/**
 * While this is usually seen inside <script> tags in the index.html. It has been moved to
 * index.js. This is to comply with the `unsafe-inline` security policy.
 */

System.import('system-config.js').then(function () {
  System.import('main');
}).catch(console.error.bind(console));