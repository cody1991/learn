    <div class="user-widget">
    <img src="<%= user.profilePicture %>">
    <div class="user-name"><%= user.name %></div>
    <div class="user-bio"><%= user.bio %></div>
    </div>

Now you can use that template when rendering the current user

    <% user = currentUser %>
    <% include userwidget %>

or you can use it when rendering a list of users.

    <% userList.forEach(function(user) { %>
    <% include userwidget %>
    <% } %>
