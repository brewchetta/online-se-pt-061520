# Omniauth

Omniauth is varied depending on the service utilized. Always be sure to read the documentation provided. Many omniauth services also offer gems which keep you from having to build it from scratch.

## Omniauth Service

In every case, you need to go to the service's website and (generally) inside the developer tools list your project. Once your project has been listed and you've provided endpoints, you'll need to set up your routes.

## Callback

One route ought to go to the proper endpoint for the service where user's are authenticated. Once they've reached the endpoint, they'll be redirected to a callback endpoint in your app. If everything went to plan, the callback will receive all the information about that user you'll need (usually a username and email, although you can also utilize things like avatars, addresses, and the like).

The controller then needs to fire off a `find_or_create_by`. If the user exists, we immediately log that user in. If the user doesn't, they instead get created and logged in. In either case the process is seamless for our users (they don't know if they're getting logged in or signed up).

Example of a callback:

```
def google_login
  user_email = request.env['omniauth.auth']['info']['email']
  user_name = request.env['omniauth.auth']['info']['name']
  @user = User.find_or_create_by(email: user_email) do |user|
    user.username = user_name
    user.password = SecureRandom.hex
  end
  session[:user_id] = @user.id
  redirect_to user_path(@user)
end
```
