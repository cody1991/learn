# import requests
from bs4 import BeautifulSoup
import os

from Download import request
from pymongo import MongoClient

import datetime



all_url = 'http://www.mzitu.com/all'
local_url = '/Users/cody1991/Desktop/pic/'


class mzitu():

	def __init__(self):

		self.allImgLength = 0
		self.starttime = datetime.datetime.now()

		client = MongoClient()
		db = client['pythoncrawl']
		self.collection = db['meizi']
		self.title = ''
		self.url = ''
		self.img_urls = []

	def all_url(self,url):
		# print(url)
		html = request.get(url,3)
		Soup = BeautifulSoup(html.text,'lxml')
		all_a = Soup.find('div',class_='all').find_all('a')


		for a in all_a:
			title = a.get_text()
			self.title = title
			href = a['href']
			self.url = href
			path = str(title).replace('?','_')

			print('...开始下载...')
			print(path)

			self.mkdir(path)
			os.chdir(os.path.join(local_url,path))

			if self.collection.find_one({'主题页面':href}):
				print(u'这个页面已经爬过了')
			else:
				self.html(href)		

	def html(self,href):
		html = request.get(href,3)
		max_span = BeautifulSoup(html.text,'lxml').find('div',class_="pagenavi").find_all('span')[-2].get_text()

		page_num = 0

		for page in range(1,int(max_span)+1):
			page_num = page_num + 1
			page_url = href+'/'+str(page)
			# print(page_url)

			self.img(page_url,max_span,page_num)
			
		print('...结束下载...')

	def img(self,page_url,max_span,page_num):
		img_html = request.get(page_url,3)
		img_Soup = BeautifulSoup(img_html.text,'lxml')
		img_url = img_Soup.find('div',class_="main-image").find('img')['src']

		self.img_urls.append(img_url)

		if int(max_span) == page_num:
			self.save(img_url)
			post = {
			  '标题':self.title,
			  '主题页面':self.url,
			  '图片地址':self.img_urls,
			  '获取时间':datetime.datetime.now()
			}
			self.collection.save(post)
			print(u'插入数据库成功')
		else:
			self.save(img_url)


	def save(self,img_url):
		# print(img_url)
		name = img_url[-9:-4]

		# if(os.path.isfile(name+'.jpg')):
		# 		print('文件存在，跳过')
		# 		return

		# print('开始图片下载')
		# print(name+'.jpg')

		img = request.get(img_url,3)
		if(img.status_code != 200):
			print('图片下载失败')
			return

		# 写入多媒体文件必须要 b 这个参数
		f = open(name+'.jpg','ab') 
		f.write(img.content)
		f.close()
		
		self.allImgLength = self.allImgLength + 1

		print('耗费时间    : ',datetime.datetime.now() - self.starttime)

		print('下载图片总数: ',self.allImgLength)

		# print('结束图片下载')
	def mkdir(self,path):
		path = path.strip()
		isExists = os.path.exists(os.path.join(local_url,path))
		if not isExists:
			# print(u'新建一个名字叫做',path,u'的文件夹')
			os.makedirs(os.path.join(local_url,path))
			return True
		else:
			# print(u'名字叫做', path, u'的文件夹已经存在了！')
			return False



Mzitu = mzitu()
Mzitu.all_url(all_url)

	

