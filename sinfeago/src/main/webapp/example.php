<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
<style type='text/css'>
body
{
	font-family: Arial;
	font-size: 14px;
}
a {
    color: blue;
    text-decoration: none;
    font-size: 14px;
}
a:hover
{
	text-decoration: underline;
}
</style>
</head>
<body>

	<div>
		<a href='<?php echo site_url('cadastro/painel')?>'>Cadastro</a> |
		<a href='<?php echo site_url('cadastro/orders_management')?>'>Outros</a> |
		<a href='<?php echo site_url('cadastro/products_management')?>'>Produtos</a> |
		<a href='<?php echo site_url('cadastro/offices_management')?>'>Escritório</a> | 
		<a href='<?php echo site_url('cadastro/employees_management')?>'>Funcionários</a> |		 
		<a href='<?php echo site_url('cadastro/film_management')?>'>Filmes</a>

</div>
	</div>
	<div style='height:20px;'></div>  
    <div>
		<?php echo $output; ?>
    </div>
</body>
</html>

