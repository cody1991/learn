import re
import random
import requests
import time

class download:
	def __init__(self):
		self.iplist = []
		html = requests.get('http://haoip.cc/tiqu.htm')
		iplistn = re.findall(r'r/>(.*?)<b',html.text,re.S)
		for ip in iplistn:
			i = re.sub('\n','',ip)
			self.iplist.append(i.strip())

		self.user_agent_list = [
			"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/22.0.1207.1 Safari/537.1",
      "Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1092.0 Safari/536.6",
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.6 (KHTML, like Gecko) Chrome/20.0.1090.0 Safari/536.6",
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/19.77.34.5 Safari/537.1",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.9 Safari/536.5",
      "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
      "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1063.0 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3",
      "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.0 Safari/536.3",
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24",
      "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/535.24 (KHTML, like Gecko) Chrome/19.0.1055.1 Safari/535.24"
		]
	def get(self,url,timeout,proxy=None,num_retries=6):
		UA = random.choice(self.user_agent_list)
		headers = {'User-Agent':UA}

		# print(url,proxy)

		if proxy == None:
			try:
				# print('不需要代理')
				return requests.get(url,headers=headers,timeout=timeout)
			except:
				if num_retries > 0:
					time.sleep(10)
					print(u'获取页面出错，10s后将获取倒数第:',num_retries,u'次')
					return self.get(url,timeout,num_retries-1)
				else:
					print(u'开始使用代理')
					time.sleep(10)
					IP = ''.join(str(random.choice(self.iplist)).strip())
					proxy = {'http':IP}
					return self.get(url,timeout,proxy)
		else:
			try:
				IP = ''.join(str(random.choice(self.iplist)).strip())
				proxy = {'http':IP}
				response = requests.get(url,headers=headers,proxies=proxy,timeout=timeout)
				return response
			except:
				if num_retries > 0:
					time.sleep(10)
					IP = ''.join(str(random.choice(self.iplist)).strip())
					proxy = {'http':IP}
					print(u'正在更换代理，10s后重新获取倒数第',num_retries,u'次')
					print(u'当前代理是：',proxy)
					return self.get(url,timeout,proxy,num_retries-1)
				else:
					print(u'代理也不好用了！取消代理')
					return self.get(url,3)

request = download()

# print(Xz.get('http://mzitu.com',3))

		