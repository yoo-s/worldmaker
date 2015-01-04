function talk() {
  var say = document.getElementById('say');
  var reply = document.getElementById('botchat');
  if (say == 'Hello') {
    reply.innerHTML = "Hello~!";
  }
}
