<?php

class User {
    public $username;
    public $password;

    public function whoAreYou() {
        echo $this->username;
    }
}
