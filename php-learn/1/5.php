<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <table border="0" cellpadding="3">
        <tr>
            <td bgcolor="#ccc" align="center">Distance</td>
            <td bgcolor="#ccc" align="center">Cost</td>
        </tr>
        <?php 
            $distance = 50;
            while($distance <= 250){
                echo "<tr><td align=\"right\">" . $distance . "</td><td align=\"right\">" . ($distance / 10) . "</td></tr>\n";
                $distance +=50;
            }
        ?>
    </table>
</body>
</html>
