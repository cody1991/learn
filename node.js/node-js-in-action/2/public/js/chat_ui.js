var socket = io.connect();

$(function() {
    var chatApp = new Chat(socket),
        $messages = $('#messages'),
        $room = $('#room'),
        $sendMessage = $('#send-message'),
        $sendForm = $('#send-form');

    socket.on('nameResult', function(result) {
        var message;
        if (result.success) {
            message = '***You are knows as ' + result.name + '.***';
        } else {
            message = result.message;
        }

        console.log(message)

        $messages.append(divSystemContentElement(message));
    });

    socket.on('joinResult', function(result) {
        $room.text(result.room);

        $messages.append(divSystemContentElement('Room changed!'));
    });

    socket.on('message', function(message) {
        var newElement = $('<div></div>').text(message.text);
        $messages.append(newElement);
    });

    $sendMessage.focus();
    $sendForm.submit(function() {
        processUserInput(chatApp, socket);
        return false;
    });

    function divEscpaedContentElement(message) {
        return $('<div></div>').text(message);
    }

    function divSystemContentElement(message) {
        return $('<div></div>').html('<i>' + message + '</i>');
    }

    function processUserInput(chatApp, socket) {
        var message = $sendMessage.val();
        var systemMessage;

        if (message.charAt(0) == '/') {
            systemMessage = chatApp.processCommand(message);

            console.log(systemMessage);
            if (systemMessage) {
                $messages.append(divSystemContentElement(systemMessage));
            }
        } else {
            chatApp.sendMessage($room.text(), message);
            $messages.append(divSystemContentElement(message));
            $messages.scrollTop($messages.prop('scrollHeight'));
        }

        $sendMessage.val('');
    }
});
