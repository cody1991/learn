<?php require_once ('cartfunctions.php'); ?>
<html>
<head>
<title>Tahuayo.com - An Amazonian Tributary</title>
<style type="text/css">
<!--
., td, li, p  { font-family: verdana,arial,helvetica,sans-serif; font-size: 10pt; }
h1, h2 { font-family: verdana,arial,helvetica,sans-serif; color: #565699; font-size: 12pt; font-weight: bold; margin-top=0; margin-bottom=0;}
h3  { font-family: verdana,arial,helvetica,sans-serif; font-size: 10pt; color: #565699; font-weight: bold;}
.bookprice  { font-family: verdana,arial,helvetica,sans-serif; font-size: 10pt; color: #ff3333; font-weight: bold;}
.listprice   { font-family: verdana,arial,helvetica,sans-serif; font-size: 10pt; text-decoration: line-through;}
.tiny, .category{ font-family: verdana,arial,helvetica,sans-serif; font-size: xx-small; }
.cart { font-family: verdana,arial,helvetica,sans-serif; font-size: 6pt; border-style: solid; border-color: #565699;}
.cartheading { font-family: verdana,arial,helvetica,sans-serif; font-size: 6pt; color: #ffffff; background-color: #565699; border-style: solid; border-color: #565699; text-align: center}
ul {margin-bottom=0;}
a {color: #565699}
a:visited {color: #999999}
--></style>
</head>
<body>
<table cellspacing="0" cellpadding="0" width="100%" border="0">
  <tr>
    <td>
      <a href="index.php"><img src="images/tahuayo.gif" alt="tahuayo.com" border="0"></a><br/>
      <a href="index.php">home</a> | <a href="about.php">about</a> |
        <a href="index.php?action=showcart">cart</a>
    </td>

    <td align="center">
      <table border="1" cellpadding="1" cellspacing="0">
        <tr><td class="cartheading">Search For Books</td></tr>
        <form action="index.php" method="get">
           <input type="hidden" name="action" value="search">
        <tr><td><input type="text" name="search" size="20"/></td></tr>
        <tr><td class="cartheading"><input type="image" src="images/searchnow.gif"/></td>
        </tr>
        </form>
      </table>
    </td>

    <td align="right">
      <?php showSmallCart(); ?>
    </td>
  </tr>
</table>