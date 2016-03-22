import poplib

email = '476490767@qq.com'
password = 'kejevsygzffnbiia'
pop3_server = 'pop.qq.com'

server = poplib.POP3(pop3_server)
server.set_debuglevel(1)

print(server.getwelcome().decode('utf-8'))

server.user(email)
server.pass_(password)