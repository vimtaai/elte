<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="styles/index.css">
</head>

<body>
  <nav class="menubar">
    <a href="index.php">Transactions</a>
    <a href="data-entry.php" class="active">Data entry</a>

    <!--
    <div class="user-menu">
      <span>Logged in as <strong>User</strong></span>
      <a href="login.php">Logout</a>
    </div>
    -->
  </nav>

  <h1>Data entry</h1>

  <h2>New transaction</h2>

  <form action="data-entry.php" method="post">
    <div class="form-row">
      <label>Credit card
        <select name="creditcard_id" required>
          <option value="1">1234-1234-1234-1234</option>
          <option value="2">2345-2345-2345-2345</option>
        </select>
      </label>
      <label>Vendor
        <input type="text" name="vendor" required>
      </label>
    </div>
    <div class="form-row">
      <label>Amount
        <input type="number" name="amount" required>
      </label>
      <label>Currency
        <select name="currency" required>
          <option>HUF</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </label>
      <button type="submit">Add transaction</button>
    </div>
  </form>

  <h2>New credit card</h2>

  <form action="data-entry.php" method="post">
    <label>Card number
      <input type="text" name="cardnumber" placeholder="1234-1234-1234-1234"
             pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required>
    </label>
    <label>Name
      <input type="text" name="name">
    </label>
    <button type="submit">Add credit card</button>
  </form>
</body>
</html>
