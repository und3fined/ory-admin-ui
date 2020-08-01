/**
 * Nextjs config file
 */
module.exports = (phase, { defaultConfig }) => {
  return {
    // By default Next.js will add the x-powered-by header.
    // To opt-out of it, open next.config.js and disable the poweredByHeader config:
    poweredByHeader: false,

    // Setting a custom build directory
    // You can specify a name to use for a custom build directory to use instead of `.next`
    distDir: 'build',
  }
}
