const favicons = require('../src');
const test = require('ava');

const {logo_png, normalize} = require('./util');

test('should allow offsetting the icon on selected platforms', async t => {
    t.plan(1);

    const result = await favicons(logo_png, {
      icons: {
        android: {offset: 10},
        appleIcon: {offset: 10},
        appleStartup: {offset: 10},
        coast: {offset: 10},
        firefox: {offset: 10},
      },
    });

    t.snapshot(normalize(result));
});
