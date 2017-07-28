import pickle

shoplistfile = 'shoplist.data'
shoplist = ['Apple','Mango','Carrot']

f = open(shoplistfile,'wb')

pickle.dump(shoplist,f)
f.close()

del shoplist

f = open(shoplistfile,'rb')
storedlist = pickle.load(f)
print(storedlist)
