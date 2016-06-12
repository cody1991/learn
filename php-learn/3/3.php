<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
        $products = array(
                array('TIR','TRIES',100),
                array('OIL','oil',10),
                array('SPR','Spark Plugs',4)
            );

        for($row = 0 ; $row < 3 ; $row++){
            for($column = 0 ; $column < 3; $column++){
                echo ' | ' . $products[$row][$column];
            }
            echo " | <br/>";
        }

        $products2 = array(
            array(
                    'Code' => 'TIR',
                    'Description' => 'Tires',
                    'Price' => 100
                ),
            array(
                    'Code' => 'OIL',
                    'Description' => 'Oil',
                    'Price' => 10
                ),
            array(
                    'Code' => 'SPK',
                    'Description' => 'Spark Plugs',
                    'Price' => 4
                )
        );

        echo '<hr/>';

        for( $row = 0 ; $row < 3; $row++){
            echo ' | ' . $products2[$row]['Code'] . ' | ' . $products2[$row]['Description'] . ' | ' . $products2[$row]['Price'] . '|<br/>';
        }

        echo '<hr/>';

        for( $row = 0 ; $row < 3; $row++){
            while(list($key,$value) = each($products2[$row])){
                echo " | $value";
            }
            echo ' | <br/>';
        }        
    ?>
</body>
</html>
