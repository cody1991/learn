use books;

insert into customers values
    (3,'Julie Smith','25 Oak Street','Airport west'),
    (4,'Alan Wong','1/47 Hanies Avenue','Box Hill');

insert into orders values
    (NULL,3,69.98,'2007-04-02'),
    (NULL,4,32.43,'2007-05-01');

insert into books values
    ('0-672-31697-8','Michael','dsadsds',43.32),
    ('0-111-11111-1','cody','cody1991',13.32);

insert into order_items values
    (3,'0-111-11111-1',1),
    (4,'0-672-31697-8',2);

insert into book_reviews values 
    ('0-672-31697-8','hahahahahaha')
