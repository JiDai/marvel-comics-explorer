/**
 * Created by jd on 10/08/16.
 * Compiler for Mocha preventing SCSS, Less and CSS file to be imported
 */
function donothing () {
    return null;
}

require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;
