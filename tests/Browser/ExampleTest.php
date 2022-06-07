<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;

test('Basic Example', function ()
{
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
                ->waitFor('.container')
                ->assertSee('Σημειώσεις');
    });
});
