Every HTTP response comes with an HTTP status code.The most famous one is 404,
    which stands
for“ resource not found.”You’ ve likely seen 404 errors when visiting a
URL that the server can’ t find— maybe you’ ve clicked an expired link or typed a URL
incorrectly.

Although 404 is the most famous, 200, defined as OK, is perhaps the most common.Unlike 404, you don’ t usually see the text 200 on the web page when you’ re
browsing the web.Every time you successfully load a web page or an image or a JSON
response, you probably get a status code of 200.


Each range has a certain theme. Steve Losh sent a great tweet that summarizes
them (which I had to paraphrase a bit), as told from the perspective of the server:
HTTP status ranges in a nutshell:

1xx: hold on

2xx: here you go

3xx: go away

4xx: you messed up

5xx: I messed up

<hr/>

The 100 range
There are only two official status codes in the 100 range: 100 (Continue) and 101
(Switching Protocols). You’ll likely never deal with these yourself. If you do, check the
specification or the list on Wikipedia

The 200 range
Steve Losh summarized the 200 range as “here you go.” The HTTP spec defines several
status codes in the 200 range, but four of them are by far the most common.

200: OK
200 is the most common HTTP status code on the web by a long shot. HTTP calls status
code 200 OK, and that’s pretty much what it means: everything about this request and
response went through just fine. Generally, if you’re sending the whole response just
fine and there aren’t any errors or redirects (which you’ll see in the 300s section),
then you’ll send a 200 code

201: CREATED
Code 201 is very similar to 200, but it’s for a slightly different use case. It’s common for
a request to create a resource (usually with a POST or a PUT request). This might be
creating a blog post, sending a message, or uploading a photo. If the creation succeeds and everything’s fine, you’ll want to send a 201 code. This is a bit nuanced, but
it’s typically the correct status code for the situation

202: ACCEPTED
Just as 201 is a variant of 200, 202 is a variant of 201.

I hope I’ve beaten it into your head by now: asynchronousity is a big part of Node
and Express. Sometimes you’ll asynchronously queue a resource for creation but it
won’t be created yet.

If you’re pretty sure that the request wants to create a valid resource (perhaps
you’ve checked that the data is valid) but you haven’t created it yet, you can send a 202
status code. It effectively tells the client, Hey, you’re all good, but I haven’t made the
resource yet.

Sometimes you’ll want to send 201 codes and other times you’ll want to send 202;
it depends on the situation.

204: NO CONTENT
204 is the delete version of 201. When you create a resource, you typically send a 201
or a 202 message. When you delete something, you often don’t have anything to
respond with other than Yeah, this was deleted. That’s when you typically send a 204
code. There are a few other times when you don’t need to send any kind of response
back, but deletion is the most common use case

<hr/>

The 300 range
There are several status codes in the 300 range, but you’ll really only set three of
them, and they all involve redirects.

301: MOVED PERMANENTLY
HTTP status code 301 means Don’t visit this URL anymore; see another URL. 301
responses are accompanied with an HTTP header called Location, so you know where
to go next.

You’ve probably been browsing the web and have been redirected—this probably
happened because of a 301 code. This usually occurs because the page has moved.

303: SEE OTHER
HTTP status code 303 is also a redirect, but it’s a bit different. Just like code 200 is for
regular requests and 201 is for requests where a resource is created, 301 is for regular
requests and 303 is for requests where a resource is created and you want to redirect
to a new page.

307: TEMPORARY REDIRECT
There’s one last redirect status code: 307. Like the 301 code, you’ve probably been
browsing the web and been redirected because of a 307 code. They’re similar, but they
have an important distinction. 301 signals Don’t visit this URL ever again; see another
URL; 307 signals See another URL just for now. This might be used for temporary maintenance on a URL.

The 400 range
The 400 range is the largest, and it generally means that something about the request
was bad. In other words, the client made a mistake and it’s not the server’s fault.
There are a lot of different errors here.

401 AND 403: UNAUTHORIZED AND FORBIDDEN ERRORS
There are two different errors for failed client authentication: 401 (Unauthorized)
and 403 (Forbidden). The words unauthorized and forbidden sound pretty similar—
what’s the difference?

In short, a 401 error occurs when the user isn’t logged in. A 403 error occurs when
the user is logged in as a valid user, but they don’t have permissions to do what they’re
trying to do.

Imagine a website where you couldn’t see any of it unless you logged in. This website also has an administrator panel, but not all users can administer the site. Until you
logged in, you’ll see 401 errors. Once you logged in, you’ll stop seeing 401 errors. If
you tried to visit the administrator panel as a non-admin user, you’d see 403 errors.

Send these response codes when the user isn’t authorized to do whatever they’re
doing

404: NOT FOUND
I don’t think I have to tell you much about 404—you’ve probably run into it when
browsing the web. One thing I found a little surprising about 404 errors is that you
can visit a valid route but still get a 404 error.

For example, let’s say you want to visit a user’s page. The homepage for User #123
is at /users/123. But if you mistype and visit /users/1234 and no user exists with ID
1234, you’ll get a 404 error.

The 500 range
The final range in the HTTP specification is the 500 range, and although there are several errors in this range, the most important one is 500: Internal Server Error. Unlike
400 errors, which are the client’s fault, 500 errors are the server’s fault. They can be for
any number of reasons, from an exception to a broken connection to a database error.

Ideally, you should never be able to cause a 500 error from the client—that would
mean that your client could cause bugs in your server.

If you catch an error and it really does seem to be your fault, then you can respond
with a 500 error. Unlike the rest of the status codes where you want to be as descriptive
as possible, it’s often better to be vague and say “Internal Server Error”; that way hackers can’t know where the weaknesses in your system lie. We’ll talk much more about
this in chapter 10 when we talk about security.
