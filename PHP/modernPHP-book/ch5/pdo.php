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

    $sql = 'SELECT name FROM drivers WHERE id = :id';
    $statement = $pdo->prepare($sql);

    $userId = 1;
    $statement->bindValue(':id',$userId,PDO::PARAM_INT);

    $statement->execute();

    echo '<br/>';

    while(($result=$statement->fetch(PDO::FETCH_ASSOC))!==false){
      // print_r($result);
      echo $result['name'];
    }

    $sql = 'SELECT * FROM drivers';
    $statement = $pdo->prepare($sql);

    $statement->execute();

    echo '<br/>';

    while(($result=$statement->fetch(PDO::FETCH_ASSOC))!==false){
      print_r($result);
      echo "id: ${result["id"]},name: ${result["name"]},age: ${result["age"]},year_started: ${result["year_started"]}";
      echo "<br/>";
    }

    echo "<hr/>";

    $statement->execute();

    while(($result=$statement->fetchColumn(0))!==false){
      print_r($result);
    }

    $statement->execute();

    echo "<hr/>";

    while(($result=$statement->fetchObject())!==false){
      print_r($result);
    }

  } catch (PDOException $e) {
    echo 'Database connection failed';
    print_r($e);
    exit;
  }

?>
</pre>
