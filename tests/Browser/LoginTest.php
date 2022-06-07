<?php

use Laravel\Dusk\Browser;


test('Login test', function ()
{
    $this->browse(function (Browser $browser) {
        $browser->visit('/login')
                ->waitFor('#username')
                ->type('input#username', 'admin')
                ->type('input#password', 'password')
                ->click('button[type="submit"]')
                ->waitForLocation('/note')
                ->assertPathIs('/note');
    });
});
