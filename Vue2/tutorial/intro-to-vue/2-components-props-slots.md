If you're familiar with React or Angular2, the idea of components and passing state won't be new to you. In case you're not, let's go through some of the main concepts.

Websites large and small are usually composed of different pieces, and abstracting them into smaller pieces makes them easy to structure, reason about, reuse, and makes our code more legible. Instead of digging through all of the markup in long, multi-faceted page, we could comprise it of components like this:

```
<header></header>
<aside>
  <sidebar-item v-for="item in items"></sidebar-item>
</aside>
<main>
  <blogpost v-for="post in posts"></blogpost>
</main>
<footer></footer>
```

This is a simplified example, but you can see how useful this type of composition can be as you start to build out the structure of your site. If you were to dive into this code as a maintainer, it wouldn’t take much to understand how the application is structured or where to look for each piece.
