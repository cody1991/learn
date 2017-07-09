insert into customers values
  (NULL,'Alan Wong','1/47 Haines Avennu','Box Hill'),
  (NULL,'Michelle Arthur','357 North Road','Yarraville');

insert into orders values
  (NULL,3,69.98,'2007-04-02'),
  (NULL,1,49.99,'2007-04-15'),
  (NULL,2,74.98,'2007-04-19'),
  (NULL,3,24.99,'2007-05-01');

insert into books values
  ('0-672-31697-1','Michael','Java 2',34.99),
  ('0-672-31697-2','Thomas','Linux',24.99),
  ('0-672-31697-3','Pruitt','GIMP',24.99),
  ('0-672-31697-4','Schenk','OpenLinux',49.99);

insert into order_items values
  (1,'0-672-31697-1',2),
  (2,'0-672-31697-4',1),
  (3,'0-672-31697-4',1),
  (3,'0-672-31697-3',1),
  (4,'0-672-31697-2',1);

insert into book_reviews values
  ('0-672-31697-1','the morgan books is clearly written and goes well beyond most of the basic java books out there');
