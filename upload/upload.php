<html>
<head>
<meta name="robots" content="noindex" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>菜々竈 管理画面</title>
	<script
		src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script
		src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js"></script>
	<script
		src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.5.3/modernizr.min.js"></script>
	<script src="../js/bootstrap.js"></script>
	<link rel="stylesheet" href="../css/bootstrap.css" media="all">
	<link rel="stylesheet" href="../css/style.css" media="all">
</head>
<body>
<div class="form-group">
	<p>
		<?php
		
		if (is_uploaded_file($_FILES["upfile"]["tmp_name"])) {
		  if (move_uploaded_file($_FILES["upfile"]["tmp_name"], "files/" . $_FILES["upfile"]["name"])) {
		    chmod("./img/menu.jpg", 0644);
		    echo $_FILES["upfile"]["name"] . "をアップロードしました。";
		  } else {
		    echo "ファイルをアップロードできません。";
		  }
		} else {
		  echo "ファイルが選択されていません。";
		}
		?>
	</p>
</div>
</body>
</html>