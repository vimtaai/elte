<?php

class Transaction {
  public $id;
  public $vendor;
  public $amount;
  public $currency;

  public function getAmount(): string {
    return $this->amount . " " . $this->currency;
  }
}