<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
  <h1>Blog New</h1>
  <form action="/posts"
  method="post"
  id="article-from">
  <div class="form-group">
    <label for="titleInputEmail1">标题</label>
    <input type="text" name= "title" class="form-control" id="titleInput" placeholder="请输入标题">
  </div>
  <div class="form-group">
    <label for="titleInputEmail1">内容</label>
    <input type="text" name= "body" class="form-control" id="titleInput" placeholder="请输入内容">
  </div>
  <input type="submit" class="btn btn-default" value="submit">

    </form>
</div>
</body>
</html>