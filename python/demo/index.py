import requests
import beautifulsoup4

header={'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36
'}
html=requests.get("https://movive.douan.com/top250")
# print(html)
# buffer
soup=BeautifulSoup(html.content, 'heml.parser')
movieNodes = soup.find('ol', attrs={'class':"grid_view"})