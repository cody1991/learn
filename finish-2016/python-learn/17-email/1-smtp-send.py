# Python对SMTP支持有smtplib和email两个模块，email负责构造邮件，smtplib负责发送邮件。
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.header import Header
from email import encoders
from email.utils import parseaddr,formataddr


import smtplib

def _format_addr(s):
	name, addr = parseaddr(s)
	print('name:',name)
	print('addr:',addr)

	return formataddr((Header(name, 'utf-8').encode(), addr))

# 注意到构造MIMEText对象时，第一个参数就是邮件正文，第二个参数是MIME的subtype，传入'plain'表示纯文本，最终的MIME就是'text/plain'，最后一定要用utf-8编码保证多语言兼容性。

# from_addr = input('Form:');

from_addr = '476490767@qq.com'
# password = input('Password:')

password = 'kejevsygzffnbiia'

to_addr = '2377439003@qq.com'

msg = MIMEMultipart()

msg.attach(MIMEText('<html><body><h1>Hello</h1>' +
    '<p>send by <a href="http://www.python.org">Python</a>...</p><p><img src="cid:0"></p>' +
    '</body></html>','html','utf-8'))

msg['From'] = _format_addr('Python爱好者 <%s>' % from_addr)
msg['To'] = _format_addr('管理员 <%s>' % to_addr)
msg['Subject'] = Header('来自SMTP的问候...','utf-8').encode()

with open('./1.jpg','rb') as f:
	mime = MIMEBase('image','jpg',filename="1.jpg")
	mime.add_header('Content-Disposition', 'attachment', filename='test.png')
	mime.add_header('Content-ID', '<0>')
	mime.add_header('X-Attachment-Id', '0')
	mime.set_payload(f.read())
	encoders.encode_base64(mime)
	msg.attach(mime)


# smtp_server = input('SMTP server:')
smtp_server = 'smtp.qq.com'
smtp_port = 587

server = smtplib.SMTP(smtp_server, smtp_port)
server.starttls()
server.set_debuglevel(1)
server.login(from_addr, password)
server.sendmail(from_addr, [to_addr], msg.as_string())
server.quit()

# 我们用set_debuglevel(1)就可以打印出和SMTP服务器交互的所有信息。SMTP协议就是简单的文本命令和响应。login()方法用来登录SMTP服务器，sendmail()方法就是发邮件，由于可以一次发给多个人，所以传入一个list，邮件正文是一个str，as_string()把MIMEText对象变成str。