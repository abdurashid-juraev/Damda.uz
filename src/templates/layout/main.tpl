<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{ title | title }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- build:css styles/vendor.min.css -->
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="libs/select2/select2.min.css">
	<link rel="stylesheet" href="libs/swiper/swiper-bundle.min.css"
	<link rel="stylesheet" href="libs/datatables/dataTables.bootstrap4.min.css">
	<link rel="stylesheet" href="libs/datatables/fixedHeader.bootstrap4.min.css">
	<link rel="stylesheet" href="libs/datatables/responsive.bootstrap4.min.css">
	<link rel="stylesheet" href="libs/datatables/scroller.bootstrap4.min.css">
	<link rel="stylesheet" href="libs/air-datepicker/air-datepicker.min.css">
	<!-- endbuild -->

	<link rel="shortcut icon" type="image/x-icon" href="ico/logo.ico" />

	<!-- build:css styles/main.css -->
	<link rel="stylesheet" href="styles/main.css">
	<!-- endbuild -->

</head>
<body>
	<div class="site-wrapper">
        {% block content %} {% endblock %}
	</div>
    <!-- build:js scripts/jquery.min.js -->
    <script src="libs/jquery.min.js"></script>
    <!-- endbuild -->

    <!-- build:js scripts/bootstrap.min.js -->
    <script src="libs/bootstrap/bootstrap.min.js"></script>
    <!-- endbuild -->

	<!-- build:js scripts/vendor.min.js -->
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="./libs/jquery-inputmask/jquery.inputmask.bundle.min.js"></script>
	<script src="./libs/chartjs/chart.js"></script>
	<script src="./libs/select2/select2.min.js"></script>
	<script src="./libs/swiper/swiper-bundle.min.js"></script>
	<script src="./libs/datatables/jquery.dataTables.min.js"></script>
	<script src="./libs/datatables/dataTables.bootstrap4.min.js"></script>
	<script src="./libs/datatables/dataTables.fixedHeader.min.js"></script>
	<script src="./libs/datatables/dataTables.responsive.min.js"></script>
	<script src="./libs/datatables/responsive.bootstrap4.min.js"></script>
	<script src="./libs/datatables/dataTables.scroller.min.js"></script>
	<script src="./libs/datatables/dataTables.fixedColumns.min.js"></script>
	<script src="./libs/air-datepicker/air-datepicker.min.js"></script>
	<script src="./libs/jquery-inputmask/jquery.inputmask.bundle.min.js"></script>
	<!-- build:js scripts/main.js -->
	<script src="scripts/main.js"></script>
	<!-- endbuild -->
</body>
</html>