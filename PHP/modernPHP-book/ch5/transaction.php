<pre>
<?php 
  include ('./settings.php');
  // try {
  //   $pdo = new PDO(
  //       'mysql:host=127.0.0.1;dbname=phplearn;port=3306;charset=utf8',
  //       'cody1991',
  //       'cody1991'
  //     );
  //   echo 'Datebase connection success';
  // } catch (PDOException $e) {
  //   echo 'Database connection failed';
  //   print_r($e);
  //   exit;
  // }
  try {
    $pdo = new PDO(
        sprintf(
            'mysql:host=%s;dbname=%s;port=%s;charset=%s',
            $settings['host'],
            $settings['name'],
            $settings['port'],
            $settings['charset']
          ),
        $settings['username'],
        $settings['password']
      );
    echo 'Datebase connection success';

    $stmtSubtract= $pdo->prepare('
      UPDATE accounts
      SET amount = amount - :amount
      WHERE name = :name
    ');
    $stmtAdd = $pdo->prepare('
      UPDATE accounts
      SET amount = amount + :amount
      WHERE name = :name
    ');

    $pdo->beginTransaction();

    $fromAccount = 'cody';
    $withdrawal = 50;
    $stmtSubtract->bindParam(":name",$fromAccount);
    $stmtSubtract->bindParam(":amount",$withdrawal,PDO::PARAM_INT);
    $stmtSubtract->execute();

    $toAccount = 'bob';
    $deposit = 50;
    $stmtAdd->bindParam(":name",$toAccount);
    $stmtAdd->bindParam(":amount",$deposit,PDO::PARAM_INT);
    $stmtAdd->execute();

    $pdo->commit();

  } catch (PDOException $e) {
    echo 'Database connection failed';
    print_r($e);
    exit;
  }

?>
</pre>
