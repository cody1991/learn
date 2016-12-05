import re
import requests

iplist = []
html = requests.get('http://haoip.cc/tiqu.htm')
iplistn = re.findall(r'r/>(.*?)<b',html.text,re.S)
for ip in iplistn:
	i = re.sub('\n','',ip)
	iplist.append(i.strip())
	print(i.strip())
print(iplist)