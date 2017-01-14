过滤输入

验证数据

转义输出

---

`htmlentities()` 函数过滤 `HTML`，把特殊字符 `&`,`>`,`&#x2003` 等等转义成对应的 `HTML` 实体。

但是默认不转义单引号，检测不出输入字符串的字符集

正确使用它的方式：第一个参数是输入字符窜，第二个参事设置为 `ENT_QUOTES` 常量，第三个设为输入字符串的字符集

    echo htmlentities('<p><script>alert("You won the game");<script></p>',ENT_QUOTES,'UTF-8');

---

用户资料信息，可能需要处理电子邮件、电话和邮政编码等，`PHP` 提供了 `filter_var()` 和 `filter_input()` 函数，能使用不同的标志，过滤不同类型的输入：电子邮箱地址、 `URL` 编码字符串、证书、浮点数、 `HTML` 字符、 `URL` 和特定范围内的 `ASCII` 字符

    // 过滤电子邮件
    $email = 'ñ476490767@qq.com';
    $emailSafe = filter_var($email,FILTER_SANITIZE_EMAIL);
    echo $emailSafe;

    // 过滤用户资料中的外国字符
    $string = "\nIñtërnâtiônàlizætiøn\t";
    $safeString = filter_var(
      $string,
      FILTER_SANITIZE_STRING,
      FILTER_FLAG_STRIP_LOW|FILTER_FLAG_ENCODE_HIGH
    );

--- 

验证数据

    $isEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

    if($isEmail !== false) {
      echo 'Success';
    } else {
      echo 'Fail';
    }

验证成功，返回值是验证的值，如果失败，返回的是 `false`

---

验证功能的组件

[aura/filter](https://packagist.org/packages/aura/filter)

Filters to validate and sanitize objects and arrays.

[respect/validation](https://packagist.org/packages/respect/validation)

The most awesome validation engine ever created for PHP

[symfony/validator](https://packagist.org/packages/symfony/validator)

Symfony Validator Component

`PHP` 模板引擎，比如

[twig/twig](https://packagist.org/packages/twig/twig)

Twig, the flexible, fast, and secure template language for PHP

[smarty/smarty](https://packagist.org/packages/smarty/smarty)

Smarty - the compiling PHP template engine

自动转移输出，以 `Twig` 为例，默认转义所有的输出，为 `PHP Web` 应用提供了有力的安全保障

---

哈希和加密不同，加密是双向的，可以解密，哈希是单向的，不能还原，但是相同的数据有相同的哈希值

哈希有很多种，比如 `MD5` `SHA1` `bcrypt` `scrypt`，有些算法很快，用于验证数据完整性，有些很慢，为了安全性

目前最安全的是 `bcrypt`，和 `MD5` `SHA1` 不同，它故意设计的很慢。会自动加盐，防止潜在的彩虹表攻击，话费大量时间反复处理数据，生成很安全的哈希表。这个过程处理的次数叫做工作因子，值越高，不怀好意的人破解时间也数倍增长。

下面继续注册用户和登录用户的联系

注册：

    <?php
    try {
      // 验证电子邮件地址
      $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

      if(!$email){
        throw new Exception('Invalid email');
      }

      // 验证密码
      $password = filter_input(INPUT_POST,'password');

      if(!$password || mb_strlen($password) < 8) {
        throw new Exception('Password must contain 8+ characters');
      }

      // 第一个参数纯文本密码
      // 第二个 PASSWORD_DEFAULT 告诉  PHP 使用 bcrypt 哈希算法
      // 数组，指定哈希选项，
      $passwordHash = password_hash(
        $password,
        PASSWORD_DEFAULT,
        ['cost' => 12]
      );

      echo $passwordHash;
      // $2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2

      if($passwordHash === false) {
        throw new Exception('Password hash failed');
      }

      print_r($passwordHash);

      // 虚构代码
      // $user = new User();
      // $user->email = $email;
      // $user->password_hash = $passwordHash;
      // $user->save();

      // 重定向
      header('HTTP/1.1 302 Redirect');
      header('Location: ./login-form.php');

    } catch (Exception $e) {
      header('HTTP/1.1 400 Bad request');
      echo $e->getMessage();
    }

登陆：

    <?php
    session_start();

    try {
      // 请求体中获取电子邮件地址
      $email = filter_input(INPUT_POST,'email');

      // 请求体中获取密码
      $password = filter_input(INPUT_POST,'password');

      // 虚构
      // $user = User::findByEmail($email);

      // 比较 http 请求主题提交的纯文本密码和记录用户存储的密码哈希值，如果验证失败，抛出异常
      // if(password_verify($password,$user->password_hash) === false) {
      //   throw new Exception('Invalid password');
      // }

      // 复制过来是错误，不明
      // if(password_verify($password,'$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2') === false) {
      //   throw new Exception('Invalid password');
      // }

      // $currentHashAlgorithm = PASSWORD_DEFAULT;
      // $currentHashOptions = array('cost'=>15);
      // 确定用户密码哈希是否符合最新的密码算法选项，如果过时了，使用心得选项计算
      // $passwordNeedsRehash = password_needs_rehash(
      //   $user->password_hash,
      //   $currentHashAlgorithm,
      //   $currentHashOptions
      // );

      // if($passwordNeedsRehash === true) {
      //   $user->password_hash = password_hash(
      //     $password,
      //     $currentHashAlgorithm,
      //     $currentHashOptions
      //   );
      // }

      // $user->save();

      $_SESSION['user_logged_in'] = 'yes';
      $_SESSION['user_email'] = $email;

      header('HTTP/1.1 302 Redirect');
      header('Location: ./profile.php');

    } catch (Exception $e){
      header('HTTP/1.1 401 Unauthorized');
      echo $e->getMessage();
    }

---

# 日期、时间和时区

`PHP 5.2.0` 引入了 `DateTime` `DateInterval` `DateTimeZone`，简单的面向对象接口，准确创建和处理日期、时间和时区

## 设置默认时区

不设置的话会有一个 `E_WARNING` 消息，可以在 `php.ini` 中修改

    date.timezone = 'America/New_York';

也可以使用

    `date_default_timezone_set()`

设置

    `date_default_timezone_set('Asia/Shanghai')`

当然在 `php.ini` 里面修改，一劳永逸

下面是 `DateTime` 类使用的一些情况

    // 没有参数，表示当前时间的实例
    $datetime = new DateTime();

    $datetime2 = new DateTime('2014-04-27 5:03 AM');

    // 有了 DateTime::createFromFormat() 静态方法，我们可以使用自定义的格式创建 DateTime 实例
    // 这里不需要 new
    $datetime3 = DateTime::createFromFormat('M j, Y H:i:s', 'Jan 2, 2014 23:04:12');

而 `DateInterval` 表示长度固定的时间段，或者相对的时间段。

`DateTime` 提供了用于处理实例的 `add()` 和 `sub()` 方法，这两个方法的参数都是一个 `DateInterval` 实例，指定要添加或者减去到 `DateTime` 实例中的时间量。
