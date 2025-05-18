# Chatting

`One Word` is integrated with `API One Word` project. To make `One Word` work on your machine, you also you'll need to have `API One Word` running.

[API One Word](https://github.com/mariobrusarosco/api-one-word)

This Chat feature uses a Web Socket connection to stablish a two-way-channel communication between Client and Server.

## Web Socket

The Client side of this feature uses [Socket.IO](https://socket.io/)

### Stablishing a Connection

Each environment needs to provide a connection URL string to stablish a connection, via _Environment Variable_

_Example_

`VITE_ONE_WORD_SOCKET_URL="http://localhost:3000"`

### Admin Panel

This panel is locally available at `http://localhost:5000/#/`

When using the `Connection Modal`:

_server url_: `http://localhost:3000/`
_username_: 'admin'
_password_: '123'

_Advanced Options_
_admin_namespace_ : '/admin'
_path_ : '/socket.io'
