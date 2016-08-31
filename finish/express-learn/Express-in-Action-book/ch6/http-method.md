GET—The most common HTTP method anyone uses. As the name suggests, it
gets resources. When you load someone’s homepage, you GET it. When you
load an image, you GET it. GET methods shouldn’t change the state of your app;
the other methods do that

Idempotence is important to GET requests. Idempotent is a fancy word that
means doing it once should be no different than doing it many times. If you
GET an image once and refresh 500 times, the image should never change. The
response can change—a page could change based on a changing stock price or
a new time of day—but GETs shouldn’t cause that change. That’s idempotent.

---

POST—Generally used to request a change to the state of the server. You POST a
blog entry; you POST a photo to your favorite social network; you POST when
you sign up for a new account on a website. POST is used to create records on
servers, not modify existing records.
POST is also used for actions, like buy this item. Unlike GET, POST is nonidempotent. That means that the state will change the first time you POST, and
the second time, and the third time, and so on

---

PUT—A better name might be update or change. If I’ve published (POSTed) a
job profile online and later want to update it, I would PUT those changes. I
could PUT changes to a document, or to a blog entry, or to something else.
(You don’t use PUT to delete entries, though; that’s what DELETE is for, as
you’ll see.)
PUT has another interesting part; if you try to PUT changes to a record that
doesn’t exist, the server can (but doesn’t have to) create that record. You probably wouldn’t want to update a profile that doesn’t exist, but you might want to
update a page on a personal website whether or not it exists.

PUT is idempotent. Let’s say I’m “Evan Hahn” on a website but I want to
change it to Max Fightmaster. I don’t PUT “change name from Evan Hahn to
Max Fightmaster”; I PUT “change my name to Max Fightmaster”; I don’t care
what it was before. This allows it to be idempotent. I could do this once or 500
times, and my name would still be Max Fightmaster. It is idempotent in this way.

DELETE—Probably the easiest to describe because its name is obvious. Like PUT,
you basically specify DELETE record 123. You could DELETE a blog entry, or
DELETE a photo, or DELETE a comment.

DELETE is idempotent in the same way that PUT is. Let’s say I’ve accidentally
published (POSTed) an embarrassing photo of me wearing a lampshade over
my head. If I don’t want it on there, I can DELETE it. Now it’s gone! It doesn’t
matter whether I ask for it to be deleted once or 500 times; it’s going to be
gone. (Phew!)
