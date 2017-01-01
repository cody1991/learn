# Procedure to find the orderid with the largest amount
# could be done with max, but just to illustrate stored procedure principles

delimiter //

create procedure largest_order(out largest_id int)
begin
  declare this_id int;
  declare this_amount float;
  declare l_amount float default 0.0;
  declare l_id int;

  declare done int default 0;
  declare continue handler for sqlstate '02000' set done = 1;
  declare c1 cursor for select orderid, amount from orders;

  open c1;
  repeat
    fetch c1 into this_id, this_amount;
    if not done then
      if this_amount > l_amount then
        set l_amount=this_amount;
        set l_id=this_id;
      end if;
    end if;
   until done end repeat;
  close c1;

 
  set largest_id=l_id;

end
//

delimiter ;
